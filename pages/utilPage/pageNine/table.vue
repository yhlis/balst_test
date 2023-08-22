<template>
    <div>
        <!-- 表格2开始 -->
        <div v-if="this.getHoleTableNum>0">
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
        
        <div v-if="this.getHoleTableNum>1">
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

        <div v-if="this.getHoleTableNum>2">
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

        <div v-if="this.getHoleTableNum>3">
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
    
        <div v-if="this.getHoleTableNum>4">
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
<el-button style="margin:20px 0 0 200px" @click="confirmAndDraw()" type="primary">手动调整确认并绘图</el-button>
    </div>
</template>

<script>
export default {
    name: "tables",
    props:{
        holeTableNum:String,
        childData: {
            type: Object,
            default () {
            return {}
            }
        }
    },
    watch:{
        holeTableNum:{
        handler(newV) {
          this.getHoleTableNum = new Number(newV);
        },
        deep: true
      },
      childData:{
        handler(newV) {
            this.fatherData = newV;//将监听到修改的值赋予到fatherData中
            // console.log("fatherData"+JSON.stringify(this.fatherData));
            let [a,b,c,d,e]=[0,0,0,0,0];
            this.fatherData.data.cuttingHolesList.map((item) => {
                this.vertices.push(item.x1,item.y1,0.0)
                this.tube.push({x1:item.x1,y1:item.y1,z1:0,x2:item.x2,y2:item.y2,z2:item.z2})
                //表格显示
                if(item.cuttingNum == 0){
                    a++;
                    this.holeTable1.push({
                        holeNum:'孔'+a, x1:item.x1, y1:item.y1, x2:item.x2,
                        y2:item.y2,z2:item.z2,azimuth:item.azimuth,distance:item.offsetDistance
                    })
                }else if(item.cuttingNum == 1){
                    b++;
                    this.holeTable2.push({
                        holeNum:'孔'+b, x1:item.x1, y1:item.y1, x2:item.x2,
                        y2:item.y2,z2:item.z2,azimuth:item.azimuth,distance:item.offsetDistance
                    })
                }else if(item.cuttingNum == 2){
                    c++;
                    this.holeTable3.push({
                        holeNum:'孔'+c, x1:item.x1, y1:item.y1, x2:item.x2,
                        y2:item.y2,z2:item.z2,azimuth:item.azimuth,distance:item.offsetDistance
                    })
                }else if(item.cuttingNum == 3){
                    d++;
                    this.holeTable4.push({
                        holeNum:'孔'+d, x1:item.x1, y1:item.y1, x2:item.x2,
                        y2:item.y2,z2:item.z2,azimuth:item.azimuth,distance:item.offsetDistance
                    })
                }else if(item.cuttingNum == 4){
                    e++;
                    this.holeTable5.push({
                        holeNum:'孔'+e, x1:item.x1, y1:item.y1, x2:item.x2,
                        y2:item.y2,z2:item.z2,azimuth:item.azimuth,distance:item.offsetDistance
                    })
                }
            });
            //发送至父组件
            this.$emit('childVertices',this.vertices)
            this.$emit("childTube", this.tube);
        },
        // object对象启深度监听功能
        deep: true
      },
    },
    data(){
        return{
            getHoleTableNum: 3,
            holeTable1:[],
            holeTable2:[],
            holeTable3:[],
            holeTable4:[],
            holeTable5:[],
            fatherData:null,
            vertices: [],         //show组件点数据
            tube:[],              //show组件管道数据
            editProp: ['holeNum','X1','Y1','X2','Y2','Z2','azimuth','distance'],
        }
    },
    methods:{
        confirmAndDraw(){
            //方法一，比较笨
            this.vertices=[]
            this.tube=[]
            this.holeTable1.map((item) => {
                this.vertices.push(item.x1,item.y1,0.0)
                this.tube.push({x1:item.x1,y1:item.y1,z1:0,x2:item.x2,y2:item.y2,z2:item.z2})
            })
            this.$emit('childVertices',this.vertices)
            this.$emit("childTube", this.tube);
        },

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

</style>