import React from 'react';
import SideMenu from '../../component/side/SideMenu';
import SkillBuildingResultDetails from '../../component/reports/SkillBuildingResultDetails';
const SkillBuildingResult = () => {
    return (
        <div className="d-md-flex test-main">  
            <SideMenu />
            <SkillBuildingResultDetails />
        </div>
    );
}

export default SkillBuildingResult;