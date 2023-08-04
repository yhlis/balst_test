<template>
  <div>
    <div class="card5" style="">
        <h2 class="title-front">10 周边孔布置</h2>
    
    <div style="margin-top:50px">
            <h3 class="font-type4" style="display:inline-block">装药直径：
                <el-input style="width:100px" v-model="diameter"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type4" style="display:inline-block">外插角：
                <el-input style="width:100px" v-model="angle"></el-input>
            </h3>
    </div>

    <el-button style="margin:20px 0 0 200px" @click="calculate()" type="primary">试算孔距与光爆层厚度</el-button>
    <div style="margin-top:50px">
            <h3 class="font-type4" style="display:inline-block">预估孔距：
                <el-input style="width:100px" v-model="distance"><template slot="suffix">m</template></el-input>
            </h3>
            <h3 class="font-type4" style="display:inline-block">光爆层厚度：
                <el-input style="width:100px" v-model="thickness"><template slot="suffix">m</template></el-input>
            </h3>
    </div>
    <el-button style="margin:20px 0 0 200px" @click="draw()" type="primary">布孔并绘图</el-button>
  
  <!-- 表格2开始 -->
        <div>
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
                        <el-input class="item__input" v-model="scope.row.distance"></el-input>
                        <div class="item__txt">{{scope.row.distance}}</div>
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

    <!-- 画布展示开始 -->
    <div style="background-color:pink;width:650px;height:500px;margin:-400px 0 0 620px;">
    </div>   
    <!-- 画布展示结束 -->   

</div>
  </div>
</template>

<script>
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
</style>