import React from 'react';
import SideMenu from '../../component/side/SideMenu';
import { Row } from 'react-bootstrap';
import ReportPage from '../reportPage/ReportPage';
const ReportScreen = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <ReportPage />
        </div>
    );
}
export default ReportScreen