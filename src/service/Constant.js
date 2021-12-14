export const BASE_URL =
    'http://192.168.1.21/skilltally-script/public/index.php/';
// 'http://ninos.crm.script.skilltally.com/public/index.php/api/';

export const URL = {
    SIGN_UP: 'api/user/signup',
    LOGIN: 'api/user/login',
    VERIFY_EMAIL: 'api/verify/email/', // slug_email has to pass in url
    REGISTER: 'api/register/user',
    STANDARDS: 'api/standards',
    STANDARD_STREAMS: 'api/standard/streams/', //standard_id has to pass in url
    STREAMS: 'api/streams',
    STREAM_BRANCHES: 'api/stream/branches/', //stream_id has to pass in url
    INDUSTRIES: 'industries',
    INDUSTRY_WORK_ROLES: 'api/industry/work-roles/', //industry_id has to pass in url
    FORGOT_PASSWORD_REQUEST: 'api/forgot-password/', //email, type has tp pass in url
    FORGOT_PASSSWORD_CHANGE: 'api/forgot-change-password',
    PROFILE: 'api/profiles',
    CHANGE_PASSWORD: 'api/password/update',
    GET_AVATAR: 'crmapi/avatar',
    AVATAR_UPDATE: 'api/avatar/update',
    COURSE_LIST: 'api/my-dashboard',
    COURSE_DETAILS:'api/subscription-details',
}


export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validMobilNo = new RegExp('^[6-9]{1}[0-9]{9}');
export const validText = new RegExp('^[a-zA-Z ]*$');
