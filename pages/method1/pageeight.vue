<template>
  <div>
    <div class="card5">
        <h2 class="title-front">8 开挖轮廓线</h2>
          <h3 class="font-type3">请将隧道中心置于(0,0)点，请从底板线段右端点开始顺时针依次输入</h3>

<!-- 表格填入开始 -->
    <div>
      <el-table
      :data="tableData"
      size="mini"
      style="width: 610px;margin-top:50px"
      @cell-mouse-enter="handleCellEnter"
      @cell-mouse-leave="handleCellLeave"
    >
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

  </div>
</template>

<script>
import show from '../utilPage/show.vue'
import testThree from '../testPage/testThree.vue'
import cookie from 'js-cookie'
import outlineApi from '@/api/outline.js'
export default {
  name:'pageEight',
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
      ],
      // 需要编辑的属性
      editProp: ['X1', 'Y1','X2', 'Y2', 'R'],
    }
  },
created(){
  // this.projectId = cookie.get("projectId");
},
methods: {
  //获取添加的数据并返回至前端
    buildLine(){
      this.tableData = this.tableData.map((item) => {
        return{
          ...item,
          projectId : this.projectId
        }
      })

      // 获取后端数据结果
      outlineApi.saveOutline(this.tableData).then(response => {
        this.itemData = response.data

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
</style>