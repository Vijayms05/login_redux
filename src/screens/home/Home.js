import React, { useEffect } from 'react';
import './Home.css';
import Subscription from '../subscription/Subscription';
import SideMenu from '../../component/side/SideMenu';
import HomeService from '../../service/HomeService';
import { useDispatch, useSelector } from 'react-redux';
import { set_Profile } from '../../redux/action';
import httpClient from '../../service/httpClient';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.TokenReducer.token)
    const user = useSelector(state => state.UserReducer.user);
    if (token) {
        httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}` || '';
    }
    useEffect(() => {
        if (token) {
            HomeService.profile().then(result => {
                console.log(result);
                var response = result.data;
                if (response.status == 'success') {
                    dispatch(set_Profile(response));
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
        }
    }, []);
    return (
        <div className="d-md-flex test-main">
            <SideMenu />
            <Subscription />
        </div>
    );
}
export default HomeScreen