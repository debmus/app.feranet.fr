import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Hash from '../views/Hash'
import Speedtest from '../views/Speedtest'
import Password from '../views/Password'
import Scanport from '../views/Scanport'
import Ip from '../views/Ip'
import Whois from '../views/Whois'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
},
{
    path: '/home',
    name: 'home',
    component: Home
},
{
    path: '/Speedtest',
    name: 'speedtest',
    component: Speedtest
},
{
    path: '/Ip',
    name: 'ip',
    component: Ip
},
{
    path: '/Password',
    name: 'password',
    component: Password
},
{
    path: '/Hash',
    name: 'hash',
    component: Hash
},
{
    path: '/Whois',
    name: 'whois',
    component: Whois
},
{
    path: '/Scanport',
    name: 'scanport',
    component: Scanport
},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router