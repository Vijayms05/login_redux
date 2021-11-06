import React from 'react';
import SubscriptionList from './SubscriptionList';
import SideMenu from '../../component/side/SideMenu';
const SubscriptionDetailScreen = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <SubscriptionList />
        </div>
    );
}
export default SubscriptionDetailScreen