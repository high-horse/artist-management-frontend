import { createRouter , createWebHistory} from "vue-router";

import Login from "./components/Login.vue";
import Register from './components/Register.vue';
import Homecomponent from './components/Home.vue';
import Logout from "./components/Logout.vue";

const routes = [
    {path: '/', component: Homecomponent},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/logout', component: Logout},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;