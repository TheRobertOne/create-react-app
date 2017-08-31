import React, { Component } from 'react';
import styles from './ContainerFour.less';
import CSSModules from 'react-css-modules';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ContainerFour extends Component {
  render () {
    return (
      <div>ContainerFour</div>
    )
  }
}

export default CSSModules(ContainerFour, styles);