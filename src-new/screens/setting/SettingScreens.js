import React from 'react';
import Setting from './Setting';
import SideMenu from '../../component/side/SideMenu';
const SettingScreens = () => {
    return (
        <div className="d-md-flex ">
            <SideMenu />
            <Setting />
        </div>
    );
}
export default SettingScreens;