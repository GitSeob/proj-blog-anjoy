import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>anjoy's project</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.js" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType,
};

export default App;