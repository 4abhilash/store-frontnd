import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../view/home'
import cart from "../view/cart"
import aboutUs from "../view/aboutUs"
import checkout from "../view/checkout"


Vue.use(VueRouter);


const routes = [
            {
                path:'/',
                name : 'home',
                component: home
            },
            {
                path:'/cart',
                name : 'cart',
                component: cart
            },
            {
                path:'/About us',
                name : 'aboutUs',
                component: aboutUs
            },
            {
                path:'/checkout',
                name : 'checkout',
                component: checkout
            }
        ]
const router = new VueRouter({routes})

export default router
