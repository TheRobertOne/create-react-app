import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom' 
import Loadable from 'react-loadable';
import {Spin} from 'antd';
// 动态引入 老方法
// import AsyncComponent from './AsyncComponent';
// const AsyncContainerOne = AsyncComponent(() => import('../container/ContainerOne'));
// const AsyncContainerTwo = AsyncComponent(() => import('../container/ContainerTwo'));
// const AsyncContainerThree = AsyncComponent(() => import('../container/ContainerThree'));
// const AsyncContainerFour = AsyncComponent(() => import('../container/ContainerFour'));
// const AsyncNotFound = AsyncComponent(() => import('../container/NotFound'));
const CJSpin = () => {
    const x = document.body.clientHeight / 2;
    return (
        <div 
            style={{
                height: x,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Spin size='large' />
        </div>
    )
}

// 动态引入 新方法 加入 loading
const AsyncContainerOne = Loadable({
    loader: () => import('../container/ContainerOne'),
    loading: () => <CJSpin />
});
const AsyncContainerTwo = Loadable({
    loader: () => import('../container/ContainerTwo'),
    loading: () => <CJSpin />
});
const AsyncContainerThree = Loadable({
    loader: () => import('../container/ContainerThree'),
    loading: () => <CJSpin />
});
const AsyncContainerFour = Loadable({
    loader: () => import('../container/ContainerFour'),
    loading: () => <CJSpin />
});
const AsyncNotFound = Loadable({
    loader: () => import('../container/NotFound'),
    loading: () => <CJSpin />
});

// 一级导航
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