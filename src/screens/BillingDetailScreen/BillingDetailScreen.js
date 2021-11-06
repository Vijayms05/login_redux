import React from 'react';
import BillingDetails from './BillingDetails';
import SideMenu from '../../component/side/SideMenu';
const BillingDetailScreen = () => {
    return (
        <div className="d-md-flex ">
            <SideMenu />
            <BillingDetails />
        </div>
    );
}
export default BillingDetailScreen;