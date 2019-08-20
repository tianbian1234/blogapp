import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import BasicRoute from './routers';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

render(<Provider store={store}>
    <BasicRoute />
</Provider>, root);