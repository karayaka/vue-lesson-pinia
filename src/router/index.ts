import {RouteRecordRaw,createRouter,createWebHistory}  from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CounterView from '@/views/CounterView.vue'

const routers:RouteRecordRaw[]=[{
    path:'/',
    name:'Home',
    component:HomeView
},{
    path:'/counter',
    name:'Counter',
    component:CounterView
}]

const router=createRouter({
    history: createWebHistory(),
    routes: routers,
})

export default router;