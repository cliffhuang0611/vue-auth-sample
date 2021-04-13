import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue');
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue');
const Profile = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile.vue');

Vue.use(VueRouter);

enum ROUTE_TYPE {
  PUBLIC,
  NEED_AUTH,
  NEED_UNAUTH,
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      routeType: ROUTE_TYPE.PUBLIC,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      routeType: ROUTE_TYPE.NEED_UNAUTH,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      routeType: ROUTE_TYPE.NEED_AUTH,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
