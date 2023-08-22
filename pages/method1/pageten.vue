<template>
  <div>
    <div class="card5" style="">
        <h2 class="title-front">10 周边孔布置</h2>
    
    <div style="margin-top:50px">
            <h3 class="font-type4" style="display:inline-block">装药直径：
<<<<<<< HEAD
                <el-input style="width:100px" v-model="surDc"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type4" style="display:inline-block">外插角：
                <el-input style="width:100px" v-model="heterodyneAngle"></el-input>
=======
                <el-input style="width:100px" v-model="diameter"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type4" style="display:inline-block">外插角：
                <el-input style="width:100px" v-model="angle"></el-input>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            </h3>
    </div>

    <el-button style="margin:20px 0 0 200px" @click="calculate()" type="primary">试算孔距与光爆层厚度</el-button>
    <div style="margin-top:50px">
            <h3 class="font-type4" style="display:inline-block">预估孔距：
<<<<<<< HEAD
                <el-input style="width:100px" v-model="surHoleSpacing"><template slot="suffix">m</template></el-input>
            </h3>
            <h3 class="font-type4" style="display:inline-block">光爆层厚度：
                <el-input style="width:100px" v-model="blastThick"><template slot="suffix">m</template></el-input>
            </h3>
    </div>
    <el-button style="margin:20px 0 0 200px" @click="calHoles()" type="primary">布孔并绘图</el-button>

<div style="background-color:blue;height:auto;">
  <!-- 表格2开始 -->
        <div style="float:left">
=======
                <el-input style="width:100px" v-model="distance"><template slot="suffix">m</template></el-input>
            </h3>
            <h3 class="font-type4" style="display:inline-block">光爆层厚度：
                <el-input style="width:100px" v-model="thickness"><template slot="suffix">m</template></el-input>
            </h3>
    </div>
    <el-button style="margin:20px 0 0 200px" @click="draw()" type="primary">布孔并绘图</el-button>
  
  <!-- 表格2开始 -->
        <div>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            <el-table
                :data="holeTable"
                border
                size="mini"
                style="width: 620px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >

                <!-- 等级 -->
                <el-table-column label="">
                    <el-table-column
                        prop="holeNum"
                        label=""
                        width="70">
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
                        width="80">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="80">
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
                        width="80">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="80">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="80">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="方位角">
                    <el-table-column
                        prop="azimuth"
                        label=""
                        width="80">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                        <div class="item__txt">{{scope.row.azimuth}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="外偏距离">
                    <el-table-column
                        prop="distance"
                        label=""
                        width="80">
                        <div class="item" slot-scope="scope">
<<<<<<< HEAD
                        <el-input class="item__input" v-model="scope.row.offsetDistance"></el-input>
                        <div class="item__txt">{{scope.row.offsetDistance}}</div>
=======
                        <el-input class="item__input" v-model="scope.row.distance"></el-input>
                        <div class="item__txt">{{scope.row.distance}}</div>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
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
                <i class="el-icon-circle-plus-outline" @click="addHole()"></i>
            </div>
        </div>
<!-- 表格2结束 -->
<<<<<<< HEAD
    <!-- 画布展示开始 -->
        <div style="background-color:pink;width:650px;height:500px;float:left;margin:-200px 0 0 10px;">
            <show :vertices="vertices" :vertices2="vertices2" :tube="tube"/>
        </div>   
    <!-- 画布展示结束 -->
</div>
=======

    <!-- 画布展示开始 -->
    <div style="background-color:pink;width:650px;height:500px;margin:-400px 0 0 620px;">
    </div>   
    <!-- 画布展示结束 -->   
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a

</div>
  </div>
</template>

<script>
<<<<<<< HEAD
import '~/assets/css2/pages.css'
import surroundingHolesApi from '@/api/surroundingHoles.js'
import cuttingApi from '@/api/cutting.js'
import show from '../utilPage/show.vue'
import cookie from 'js-cookie'
export default {
    components:{show},
    data(){
        return{
            surDc:'32',               //周边孔装药直径
            heterodyneAngle:'2.7',     //周边空外差角
            surHoleSpacing:'',      //周边孔预估孔距
            blastThick:'',          //预估光爆层厚度
            holeTable:[],
            vertices: [],          //show子组件数据
            vertices2: [],         //show子组件数据
            tube:[],                //show子组件数据
            calHolesData:{},
            surroundingHoles:[],
            cuttingHoles:[],
            loading:false,
            editProp: ['holeNum','X1','Y1','X2','Y2','Z2','azimuth','distance'],
            projectId:'',
        }
    },
    created(){
            this.projectId = cookie.get("projectId")
            // this.projectId = '1689679856296587265'
            console.log("projectId"+this.projectId)
            //查询掏槽孔
            cuttingApi.getCuttingHoles(this.projectId).then(response => {
                this.cuttingHoles = response.data.data;
                this.cuttingHoles.map((item) => {
                    this.vertices.push(item.x1,item.y1,0.0)
                    this.tube.push({x1:item.x1,y1:item.y1,z1:0,x2:item.x2,y2:item.y2,z2:item.z2})
                })
                console.log("查询掏槽孔"+JSON.stringify(this.cuttingHoles))
            })
    },
    methods:{
        //计算周边孔的排距和光爆层厚度
        calculate(){
            surroundingHolesApi.arrayRow(this.projectId).then(response =>{
                this.blastThick = response.data.data.blastThick;
                this.surHoleSpacing = response.data.data.surHoleSpacing;
            })
        },
        //计算周边孔,回显表格
        calHoles(){
            this.calHolesData.blastThick = this.blastThick;
            this.calHolesData.surHoleSpacing = this.surHoleSpacing;
            this.calHolesData.surDc = this.surDc/1000;
            this.calHolesData.heterodyneAngle = this.heterodyneAngle;
            this.calHolesData.projectId = this.projectId;

            //计算周边孔
            surroundingHolesApi.getSurrounding(this.calHolesData).then(response =>{
                this.surroundingHoles = response.data.data.surroundingHoles;
                var i=0;
                this.surroundingHoles.map((item) => {
                    i=i+1;
                    //添加周边孔
                    this.vertices2.push(item.x1,item.y1,0.0)
                    this.tube.push({x1:item.x1,y1:item.y1,z1:item.z1,x2:item.x2,y2:item.y2,z2:item.z2})
                    this.holeTable.push({
                        holeNum:'孔'+i, x1:item.x1, y1:item.y1, x2:item.x2, y2:item.y2,
                        z2:item.z2, azimuth:item.azimuth, offsetDistance:item.offsetDistance
                    })
                })

                //保存周边孔
                surroundingHolesApi.saveSurrounding(this.surroundingHoles).then(response => {
                    console.log("周边孔已保存"+response.data.data)
                })
            })
        },
=======
export default {
    data(){
        return{
            diameter:'',
            angle:'',
            distance:'',
            thickness:'',
            holeTable:[],
            editProp: ['holeNum','X1','Y1','X2','Y2','Z2','azimuth','distance'],
        }
    },
    methods:{
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
        addHole(){
            this.holeTable.push({
                holeNum:'',x1:'',y1:'',x2:'',y2:'',z2:'',azimuth:'',distance:''
            })
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
.font-type4{ 
  margin-left: 30px;
  font-size: 20px !important;
  width: 259px;
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