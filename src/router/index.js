import Vue from 'vue'    //因为用到了vue对象
//import Router from 'vue-router'  //默认
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'   //默认

//Vue.use(Router)    //默认     如果在一个模块化工程中使用vue-router，必须要通过 Vue.use() 明确地安装路由功能。
Vue.use(VueRouter) 

/**
 *使用 router（路由）的步骤：
 * 步骤1：引入需要的路由
 * 步骤2：定义路由规则
 * 步骤3：创建router的实例
 * 步骤4：将实例挂载到根组件中
 */

//1、引入需要的路由
import Header from "./../components/header.vue"
import ContentNav from "./../components/contentNav.vue"
import Footer from "./../components/footer.vue"
import Index from "./../components/index.vue"
//2、创建路由规则
const routes = [
  {path:"/",redirect:"/index"},   //重定向（默认首页）
  //{path:"/kind",redirect:"/kind/1/美食1"},   //重定向（默认首页）
  {
  	path:"/index",           
  	name:"index",
  	//component:Home
  	components:{          //多视图路由
  		header:Header,    //头部
  		nav:ContentNav,
  		content:Index,    //内容区
  		footer:Footer    //底部
  	}
  }
]

//3、创建路由实例
const router = new VueRouter({
	routes    //routes :routes   要求：key和value一样
})

export default router;
/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
