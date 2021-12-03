import axios from "axios";
import { URL, BASE_URL } from "./Constant";
export default axios.create({
     baseURL: BASE_URL,
     headers: {
          "Content-type": "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
     }
});

// export const room_categories = async (config = {}) => await get(URL.ROOM_CATEGORIES, config);

export const login = async (data = {}, config = {}) => await post(URL.LOGIN, data, config);
export const signUp = async (data = {}, config = {}) => await post(URL.SIGN_UP, data, config);

const get = async (url, config) => {
     console.log(url);
     axios.get(BASE_URL + url, config)
          .then(res => {
               return prepareResponse(res);
          }).catch(err => {
               return handleException(err);
          })

}
const post = async (url, data, config) => {
     console.log(url);
     console.log(data);
     axios.post(BASE_URL + url, data, config)
          .then(res => {
               prepareResponse(res);
          })
          .catch(err => {
               handleException(err);
          })
}
const handleException = (err) => {
     console.log(err);
     try {
          if (err?.response?.data) {
               let { data, status, statusText, headers, config, request } = err.response;
               if (status == 400) {
                    alert('Unhandle validation occured',
                    );
               } else if (status == 401) {
                    alert('Session Closed Close your app and Reopen', [
                         {
                              text: 'Close',
                              onPress: () => {
                                   // BackHandler.exitApp();
                              },
                         },
                    ],
                         { cancelable: false },
                    );

               } else if (status == 404) {
                    alert('This Api could not be find it');
               } else {
                    alert(`server returns ${status} `);
               }
          } else {
               alert('Someting went worng or Check your Internet');
          }
     } catch (error) {
          alert('Someting went worng or Check your Internet', [
               {
                    text: 'Ok',
                    onPress: () => {
                         // BackHandler.exitApp();
                    },
               },
          ],
               { cancelable: false },
          );
     }
     return {};
}
const prepareResponse = (res) => {
     console.log(res);
     if (res?.status) {
          let { status, data = {} } = res;
          if (status >= 200 && status <= 299) {
               if (data.status == 'success') {
                    return data;
               } else if (data.status == 'failure') {
                    return data;
               } else if (data.status == 'empty') {
                    return data;
               } else if (data.status == 'error') {
                    alert(data.message);
                    return data;
               }
          } else {
               alert(`Status Code : ${status}\nMessage : ${data?.message}`)
          }
     } else {
          alert('Someting went worng or Check your Internet');
     }
     return {};
}