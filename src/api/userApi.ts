
import instance,{ service } from "./index";
import {ILoginForm, ILoginRes } from "../types/api.type";

const loginApi = (params:ILoginForm) => service<ILoginRes>('post','/login',params)



export default  {
    loginApi
}