import React from 'react';
import SideMenu from '../../component/side/SideMenu';
import TestDetailScreen from './TestDetailScreen';
import httpClient from '../../service/httpClient'
httpClient.defaults.headers.common['Authorization'] = 'Bearer 84|wta1foy4srDHiw5PMlxFzgaWKcRXEgRAxT6AZLlK';

const TestMainScreen = () => {
    return (
        <div className="d-md-flex test-main">
            <SideMenu />
            <TestDetailScreen />
        </div>
    );
}
export default TestMainScreen;