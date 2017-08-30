import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContainerOne.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';
import helper from '../../helper';

class ContainerOne extends Component {
    state = {
        cards: [{
            id: 1,
            text: '1',
        }, {
            id: 2,
            text: '2',
        }, {
            id: 3,
            text: '3',
        }, {
            id: 4,
            text: '4',
        }, {
            id: 5,
            text: '5',
        }, {
            id: 6,
            text: '6',
        }, {
            id: 7,
            text: '7',
        }]
    };
    moveCard = (draggedindex, overIndex) => {
        let {cards} = this.state;
        // 交换
        // cards = helper.swapArr(cards, draggedindex, overIndex)

        // 插入
        cards = helper.insertArr(cards, draggedindex, overIndex);
        this.setState({
            cards
        });
    }
    render() {
        const { cards } = this.state;
        return (
            <div styleName='container-one'>
                <div>
                {
                    cards.map((card, i) => (
                    <Card
                        className='item'
                        key={card.id}
                        index={i}
                        id={card.id}
                        text={card.text}
                        moveCard={this.moveCard}
                        findCard={this.findCard}
                    />
                    ))
                }
                </div>
            </div>
        );
    }
}

export default DragDropContext(
    HTML5Backend
)(CSSModules(ContainerOne, styles));
