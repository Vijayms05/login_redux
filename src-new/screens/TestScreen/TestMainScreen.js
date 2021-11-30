import React from 'react';
import SideMenu from '../../component/side/SideMenu';
import TestDetailScreen from './TestDetailScreen';
const TestMainScreen = () => {
    return (
        <div className="d-md-flex test-main">
            <SideMenu />
            <TestDetailScreen />
        </div>
    );
}
export default TestMainScreen;