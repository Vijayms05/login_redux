import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import RecordView from './RecordView'
// import Home from './component/home/Home'
import Routes from './routes/Routes';
import httpClient from './service/httpClient';
// import axios from 'axios';
// import { BASE_URL } from './service/Constant';
// axios.defaults.baseURL = BASE_URL;

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        httpClient.interceptors.request.use(function (config) {
            // spinning start to show
            setLoading(true);
            return config
        }, function (error) {
            setLoading(false);
            return Promise.reject(error);
        });

        httpClient.interceptors.response.use(function (response) {
            // spinning hide
            setLoading(false);
            return response;
        }, function (error) {
            setLoading(false);
            return Promise.reject(error);
        });
    }, [])
    return (
        <div>
            {loading &&
                <div style={{ position: 'absolute', marginLeft: '50%', marginTop: 250 }}>
                    <Spinner animation="border" variant="primary" />
                    <span style={{ marginLeft: 10, }}>Loading...</span>
                </div>
            }
            <Routes />
        </div>
    )
}
export default App