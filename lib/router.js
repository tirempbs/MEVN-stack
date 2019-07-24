import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import Login from "./views/authentication/Login.vue";
import Register from "./views/authentication/Register.vue";
import TasksAll from "./views/tasks/TasksAll.vue";
import TasksCreate from "./views/tasks/TasksCreate.vue";
import TasksEdit from "./views/tasks/TasksEdit.vue";
Vue.use(Router);
var isLoggedIn = false;
var routes = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/tasks',
    name: 'tasks-all',
    component: TasksAll,
    beforeEnter: function beforeEnter(to, from, next) {
      if (isLoggedIn) {
        next();
      } else {
        next('/login');
      }
    }
  }, {
    path: '/tasks/new',
    name: 'tasks-create',
    component: TasksCreate,
    beforeEnter: function beforeEnter(to, from, next) {
      if (isLoggedIn) {
        next();
      } else {
        next('/login');
      }
    }
  }, {
    path: '/tasks/:id',
    name: 'tasks-edit',
    component: TasksEdit,
    beforeEnter: function beforeEnter(to, from, next) {
      if (isLoggedIn) {
        next();
      } else {
        next('/login');
      }
    }
  }, {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: function beforeEnter(to, from, next) {
      if (!isLoggedIn) {
        next();
      } else {
        next('/');
      }
    }
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: function beforeEnter(to, from, next) {
      if (!isLoggedIn) {
        next();
      } else {
        next('/');
      }
    }
  }, {
    path: '*',
    redirect: '/'
  }],
  linkActiveClass: 'active',
  mode: 'history'
});
export default routes;