import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/HomeView.vue';
import Registration from './../views/RegistrationView.vue';
import About from './../views/AboutView.vue';
import Contact from './../views/ContactView.vue';
import Login from './../views/LoginView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/registration', name: 'Registration', component: Registration },
  { path: '/login', name: 'Login', component: Login },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
