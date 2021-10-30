import React from 'react';
import './Home.css';
import './responsive.css';
import Sidebar from '../../component/sidebar/Sidebar';
import Subscription from '../subscription/Subscription';
import { Row } from 'react-bootstrap';
const HomeScreen = () => {
    return (
        <Row>
            <Sidebar />
            <Subscription />
        </Row>
    );
}
export default HomeScreen