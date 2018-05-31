<template>
	<div class="header clearfix">
		<div class="pull-left">
			关注我们
			<el-button id="iconPhone" type="info" size="mini" class="el-icon-erp-shouji border-no" @click="iconPhone()">手机APP</el-button>
			<el-button id="iconWx" type="info" class="el-icon-erp-weixin border-no" circle></el-button>
			客服热线: 400-999-7983（9:00—17:30）
		</div>
		<div class="pull-right header-right">
			<span><i class="el-icon-erp-news"></i> 消息5<i class="el-icon-erp-xiala"></i> </span> <span class="customer">欢迎m152****1</span> <span>退出</span> | <span>帮助中心</span>
		</div>
	</div>
</template>
<!--<template>
	<div class="header clearfix">
		<div class="pull-left">
			关注我们
			<el-button id="iconPhone" type="info" size="mini" class="el-icon-erp-shouji border-no" @click="iconPhone()">手机APP</el-button>
			<el-button id="iconWx" type="info" class="el-icon-erp-weixin border-no" circle></el-button>
			客服热线: 400-999-7983（9:00—17:30）
		</div>
		<div class="pull-right header-right">
			<span>注册</span> — <span>登录</span> | <span>帮助中心</span>
		</div>
	</div>
</template>-->
<style scoped lang="scss">
	.header{
		width: 100%;
		padding: 0.06rem 22%;
		border-bottom: 0.01rem solid #f1f1f1;
	}
	#iconPhone,#iconWx{
		background-color:#c5c3c4;
	}
	#iconPhone{
		margin-left: 0.06rem;
	}
	#iconWx{
		width: 0.24rem;
		height: 0.24rem;
		padding:0.04rem;
		margin-left: 0.04rem;
		margin-right: 0.1rem;
	}
	.header-right {
		padding:0.05rem 0 0 0;
	}
	.header-right span{
		cursor: pointer;
	}
	span.customer{
		color: #999;
		cursor:default;
	}
</style>
<script>
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    $("#iconPhone,#iconWx").hover(function(){
    	$(this).css({"background-color":"#368df6"});
    },function(){
    	$(this).css({"background-color":"#c5c3c4"});
    });
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

