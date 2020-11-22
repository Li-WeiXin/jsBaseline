//入口文件
import Vue from 'vue'

// 导入路由的包
import VueRouter from 'vue-router'

//1.2 安装路由
Vue.use(VueRouter);


//按需导入 Mint-UI的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//1.3 导入自己的router.js路由模块
import router from './router.js'

//导入App根组件
import app from './App.vue'

//导入 MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//2.1 导入Vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource);

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router //1.4 挂载路由对象到VM实例上
});