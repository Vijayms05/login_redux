import { EMAIL, ROLE } from './actionType';
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