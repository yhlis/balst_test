<template>
  <div>
    <div class="card5">
        <h2 class="title-front">8 开挖轮廓线</h2>
<<<<<<< HEAD
          <h3 class="font-type5">请将隧道中心置于(0,0)点，请从底板线段右端点开始顺时针依次输入。若该线段为供底线段，请标记</h3>

<!-- 表格填入开始 -->
<div style="height:auto;">
    <div style="float:left">
=======
          <h3 class="font-type3">请将隧道中心置于(0,0)点，请从底板线段右端点开始顺时针依次输入</h3>

<!-- 表格填入开始 -->
    <div>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
      <el-table
      :data="tableData"
      size="mini"
      style="width: 610px;margin-top:50px"
      @cell-mouse-enter="handleCellEnter"
      @cell-mouse-leave="handleCellLeave"
<<<<<<< HEAD
      @selection-change="handleSelectionChange"
    >
    <el-table-column type="selection" width="55" align="center"/>
=======
    >
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    <el-table-column label="端点1坐标">
      <el-table-column
        prop="X1"
        label="X1"
        width="110">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.x1" placeholder="请输入坐标"></el-input>
          <div class="item__txt">{{scope.row.x1}}</div>
        </div>
      </el-table-column>
      <el-table-column
        prop="Y1"
        label="Y1"
        width="110">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.y1" placeholder="请输入坐标"></el-input>
          <div class="item__txt">{{scope.row.y1}}</div>
        </div>
      </el-table-column>
    </el-table-column>

    <el-table-column label="端点2坐标">
      <el-table-column
        prop="X2"
        label="X2"
        width="110">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.x2" placeholder="请输入坐标"></el-input>
          <div class="item__txt">{{scope.row.x2}}</div>
        </div>
      </el-table-column>
      <el-table-column
        prop="Y2"
        label="Y2"
        width="110">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.y2" placeholder="请输入坐标"></el-input>
          <div class="item__txt">{{scope.row.y2}}</div>
        </div>
      </el-table-column>
    </el-table-column>

    <el-table-column label="半径">
      <el-table-column
        prop="R"
        label="R"
        width="110">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.r" placeholder="请输入半径"></el-input>
          <div class="item__txt">{{scope.row.r}}</div>
        </div>
      </el-table-column>
    </el-table-column>

    <el-table-column
        label="操作"
        width="60">
        <div class="item" slot-scope="scope">
          <el-button @click="delLine(scope.$index, scope.row)" type="text" size="small">删除</el-button>
        </div>
      </el-table-column>

<<<<<<< HEAD
      </el-table>
      <i class="el-icon-circle-plus-outline" @click="addLine()"></i>  <br>
      <el-button style="margin:20px 0 0 200px" @click="buildLine()" type="primary">确认并绘制开挖轮廓线</el-button>
    </div>

    <!-- 画布展示开始 -->
    <div style="background-color:pink;width:650px;height:500px;float:left;margin-left:20px;">
      <show :itemData="itemData" />
    </div>
    <!-- 画布展示结束 -->   
</div>
<!-- 表格填入结束 -->   

    </div>
=======
    </el-table>
    <div>
      <i class="el-icon-circle-plus-outline" @click="addLine()"></i>
    </div>

<el-button style="margin:20px 0 0 200px" @click="buildLine()" type="primary">确认并绘制开挖轮廓线</el-button>
    
    <!-- 画布展示开始 -->
    <div style="background-color:red;width:650px;height:500px;margin:-400px 0 0 620px;">
      <show :itemData="itemData"/>
    </div>
    <!-- 画布展示结束 -->   

    </div>
<!-- 表格填入结束 -->   

    </div>

>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
  </div>
</template>

<script>
<<<<<<< HEAD
import '~/assets/css2/pages.css'
import show from '../utilPage/show.vue'
=======
import show from '../utilPage/show.vue'
import testThree from '../testPage/testThree.vue'
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
import cookie from 'js-cookie'
import outlineApi from '@/api/outline.js'
export default {
  name:'pageEight',
<<<<<<< HEAD
  components:{show},
    data () {
    return {
      // 表格数据
      // projectId: '1692425780483649538',       //测试
      projectId: '',
      itemData:null,
      tableData: [
      //   {
      //   x1: '3.25',y1: '-3',x2: '-3.25',y2: '-3',r: '0',serialLine:'',isBottom:0
      // },{
      //   x1: '-3.25',y1: '-3',x2: '-3.286',y2: '1.2',r: '5.985',serialLine:'',isBottom:0
      // },{
      //   x1: '-3.286',y1: '1.2',x2: '3.284',y2: '1.2',r: '3.5',serialLine:'',isBottom:0
      // },{
      //   x1: '3.284',y1: '1.2',x2: '3.25',y2: '-3',r: '5.985',serialLine:'',isBottom:0
      // },
      {
        x1: '6.17',y1: '-3.034',x2: '4.58',y2: '-4.0',r: '4.28',serialLine:'',isBottom:1
      },{
        x1: '4.58',y1: '-4.0',x2: '-4.57',y2: '-4.0',r: '14',serialLine:'',isBottom:1
      },{
        x1: '-4.57',y1: '-4.0',x2: '-6.18',y2: '-3.04',r: '4.28',serialLine:'',isBottom:0
      },{
        x1: '-6.18',y1: '-3.04',x2: '-6.52',y2: '-3.04',r: '0',serialLine:'',isBottom:0
      },{
        x1: '-6.52',y1: '-3.04',x2: '-6.83',y2: '-1.23',r: '0',serialLine:'',isBottom:0
      },{
        x1: '-6.83',y1: '-1.23',x2: '-6.03',y2: '3.47',r: '6.88',serialLine:'',isBottom:0
      },{
        x1: '-6.03',y1: '3.47',x2: '0',y2: '6.96',r: '6.97',serialLine:'',isBottom:0
      },{
        x1: '0',y1: '6.96',x2: '6.04',y2: '3.47',r: '6.97',serialLine:'',isBottom:0
      },{
        x1: '6.04',y1: '3.47',x2: '6.87',y2: '-1.24',r: '6.88',serialLine:'',isBottom:0
      },{
        x1: '6.87',y1: '-1.24',x2: '6.53',y2: '-3.03',r: '0',serialLine:'',isBottom:0
      },{
        x1: '6.53',y1: '-3.03',x2: '6.17',y2: '-3.034',r: '0',serialLine:'',isBottom:0
      },
=======
  components:{show,testThree},
    data () {
    return {
      // 表格数据
      projectId: '1681601515879452673',
      // projectId: '',
      itemData:null,
      tableData: [{
        x1: '0',y1: '-5.0',x2: '-4.9',y2: '-5.0',r: '0',
      },{
        x1: '-4.9',y1: '-5.0',x2: '-5.2',y2: '-3.23',r: '0',
      },{
        x1: '-5.2',y1: '-3.23',x2: '-4.8',y2: '1.605944',r: '8.656622',
      },{
        x1: '-4.8',y1: '1.605944',x2: '0',y2: '5.013344',r: '5.178577',
      },

      {
        x1: '0',y1: '-5.0',x2: '4.9',y2: '-5.0',r: '0',
      },
      {
        x1: '4.9',y1: '-5.0',x2: '5.2',y2: '-3.23',r: '0',
      },
      {
        x1: '5.2',y1: '-3.23',x2: '4.8',y2: '1.605944',r: '8.656622',
      },{
        x1: '4.8',y1: '1.605944',x2: '0',y2: '5.013344',r: '5.178577',
      }
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
      ],
      // 需要编辑的属性
      editProp: ['X1', 'Y1','X2', 'Y2', 'R'],
    }
  },
created(){
<<<<<<< HEAD
  this.projectId = cookie.get("projectId");        //测试完解封
=======
  // this.projectId = cookie.get("projectId");
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
},
methods: {
  //获取添加的数据并返回至前端
    buildLine(){
<<<<<<< HEAD
      console.log(this.tableData)
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
      this.tableData = this.tableData.map((item) => {
        return{
          ...item,
          projectId : this.projectId
        }
      })
<<<<<<< HEAD
      //计算底边中点纵坐标
      // let getY = {x1:this.tableData[0].x1, y1:this.tableData[0].y1,
      // x2:this.tableData[0].x2, y2:this.tableData[0].y2, r:this.tableData[0].r, projectId:''}
      // outlineApi.getBottomY(getY).then(response => {
      //   let centerBottomY = response.data.data.centerBottomY;
      //   cookie.set("centerBottomY",centerBottomY)
      // })
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a

      // 获取后端数据结果
      outlineApi.saveOutline(this.tableData).then(response => {
        this.itemData = response.data
<<<<<<< HEAD
        console.log("responseData:"+JSON.stringify(response.data.data))
      })
    },

    // 多选框选中数据
      handleSelectionChange(selection) {
        selection.map((item) => {
          item.isBottom = 1;
        })
      },

    //添加轮廓线坐标
    addLine(){
      if(this.tableData.length==0){
        this.tableData.push({
          x1:'',y1:'',x2:'',y2:'',r:'',serialLine:'',isBottom:0
        })
      }else{
        let len =this.tableData.length-1
        let arr=[this.tableData[len].x2,this.tableData[len].y2]
        this.tableData.push({
          x1:arr[0],y1:arr[1],x2:'',y2:'',r:'',serialLine:'',isBottom:0
        })
      }
=======

        console.log("responseData:"+JSON.stringify(response.data.data))
        // this.outLineData.map((item) => {
          // this.itemData = item
        // });
      })
    },

    //添加轮廓线坐标
    addLine(){
      this.tableData.push({
        x1:'',y1:'',x2:'',y2:'',r:''
      })
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    },

    //删除轮廓线坐标
    delLine(index, row) {
      var that = this;
      this.$confirm('确认删除吗?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
      }).then(() => {
          //点击确定的操作(调用接口)
          var hasmembers = that.tableData;
          for (var i = 0; i < hasmembers.length; i++) {
              if (row == hasmembers[i]) {
                  that.tableData.splice(i, 1);
                  // this.$message({ message: '删除成功', duration: 2000, type: 'success' });
              }
          }
        }).catch(() => {
        //点取消的提示
            return;
        });
    },

    // 鼠标移入cell
    handleCellEnter (row, column, cell, event) {
      const property = column.property
      if (this.editProp.includes(property)) {
        cell.querySelector('.item__input').style.display = 'block'
        cell.querySelector('.item__txt').style.display = 'none'
      }
    },
    // 鼠标移出cell
    handleCellLeave (row, column, cell, event) {
      const property = column.property
      if (this.editProp.includes(property)) {
        cell.querySelector('.item__input').style.display = 'none'
        cell.querySelector('.item__txt').style.display = 'block'
      }
    }
  }
}
</script>

<style>
<<<<<<< HEAD
=======
.title-front{
    margin-top: 50px;
    font-size: 40px !important;
}
.card5{
    height: auto;
    width: 100%;
}

.font-type3{
  margin-top: 50px;
  margin-left: 10%;
  font-size: 25px !important;
  width: 400px;
  line-height:30px;
}


/* 表格ui */
.item .item__input {
  display: none;
  width: 90px;
}
/* 调整elementUI中样式 如果不需要调整请忽略 */
.item .item__input .el-input__inner {
  height: 24px !important;
}
/* 调整elementUI中样式 如果不需要调整请忽略 */
.item .item__input .el-input__suffix i {
  font-size: 12px !important;
  line-height: 26px !important;
}
.item .item__txt {
  box-sizing: border-box;
  line-height: 24px;
  padding: 0 9px;
}
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
</style>