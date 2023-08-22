<template>
  <div>
    <div class="card5">
        <h2 class="title-front">12 装药量计算</h2>

    <el-button style="margin-top:20px;width:200px" @click="calculate()" type="primary">炮孔统计制表</el-button>

<div style="height:auto;">
  <!-- 表格2开始 -->
        <div style="width:100%;">
            <el-table
                :data="holeTable"
                border
                size="max"
                style="width: 1200px;margin:50px 0 0 20px;"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >

                <!-- 序号 -->
                <el-table-column
                    prop="holeNum"
                    label="序号"
                    width="100">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.holeNum"></el-input>
                    <div class="item__txt">{{scope.row.holeNum}}</div>
                    </div>
                </el-table-column>

                <!-- 炮孔类型 -->
                <el-table-column
                    prop="holeNum"
                    label="炮孔类型"
                    width="200">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.holeNum"></el-input>
                    <div class="item__txt">{{scope.row.holeNum}}</div>
                    </div>
                </el-table-column>

                <el-table-column label="孔口坐标">
                    <el-table-column
                        prop="X1"
                        label="X"
                        width="120">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y"
                        width="120">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y1"></el-input>
                        <div class="item__txt">{{scope.row.y1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z1"
                        label="Z"
                        width="120">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z1"></el-input>
                        <div class="item__txt">{{scope.row.z1}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="孔底坐标">
                    <el-table-column
                        prop="X2"
                        label="X"
                        width="120">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y"
                        width="120">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z"
                        width="120">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column
                    prop="azimuth"
                    label="装药量"
                    width="170">
                    <div class="item" slot-scope="scope">
                    <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                    <div class="item__txt">{{scope.row.azimuth}}</div>
                    </div>
                </el-table-column>

            </el-table>
            <div>
                <i class="el-icon-circle-plus-outline" @click="addHole()"></i>
            </div>
        </div>
<!-- 表格2结束 -->
</div>

</div>
  </div>
</template>

<script>
import '~/assets/css2/pages.css'
export default {
    data(){
        return{}
    },
    created() {
        //查询掏槽孔
        //查询周边孔
        //查询辅助孔
    },
    methods:{

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
</style>