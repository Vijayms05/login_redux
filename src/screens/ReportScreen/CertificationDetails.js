import React from 'react';
import CertificationReport from '../../component/reports/CertificationReport';
import SideMenu from '../../component/side/SideMenu';
const CertificationDetails = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <CertificationReport />
        </div>
    );
}
export default CertificationDetails