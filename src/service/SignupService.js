import { URL } from './Constant';
import httpClient from './httpClient';

const signUp = (payload) => {
    return httpClient.post(URL.SIGN_UP, payload);
};


const SignupService = {
    signUp
}
export default SignupService;