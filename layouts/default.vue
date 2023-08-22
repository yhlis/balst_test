<template>
<client-only>
<el-container class="operation-wrapper">
    <!-- 公共头引入 -->   
    <el-header>
  <div class="top-box">
  	<el-menu
      :default-active="active"
  	  class="el-menu-demo"
  	  mode="horizontal"
  	  background-color="#FFFFFF"
  	  text-color="#000000"
  	  active-text-color="#ffd04b">
      <el-menu-item index="1"><img src="~/assets/img/logo1.png" style="height:61px"></el-menu-item>
  	  <el-submenu index="2">
  	    <template slot="title">我的工作台</template>
  	    <el-menu-item index="2-1">选项1</el-menu-item>
  	    <el-menu-item index="2-2">选项2</el-menu-item>
  	    <el-menu-item index="2-3">选项3</el-menu-item>
  	    <el-submenu index="2-4">
  	      <template slot="title">选项4</template>
  	      <el-menu-item index="2-4-1">选项1</el-menu-item>
  	      <el-menu-item index="2-4-2">选项2</el-menu-item>
  	      <el-menu-item index="2-4-3">选项3</el-menu-item>
  	    </el-submenu>
  	  </el-submenu>
  	  <el-menu-item index="3">消息中心</el-menu-item>
  	</el-menu>
  	<div style="flex: 1;margin-right: 10px;">
  		<div style="display: flex;float: right;">
  			<img src="~/assets/img/avatar-boy.gif" style="margin-top: 15px;width: 32px;height: 32px;">
  			<span style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;line-height: 60px;color: #000000;margin: 0 20px 0 5px;">管理员</span>
  			<el-tooltip
  				effect="dark"
  				content="退出系统"
  				placement="bottom">
  			  <div>
  			    <i class="el-icon-switch-button" style="color: #000000;font-size: 18px;margin-top: 20px;"
  			       @click="logout"></i>
  			  </div>
  			</el-tooltip>
  		</div>
  	</div>
  </div>

    </el-header>
    <!-- /公共头引入 -->

<el-container>
    <!-- 公共侧边栏 -->
    <el-aside style="width:200px">
      <el-scrollbar style="height: 100%;">
          <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router>
                <el-menu-item v-for="(item,index) in sideBarItems" :key="index" :index='item.url'>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
          </el-menu>
      </el-scrollbar>
        
    </el-aside>
    <!-- /公共侧边栏 -->

<<<<<<< HEAD
    <el-main style="height:100%;">
=======
    <el-main style="height:100%;overflow-y: hidden">
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
      <nuxt/>
    </el-main>
  </el-container>

</el-container>
</client-only>
</template>
<script>
import '~/assets/css/reset.css'
import '~/assets/css/theme.css'
<<<<<<< HEAD
import '~/assets/css/base.css'
import '~/assets/css2/default.css'
=======
import '~/assets/css/global.css'
import '~/assets/css/web.css'
import '~/assets/css/base.css'
import '~/assets/css/activity_tab.css'
import '~/assets/css/bottom_rec.css'
import '~/assets/css/nice_select.css'
import '~/assets/css/order.css'
import "~/assets/css/pages-weixinpay.css"
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
  import cookie from 'js-cookie'

export default {
  data(){
    return{
        token: '',
        active:'',
        loginInfo: {
          id: '',
          age: '',
          avatar: '',
          mobile: '',
          nickname: '',
          sex: '',
        },
        sideBarItems:[
            {"name" : "岩石种类","url" : "/method1/speciesandstrength"},
            {"name" : "岩石强度","url" : "/method1/speciesandstrength"},
            {"name" : "岩体结构","url" : "/method1/rockstructure"},
            {"name" : "岩体结构面","url" : "/method1/structureface"},
            {"name" : "隧道地应力","url" : "/method1/pagefivesixseven"},
            {"name" : "岩体可爆性","url" : "/method1/pagefivesixseven"},
            {"name" : "钻孔与炸药","url" : "/method1/pagefivesixseven"},
            {"name" : "开挖轮廓线","url" : "/method1/pageeight"},
            {"name" : "掏槽孔布置","url" : "/method1/pagenine"},
            {"name" : "周边孔布置","url" : "/method1/pageten"},
            {"name" : "辅助孔布置","url" : "/method1/pageeleven"},
<<<<<<< HEAD
            {"name" : "装药量计算","url" : "/method1/pagetwelve"},
=======
            {"name" : "装药量计算","url" : "/"},
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            {"name" : "起爆网络设计","url" : "/"},
            {"name" : "爆破效果预测","url" : "/"},
            {"name" : "爆破成本计算","url" : "/"},
            {"name" : "爆破方案导出","url" : "/"},
            {"name" : "爆破效果评价","url" : "/"},
        ]
    }
  },
  created(){
    this.showInfo()
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
    showInfo(){
      var jsonStr = cookie.get("user_info");
      if(jsonStr){
        this.loginInfo = JSON.parse(jsonStr)
        console.log(this.loginInfo)
      }
    },

    logout(){
      cookie.set('abc_userInfo', "", {domain: 'localhost'})
      cookie.set('abc_token', "", {domain: 'localhost'})
      console.log(this.loginInfo)
      this.loginInfo={}
      console.log(this.loginInfo)
      this.$router.push({path: '/'})
    },
  }
};
</script>
<style>
<<<<<<< HEAD
=======
.operation-wrapper {
  width: 100% !important;
}
.el-main{
  padding: 0px 16px !important;
  height: calc(100vh - 61px);
  /* overflow-y: hidden; */
  height: 1400px;
}
.el-aside .el-scrollbar__wrap {
    overflow-x: hidden;
}
.el-aside {
    height: calc(100vh - 61px);
     overflow: hidden;
  }
.el-header {
  height:61px; 
}

 .top-box{
    height: 60px;
    display: flex;
    background-color: #FFFFFF;
    border-bottom: 1px solid #eeeeee;
  }
  .top-box-i{
  	width: 32px;
    height: 32px;
    font-size: 24px;
    margin: 16px 10px 0 15px;
    color: #000000;
  }
  .el-menu--horizontal .el-menu--popup .el-submenu__title{
    color: #FFFFFF!important;
  }
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a

</style>