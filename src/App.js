import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.less'
import Navigation from './components/Navigation'
import Router from './router/Router';
class App extends Component {
    render() {
        return (
            <div styleName="app-wrap">
                <Navigation />
                <hr />
                <Router />
            </div>
        )
    }
}

export default CSSModules(App, styles);