<template>
  <div>
    <div class="card5">
        <h2 class="title-front">9 掏槽孔布置</h2>
        <div style="margin-top:50px">
            <h3 class="font-type3" style="display:inline-block">装药直径：
<<<<<<< HEAD
                <el-input style="width:100px" v-model="cuttingDc"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type3" style="display:inline-block">掏槽级数：
                <el-input style="width:100px" v-model="cuttingNum"></el-input>
            </h3>
            <h3 class="font-type3" style="margin-top:20px">掏槽行数：
                <el-input style="width:100px" v-model="cuttingRow"></el-input>
=======
                <el-input style="width:100px" v-model="diameter"><template slot="suffix">mm</template></el-input>
            </h3>
            <h3 class="font-type3" style="display:inline-block">掏槽级数：
                <el-input style="width:100px" v-model="level"></el-input>
            </h3>
            <h3 class="font-type3" style="margin-top:20px">掏槽行数：
                <el-input style="width:100px" v-model="lineNum"></el-input>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            </h3>
        </div>

        <el-button style="margin:20px 0 0 200px" @click="calculate()" type="primary">试算孔排距</el-button>

<<<<<<< HEAD
<div style="height:auto;">
<!-- 表格开始 -->
        <div style="float:left">
=======
<!-- 表格开始 -->
        <div>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            <el-table
                :data="levelTable"
                :span-method="objectSpanMethod"
                border
                size="mini"
                style="width: 550px;margin-top:50px"
<<<<<<< HEAD
=======
                
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
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
<<<<<<< HEAD
                    <el-input class="item__input" v-model="scope.row.angle" :disabled="scope.row.tId>0 ? false : true" placeholder="请输入"></el-input>
=======
                    <el-input class="item__input" v-model="scope.row.angle" placeholder="请输入"></el-input>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
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
<<<<<<< HEAD
                    <el-input class="item__input" v-model="scope.row.rowSpac" :disabled="true"></el-input>
=======
                    <el-input class="item__input" v-model="scope.row.rowSpac" placeholder="请输入"></el-input>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
                    <div class="item__txt">{{scope.row.rowSpac}}</div>
                    </div>
                </el-table-column>

                <!-- 孔距 -->
                <el-table-column
                    prop="holeSpac"
                    label="孔距"
                    width="110">
                    <div class="item" slot-scope="scope">
<<<<<<< HEAD
                    <el-input class="item__input" v-model="scope.row.holeSpac" :disabled="scope.row.tId>2 ? false : true" placeholder="请输入"></el-input>
=======
                    <el-input class="item__input" v-model="scope.row.holeSpac" placeholder="请输入"></el-input>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
                    <div class="item__txt">{{scope.row.holeSpac}}</div>
                    </div>
                </el-table-column>

            </el-table>
<<<<<<< HEAD
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

=======
    
        </div>
<!-- 表格结束 -->
        <el-button style="margin:20px 0 0 200px" @click="draw()" type="primary">布孔并绘图</el-button>
    
    <!-- 画布展示开始 -->
    <div id="canvas" style="width:650px;height:500px;margin:-400px 0 0 620px;">
        <!-- <threeComponent></threeComponent> -->
    </div>   
    <!-- 画布展示结束 -->   

<!-- 表格2开始 -->
        <div v-if="this.holeTableNum>0">
            <el-table
                :data="holeTable1"
                border
                size="mini"
                style="width: 841px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >
                <!-- 等级 -->
                <el-table-column label="一级">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="100">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="100">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                        <div class="item__txt">{{scope.row.azimuth}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="外偏距离">
                    <el-table-column
                        prop="distance"
                        width="100">
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
                        <el-button @click="delRow(scope.$index, scope.row,1)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
            <div>
                <i class="el-icon-circle-plus-outline" @click="addHole(1)"></i>
            </div>
        </div>
        
        <div v-if="this.holeTableNum>1">
            <el-table
                :data="holeTable2"
                border
                size="mini"
                style="width: 841px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >

                <!-- 等级 -->
                <el-table-column label="二级">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="100">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="方位角">
                    <el-table-column
                        prop="azimuth"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                        <div class="item__txt">{{scope.row.azimuth}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="外偏距离">
                    <el-table-column
                        prop="distance"
                        width="100">
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
                        <el-button @click="delRow(scope.$index, scope.row,2)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
            <div>
                <i class="el-icon-circle-plus-outline" @click="addHole(2)"></i>
            </div>
        </div>

        <div v-if="this.holeTableNum>2">
            <el-table
                :data="holeTable3"
                border
                size="mini"
                style="width: 841px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >

                <!-- 等级 -->
                <el-table-column label="三级">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="100">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="方位角">
                    <el-table-column
                        prop="azimuth"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                        <div class="item__txt">{{scope.row.azimuth}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="外偏距离">
                    <el-table-column
                        prop="distance"
                        width="100">
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
                        <el-button @click="delRow(scope.$index, scope.row,3)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
            <div>
                <i class="el-icon-circle-plus-outline" @click="addHole(3)"></i>
            </div>
        </div>

        <div v-if="this.holeTableNum>3">
            <el-table
                :data="holeTable4"
                border
                size="mini"
                style="width: 841px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >
                <!-- 等级 -->
                <el-table-column label="四级">
                    <el-table-column
                        prop="holeNum"
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="100">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="方位角">
                    <el-table-column
                        prop="azimuth"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                        <div class="item__txt">{{scope.row.azimuth}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="外偏距离">
                    <el-table-column
                        prop="distance"
                        width="100">
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
                        <el-button @click="delRow(scope.$index, scope.row,4)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
            <div>
                <i class="el-icon-circle-plus-outline" @click="addHole(4)"></i>
            </div>
        </div>
    
        <div v-if="this.holeTableNum>4">
            <el-table
                :data="holeTable5"
                border
                size="mini"
                style="width: 841px;margin-top:50px"
                @cell-mouse-enter="handleCellEnter"
                @cell-mouse-leave="handleCellLeave"
            >

                <!-- 等级 -->
                <el-table-column label="五级">
                    <el-table-column
                        prop="holeNum"
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x1"></el-input>
                        <div class="item__txt">{{scope.row.x1}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y1"
                        label="Y1"
                        width="100">
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
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.x2"></el-input>
                        <div class="item__txt">{{scope.row.x2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Y2"
                        label="Y2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.y2"></el-input>
                        <div class="item__txt">{{scope.row.y2}}</div>
                        </div>
                    </el-table-column>
                    <el-table-column
                        prop="Z2"
                        label="Z2"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.z2"></el-input>
                        <div class="item__txt">{{scope.row.z2}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="方位角">
                    <el-table-column
                        prop="azimuth"
                        width="100">
                        <div class="item" slot-scope="scope">
                        <el-input class="item__input" v-model="scope.row.azimuth"></el-input>
                        <div class="item__txt">{{scope.row.azimuth}}</div>
                        </div>
                    </el-table-column>
                </el-table-column>

                <el-table-column label="外偏距离">
                    <el-table-column
                        prop="distance"
                        width="100">
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
                        <el-button @click="delRow(scope.$index, scope.row,5)" type="text" size="small">删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
            <div>
                <i class="el-icon-circle-plus-outline" @click="addHole(5)"></i>
            </div>
        </div>
        
<!-- 表格2结束 -->

<el-button style="margin:20px 0 0 200px" @click="draw()" type="primary">手动调整确认并绘图</el-button>

>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    </div>
</div>
</template>

<script>
<<<<<<< HEAD
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
=======
import { getMergeCells } from '@/utils/table.js'
import threeComponent from '@/pages/testPage/testThree'
export default {
    components:{threeComponent},
    data(){
        return{
            diameter: '32',
            level: '3',
            lineNum: '5',
            holeTableNum: 0,
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            tableColumn: [
                { prop: 'levelNum', label: '等级' },
                { prop: 'angle', label: '角度' },
                { prop: 'position', label: '' },
                { prop: 'rowSpac', label: '排距' },
                { prop: 'holeSpac', label: '孔距' },
            ],
<<<<<<< HEAD
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
=======
            holeTable1:[{holeNum:'孔1',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''},
            {holeNum:'孔2',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''},
            {holeNum:'孔3',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''},],
            holeTable2:[],
            holeTable3:[],
            holeTable4:[],
            holeTable5:[],

            levelTable:[],
            // levelTable:[{levelNum:'一级',angle:'',position:'孔口',rowSpac:'',holeSpac:''},
            //     {levelNum:'一级',angle:'',position:'孔底',rowSpac:'',holeSpac:''},
            //     {levelNum:'二级',angle:'',position:'孔口',rowSpac:'',holeSpac:''},
            //     {levelNum:'二级',angle:'',position:'孔底',rowSpac:'',holeSpac:''},
            //     {levelNum:'三级',angle:'',position:'孔口',rowSpac:'',holeSpac:''},
            //     {levelNum:'三级',angle:'',position:'孔底',rowSpac:'',holeSpac:''},
            // ],
            editProp: ['levelNum', 'angle','position', 'rowSpac', 'holeSpac',
            'holeNum','X1','Y1','X2','Y2','Z2','azimuth','distance'],
        }
    },
    watch:{
        level:{
            handler(newLevel,oldLevel){
                if(newLevel>5){
                    alert("掏槽级数最高为5级！");
                    this.level='3';
                }else{
                    this.levelTable=[];
                    this.holeTableNum = newLevel;
                    // console.log(this.levelTable)
                    for(let i=1;i<=newLevel;i++){
                        switch(i){
                            case 1: {
                                this.levelTable.push({levelNum:'一级',angle:'',position:'孔口',rowSpac:'',holeSpac:''})
                                this.levelTable.push({levelNum:'一级',angle:'',position:'孔底',rowSpac:'',holeSpac:''})
                            }break;
                            case 2: {
                                this.levelTable.push({levelNum:'二级',angle:'',position:'孔口',rowSpac:'',holeSpac:''})
                                this.levelTable.push({levelNum:'二级',angle:'',position:'孔底',rowSpac:'',holeSpac:''})
                            }break;
                            case 3: {
                                this.levelTable.push({levelNum:'三级',angle:'',position:'孔口',rowSpac:'',holeSpac:''})
                                this.levelTable.push({levelNum:'三级',angle:'',position:'孔底',rowSpac:'',holeSpac:''})
                            }break;
                            case 4: {
                                this.levelTable.push({levelNum:'四级',angle:'',position:'孔口',rowSpac:'',holeSpac:''})
                                this.levelTable.push({levelNum:'四级',angle:'',position:'孔底',rowSpac:'',holeSpac:''})
                            }break;
                            case 5: {
                                this.levelTable.push({levelNum:'五级',angle:'',position:'孔口',rowSpac:'',holeSpac:''})
                                this.levelTable.push({levelNum:'五级',angle:'',position:'孔底',rowSpac:'',holeSpac:''})
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
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
<<<<<<< HEAD
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
=======
     },
    methods:{
    addHole(id){
        if(id==1) this.holeTable1.push({holeNum:'孔',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''})
        if(id==2) this.holeTable2.push({holeNum:'孔',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''})
        if(id==3) this.holeTable3.push({holeNum:'孔',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''})
        if(id==4) this.holeTable4.push({holeNum:'孔',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''})
        if(id==5) this.holeTable5.push({holeNum:'孔',X1:'',Y1:'',X2:'',Y2:'',Z2:'',azimuth:'',distance:''})
    },

    //删除行
    delRow(index, row,rowId) {
      var that = this;
      this.$confirm('确认删除吗?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
      }).then(() => {
          //点击确定的操作(调用接口)
        if(rowId==1) {
            var hasmembers = that.holeTable1;
            for (var i = 0; i < hasmembers.length; i++) {
              if (row == hasmembers[i]) {
                  that.holeTable1.splice(i, 1);
              }
            }
        }
        if(rowId==2) {
            var hasmembers = that.holeTable2;
            for (var i = 0; i < hasmembers.length; i++) {
              if (row == hasmembers[i]) {
                  that.holeTable2.splice(i, 1);
              }
            }
        }
        if(rowId==3) {
            var hasmembers = that.holeTable3;
            for (var i = 0; i < hasmembers.length; i++) {
              if (row == hasmembers[i]) {
                  that.holeTable3.splice(i, 1);
              }
            }
        }
        if(rowId==4) {
            var hasmembers = that.holeTable4;
            for (var i = 0; i < hasmembers.length; i++) {
              if (row == hasmembers[i]) {
                  that.holeTable4.splice(i, 1);
              }
            }
        }
        if(rowId==5) {
            var hasmembers = that.holeTable5;
            for (var i = 0; i < hasmembers.length; i++) {
              if (row == hasmembers[i]) {
                  that.holeTable5.splice(i, 1);
              }
            }
        }
          
        }).catch(() => {
        //点取消的提示
            return;
        });
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
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


/* 表格ui */
.item .item__input {
  display: none;
  width: 80px;
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