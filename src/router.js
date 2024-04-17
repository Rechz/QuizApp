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
                },
                {
                    path: '/studentHome/enter-id',
                    component: () => import('./components/QuizIdEnter.vue'),
                }

            ]
        },
        {
            path: '/student/questions',
            component: () => import('./components/QuestionPaper.vue')
        },
        {
            path: '/admin',
            component: () => import('./components/AdminHome.vue'),
            children: [
                {
                    path: '/admin/quiz',
                    component: () => import('./components/AdminQuiz.vue'),
                    alias: ''
                },
                {
                    path: '/admin/viewsubject',
                    component: () => import('./components/ViewSubject.vue'),
                },
                {
                    path: '/admin/addQuestion',
                    component: () => import('./components/AddQuestion.vue'),
                },
                {
                    path: '/admin/viewQuestion',
                    component: () => import('./components/ViewQuestion.vue'),
                },
                {
                    path: '/admin/viewResults',
                    component: () => import('./components/ViewResults.vue'),
                },
            ]
        }
    ]
});
export default router;