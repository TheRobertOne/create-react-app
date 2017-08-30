import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './Navigation.less'
import {
    Nav, NavItem
} from 'react-bootstrap'

class Navigation extends Component {
    state = {
        activeKey: '/'
    }
    handleSelect = (activeKey) => {
        this.setState({
            activeKey
        });
        this.props.dispatch(push(activeKey))
    }
    
    componentDidMount () {
        // console.log(this.props);
        const {pathname} = this.props.router.location;
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
                <Nav bsStyle="pills" activeKey={activeKey} onSelect={this.handleSelect}>
                    {
                        // 模拟4个数据而已
                        url.map((item, index) => {
                            return (
                                <NavItem eventKey={item} key={item}>Container {item}</NavItem>
                            )
                        })
                    }
                </Nav>
            </div>
        );
    }
}

export default connect(state => state)(CSSModules(Navigation, styles));