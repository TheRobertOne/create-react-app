import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContainerOne.less';

class ContainerOne extends Component {

    state = {
        count: 1
    }

    render() {
        return (
            <div styleName='container-one'>
                <div className='item'>1</div>
                <div className='item'>2</div>
                <div className='item'>3</div>
                <div className='item'>4</div>
                <div className='item'>5</div>
                <div className='item'>6</div>
                <div className='item'>7</div>
                <div className='item'>8</div>
                <div className='item'>9</div>
                <div className='item'>10</div>
                <div className='item'>11</div>
                <div className='item'>12</div>
            </div>
        );
    }
}

export default CSSModules(ContainerOne, styles);
