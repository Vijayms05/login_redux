import {dummyApi,dummyURL} from './api'

export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validMobilNo = new RegExp('^[7-9]{1}[0-9]{9}');
export const validText = new RegExp('^[a-zA-Z ]*$');

export const postItem =()=>{
    dummyApi.post(dummyURL,{
        userId:11,
        id:101,
        title:'hello world',
        body: `cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta 
        in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut`
    }).then((res) =>{
        console.log(res.data)
    }).catch( err => console.log(err))
};

export const getItem =()=>{
    dummyApi.get(dummyURL)
    .then(res =>{
        console.log(res.data[0]);      
        res.data.forEach(element => {
            if(element.id <=5){
                console.log(element);
            }               
            })
         })   
    .catch( err => console.log(err))  
}