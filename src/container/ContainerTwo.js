import React from 'react';
import {Motion, spring} from 'react-motion';
import styles from './Containertwo.less';
import CSSModules from 'react-css-modules';
class ContainerTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div styleName='container-two'>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion defaultStyle={{x: 1000}} style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) => {
              console.log(x);
              return (
                // children is a callback which should accept the current value of
                // `style`
                <div className="demo0">
                <div 
                    className="demo0-block"
                    style={{
                        transform: `translate3d(${x}px, 0, 0)`,
                    }} 
                />
                </div>
              )
          }
            
          }
        </Motion>
        <hr />
      </div>
    );
  };
}
export default CSSModules(ContainerTwo, styles)