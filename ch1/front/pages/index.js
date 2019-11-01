import React, {useEffect} from "react";
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>anjoy's project</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.js" />
            </Head>
            <AppLayout>
                <div>input introduce components</div>
            </AppLayout>
        </>
    );
};

export default Home;