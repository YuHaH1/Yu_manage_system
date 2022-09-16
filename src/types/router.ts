// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        guest?:boolean
        // 是可选的
        isAdmin?: boolean
        // 每个路由都必须声明
        requiresAuth?: boolean
    }
}