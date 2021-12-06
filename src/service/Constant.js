export const BASE_URL = ' http://ninos.crm.script.skilltally.com/public/index.php/api/';

export const URL = {
    SIGN_UP: 'user/signup',
    LOGIN: 'user/login',
    VERIFY_EMAIL: 'verify/email/', // slug_email has to pass in url
    REGISTER: 'register/user',
    STANDARDS: 'standards',
    STANDARD_STREAMS: 'standard/streams/', //standard_id has to pass in url
    STREAMS: 'streams',
    STREAM_BRANCHES: 'stream/branches/', //stream_id has to pass in url
    INDUSTRIES: 'industries',
    INDUSTRY_WORK_ROLES: 'industry/work-roles/', //industry_id has to pass in url
    FORGOT_PASSWORD_REQUEST: 'forgot-password/', //email, type has tp pass in url
    FORGOT_PASSSWORD_CHANGE: 'forgot-change-password',

}


export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validMobilNo = new RegExp('^[7-9]{1}[0-9]{9}');
export const validText = new RegExp('^[a-zA-Z ]*$');
