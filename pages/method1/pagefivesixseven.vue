<template>
  <div>
    <div class="card1">
      <div class="card5">
        <h2 class="title-front">5 隧道地应力(隧道埋深或地应力2选1填写)</h2><br><br>
        <div class="strength-div">
          <h3 class="font-type1">隧道中心到地表距离：
              <el-input style="width:100px" v-model="strength1"><template slot="suffix">M</template></el-input>
          </h3>
        </div>

        <div class="strength-div">
          <h3 class="font-type2">该处最大地应力值：
              <el-input style="width:100px" v-model="strength2"><template slot="suffix">MPa</template></el-input>
          </h3>
        </div>
      </div>

      <div class="card5">
        <h2 class="title-front">6 岩体可爆性</h2><br><br>
        <h3 class="font-type3">您判定的岩石普氏可爆性指数：
            <el-input style="width:400px" v-model="indexNum" :disabled="true"></el-input>
        </h3>
      </div>

      <div class="card5">
        <h2 class="title-front">7 钻孔与炸药</h2><br><br>
        <div class="strength-div">
        <h3 class="font-type1">炮孔直径：
            <el-input style="width:200px" v-model="diameter"><template slot="suffix">mm</template></el-input>
        </h3>
        </div>

        <div class="strength-div">
        <h3 class="font-type1">设计进尺：
            <el-input style="width:200px" v-model="advance"><template slot="suffix">m</template></el-input>
        </h3>
        </div>

        <div class="strength-div" style="margin-top:30px">
        <h3 class="font-type1">炸药密度：
            <el-input style="width:200px" v-model="density"><template slot="suffix">kg/m3</template></el-input>
        </h3>
        </div>

        <div class="strength-div">
        <h3 class="font-type1">炸药爆速：
            <el-input style="width:200px" v-model="burstSpeed"><template slot="suffix">m/s</template></el-input>
        </h3>
        </div>
      </div>

      <div class="card5">
        <el-button style="margin:50px 0 0 500px" @click="saveMessage()" type="primary">确认并保存工程信息</el-button>
      </div>

    </div>
  </div>
</template>

<script>
import calculateApi from '@/api/calculate.js'
import cookie from 'js-cookie'
export default {
  data () {
      return {
        strength1:'',
        strength2:3,
        indexNum:'',
        diameter: 50,
        advance: '',
        density: '',
        burstSpeed: '',
        explosivityIndexObj:{}, //计算岩石普氏可爆性指数
        saveProjectMessage:{},
      }
    },
  created(){
    // if(this.$route.query.rockId && this.$route.query.ucs && this.$route.query.structureScore && this.$route.query.structuralPlaneScore){
      //为岩石普氏可爆性指数计算参数赋值
    this.explosivityIndexObj.rockId= this.$route.query.rockId;
    this.explosivityIndexObj.ucs= this.$route.query.ucs;
    this.explosivityIndexObj.structureScore= this.$route.query.structureScore;
    this.explosivityIndexObj.structuralPlaneScore= this.$route.query.structuralPlaneScore;

    //为岩石普氏可爆性指数计算参数赋值
    // calculateApi.getExplosivityIndex(this.explosivityIndexObj).then(response => {
    //   this.indexNum = response.data.data.explosivityIndex;
    // })
    // }
    this.indexNum = this.$route.query.ucs/10;
  },
<<<<<<< HEAD
  watch:{
    strength1:{
      handler(newVal,oldVal){
        this.strength2 = newVal * 2550 *10 *0.000001
        },
        immediate: false 
    }
  },
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
  methods:{
    //保存 /更新工程信息
    saveMessage(){
      if(this.indexNum!=null){
        this.saveProjectMessage.explosivityIndex = this.indexNum;
        this.saveProjectMessage.rockId= this.$route.query.rockId;
<<<<<<< HEAD
        this.saveProjectMessage.ucs= this.$route.query.ucs*1000000;
        this.saveProjectMessage.structureScore= this.$route.query.structureScore;
        this.saveProjectMessage.structuralPlaneScore= this.$route.query.structuralPlaneScore;
        this.saveProjectMessage.buriedDeep=this.strength1;
        this.saveProjectMessage.initialGroundStress=this.strength2*1000000;
        this.saveProjectMessage.holeDiameter=this.diameter/1000;
        this.saveProjectMessage.holeLength=this.advance;
        this.saveProjectMessage.explosiveDensity=this.density;
        this.saveProjectMessage.d=this.burstSpeed;
        
        this.saveProjectMessage.excavationCode='001001';
        if(cookie.get("projectId")) this.saveProjectMessage.id = cookie.get("projectId")
        else this.saveProjectMessage.id = ''
        calculateApi.saveProject(this.saveProjectMessage).then(response => {
          if(response.data.code==1){
            cookie.set("projectId",response.data.data.id)
=======
        this.saveProjectMessage.ucs= this.$route.query.ucs;
        this.saveProjectMessage.structureScore= this.$route.query.structureScore;
        this.saveProjectMessage.structuralPlaneScore= this.$route.query.structuralPlaneScore;
        this.saveProjectMessage.buriedDeep=this.strength1;
        this.saveProjectMessage.initialGroundStress=this.strength2;
        this.saveProjectMessage.holeDiameter=this.diameter;
        this.saveProjectMessage.holeLength=this.advance;
        this.saveProjectMessage.explosiveDensity=this.density;
        this.saveProjectMessage.d=this.burstSpeed;
        this.saveProjectMessage.excavationCode='001001';
        this.saveProjectMessage.id = cookie.get("projectId")
        calculateApi.saveProject(this.saveProjectMessage).then(response => {
          if(response.data.data.code==1){
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            alert("工程信息保存成功!");
          }else{
            alert("工程信息保存失败，请重新尝试!");
          }
        })
      }else{
        alert("请正确填入数据！")
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
.card1{
    height: 600px;
    width: 100%;
}
.card5{
  height: auto;
  width: 100%;
}
.strength-div{
  display:inline-block;
  width: 600px;
  height: auto;
}
.font-type1{ 
  margin-left: 50px;
  font-size: 30px !important;
  width: 500px;
}
.font-type2{
  margin-left: 30%;
  font-size: 30px !important;
  width: 400px;
}
.font-type3{ 
  margin-left: 50px;
  font-size: 30px !important;
  width: 1200px;
}
</style>