import { URL } from './Constant';
import httpClient from './httpClient';

const register = (payload) => {
    return httpClient.post(URL.REGISTER, payload);
};


const RegisterService = {
    register
}
export default RegisterService;