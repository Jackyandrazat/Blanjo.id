import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'), // Komponen Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue'), // Komponen About
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
