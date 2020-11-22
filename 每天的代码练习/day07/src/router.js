import VueRouter from 'vue-router'

//导入最近的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


// 创建路由对象
var router = new VueRouter({
    routes: [
        { path:'/home', component:HomeContainer },
        { path:'/member', component:MemberContainer },
        { path:'/shopcar', component:ShopcarContainer },
        { path:'/search', component:SearchContainer }
    // 配置路由规则
  ],
    linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类叫做router-link-active
});

// 把路由对象暴露出去
export default router