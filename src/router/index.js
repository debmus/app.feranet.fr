import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Hash from '../views/Hash'
import Speedtest from '../views/Speedtest'
import Password from '../views/Password'
import Dns from '../views/Dns'
import Ip from '../views/Ip'
import Whois from '../views/Whois'
import Email from '../views/Email'
import Ocr from '../views/Ocr'

Vue.use(VueRouter)

const routes = [{
        path: '/',
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
        path: '/Dns',
        name: 'dns',
        component: Dns
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
        path: '/Email',
        name: 'email',
        component: Email
    },
    {
        path: '/Ocr',
        name: 'ocr',
        component: Ocr
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router