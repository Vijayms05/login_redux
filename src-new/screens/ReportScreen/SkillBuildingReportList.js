import React from 'react';
import SideMenu from '../../component/side/SideMenu';
import SkillBuildingReport from '../../component/reports/SkillBuildingReport';
const SkillBuildingReportList = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <SkillBuildingReport />
        </div>
    );
}

export default SkillBuildingReportList;