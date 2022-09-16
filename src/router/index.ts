import * as VueRouter from 'vue-router'
import routes from './staticIndex'
import useUserStore from '../store/user'


const router = VueRouter.createRouter({

    history: VueRouter.createWebHistory(),
    routes,
    scrollBehavior:()=>({left:0,top:0})
})

router.beforeEach((to,from,next)=>{
    const userStore = useUserStore()
    if(userStore.token){//token存在
        to.path === '/login'? next(from.path) : next() //禁止去login
    }else{
        if(to.meta?.guest){//游客页并且无token放行
            next()
        }else{
            next()
        }
    }

})
export default router

