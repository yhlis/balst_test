<template>
  <div>
    <div class="card5">
        <h2 class="title-front">9 掏槽孔布置</h2>
        <div style="margin-top:50px">
            <h3 class="font-type3" style="display:inline-block">装药直径：
                <el-input style="width:100px" v-model="cuttingDc"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type3" style="display:inline-block">掏槽级数：
                <el-input style="width:100px" v-model="cuttingNum"></el-input>
            </h3>
            <h3 class="font-type3" style="margin-top:20px">掏槽行数：
                <el-input style="width:100px" v-model="cuttingRow"></el-input>
            </h3>
        </div>

        <el-button style="margin:20px 0 0 200px" @click="calculate()" type="primary">试算孔排距</el-button>

<div style="height:auto;">
<!-- 表格开始 -->
        <div style="float:left">
            <el-table
                :data="levelTable"
                :span-method="objectSpanMethod"
                border
                size="mini"
                style="width: 550px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >
                <!-- 等级 -->
                <el-table-column
                    prop="levelNum"
                    label="等级"
                    width="110">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.levelNum" :disabled="true" placeholder="请输入"></el-input>
                    <div class="item__txt">{{scope.row.levelNum}}</div>
                    </div>
                </el-table-column>

                <!-- 角度 -->
                <el-table-column
                    prop="angle"
                    label="角度"
                    width="110">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.angle" :disabled="scope.row.tId>0 ? false : true" placeholder="请输入"></el-input>
                    <div class="item__txt">{{scope.row.angle}}</div>
                    </div>
                </el-table-column>

                <el-table-column
                    prop="position"
                    label=""
                    width="110">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.position" :disabled="true" placeholder="请输入"></el-input>
                    <div class="item__txt">{{scope.row.position}}</div>
                    </div>
                </el-table-column>

                <!-- 排距 -->
                <el-table-column
                    prop="rowSpac"
                    label="排距"
                    width="110">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.rowSpac" :disabled="true"></el-input>
                    <div class="item__txt">{{scope.row.rowSpac}}</div>
                    </div>
                </el-table-column>

                <!-- 孔距 -->
                <el-table-column
                    prop="holeSpac"
                    label="孔距"
                    width="110">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.holeSpac" :disabled="scope.row.tId>2 ? false : true" placeholder="请输入"></el-input>
                    <div class="item__txt">{{scope.row.holeSpac}}</div>
                    </div>
                </el-table-column>

            </el-table>
            <el-button style="margin:20px 0 0 200px" @click="holeAndDraw()" type="primary">布孔并绘图</el-button>
        </div>
<!-- 表格结束 -->
    
    <!-- 画布展示开始 -->
    <div style="background-color:pink;width:650px;height:500px;float:left;margin-left:60px;">
        <show :vertices="vertices" :tube="tube" :key="timer"/>
    </div>   
    <!-- 画布展示结束 -->
</div>

<!-- 表格2开始 -->
    <tables :holeTableNum="holeTableNum" :childData="childData"
     @childVertices="getChildData" @childTube="getChildTube"/>
<!-- 表格2结束 -->

    </div>
</div>
</template>

<script>
import '~/assets/css2/pages.css'
import { getMergeCells } from '@/utils/table.js'
import threeComponent from '@/pages/testPage/testThree'
import show from '../utilPage/show.vue'
import cuttingApi from '@/api/cutting.js'
import cookie from 'js-cookie'
import tables from '../utilPage/pageNine/table.vue'
export default {
    components:{threeComponent,tables,show},
    data(){
        return{
            timer:'',               //子组件更新
            cuttingDc: '32',
            cuttingNum: '3',
            cuttingRow: '5',
            holeTableNum: 0,
            cuttingId:'',
            vertices: [],         //show子组件数据
            tube:[],              //show子组件数据
            childData: null,         //table子组件数据
            tableColumn: [
                { prop: 'levelNum', label: '等级' },
                { prop: 'angle', label: '角度' },
                { prop: 'position', label: '' },
                { prop: 'rowSpac', label: '排距' },
                { prop: 'holeSpac', label: '孔距' },
            ],
            levelTable:[],
            cuttingMsg:[],          //保存掏槽孔信息数组
            cuttingTable:[],          //保存掏槽孔排距表
            cuttingObj:{
                id: '', //cuttingId （保存掏槽孔排距信息的时候生成）
                cuttingDc: 0, //掏槽孔装药直径
                cuttingNum: 0, //掏槽级数
                cuttingRow: 0, //掏槽排数
                orificeSpacing1: 0, //第一级孔口孔距
                orificeRow1: "", //第一级孔口排距
                bottomRow1: "", //第一级孔底排距
                cuttingDipAngle1: "70", //掏槽孔排距表第一级角度
                cuttingDipAngle2: "", //掏槽孔排距表第二级角度
                cuttingDipAngle3: "", //掏槽孔排距表第三级角度
                // projectId: "1688562209227726849" //projectId（保存项目信息的时候生成）
                projectId:'',
            },          //计算掏槽孔排距信息对象
            editProp: ['levelNum', 'angle','position', 'rowSpac', 'holeSpac',],
        }
    },
    watch:{
        cuttingNum:{
            handler(newLevel,oldLevel){
                if(newLevel>5){
                    alert("掏槽级数最高为5级！");
                    this.cuttingNum='3';
                }else{
                    this.levelTable=[];
                    this.holeTableNum = newLevel;
                    for(let i=1;i<=newLevel;i++){
                        switch(i){
                            case 1: {
                                this.levelTable.push({levelNum:'一级',angle:'',position:'孔口',rowSpac:'',holeSpac:'',tId:3})
                                this.levelTable.push({levelNum:'一级',angle:'',position:'孔底',rowSpac:'',holeSpac:'',tId:2})
                            }break;
                            case 2: {
                                this.levelTable.push({levelNum:'二级',angle:'',position:'孔口',rowSpac:'',holeSpac:'',tId:0})
                                this.levelTable.push({levelNum:'二级',angle:'',position:'孔底',rowSpac:'',holeSpac:'',tId:0})
                            }break;
                            case 3: {
                                this.levelTable.push({levelNum:'三级',angle:'',position:'孔口',rowSpac:'',holeSpac:'',tId:0})
                                this.levelTable.push({levelNum:'三级',angle:'',position:'孔底',rowSpac:'',holeSpac:'',tId:0})
                            }break;
                            case 4: {
                                this.levelTable.push({levelNum:'四级',angle:'',position:'孔口',rowSpac:'',holeSpac:'',tId:0})
                                this.levelTable.push({levelNum:'四级',angle:'',position:'孔底',rowSpac:'',holeSpac:'',tId:0})
                            }break;
                            case 5: {
                                this.levelTable.push({levelNum:'五级',angle:'',position:'孔口',rowSpac:'',holeSpac:'',tId:0})
                                this.levelTable.push({levelNum:'五级',angle:'',position:'孔底',rowSpac:'',holeSpac:'',tId:0})
                            }break;
                        }
                        
                    }
                }
            },
            immediate: true 
        }
    },
    computed: {
    // 获取所有单元格合并数据
        spanArr() {
            if (!this.tableColumn.length) return []
            const mergeCols = ['levelNum', 'angle'] // 需要合并的列（字段）
            return getMergeCells(this.levelTable, this.tableColumn, mergeCols)
        },
    },
    methods:{
    //计算孔排距
    calculate(){
        this.cuttingObj.cuttingDc = this.cuttingDc/1000;
        this.cuttingObj.cuttingNum = this.cuttingNum/1;
        this.cuttingObj.cuttingRow = this.cuttingRow/1;
        this.cuttingObj.orificeSpacing1 = this.levelTable[0].holeSpac/1;
        this.cuttingObj.projectId = cookie.get("projectId");             //save
        // this.cuttingObj.projectId = '1689900423582547969';

        //1.计算掏槽孔排距信息     回显表格
        cuttingApi.getCuttingArray(this.cuttingObj).then(response =>{
            this.cuttingTable = response.data.data.cuttingArrays
            //需要添加cuttingId
            this.cuttingMsg = response.data.data.cutting

            // console.log("开始cuttingTable   "+JSON.stringify(this.cuttingTable))
            var i,j=0;
            this.cuttingTable.map((item) => {
                i = 2*item.cuttingNum;
                j = 2*item.cuttingNum+1;
              this.levelTable[i].rowSpac=item.orificeRow;
              this.levelTable[i].holeSpac=item.orificeSpacing;
              this.levelTable[i].angle=item.cuttingDipAngle;

              this.levelTable[j].rowSpac=item.bottomRow;
              this.levelTable[j].holeSpac=item.bottomSpacing;
              this.levelTable[j].angle=item.cuttingDipAngle;
            });

            //2.保存掏槽孔信息
            // console.log("cuttingMsg2"+JSON.stringify(this.cuttingMsg))
            cuttingApi.saveCutting(this.cuttingMsg).then(response => {
                this.cuttingMsg = response.data.data;
                console.log("保存/更新掏槽孔信息"+JSON.stringify(response.data.data))
                this.cuttingId = this.cuttingMsg.id;
                this.cuttingTable.map((item) => {
                    item.cuttingId = this.cuttingId
                });
                //3.保存掏槽排距表
                cuttingApi.saveCuttingArray(this.cuttingTable).then(response => {
                    if(response.data.data == null)
                        alert("计算失败请重试！")
                    else{
                        console.log("保存掏槽排距表"+JSON.stringify(response.data.data))
                    } 
                })
            })
        })
    },

    //坐标赋值
    holeAndDraw(){
        if(this.cuttingId===''){
            alert("cuttingId为空,输入步骤有误!")
        }else{
            this.timer = new Date().getTime()
            //回显表格
            // this.cuttingId = '1689130042114420737'
            // let cBY = cookie.get("centerBottomY")
            // let data = {cuttingId: this.cuttingId,centerBottomY: cBY};       //save
            // let data = {cuttingId: this.cuttingId,centerBottomY: -3};
            cuttingApi.getCutting(this.cuttingId).then(response => {
                this.childData = response.data;     //回显
                let next = response.data.data.cuttingHolesList
                cuttingApi.saveCuttingHoles(next).then(response => {
                    console.log("保存掏槽孔  "+JSON.stringify(response.data.data))
                    alert("保存掏槽孔成功!")
                })
            })
        }
    },

    //获取vertices
    getChildData(val){
        this.vertices = val;
    },

    //获取tube
    getChildTube(val){
        this.tube = val;
    },

    // 表数据合并
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      return this.spanArr[rowIndex][columnIndex]
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
    },

}
</script>

<style>
</style>