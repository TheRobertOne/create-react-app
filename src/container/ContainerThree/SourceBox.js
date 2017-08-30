import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import Colors from './Colors';
import {flow} from 'lodash';

const propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    forbidDrag: PropTypes.bool.isRequired,
    onToggleForbidDrag: PropTypes.func.isRequired,
    children: PropTypes.node,
};

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
};

const ColorSource = {
  canDrag(props) {
    return !props.forbidDrag;
  },

  beginDrag() {
    return {};
  },
};

class SourceBox extends Component {
  render() {
    const { color, children, isDragging, connectDragSource, forbidDrag, onToggleForbidDrag } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    let backgroundColor;
    switch (color) {
      case Colors.YELLOW:
        backgroundColor = 'lightgoldenrodyellow';
        break;
      case Colors.BLUE:
        backgroundColor = 'lightblue';
        break;
      default:
        break;
    }

    return connectDragSource(
      <div
        style={{
          ...style,
          backgroundColor,
          opacity,
          cursor: forbidDrag ? 'default' : 'move',
        }}
      >
        <input
          type="checkbox"
          checked={forbidDrag}
          onChange={onToggleForbidDrag}
        />
        <small>Forbid drag</small>
        {children}
      </div>,
    );
  }
}

SourceBox.propTypes = propTypes;

SourceBox = flow(
    DragSource(props => props.color, ColorSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    })),
    // DropTarget(
    //     ItemTypes.CARD, cardTarget, (connect, monitor) => ({
    //         connectDropTarget: connect.dropTarget(),
    //         isOver: monitor.isOver()
    //     })
    // )
)(SourceBox);

class StatefulSourceBox extends Component {
    state = {forbidDrag: false}
    
    handleToggleForbidDrag() {
      this.setState({
        forbidDrag: !this.state.forbidDrag,
      });
    }
    render() {
        return (
            <SourceBox
                {...this.props}
                forbidDrag={this.state.forbidDrag}
                onToggleForbidDrag={() => this.handleToggleForbidDrag()}
            />
        );
    }

}
export default StatefulSourceBox;