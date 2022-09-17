import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import  { ElMessage } from "element-plus";
import {IResponse} from "../types/api.type";
import {useLoading} from "../utils/loading";
const {openLoading,closeLoading} = useLoading()
const BASE_URL = import.meta.env.VITE_BASE_URL

const instance:AxiosInstance = axios.create({
    timeout:6000,
    baseURL:BASE_URL
})




instance.interceptors.request.use((config:AxiosRequestConfig)=>{
    if(!config.closeLoading){
        openLoading({})
    }
    return config
},(error:AxiosError) => {
    return Promise.reject(error)
})

type TErrResponse = {
    data:any,
    message:string,
    code:number
}
instance.interceptors.response.use((res:AxiosResponse<IResponse<any>>)=>{
    closeLoading()
    ElMessage({ message:res.data.message,grouping: true,type: 'success',})
    return res.data
},(error:AxiosError<TErrResponse>)=>{
    ElMessage({
        message: error.response?.data.message,
        grouping: true,
        type: 'error',
    })
    return Promise.reject(error)
})

type TMethods = 'get'|'post'|'delete'|'put'
export const service = <T,D=IResponse<T>>(methods:TMethods,url:string,payload:any):Promise<D> =>{
    return instance[methods](url,payload)
}


export default instance