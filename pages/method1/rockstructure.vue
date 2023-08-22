<template>
<div>
    <div class="card1">
        <h2 class="title-front">3 岩体结构</h2>
        <div class="table1">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src="~/assets/img/岩石表面状况(1)/岩石表面状况 (2)/1.png" alt="A类岩石参考图示"
                            style="width:200px;height:150px">
                            <p>A:完整或块状构造均匀的结构-完整的岩石样本或具有少数间距较宽的不连续性的块状原位岩石。（15～18）</p>
                        </td>
                        <td>
                            <img src="~/assets/img/岩石表面状况(1)/岩石表面状况 (2)/2.png" alt="B类岩石参考图示"
                            style="width:200px;height:150px">
                            <p>B:较完整结构-由节理、裂隙、层面三个相交的不连续集形成的立方体块组成的良好闭锁的未扰动岩体。（12～15）</p>
                        </td>
                        <td>
                            <img src="~/assets/img/岩石表面状况(1)/RockType-3.png" alt="C类岩石参考图示"
                            style="width:200px;height:150px">
                            <p>C:较破碎结构-由节理、裂隙、层面、劈理或多个节理组形成的具有多棱角块的闭锁、部分扰动岩体。（9～12）</p>
                        </td>
                        <td>
                            <img src="~/assets/img/岩石表面状况(1)/RockType-4.png" alt="D类岩石参考图示"
                            style="width:200px;height:150px">
                            <p>D:块状/扰动状/裂隙状结构-由许多相交的不连续集合形成的角块状褶皱。连续不断的层理面或片理。（6～9）</p>
                        </td>
                        <td>
                            <img src="~/assets/img/岩石表面状况(1)/RockType-5.png" alt="E类岩石参考图示"
                            style="width:200px;height:150px">
                            <p>E:极其破碎结构-闭锁锁不良、严重破碎的散体结构岩体，含有棱角分明和圆形的岩石碎片。（3～6）</p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <br>
        <el-row>
            <el-button type="primary" v-for="(item,index) in values" :key="index" 
            style="font-size:20px" 
            @click="checkValue(item)"
            plain>
            {{item}}</el-button>
        </el-row>

        <br>
        <el-form ref="form" label-width="200px">
            <el-form-item style="width:1000px;">
                <span slot="label" style="font-size:15px">
      	        <strong>您判定的岩体结构分值：</strong>
                </span>
                <el-input v-model="structureScore"></el-input>
                <el-button @click="check()" type="primary">确认</el-button>
            </el-form-item>
        </el-form>
    </div>

    
</div>
  
</template>

<script>
export default {
    mounted(){
        this.rockId= this.$route.query.rockId;
        this.ucs= this.$route.query.ucs;
    },
    data(){
        return{
            structureScore:'',
            values:[18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3],
            rockId:'',
            ucs:'',
        }
    },
    methods:{
        checkValue(val){
            this.structureScore=val
        },
        check(){
            if(this.structureScore){
                this.$router.push ({ path:'/method1/structureface', 
                query: { rockId:this.rockId,ucs:this.ucs,structureScore:this.structureScore } }) 
            }
        }
    }
}
</script>

<style>
.card1{
    height: 600px;
    width: 100%;
}
.title-front{
    margin-top: 50px;
    font-size: 40px !important;
}
.table1{
    margin-top: 50px;
}
</style>