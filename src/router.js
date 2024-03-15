import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from './components/pages/IndexPage.vue';
import ProjectCardComponent from './components/pages/ProjectCardComponent.vue';
import SingleProjectCard from './components/pages/SingleProjectCard.vue';
import ContactsPage from './components/pages/ContactsPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';

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
            {
                path: '/blog/:slug',
                name: 'posts.show',
                component: SingleProjectCard
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: ContactsPage
            },
            {
                path: '/:pathMatch(.)',
                name: 'not-found',
                component: NotFoundPage
            },
        ]
    });
export { router };