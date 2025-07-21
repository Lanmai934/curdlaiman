import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (!token && to.path !== '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

