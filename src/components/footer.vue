<template>
  <footer>
  	<ul>
  		<router-link v-for="(item,index) in footerlist" tag="li" :to="item.path" :key="index">{{item.name}}</router-link>
  	</ul>
  </footer>
  
</template>
<style scoped lang="scss">
@import "~@/lib/reset.scss";

.router-link-active{
    @include text-color(#f00);
    //color: #f00;
}
/*ul{
    @include rect(100%,100%);
    @include flexbox();
    li{
        @include flex();
        @include flexbox();
        @include justify-content();
        @include align-items();
    }
}*/
ul{
    width:100%;
    height:100%;
    @include flexbox();
    li{
        @include flex();
        @include flexbox();
    justify-content: center;
    align-items: center;
    }
}	
</style>
<script>
export default {
  data(){
    return {
      footerlist:[
      	{
      		path:"/home",
      		name:"首页"
      	},
      	{
      		path:"/kind",
      		name:"分类"
      	},
      	{
      		path:"/cart",
      		name:"购物车"
      	},
      	{
      		path:"/user",
      		name:"我的"
      	},
      	{
      		path:"/your",
      		name:"你的"
      	}
      ]
    }
  },
  mounted(){
    
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