/// <reference types="vite/client" />
import { AxiosRequestConfig } from 'axios';
interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}


declare module 'axios' {
    export interface AxiosRequestConfig {
        closeLoading?: boolean;
        // [自定义属性声明]
    }
}