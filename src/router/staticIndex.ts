import {RouteRecordRaw} from "vue-router";

export default [
    {path: '/login', component: ()=>import('../views/login/login.vue'),name:'login'}


]as RouteRecordRaw[]




