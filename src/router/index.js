import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Account from '../views/Account.vue'
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import authGuard from '../middleware/auth'
import Cart from '../views/Cart.vue'
import Favorite from '../views/Favorite.vue'
import Orders from '../views/Orders.vue'
import SignIn from '../views/SignIn.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },  
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    //via middleware
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/signIn/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/login/',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
