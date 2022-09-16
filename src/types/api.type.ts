export interface ILoginForm{
    username:string,
    password:string,
}

export interface IResponse<T>{
    code:number,
    message:string,
    data:T
}

export interface ILoginRes {
    token:string
}