import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContainerOne.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';
import update from 'react/lib/update';

class ContainerOne extends Component {
    state = {
        cards: [{
            id: 1,
            text: 'Write a cool JS library',
        }, {
            id: 2,
            text: 'Make it generic enough',
        }, {
            id: 3,
            text: 'Write README',
        }, {
            id: 4,
            text: 'Create some examples',
        }, {
            id: 5,
            text: 'is taller than the others)',
        }, {
            id: 6,
            text: '???',
        }, {
            id: 7,
            text: 'PROFIT',
        }]
    };
    moveCard = (dragIndex, hoverIndex) => {
        const { cards } = this.state;
        const dragCard = cards[dragIndex];
        
        this.setState(update(this.state, {
            cards: {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
            },
        }));
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
