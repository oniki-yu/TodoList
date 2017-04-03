import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';

import Box from './components/Box';
import { reducer } from './reducers';

const store = createStore(reducer);

ReactDom.render((
    <Provider store={store}>
        <Box />
    </Provider>
), document.getElementById('root'));
