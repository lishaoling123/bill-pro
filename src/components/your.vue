<template>
  <div class="container">你的-------{{classList}}
  	<ul>
  		<li v-for="item in classList" :key="item.id">{{item.name}}</li>
  	</ul>
  </div>
  <!--<ul>
  	<li v-for="item in classList" :key="index">{{item.name}}</li>
  </ul>-->
  <!--<ul class="list">
		<router-link v-for="(item,index) in classList" :key="index" :to="{name:'kindlist', params:{classId:item.id,title:item.title}}" tag = "li">{{item.name}}</router-link>
	</ul>-->
</template>
<style scoped lang="scss">
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
    
  },
  methods:{
    
  },
  computed:mapState([
  	"classList"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
</script>