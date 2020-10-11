import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: require('@/views/Login'),
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        hidden: true,
        redirect: { path: '/main' }
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

Vue.use(VueRouter)
const router = new VueRouter({routes})

import { getToken,removeToken } from '@/common/js/storage';
router.beforeEach((to, from, next) => {
//NProgress.start();
if (to.path == '/login') {
    removeToken();
    next();
    return;
}
if (to.path == '/404') {
    next();
    return;
}
// let token = getToken();
// if(!token||token==''){
//   next({ path: '/login' })
//   return;
// }
// if (to.path == '/') {
//   next({ path: '/models' })
//   return;
// }
if(store.state.userinfo.login==true){
    next();
    return;
}
store.dispatch('getLgInfo').then(()=>{
    if(store.state.userinfo.login==true){
    next();
    }else{
    next({ path: '/login' })
    }
}).catch(err=>{
    console.log('getLgInfo err:',err)
    next({ path: '/login' })
});
})

export default router;