import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContainerOne.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';

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
        cards = this.swap(cards, draggedindex, overIndex)
        this.setState({
            cards
        });
    }
    swap = (array, first, second) => {
        let tmp = null;
        tmp = array[first];
        array[first] = array[second];
        array[second] = tmp;
        return array; 
    }
    render() {
        const { cards } = this.state;
        return (
            <div styleName='container-one'>
                {
                    cards.map((card, i) => (
                    <Card
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
        );
    }
}

export default DragDropContext(
    HTML5Backend
)(CSSModules(ContainerOne, styles));
