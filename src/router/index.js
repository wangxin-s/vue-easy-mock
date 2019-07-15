import Vue from 'vue'
import Router from 'vue-router'
import userinfo from './userinfo';
import group from './group';
import classes from './classes';
import creator from './creator';
import admin from './admin';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/home').default
    },
    {
      path: '/main',
      name:'mainPage',
      component: require('@/pages/home/mainPage').default
    },
    ...userinfo,
    ...group,
    ...classes,
    ...creator,
    ...admin,
    {
      path:'/tip',
      name: 'tip',
      component: require('@/pages/index/tip.vue').default
    },
    {
      path: '*',
      name: 'error',
      redirect: '/'
    },
  ]
})

router.beforeEach((to, from, next) => {
  next();
})



export default router;