import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {flow} from 'lodash';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};
const propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired,
};
const cardSource = {
    // 可选
    canDrag (props) {
        // console.log('canDrag', props);
        return true;
    },
    // 必填
    beginDrag(props, monitor, component) {
        console.log('beginDrag', props);
        // return props;
        return {
            id: props.id,
            index: props.index
        };
    },
    // 可选
    isDragging(props, monitor) {
        // console.log('isDragging', props)
        // If your component gets unmounted while dragged
        // (like a card in Kanban board dragged between lists)
        // you can implement something like this to keep its
        // appearance dragged:
        return monitor.getItem().id === props.id;
    },
    // 可选
    endDrag(props, monitor, component) {
        // console.log('endDrag', monitor.getItem());
        if (!monitor.didDrop()) {
          // You can check whether the drop was successful
          // or if the drag ended but nobody handled the drop
          return;
        }
    
        // When dropped on a compatible target, do something.
        // Read the original dragged item from getItem():
        const item = monitor.getItem();
    
        // You may also read the drop result from the drop target
        // that handled the drop, if it returned an object from
        // its drop() method.
        const dropResult = monitor.getDropResult();
    
        // This is a good place to call some Flux action
        // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

const cardTarget = {
    // 可选的
    drop(props, monitor, component) {
        console.log('drop', props, monitor.getItem())
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};

class Card extends Component {
  render() {
    const { text, isDragging, connectDragSource, connectDropTarget, isOver } = this.props;
    const opacity = isDragging ? 0 : 1;
    const backgroundColor = isOver ? 'yellow' : null;
    return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity, backgroundColor }}>
        {text}
      </div>,
    ));
  }
}

Card.propTypes = propTypes;

export default flow(
    DragSource(
        ItemTypes.CARD, cardSource, (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        })
    ),
    DropTarget(
        ItemTypes.CARD, cardTarget, (connect, monitor) => ({
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver()
        })
    )
)(Card);