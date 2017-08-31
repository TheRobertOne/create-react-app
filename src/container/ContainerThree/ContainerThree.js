import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SourceBox from './SourceBox';
// import TargetBox from './TargetBox';
import Colors from './Colors';
import styles from './ContainerThree.less';
import CSSModules from 'react-css-modules';

class ContainerThree extends Component {
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
  render() {
    return (
      <div styleName='container-three'>
        <div>
          <SourceBox color={Colors.YELLOW}>
            <SourceBox color={Colors.YELLOW} />
            <SourceBox color={Colors.BLUE} />
          </SourceBox>
        </div>
        <div>
          <SourceBox color={Colors.YELLOW}>
            <SourceBox color={Colors.YELLOW} />
            <SourceBox color={Colors.BLUE} />
          </SourceBox>
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(
  CSSModules(ContainerThree, styles) 
)