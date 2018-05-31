<style scoped lang="scss">
	.nav{
		width:56%;
		margin:0 22%;
	}
	.pull-left{
		padding-top: 0.3rem;
	}
	.pull-right{
		padding-top: 0.44rem;
	}
	.el-menu--horizontal > .el-menu-item.is-active {
	    border-bottom: 0.04rem solid #368df6;
	    color: #368df6;
	}
	.el-menu-item,.nav-down{
		font-size: 0.18rem;
	}
	.nav-down{
		padding-bottom: 0.2rem;
	}
	.el-menu--horizontal > .el-menu-item,.el-menu--horizontal > .el-submenu .el-submenu__title,.el-submenu{
		height: 0.8rem;
	}
	.el-menu--horizontal > .el-submenu.is-active .el-submenu__title{
		border-bottom: 0.04rem solid #368df6;
    	color: #368df6;
    	padding-bottom: 0.4rem;
	}
	.nav-ul>li{
		position: relative;
		font-size: 0.18rem;
		color: #333;
		padding: 0 0.3rem 0.4rem;
		cursor: pointer;
	}
	.nav-ul>li.active:after{
		position: absolute;
		content: "";
		left: 0;
		bottom: 0;
		width: 100%;
		border-bottom: 0.04rem solid #368df6;
		color: #368df6;
	}
	.pilu{
		position: absolute;
		background-color: #3a3433;
		color: #999;
		left: 0;
		top: 0.68rem;
		width: 100%;
		border-bottom-left-radius: 0.04rem;
		border-bottom-right-radius: 0.04rem;
		padding:0.1rem 0;
		display: none;
		z-index: 1000;
	}
	.pilu li{
		text-align: center;
		font-size: 0.16rem;
		padding:0.1rem 0
	}
</style>
<template>
	<div class="nav">
		<div class="clearfix">
			<div class="pull-left"><img src="static/images/logo1.png" alt="logo" /></div>
			<!--<div class="pull-right">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">首页</el-menu-item>
				  <el-menu-item index="2">理财中心</el-menu-item>
				  <el-submenu index="3">
				    <template slot="title"><span class="nav-down">信息披露</span></template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>	   
				  </el-submenu>
				  <el-menu-item index="4">我的账户</el-menu-item>
				</el-menu>
			</div>-->
			<div class="pull-right">
				<ul class="list-unstyled list-inline nav-ul">
					<li class="active">首页</li>
					<li>理财中心</li>
					<li class="pilu-btn">信息披露
						<ul class="pilu">
							<li>运营报告</li>
							<li>平台动态</li>
							<li>风控措施</li>
							<li>新闻中心</li>
							<li>关于我们</li>
						</ul>
					</li>
					<li>我的账户</li>
				</ul>
			</div>
		</div>	
	</div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    $(".pilu-btn").mouseenter(function(){
    	$(".pilu").css("display","block");
    });
    $(".pilu").mouseleave(function(){
    	$(".pilu").css("display","none");
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

