import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import { Provider } from 'react-redux';


import AppLayout from '../components/AppLayout';
import { initialState } from '../../../ref/ch3/front/reducers/post';

const App = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>anjoy's project</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.js" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

App.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

export default withRedux((initialState, options) => {
    const middlewares = [];

    const enhancer = compose(
        applyMiddleware(...middlewares),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !=='undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__(): (f)=>f,
    );

    const store = createStore(reducer, initialState, enhancer);
    return store;
})(App);