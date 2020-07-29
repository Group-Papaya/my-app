import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '../components/SignIn.vue';
import ChangeAdminPassword from '../components/ChangeAdminDetails.vue'
import AssignUserRole from '../components/AssignUserRole.vue'
import firebase from 'firebase'

Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        { path: '/sign-in', name: 'sign-in', component: SignIn },
        { path: '/change-admin-details', name: 'change-admin-details', component: ChangeAdminPassword, meta: {requiresAuth: true}},
        { path: '/assign-user-role', name: 'assign-user-role', component: AssignUserRole, meta: {requiresAuth: true}}
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    console.log("requiresAuth", requiresAuth)
    console.log("isauthenticated", isAuthenticated);
    if (requiresAuth && !isAuthenticated) {
        next("/sign-in");
    } else {
        next();
    }
});

export default router;