<template>
  <div class="container">
  	<button @click="personalLoginFun()">登录</button>
  	<button>注册</button>
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
    
  },
  methods:{
    personalLoginFun(){
    	var username=11111;
    	sessionStorage.setItem("username",username);
    	this.$router.push("/user/personalLogin");  //路由跳转   相当于window.location.href     router-link里面的to相当于a的href
    },
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}
</script>