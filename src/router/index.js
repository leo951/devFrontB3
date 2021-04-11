import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Account from '../views/Account.vue'
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import authGuard from '../middleware/auth'
import authGuardAdmin from '../middleware/authAdmin'

import Cart from '../views/Cart.vue'
import Favorite from '../views/Favorite.vue'
import Orders from '../views/Orders.vue'
import SignIn from '../views/SignIn.vue'

// Partie Admin

import ProductAdmin from '../views/admin/ProductAdmin.vue'
import CreateProducts from '../views/admin/CreateProducts.vue'
import CreateUser from '../views/admin/CreateUser.vue'
import UserModify from '../views/admin/UserModify.vue'
import CreateCategory from '../views/admin/CreateCategory.vue'
import CategoryAdmin from '../views/admin/CategoryAdmin.vue'
import Dashboard from '../views/DashboardAdmin/Dashboard.vue'
import DashboardCategory from '../views/DashboardAdmin/DashboardCategory.vue'
import DashboardUsers from '../views/DashboardAdmin/DashboardUsers.vue'
import DashboardProducts from '../views/DashboardAdmin/DashboardProducts.vue'
import LoginAdmin from '../views/admin/LoginAdmin.vue'








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
    // via middleware
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

                //Partie Admin

  {
    path: '/loginAdmin',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/productAdmin',
    name: 'ProductAdmin',
    component: ProductAdmin
  },
  {
    path: '/userModify',
    name: 'UserModify',
    component: UserModify
  },
  {
    path: '/createProducts',
    name: 'CreateProducts',
    component: CreateProducts
  },
  {
    path: '/createUser',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/createCategory',
    name: 'CreateCategory',
    component: CreateCategory
  },
  {
    path: '/categoryAdmin',
    name: 'CategoryAdmin',
    component: CategoryAdmin
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
        //via middleware
        beforeEnter(to, from, next) {
          if (!localStorage.getItem('Admin')) {
             next({
              name:"Home"
            })
          }
          else {
            next();
          }
        }
  },
  {
    path: '/dashboardCategory',
    name: 'DashboardCategory',
    component: DashboardCategory
  },
  {
    path: '/dashboardUsers',
    name: 'DashboardUsers',
    component: DashboardUsers
  },
  {
    path: '/dashboardProducts',
    name: 'DashboardProducts',
    component: DashboardProducts
  },
]

const router = new VueRouter({
  routes
})

export default router
