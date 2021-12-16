import React from 'react'
import RecordView from './RecordView'
// import Home from './component/home/Home'
import Routes from './routes/Routes';
import httpClient from './service/httpClient';
// import axios from 'axios';
// import { BASE_URL } from './service/Constant';
// axios.defaults.baseURL = BASE_URL;

const App = () => {
    httpClient.defaults.headers.common['Authorization'] = 'Bearer 84|wta1foy4srDHiw5PMlxFzgaWKcRXEgRAxT6AZLlK';

    return (
        <Routes />
    )
}
export default App