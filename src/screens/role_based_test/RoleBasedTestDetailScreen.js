import React from 'react';
import RoleBasedTestList from './RoleBasedTestList';
import SideMenu from '../../component/side/SideMenu';
const SubscriptionDetailScreen = () => {
    return (
        <div className="d-md-flex test-main">
            <SideMenu />
            <RoleBasedTestList />
        </div>
    );
}
export default SubscriptionDetailScreen