import {RouteRecordRaw} from "vue-router";

export default [
    {
        path: '/login',
        component: () => import('../views/login/login.vue'),
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path:'/',
        redirect:'/home',
        component:()=>import('../views/commom/layout.vue'),
        children:[
            {
                path:'dashboard',
                name:'dashboard',
                component:()=> import('../views/dashboard/dashboard.vue'),
            }
        ],
    },



] as RouteRecordRaw[]




