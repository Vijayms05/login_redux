import { URL } from './Constant';
import httpClient from './httpClient';
const request = (email, type) => {
    return httpClient.get(URL.FORGOT_PASSWORD_REQUEST + email + '/' + type);
}
const changePassword = (payload) => {
    return httpClient.post(URL.FORGOT_PASSSWORD_CHANGE, payload);
}
const ForgotPasswordService = {
    request,
    changePassword,
}
export default ForgotPasswordService;