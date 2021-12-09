import React from 'react';
import { URL } from './Constant';
import httpClient from './httpClient';


const profile = () => {
    return httpClient.get(URL.PROFILE);
}
const changePassword = (payload) => {
    return httpClient.post(URL.CHANGE_PASSWORD, payload);
}
const getAvatar = () => {
    return httpClient.get(URL.GET_AVATAR);
}
const HomeService = {
    profile,
    changePassword,
    getAvatar,
}
export default HomeService;