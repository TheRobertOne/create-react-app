import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import configureStore, { history } from './store/configureStore'
import 'antd/dist/antd.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// 优化移动端点击
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
