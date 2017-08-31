import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import Colors from './Colors';
import {flow} from 'lodash';

const propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    // forbidDrag: PropTypes.bool.isRequired,
    // onToggleForbidDrag: PropTypes.func.isRequired,
    children: PropTypes.node,
};

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
};

const ColorSource = {
  // canDrag(props) {
  //   return !props.forbidDrag;
  // },
  beginDrag(props) {
    return props;
  },
};

const cardTarget = {
  canDrop() {
      return true;
  },

  drop(props, monitor) {
      console.log('被覆盖的props', props);
      console.log('拖拽的，从beginDrag传过来的props', monitor.getItem())
  },
};

class SourceBox extends Component {
  render() {
    const { children, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDropTarget(connectDragSource(
      <div
        style={{
          ...style,
          opacity
          // cursor: forbidDrag ? 'default' : 'move',
        }}
      >
        <small>Forbid drag</small>
        {children}
      </div>,
    ));
  }
}

SourceBox.propTypes = propTypes;

SourceBox = flow(
    DragSource(
      props => props.color,
      ColorSource,
      (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
      })
    ),
    DropTarget(
        [Colors.YELLOW, Colors.BLUE],
        cardTarget,
        (connect, monitor) => ({
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver()
        })
    )
)(SourceBox);

export default SourceBox;