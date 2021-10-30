import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import { Row } from 'react-bootstrap';
import BillingDetails from './BillingDetails';
const BillingDetailScreen = () => {
    return (
        <Row>
            <Sidebar />
            <BillingDetails />
        </Row>
    );
}
export default BillingDetailScreen;