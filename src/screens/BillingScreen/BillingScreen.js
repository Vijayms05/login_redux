import React from 'react';

import './BillingScreen.css';
import './responsive.css';
import Sidebar from '../../component/sidebar/Sidebar';
import { Row } from 'react-bootstrap';
import BillingPage from './BillingPage/BillingPage';
const BillingScreen = () => {
    return (
        <div className="d-sm-flex ">
            <Sidebar />
            <BillingPage />
        </div>
    );
}
export default BillingScreen