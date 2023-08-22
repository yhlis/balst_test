<template>
  <div>
<<<<<<< HEAD
    <div class="card5">
        <h2 class="title-front">11 辅助孔布置</h2>
        <div style="margin-top:50px">
            <h3 class="font-type3" style="display:inline-block">装药直径：
                <el-input style="width:100px" v-model="auxDc"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type3" style="display:inline-block">排距系数：
                <el-input style="width:100px" v-model="ratioRow"></el-input>
            </h3>
            <h3 class="font-type3" style="margin-top:20px">孔距系数：
                <el-input style="width:100px" v-model="ratioSpacing"></el-input>
=======
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
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            </h3>
        </div>

        <el-button style="margin:20px 0 0 200px" @click="calculate()" type="primary">计算与绘图</el-button>
<<<<<<< HEAD

        <div>
            <!-- 表格填入开始 -->
            <div style="float:left">
            <el-table
                :data="auxHoleData"
                size="medium"
                border
                style="width: 601px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >
                <!-- 等级 -->
                <el-table-column label="">
                    <el-table-column
                        prop="holeNum"
                        label=""
                        width="80">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.holeNum"></el-input>
                        <div class="item__txt">{{scope.row.holeNum}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="孔口坐标">
                    <el-table-column
                        prop="X1"
                        label="X1"
                        width="90">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="90">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y1"></el-input>
                        <div class="item__txt">{{scope.row.y1}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="孔底坐标">
                    <el-table-column
                        prop="X2"
                        label="X2"
                        width="90">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="90">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="90">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
=======
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
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
                </el-table-column>

                <el-table-column
                    label="操作"
<<<<<<< HEAD
                    width="70">
=======
                    width="60">
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
                    <div class="item" slot-scope="scope">
                    <el-button @click="delRow(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
<<<<<<< HEAD
            <i class="el-icon-circle-plus-outline" @click="addRow()"></i><br>
            <el-button style="margin:20px 0 0 200px" @click="buildLine()" type="primary">手动调整确认并绘图</el-button>
            </div>
            <!-- 表格填入结束 -->   

            <!-- 画布展示开始 -->
            <div style="background-color:pink;width:650px;height:500px;float:left;margin:-150px 0 0 10px;">
                <show :vertices="vertices" :tube="tube"/>
            </div>
            <!-- 画布展示结束 -->   
        </div>
=======
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
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a

    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import '~/assets/css2/pages.css'
import auxiliaryHolesApi from '@/api/auxiliaryHoles.js'
import cuttingApi from '@/api/cutting.js'
import surroundingHolesApi from '@/api/surroundingHoles.js'
import cookie from 'js-cookie'
import show from '../utilPage/show.vue'
export default {
    components:{show},
    data(){
        return{
            projectId:'',
            auxDc:'32',
            pitch:'',
            ratioRow:'0.8',
            ratioSpacing:'0.6',
            X:'',
            Y:'',
            calData:{
                id: "", //cuttingId
                x1: "", //辅助孔的x1
                y1: "", //辅助孔的y1
                x2: "", //辅助孔的x2
                z1: "", //辅助孔的z1
                y2: "", //辅助孔的y2
                z2: "", //辅助孔的z2
                shrinkNum: "", //辅助孔的内缩层数
                ratioSpacing: 0, //辅助孔孔距系数
                ratioRow: 0, //辅助孔排距系数
                auxDc: 0, //辅助孔装药直径
                explosiveAmount: "", //辅助孔的装药量
                projectId: ""
            },
            vertices: [],          //show子组件数据
            tube:[],                //show子组件数据
            editProp: ['holeNum','X1','Y1','X2','Y2','Z2'],
            auxHoleData:[],
            cuttingHoles:[],    //掏槽孔
            surroundingHoles:[],    //周边孔
            num:0,  //计数
        }
    },
    created(){
        this.projectId = cookie.get("projectId")
        // this.projectId = "1693177531251879938"
        //查询掏槽孔
        cuttingApi.getCuttingHoles(this.projectId).then(response => {
            this.cuttingHoles = response.data.data;
            this.cuttingHoles.map((item) => {
                this.vertices.push(item.x1,item.y1,0.0)
                this.tube.push({x1:item.x1,y1:item.y1,z1:0,x2:item.x2,y2:item.y2,z2:item.z2})
            })
            console.log(this.vertices)
        })
        //查询周边孔
        surroundingHolesApi.readSurrounding(this.projectId).then(response => {
            this.surroundingHoles = response.data.data;
            // let i=0;
            this.surroundingHoles.map((item) => {
                // i++;
                this.vertices.push(item.x1,item.y1,0.0)
                this.tube.push({x1:item.x1,y1:item.y1,z1:0,x2:item.x2,y2:item.y2,z2:item.z2})
                // this.auxHoleData.push({
                //         holeNum:'孔'+i, x1:item.x1, y1:item.y1,z1:item.z1, x2:item.x2, y2:item.y2,
                //         z2:item.z2,
                // })
            })
        })
        // auxiliaryHolesApi.readAuxHoles(this.projectId).then(response => {
        //     console.log("辅助孔"+JSON.stringify(response.data.data))
        // })
    },
    methods:{
        //计算辅助孔
        calculate(){
            this.calData.ratioSpacing=this.ratioSpacing;
            this.calData.ratioRow=this.ratioRow;
            this.calData.auxDc = this.auxDc/1000;
            this.calData.projectId = this.projectId;
            auxiliaryHolesApi.getAuxHoles(this.calData).then(response => {
                //回显表格
                let datas =response.data.data.auxiliaryHoles;
                let i=0;
                datas.map((item) => {
                    i++;
                    this.vertices.push(item.x1,item.y1,0.0)
                    this.tube.push({x1:item.x1,y1:item.y1,z1:item.z1,x2:item.x2,y2:item.y2,z2:item.z2})
                    this.auxHoleData.push({
                        holeNum:'孔'+i, x1:item.x1, y1:item.y1,z1:item.z1, x2:item.x2, y2:item.y2,
                        z2:item.z2,
                    })
                })
                
                //保存辅助孔
                auxiliaryHolesApi.saveAuxHoles(datas).then(response => {
                    if(response.data.code === 1)    alert("保存辅助孔成功!")
                    console.log("保存辅助孔"+JSON.stringify(response.data.data))
                })
            })
        },
=======
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
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a

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
<<<<<<< HEAD

=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
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
  margin-left: 50px;
  font-size: 30px !important;
  width: 259px;
}

>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
</style>