<template>
  <div id="app">
    <!--<router-view></router-view>-->   <!--路由的显示  ---- 对应的组件在哪一个位置显示-->
    <router-view name="header"></router-view>    <!--多视图路由  name属性-->
    <!--<router-view name="content"></router-view>-->
    <!--<transition name="slide-fade">-->
    <router-view name="nav"></router-view>
    <router-view name="content"></router-view>
    <!--</transition>-->
    <!--<v-footer></v-footer>-->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import "~@/lib/reset.scss";

html,body,#app{
	@include rect(100%,100%);
}
#app{
	
  
}
.border-no{
	border: none;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
/*.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}*/
</style>
