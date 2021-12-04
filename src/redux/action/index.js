import { EMAIL, ROLE, PROFILE } from './actionType';
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