import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom' 
import AsyncComponent from './AsyncComponent';
import Loadable from 'react-loadable';
// 动态引入
const AsyncContainerOne = AsyncComponent(() => import('../container/ContainerOne'));
const AsyncContainerTwo = AsyncComponent(() => import('../container/ContainerTwo'));
const AsyncContainerThree = AsyncComponent(() => import('../container/ContainerThree'));
const AsyncContainerFour = AsyncComponent(() => import('../container/ContainerFour'));
// const AsyncNotFound = AsyncComponent(() => import('../container/NotFound'));
const AsyncNotFound = Loadable({
    loader: () => import('../container/NotFound'),
    loading: () => <div>loading...</div>
});
// Loadable({
//     loader: () => import('./my-component'),
//     loading: Loading,
//   });
  

const Router = ({childProps}) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={AsyncContainerOne} />
                <Route path="/one" component={AsyncContainerOne} />
                <Route path="/two" component={AsyncContainerTwo}  />
                <Route path="/three" component={AsyncContainerThree} />
                <Route path="/four" component={AsyncContainerFour} />
                <Route path="/NotFound" component={AsyncNotFound} />
                <Redirect exact to="/NotFound" />
            </Switch>
        </div>
    );
};

export default Router;