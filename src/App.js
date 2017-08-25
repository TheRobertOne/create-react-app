import React, { Component } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'
import {Route, Switch} from 'react-router-dom' 
import { bindActionCreators } from 'redux'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'
import CSSModules from 'react-css-modules'
import moment from 'moment'
import styles from './App.less';

const A = props => {
    return (
        <div style={{height: 300,width: 400, background: 'yellow'}}>
            
        </div>
    )
}

const B = props => {
    return (
        <div style={{height: 300,width: 400, background: 'red'}}>
            
        </div>
    )
}

const C = props => {
    return (
        <div style={{height: 300,width: 400, background: 'green'}}>
            
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    linkToA: ()=>dispatch(push('/a')),
    linkToB: ()=>dispatch(push('/b')),
    linkToC: ()=>dispatch(push('/c')),
})

// @connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={A} />
                    <Route exact path="/a" component={A} />
                    <Route exact path="/b" component={B} />
                    <Route exact path="/c" component={C} />
                </Switch>
                <button onClick={()=>this.props.linkToA()}>A</button>
                <button onClick={()=>this.props.linkToB()}>B</button>
                <button onClick={()=>this.props.linkToC()}>C</button>
                <div styleName='title'>
                    <div className='title-son' />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles))
