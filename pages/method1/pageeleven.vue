<template>
  <div>
    <div class="card5" style="background-color:pink">
        <h2 class="title-front">11 辅助孔布置</h2>
        <div style="margin-top:50px">
            <h3 class="font-type3" style="display:inline-block">装药直径：
                <el-input style="width:100px" v-model="diameter"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type3" style="display:inline-block">排距系数：
                <el-input style="width:100px" v-model="pitch"></el-input>
            </h3>
            <h3 class="font-type3" style="margin-top:20px">孔距系数：
                <el-input style="width:100px" v-model="pore"></el-input>
            </h3>
        </div>

        <el-button style="margin:20px 0 0 200px" @click="calculate()" type="primary">计算与绘图</el-button>
<!-- 表格填入开始 -->
        <div>
            <el-table
                :data="auxHoleData"
                size="max"
                border
                style="width: 610px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >
                <el-table-column
                    prop="hole"
                    label="辅助孔"
                    width="150">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.hole"></el-input>
                    <div class="item__txt">{{scope.row.hole}}</div>
                    </div>
                </el-table-column>

                <el-table-column
                    prop="X"
                    label="X"
                    width="200">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.x" placeholder="请输入x坐标" style="width:150px"></el-input>
                    <div class="item__txt">{{scope.row.x}}</div>
                    </div>
                </el-table-column>

                <el-table-column
                    prop="Y"
                    label="Y"
                    width="200">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.y" placeholder="请输入y坐标"></el-input>
                    <div class="item__txt">{{scope.row.y}}</div>
                    </div>
                </el-table-column>

                <el-table-column
                    label="操作"
                    width="60">
                    <div class="item" slot-scope="scope">
                    <el-button @click="delRow(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
        <div>
      <i class="el-icon-circle-plus-outline" @click="addRow()"></i>
    </div>

<el-button style="margin:20px 0 0 200px" @click="buildLine()" type="primary">手动调整确认并绘图</el-button>
    
    <!-- 画布展示开始 -->
    <div style="background-color:red;width:650px;height:500px;margin:-400px 0 0 620px;">
    </div>
    <!-- 画布展示结束 -->   

    </div>
<!-- 表格填入结束 -->   

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            diameter:'',
            pitch:'',
            pore:'',
            hole:'',
            X:'',
            Y:'',
            editProp: ['hole','X','Y'],
            auxHoleData:[],
            num:0,  //计数
        }
    },

    methods:{

    //添加
        addRow(){
            this.num+=1;
            this.auxHoleData.push({
                hole:'',x:'',y:''
            })
        },
    //删除行
        delRow(index, row) {
        var that = this;
        this.$confirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
            //点击确定的操作(调用接口)
            var hasmembers = that.auxHoleData;
            for (var i = 0; i < hasmembers.length; i++) {
                if (row == hasmembers[i]) {
                    that.auxHoleData.splice(i, 1);
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
  margin-left: 50px;
  font-size: 30px !important;
  width: 259px;
}

</style>