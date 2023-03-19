import axios,{AxiosInstance } from'axios'

 const api:AxiosInstance =axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers: {        
        "Content-type": "application/json",
    },
 });
//sevice dışarı açıldı

 export default api;