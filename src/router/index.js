import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import OrdersView from '../views/OrdersView.vue'
import NewCarView from '../views/NewCarView.vue'
import CarListView from '../views/CarListView.vue'
import CarDetailView from '../views/CarDetailView.vue'
import CarsView from '../views/CarsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
  {
    path: '/new',
    name: 'new-car',
    component: NewCarView
  },
  {
    path: '/list',
    name: 'car-list',
    component: CarListView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/car/:id',
    name: 'car-detail',
    component: CarDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
