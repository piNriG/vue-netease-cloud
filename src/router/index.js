import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const LoginView = () => import ('../views/LoginView')
const ProfileView = () => import ('../views/ProfileView')
const RadioView = () => import('../views/RadioView')
const SearchView = () => import('../views/SearchView')
const YunCunView = () => import('../views/YunCunView')


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/radio',
        name: 'radio',
        component: RadioView
    },
    {
        path: '/search',
        name: 'search',
        component: SearchView
    },
    {
        path: '/yun-cun',
        name: 'yunCun',
        component: YunCunView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
