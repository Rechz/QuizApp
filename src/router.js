import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/HomePage.vue')
        },
        {
            path: '/adminLogin',
            component: () => import('./components/AdminLogin.vue')
        },
        {
            path: '/adminHome',
            component: () => import('./components/AdminHome.vue')
        },
        {
            path: '/studentLogin',
            component: () => import('./components/SignForm.vue')
        },
        {
            path: '/studentHome',
            component: () => import('./components/StudentHome.vue'),
            children: [
                {
                    path: '/studentHome/start-quiz',
                    component: () => import('./components/StudentSubject.vue'),
                    alias: ''
                }
            ]
        },
        {
            path: '/student/questions',
            component: () => import('./components/QuestionPaper.vue')
        }
    ]
});
export default router;