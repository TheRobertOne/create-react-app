import React, { Component } from 'react';
import styles from './ContainerFour.less';
import CSSModules from 'react-css-modules';
import { Button, Spin} from 'antd';

class ContainerFour extends Component {
  render () {
    return (
      <div>
        <Button>ContainerFour</Button>
        <Spin />
      </div>
    )
  }
}

export default CSSModules(ContainerFour, styles);