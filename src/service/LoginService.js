import React from 'react';
import { BASE_URL, URL } from './Constant';
import httpClient from './httpClient';


const login = (payload) => {
    return httpClient.post(URL.LOGIN, payload);
}
const verifyEmail = (slug_email) => {
    return httpClient.get(URL.VERIFY_EMAIL + slug_email);
}
const LoginService = {
    login,
    verifyEmail
}
export default LoginService;
const getEmployees = () => {
    return httpClient.get('http://localhost:8080/api/v1/employees');
}



const getEmployeeById = (employeeId) => {
    return httpClient.get(BASE_URL + '/' + employeeId);
}

const updateEmployee = (employee, employeeId) => {
    return httpClient.put(BASE_URL + '/' + employeeId, employee);
}

const deleteEmployee = (employeeId) => {
    return httpClient.delete(BASE_URL + '/' + employeeId);
}