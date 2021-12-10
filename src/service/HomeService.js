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
const profileUpdate = (payload) => {
    return httpClient.post(URL.PROFILE, payload);
}
const avatarUpdate = (avatar_id) => {
    return httpClient.post(URL.AVATAR_UPDATE, avatar_id);
}
const HomeService = {
    profile,
    changePassword,
    getAvatar,
    profileUpdate,
    avatarUpdate,
}
export default HomeService;