import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router';
//import router from './router';
import App from './App.vue';
import Login from './components/Login.vue';
import Home from'./Home.vue';
import Registration from'./components/Registration.vue';
import Profile from'./components/Profile.vue';
import Accueil from'./components/Accueil.vue';
import AdminChart from './components/AdminChart.vue';
import ContryChart from './components/ContryChart.vue';
import CommentPopup from './components/CommentPopup.vue';
import CommentFormPop from './components/CommentFormPop.vue';


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',
     component: Accueil
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/App',
      name: 'App',
      component: App,
    },

    {
      path:'/Home',
      name:'Home',
      component: Home,
    },
    {
      path:'/Registration',
      name:'Registration',
      component: Registration,
    },
    {
      path:'/CommentPopup',
      name:'CommentPopup',
      component: CommentPopup
    },
    {
      path:'/CommentFormPop',
      name:'CommentFormPop',
      component: CommentFormPop
    },
    {
    path:'/Profile',
    name:'Profile',
    component:Profile,
  },
  {
    path:'/Accueil',
    name:'Accueil',
    component:Accueil,
  },
  {
    path:'/AdminChart',
    name: 'AdminChart',
    component:AdminChart,
},
  {
    path:'/ContryChart',
    name:'CountruChart',
    component:ContryChart
  }
  ],
});

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
export default router;
