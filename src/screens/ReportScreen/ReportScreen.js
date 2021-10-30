import React from 'react';

import './ReportScreen.css';
import './responsive.css';
import Sidebar from '../../component/sidebar/Sidebar';
import { Row } from 'react-bootstrap';
import ReportPage from '../reportPage/ReportPage';
const ReportScreen = () => {
    return (
        <Row>
            <Sidebar />
            <ReportPage />
        </Row>
    );
}
export default ReportScreen