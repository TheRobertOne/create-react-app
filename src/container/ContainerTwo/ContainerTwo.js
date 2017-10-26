import React from 'react';
// import {Motion, spring} from 'react-motion';
import styles from './Containertwo.less';
import CSSModules from 'react-css-modules';
import { Switch, Route, Link } from 'react-router-dom';

const ProjectTask = (props) => {
  console.log("ProjectTask:", props);
  return <div>"i am ProjectTask"</div>;
}

const ProjectOver = (props) => {
  console.log("ProjectOver:", props);
  return <div>"i am ProjectOver"</div>;
}

class ContainerTwo extends React.Component {
  render() {
    return (
      <div styleName='container-two'>
        {/* 假设这是二级导航组件 */}
        <div>
          <Link to="/two/project/task">二级导航，链接到 ProjectTask</Link>
          <hr />
          <Link to="/two/project/over">二级导航，链接到 ProjectOver</Link>
        </div>
        {/* 假设这是二级导航 content */}
        <div>
          <Switch>
            <Route exact path="/two" component={ProjectTask} />
            <Route path="/two/project/task" component={ProjectTask} />
            <Route path="/two/project/over" component={ProjectOver} />
          </Switch>
        </div>
      </div>
    );
  };
}
export default CSSModules(ContainerTwo, styles)