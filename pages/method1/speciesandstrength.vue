<template>
<div>
    <div class="card1">
    <h2 class="title-front">1 岩石种类</h2>
        <h3 class="title-front2">火成岩</h3>
        <h3 style="display:inline-block;font-size: 20px !important;margin: 50px 150px;">沉积岩</h3>
        <h3 style="display:inline-block;font-size: 20px !important;margin: 50px 150px;">变质岩</h3>
<!-- 表格展示开始 -->

    <div class="table-style" style="background-color:pink;">
        <el-scrollbar style="height: 100%;">
        <el-table
            ref="singleTable"
            :data="Igneous"
            border
            :show-header="false"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width:300px;font-size:20px;">
                <el-table-column
                property="name"
                min-width="100%">
                </el-table-column>
        </el-table>
        </el-scrollbar>
    </div>


    <div class="table-style" style="background-color:pink;">
        <el-scrollbar style="height: 100%;">
        <el-table
            ref="singleTable"
            :data="Sedimentary"
            border
            :show-header="false"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width:300px;font-size:20px;">
                <el-table-column
                property="name"
                min-width="100%">
                </el-table-column>
        </el-table>
        </el-scrollbar>
    </div>

    <div class="table-style" style="background-color:pink;">
        <el-scrollbar style="height: 100%;">
        <el-table
            ref="singleTable"
            :data="Metamorphic"
            border
            :show-header="false"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width:300px;font-size:20px;">
                <el-table-column
                property="name"
                min-width="100%">
                </el-table-column>
        </el-table>
        </el-scrollbar>
    </div>
    <br>
<!-- 表格展示结束 -->
        <el-form ref="form" label-width="200px">
            <el-form-item style="width:1000px;">
                <span slot="label" style="font-size:15px">
      	        <strong>您判定的岩石种类：</strong>
                </span>
                <el-input v-model="type"></el-input>
                <el-button @click="confirm()" type="primary">确认</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="card1">
        <h2 class="title-front">2 岩石强度</h2>
        <br>
        <el-table
<<<<<<< HEAD
=======
            ref="multipleTable"
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            :data="tableData"
            :header-cell-style="{fontSize: '23px'}"
            tooltip-effect="dark"
            style="width: 100%;font-size:15px"
<<<<<<< HEAD
            @current-change="handleSelectionChange">
=======
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            <el-table-column
            label="实地估算"
            width="400">
            <template slot-scope="scope">{{ scope.row.estimate }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="示例"
            width="400">
            <template slot-scope="scope">{{ scope.row.example }}</template>
            </el-table-column>
            <el-table-column
            prop="address"
            label="强度范围"
            show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.range }}</template>
    </el-table-column>
        </el-table>
        <br>
        <el-form ref="form" label-width="200px">
            <el-form-item label="您判定的岩石强度：" style="width:1000px">
                <el-input v-model="ucs"><template slot="suffix">MPa</template></el-input>
                <el-button @click="check()" type="primary">确认</el-button>
            </el-form-item>
        </el-form>

    </div>
</div>
  
</template>

<script>
  import rockTypeApi from '@/api/getspecies.js'
  import calculateApi from '@/api/calculate.js'
  import cookie from 'js-cookie'

export default {
    data(){
        return{
            ucs:'',
            type:'',
            rockId:'',
            getData:[],         //辅助数组
            Sedimentary:[],                         //沉积岩
            Igneous:[],                             //火成岩
            Metamorphic:[],                         //变质岩
            tableData: [{
            estimate: '标本只能用地质锤凿碎',
            example: '新鲜玄武岩、燧石、辉绿岩、片麻岩、花岗岩、石英岩',
<<<<<<< HEAD
            range: '>250',strength:250
            }, {
            estimate: '标本需要地质锤多次击打才能断裂',
            example: '角闪岩、砂岩、玄武岩、辉长岩、片麻岩、花岗闪长岩、石灰岩',
            range: '100-250',strength:225
            }, {
            estimate: '标本需要地质锤不止一次的击打才能断裂',
            example: '石灰石、大理石、千枚岩、砂岩、片岩、页岩、粉砂岩',
            range: '50-100',strength:75
            }, {
            estimate: '不能用小刀刮或剥皮，标本可以用刀一击就断裂',
            example: '粘土、煤、混凝土、片岩、页岩、粉砂岩',
            range: '25-50',strength:37.5
            }, {
            estimate: '用小刀很难剥开，用刀尖用力敲击，形成浅压痕',
            example: '白垩、岩盐、钾盐',
            range: '5-25',strength:15
            }, {
            estimate: '在地质锤的尖头猛烈的打击下，碎块可以被剥落',
            example: '高度风化或变质的岩石',
            range: '1-5',strength:3
            }],
=======
            range: '>250'
            }, {
            estimate: '标本需要地质锤多次击打才能断裂',
            example: '角闪岩、砂岩、玄武岩、辉长岩、片麻岩、花岗闪长岩、石灰岩',
            range: '100-250'
            }, {
            estimate: '标本需要地质锤不止一次的击打才能断裂',
            example: '石灰石、大理石、千枚岩、砂岩、片岩、页岩、粉砂岩',
            range: '50-100'
            }, {
            estimate: '不能用小刀刮或剥皮，标本可以用刀一击就断裂',
            example: '粘土、煤、混凝土、片岩、页岩、粉砂岩',
            range: '25-50'
            }, {
            estimate: '用小刀很难剥开，用刀尖用力敲击，形成浅压痕',
            example: '白垩、岩盐、钾盐',
            range: '5-25'
            }, {
            estimate: '在地质锤的尖头猛烈的打击下，碎块可以被剥落',
            example: '高度风化或变质的岩石',
            range: '1-5'
            }, {
            estimate: '按缩略图缩进',
            example: '坚硬的断层泥',
            range: '0.25-1'
            }],
            multipleSelection: []
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
        }
        },
    created(){
        rockTypeApi.getRockType().then(response => {
            this.getData = response.data.data

            this.getData.map((item) => {
                if(item.type_code == '002001'){
                    this.Sedimentary.push({id:item.id,name:item.name,})
                }else if(item.type_code == '002002'){
                    this.Igneous.push({id:item.id,name:item.name,})
                }else if(item.type_code == '002003'){
                    this.Metamorphic.push({id:item.id,name:item.name,})
                }
            });
        })
<<<<<<< HEAD
=======

        //页面初始化时生成projectId
         calculateApi.createProject().then(response => {
             console.log(response.data.data.projectId)
             cookie.set('projectId',response.data.data.projectId)
         })
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    },
    methods:{
        check(){
            if(this.ucs){
<<<<<<< HEAD
                let u = this.ucs * 1000000
                this.$router.push ({ path:'/method1/rockstructure', 
                query: { rockId:this.rockId,ucs:u } }) 
=======
                this.$router.push ({ path:'/method1/rockstructure', 
                query: { rockId:this.rockId,ucs:this.ucs } }) 
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            }
        },
        confirm(){
            console.log(this.rockId)
        },
        
    handleSelectionChange(val) {
<<<<<<< HEAD
        this.ucs = val.strength;
=======
        this.multipleSelection = val;
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
      },
    //   控制单选
    handleCurrentChange(val) {
        this.rockId = val.id;
        this.type = val.name;
      }
    }
}
</script>

<style>
.title-front{
    margin-top: 50px;
    font-size: 40px !important;
}
.card1{
    height: 600px;
    width: 100%;
}
.title-front2{
    font-size: 20px !important;
    margin: 50px 200px;
    display: inline-block;
}
.table-style{
    margin-left:100px;
    width:300px;
    height:400px;
    display:inline-block;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
