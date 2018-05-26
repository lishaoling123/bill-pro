<template>
  <div class="container">
  	我的内容
  	<!--<router-link to="/user/personalNoLogin" tag="button">未登录状态</router-link>
  	<router-link to="/user/personalLogin" tag="button">登录状态</router-link>-->
  	<hr />
		<router-view></router-view>   <!--嵌套路由-->
  </div>
  
</template>
<style scoped lang="scss">
@import "~@/lib/reset.scss";	
</style>
<script>
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    /**
    * 如果用户是登录状态
    * this.$router.push(/user/personalLogin);
    * 如果用户是未登录状态
    * this.$router.push(/user/personalNoLogin);
    */
    if(sessionStorage.getItem("username")){
    	this.$router.push("/user/personalLogin");
    }else{
    	this.$router.push("/user/personalNoLogin");
    }
  },
  methods:{
    
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}
</script>