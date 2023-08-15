import axios, { AxiosHeaders } from "axios"
import { LocalStorage } from "../../local/LocalStorage"
import { User } from "../../../../Domain/entities/User"

const ApiDelivery=axios.create({
    baseURL:'http://192.168.1.8:3000/api',
    headers:{
        'Content-Type':'application/json'
    }
})

const ApiDeliveryForImage = axios.create({
    baseURL: 'http://192.168.1.8:3000/api',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
})

ApiDeliveryForImage.interceptors.request.use(
    async(config)=>{
        const data = await LocalStorage().getItem('user');
        if(data){
            const user:User =JSON.parse(data as any);
            (config.headers as AxiosHeaders).set("Authorization",`${user?.session_token}`);
        }
        return config;
    }
)

ApiDelivery.interceptors.request.use(
    async(config)=>{
        const data = await LocalStorage().getItem('user');
        if(data){
            const user:User =JSON.parse(data as any);
            (config.headers as AxiosHeaders).set("Authorization",`${user?.session_token}`);
        }
        return config;
    }
)

export{ApiDelivery,ApiDeliveryForImage}