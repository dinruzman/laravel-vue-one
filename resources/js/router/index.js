import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import App from '../App.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
