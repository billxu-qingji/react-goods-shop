import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import configureStore from './store/configureStore';

import './static/css/common.less';
import './static/css/font.css';

import RouterMap from './router/routerMap';


const store = configureStore();

render(
    <Provider store={store}>
       <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)