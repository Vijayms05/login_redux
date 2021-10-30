import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Subscription from '../subscription/Subscription';
import { Row } from 'react-bootstrap';
import ProfilePage from './ProfilePage';
const ProfileScreen = () => {
    return (
        <Row>
            <Sidebar />
            <ProfilePage />
        </Row>
    );
}
export default ProfileScreen