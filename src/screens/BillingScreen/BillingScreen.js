import React from 'react';
import './BillingScreen.css';
import './responsive.css';
import BillingPage from './BillingPage/BillingPage';
import SideMenu from '../../component/side/SideMenu';
const BillingScreen = () => {
    return (
        <div className="d-md-flex ">
            <SideMenu />
            <BillingPage />
        </div>
    );
}
export default BillingScreen