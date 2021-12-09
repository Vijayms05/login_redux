import { EMAIL, ROLE, PROFILE, TOKEN, USER } from './actionType';
export const set_Email = (data) => {
    return {
        type: EMAIL,
        data: data,
    }
};
export const set_Role = (data) => {
    return {
        type: ROLE,
        data: data,
    }
};

export const set_Profile = (data) => {
    return {
        type: PROFILE,
        data: data,
    }
};

export const set_Token = (data) => {
    return {
        type: TOKEN,
        data: data,
    }
}

export const set_User = (data) => {
    return {
        type: USER,
        data: data,
    }
}