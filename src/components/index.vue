<style scoped lang="scss">
	.img100{
		width: 100%;
		height: auto;
	}
	.el-carousel,.imgbox{
		height: 3.5rem !important;
		position: relative;
	}
	.data{
		padding: 0.3rem 22%;
		border: 0.01rem solid #eee;
	}
	.data-item{
		overflow: hidden;
		padding:0;
		margin: 0;
	}
	.data-item div{
		display: inline-block;
		font-size: 0.14rem;
	}
	.data-item div img{
		width: 0.5rem;
		vertical-align: bottom;
		margin-right: 0.1rem;
	}
	.data-span{
		width: 100%;
		text-align: left;
		display: inline-block;
		font-size: 0.2rem;
	}
	.data-title{
		padding-bottom: 0.2rem;
		display: inline-block;
	}
	.data-mark{
		color: #e94e4e;
		font-size: 0.24rem;
	}
	.data-right{
		padding-top: 0.06rem;
	}
</style>
<template>
	<div class="index">
		<div class="banner">
			<div class="block">
		    <el-carousel>
		      <el-carousel-item v-for="item in imgList" :key="item">
		        <img class="img100" :src="item.url" alt="轮播图" />
		      </el-carousel-item>
		    </el-carousel>
		 </div>
		</div>
		<div class="data list-unstyled list-inline">
				<el-row>
				  <el-col :span="6">
				  	<div class="data-item">
				  		<div><img src="static/images/shape60.png"/></div>
							<div class="data-right">
								<span class="data-span">安全兑付</span><br />
								<span>票据担保，安全借贷</span>
							</div>
				  	</div>
				  </el-col>
				  <el-col :span="6">		
				  	<div class="data-item"> 
				  		<div><img src="static/images/shape60.png"/></div>
							<div class="data-right">
								<span class="data-span">风控严谨</span><br />
								<span>票据担保，安全借贷</span>
							</div>
				  	</div>
					</el-col>
				  <el-col :span="5">	
				  	<div class="data-item"> 
				  		<span class="data-title">累计为用户赚取</span><br />
							<span><span class="data-mark">76,322,830.00</span>元</span>
				  	</div>
					</el-col>
				  <el-col :span="4">	
				  	<div class="data-item"> 
				  		<span class="data-title">累计出借人次</span><br />
							<span><span class="data-mark">538,995</span>人</span>
				  	</div>
					</el-col>
				  <el-col :span="3">		
				  	<div class="data-item"> 
				  		<span class="data-title">近期利率指数</span><br />
							<span><span class="data-mark">9.12%</span></span>
				  	</div>
					</el-col>
				</el-row>
		</div>
		<div class="clearfix"></div>
		
	</div>
</template>
<script>
export default {
  data(){
    return {
      "imgList":[
      	{
      			"id":1,
      			"url":"static/images/index_banner1.png"
      	},
      	{
      			"id":2,
      			"url":"static/images/index_banner2.png"
      	},
      	{
      			"id":3,
      			"url":"static/images/index_banner1.png"
      	},
      	{
      			"id":4,
      			"url":"static/images/index_banner2.png"
      	}
      ]
    }
  },
  mounted(){
    $(".el-carousel__container").addClass("imgbox");
    $(".el-carousel__container").removeClass("el-carousel__container");
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

