import React from 'react';
import './Home.css';
import Subscription from '../subscription/Subscription';
import SideMenu from '../../component/side/SideMenu';
const HomeScreen = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <Subscription />
        </div>
    );
}
export default HomeScreen