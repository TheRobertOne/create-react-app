import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import Colors from './Colors';
import styles from './ContainerThree.less';
import CSSModules from 'react-css-modules';

class ContainerThree extends Component {
  render() {
    return (
      <div styleName='container-three'>
        <div>
          <SourceBox color={Colors.BLUE}>
            <SourceBox color={Colors.YELLOW}>
              <SourceBox color={Colors.YELLOW} />
              <SourceBox color={Colors.BLUE} />
            </SourceBox>
            <SourceBox color={Colors.BLUE}>
              <SourceBox color={Colors.YELLOW} />
            </SourceBox>
          </SourceBox>
        </div>
        <div>
          <TargetBox />
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(
  CSSModules(ContainerThree, styles) 
)