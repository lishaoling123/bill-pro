<style scoped lang="scss">
	.foo-top{
		width: 100%;
		padding:0.3rem 22%;
		background-color: #3a3433;
	}
	.foo-bottom{
		width: 100%;
		padding:0.2rem 22% 0rem 22%;
		background-color: #322b29;
	}
	li{
		color: #999;
		cursor: pointer;
		font-size: 0.16rem;
	}
	li.curd{
		cursor: default;
		text-align: center;
		padding: 0 0.16rem;
	}
	.foo-bottom ul{
		border-bottom: 0.01rem solid #999;
		padding:0 0 0.3rem 0.5rem;
	}
	.copyright{
		text-align: center;
		color: #999;
		padding:0.3rem 0;
	}
	.phone{
		background-color: #aaa6a3;
		border-radius: 0.5rem;
		padding:0.11rem 0.14rem;
		margin: 0.04rem 0.1rem 0 0;
	}
	.severce{
		color: #999;
		margin-top: 0.5rem;
	}
	.tel{
		color: #fff;
		font-size: 0.2rem;
	}
	.tel span{
		color: #999;
		font-size: 0.16rem;
	}
	.foo-top .pull-right{
		padding-top: 0.66rem;
	}
	.code-img{
		display: block;
		margin-bottom: 0.1rem;
	}
	.curde{
		cursor: default;
	}
	.about li{
		margin-right: 0.5rem;
	}
</style>
<template>
	<div class="footer">
		<div class="foo-top clearfix">
			<div class="pull-left">
				<ul class="list-unstyled list-inline about">
					<!--<router-link v-for="(item,index) in classList" :key="index" :to="{name:'kindlist', params:{classId:item.id,title:item.title}}" tag = "li">{{item.name}}</router-link>-->
					<li v-for="(item,index) in classList" :key="index">{{item.name}}</li>
				</ul>
				<div class="severce clearfix">
					<div class="pull-left phone"><i class="el-icon-erp-dadianhua"></i></div>
					<div class="pull-left tel">
						400-999-7983<br /> 
						<span>客服服务时间：9:00-21:00</span>
					</div>
				</div>
			</div>
			<div class="pull-right">
				<ul class="list-unstyled list-inline">
					<li class="curd" v-for="(item,index) in codeList" :key="index"><img class="code-img" :src="item.img" alt="二维码" />{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="foo-bottom">
			<ul class="list-unstyled list-inline">
				<li class="curde">友情链接:</li>
				<li v-for="(item,index) in urlList" :key="index">{{item.name}}</li>
			</ul>
			<div class="copyright">Copyright &copy; 2014-2018 dlcat.com 哆利猫 版权所有  沪ICP备16040263号-1</div>
		</div>
	</div>
</template>
<script>
export default {
  data(){
    return {
      "classList":[
      	{
      		"id":1,
      		"name":"关于我们"
      	},
      	{
      		"id":2,
      		"name":"产品介绍"
      	},
      	{
      		"id":3,
      		"name":"安全保障"
      	},
      	{
      		"id":4,
      		"name":"行业资讯"
      	}
      ],
      "codeList":[
      	{
      		"id":1,
      		"name":"微信服务号",
      		"img":"static/images/code.png"
      	},
      	{
      		"id":2,
      		"name":"微信订阅号",
      		"img":"static/images/code.png"
      	},
      	{
      		"id":3,
      		"name":"APP客户端",
      		"img":"static/images/code.png"
      	}
      ],
      "urlList":[
      	{
      		"id":1,
      		"name":"中国票据网",
      		"url":""
      	},
      	{
      		"id":2,
      		"name":"理财知识",
      		"url":""
      	},
      	{
      		"id":3,
      		"name":"票据资讯",
      		"url":""
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

