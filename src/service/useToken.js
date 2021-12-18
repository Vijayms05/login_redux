import { useState } from 'react';
import { TOKEN } from './Constant'

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem(TOKEN);
        // const userToken = JSON.parse(tokenString);
        // return userToken?.token
        return tokenString
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem(TOKEN, userToken);
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}