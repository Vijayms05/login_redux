import React, { useEffect } from 'react';
import './Home.css';
import Subscription from '../subscription/Subscription';
import SideMenu from '../../component/side/SideMenu';
import HomeService from '../../service/HomeService';
const HomeScreen = () => {
    useEffect(() => {
        HomeService.profile().then(result => {
            console.log(result);
            var response = result.data;
            if (response.status == 'success') {

            }
        }).catch(function (error) {
            if (error.response) {
                // Request made and server responded
                alert(error.response.data?.message);
                console.log(error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                alert(error.request)
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                alert(error.message)
                console.log(error.message);
            }

        });
    }, []);
    return (
        <div className="d-md-flex test-main">
            <SideMenu />
            <Subscription />
        </div>
    );
}
export default HomeScreen