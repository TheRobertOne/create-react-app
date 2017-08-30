import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    beginDrag(props) {
        // console.log(props) 可以拿到全部的 移动的 props
        return props;
    }
};

const cardTarget = {
    canDrop() {
        return true;
    },

    drop(props, monitor) {
        // monitor.getItem()是获取拖动源的信息
        // props 是获取 覆盖源的信息
        const { index: draggedindex } = monitor.getItem();
        const { index: overIndex } = props;

        if (draggedindex !== overIndex) {
            props.moveCard(draggedindex, overIndex);
        }
    },
};


class Card extends Component {
  render() {
    const { text, isDragging, connectDragSource, connectDropTarget, isOver } = this.props;
    const opacity = isDragging ? 0.3 : 1;
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