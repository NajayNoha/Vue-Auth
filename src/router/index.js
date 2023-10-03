import { createRouter, createWebHistory } from 'vue-router'
import store  from './../store/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',      
      component: () => import('../views/HomeView.vue')

      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/User/UserLogin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./../views/User/UserRegister.vue')
    }
  ]
})

router.beforeEach((to, from, next)=>{
  const isAuthenticated = localStorage.getItem('isAuth') 
  if (to.path !== '/login' && to.path !== '/register' && !isAuthenticated) {
    // isAuthenticated ? console.log('dakhel') : console.log(localStorage.getItem('isAuth'))
    next('/login'); // Redirect to the login page if not authenticated
  } else {
    next(); 
  }
})


router.beforeEach((to, from, next)=>{
  const isAuthenticated = localStorage.getItem('isAuth') 
  // const isAuthenticated = store.state.isLoggedIn;

  if ((to.path == '/login' || to.path == '/register') && isAuthenticated) {
    next('/'); 
  } else {
    next(); 
  }
})

export default router
