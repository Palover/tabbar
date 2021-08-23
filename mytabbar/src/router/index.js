import Vue from 'vue';
import VueRouter from 'vue-router';

const homepage = ()=>import('../views/homepage/homepage');
const category = ()=>import('../views/category/category');
const cart = ()=>import('../views/cart/cart');
const my = ()=>import('../views/my/my');

Vue.use(VueRouter);
const routes=[
  {
    path:'',
    redirect:'/homepage'
  },
  {
    path:'/homepage',
    component:homepage
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/my',
    component:my
  }
]
const router = new VueRouter({
  routes,
  mode:"history"
})
export default router
