import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from './components/pages/IndexPage.vue';
import ProjectCardComponent from './components/pages/ProjectCardComponent.vue';

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: IndexPage
            },
            {
                path: '/blog',
                name: 'posts.index',
                component: ProjectCardComponent
            },
        ]
    });
export { router };