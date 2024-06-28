import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Resume from '../views/Resume.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
