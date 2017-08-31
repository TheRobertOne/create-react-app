import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './Navigation.less'
import {Icon, Menu} from 'antd'
class Navigation extends Component {
    state = {
        activeKey: '/'
    }
    handleSelect = (activeKey) => {
        // console.log(activeKey)
        this.setState({
            activeKey
        });
        activeKey = activeKey.replace(/.\$/g, '');
        this.props.dispatch(push(activeKey))
    }
    
    componentDidMount () {
        // console.log(this.props);
        let {pathname} = this.props.router.location;
        pathname = pathname === '/' ? '.$/' : pathname;
        this.handleSelect(pathname)
    }

    render() {
        const {activeKey} = this.state;
        const url = [
            '/',
            '/two',
            '/three',
            '/four'
        ]
        return (
            <div styleName="navigation-wrap">
                <Menu
                    onClick={(e) => this.handleSelect(e.key)}
                    selectedKeys={[activeKey]}
                    mode="horizontal"
                >
                    {
                        // 模拟4个数据而已
                        url.map((item, index) => {
                            return (
                                <Menu.Item key={item}>
                                    <Icon type="appstore" />Navigation Two
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        );
    }
}

export default connect(state => state)(CSSModules(Navigation, styles));