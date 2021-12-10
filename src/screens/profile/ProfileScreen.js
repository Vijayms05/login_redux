import React from 'react';
import ProfilePage from './ProfilePage';
import SideMenu from '../../component/side/SideMenu';
const ProfileScreen = () => {
    return (
        <div className="d-md-flex d-lg-flex">
            <SideMenu />
            <ProfilePage />
        </div>
    );
}
export default ProfileScreen