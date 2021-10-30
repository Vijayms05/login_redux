import { authHeader } from '../helper/auth-header'

function handleResponse(response){
    return response.text().then(text =>{
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401){
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;

            return Promise.reject(error)
        }
        return data;
    })
}
function logout(){
    localStorage.removeItem('user');
}

function register(user){
    const requestOption ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    return fetch('/users/register', requestOption).then(handleResponse);
}

