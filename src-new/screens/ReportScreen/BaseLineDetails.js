import React from 'react';
import BaselineReport from '../../component/reports/BaselineReport ';
import SideMenu from '../../component/side/SideMenu';
const BaseLineDetails = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <BaselineReport />
        </div>
    );
}
export default BaseLineDetails