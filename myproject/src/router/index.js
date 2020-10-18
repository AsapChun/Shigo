import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/components/Login";
import Register from "@/components/Register";
import UserHome from "@/views/UserHome";
import Linkedin from "@/components/Linkedin";
import WebPortal from "@/components/WebPortal";
//import CreateZoomMeeting from "@/components/Zoom /CreateZoomMeeting";
import Meeting from "@/components/Zoom /Meeting";
import SettingComponent from "@/components/Dashboard-components/Settings-Component";
import MessagingComponent from "@/components/Dashboard-components/Messaging-Component";
/* eslint-disable */
Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/userhome',
      name: "UserHome",
      component: UserHome
    },
    {
      path:'/linkedin',
      name:"Linkedin",
      component: Linkedin
    },
    {
      path:'/webportal',
      name:"WebPortal",
      component: WebPortal
    },
    {
      path:'/Zoom/createzoommeeting',
      name:'CreateZoomMeeting',
      component: () => import('../views/CreateZoomMeeting')
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: Meeting
    },
    {
      path: '/setPreferences',
      name: 'setPreferences',
      component: () => import('../views/SetPreferences')
    },
    {
      path: '/Dashboard-components/Settings-Component',
      name: 'SettingsComponent',
      component: SettingComponent
    },
    {
      path: '/Dashboard-components/Messaging-Component',
      name: 'MessagingComponent',
      component: MessagingComponent
    }
];

const router = new VueRouter({
  routes
});

export default router
