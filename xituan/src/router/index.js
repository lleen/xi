import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import GiftBag from '@/page/GiftBag';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/giftBag',
      name: 'giftBag',
      component: GiftBag
    },
  ]
})
