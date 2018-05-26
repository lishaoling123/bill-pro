<template>
  <!--<div class="container">购物车</div>-->
  <!--<div class="container">购物车-------{{this.$store.state.classList}}</div>--><!--耦合度太高-->
  <div class="container">{{newMsg}}---购物车-------{{classList}}</div>
</template>
<style lang="scss" scoped>
@import "~@/lib/reset.scss";	
</style>
<script>
import {mapState} from 'vuex'

export default {
  data(){
    return {
      msg:"hello vuex"
    }
  },
  mounted(){
  	//重置数据
    /*this.$store.commit({    //提交到状态管理器中
	    type:"changeClassList",
	    data:["aaaa","bbbb","cccc","dddd"]
	  })*/
  },
  methods:{
    
  },
  /*computed:mapState([   //mapState作用：解耦
	  // 映射 this.count 为 store.state.count
	  'classList'   //state中初始定义的状态
	]),*/
  computed:{
    newMsg(){
      return this.msg.split("").reverse().join("");
    },
    ...mapState({
      classList:"classList"
    })
  },
  components:{
    
  },
  watch:{
    
  }
}	
</script>
