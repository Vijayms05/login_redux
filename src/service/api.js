import axios from "axios";

export const dummyURL = "https://jsonplaceholder.typicode.com/posts/";

export const dummyApi= axios.create({        
     baseURL :"http://localhost:3000/",
})
