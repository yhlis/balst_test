<template>
  <div>
    <div class="card1">
      <h2 class="title-front">4 岩石结构面</h2><br>

      <h3 class="font-size" style="text-align:center">粗糙程度</h3><br>
      <section class="wrapper">
        <div class="face-info" v-for="(item,index) in dataset1" :key="index">
          <p style="margin-left:20px">{{item.desc1}}</p>
        </div>
        <el-button class="button-style" type="primary" v-for="(item,index) in dataset1" :key="index+'1'"
          @click="addSum(item.sc1,1)" :disabled="disable1" round>{{item.sc1}}</el-button>
      </section>
      <br>

      <h3 class="font-size" style="text-align:center">风化程度</h3><br>
      <section class="wrapper">
        <div class="face-info" v-for="(item,index) in dataset2" :key="index">
          <p style="margin-left:20px">{{item.desc2}}</p>
        </div>
        <el-button class="button-style" type="primary" v-for="(item,index) in dataset2" :key="index+'1'"
          @click="addSum(item.sc2,2)" :disabled="disable2" round>{{item.sc2}}</el-button>
      </section>
      <br>

      <h3 class="font-size" style="text-align:center">胶结程度</h3><br>
      <section class="wrapper">
        <div class="face-info" v-for="(item,index) in dataset3" :key="index">
          <p style="margin-left:20px">{{item.desc3}}</p>
        </div>
        <el-button class="button-style" type="primary" v-for="(item,index) in dataset3" :key="index+'1'"
          @click="addSum(item.sc3,3)" :disabled="disable3" round>{{item.sc3}}</el-button>
      </section>
      <br>
    </div>

    <br>
        <el-form ref="form" label-width="200px">
            <el-form-item label="您判定的岩体结构面分值：" style="width:1000px">
                <el-input v-model="structuralPlaneScore"></el-input>
                <el-button @click="check()" type="primary">确认</el-button>
            <el-button type="primary" @click="reset()">重置</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataset1:[{desc1:'崎岖：非常不平整，有大量的凹陷和突起，形成粗糙的表面',sc1:5},
      {desc1:'波状：形成波浪状的起伏，呈现连续的曲线形态',sc1:4},
      {desc1:'粗糙：明显的凹凸不平，有较大的起伏和凸起',sc1:3},
      {desc1:'稍凹凸：具有轻微的凹凸不平，但整体仍然比较平整',sc1:2},
      {desc1:'平直：平整、光滑，几乎没有明显的凸起或凹陷',sc1:1}],
      
      dataset2:[{desc2:'未风化：完全没有发生显著的风化，保持着原始的岩石特征',sc2:5},
      {desc2:'微风化：存在些许风化迹象，例如颜色的变化、微小裂纹的形成等',sc2:4},
      {desc2:'中风化：有明显的风化迹象，如表面脱落、裂缝扩展、岩石颗粒的松散等',sc2:3},
      {desc2:'强风化：经过广泛的风化作用，可能出现大面积的颗粒脱落、裂缝扩展、层间解体等现象',sc2:2},
      {desc2:'全风化：在长期的风化作用下已经严重剥蚀，表面可能显得破碎、颗粒松散或完全糜烂',sc2:1}],

      dataset3:[{desc3:'极强胶结：胶结物非常牢固，具有极高的抗剪强度，几乎无法破坏或分离',sc3:5},
      {desc3:'强胶结：胶结物牢固，具有很高的抗剪强度，很难破坏或分离',sc3:4},
      {desc3:'中胶结：胶结物较为坚固，具有一定的抗剪强度，难以轻易破坏或分离',sc3:3},
      {desc3:'弱胶结：胶结物的强度较弱，容易被破坏或分离。',sc3:2},
      {desc3:'无胶结：无胶结物，或泥质、碎屑充填，结构面之间可以自由移动或者分离',sc3:1}],

      structuralPlaneScore: 0,
      disable1: false,
      disable2: false,
      disable3: false,
      rockId:'',
      ucs:'',
      structureScore:'',
    }
  },
  mounted(){
        this.rockId= this.$route.query.rockId;
        this.ucs= this.$route.query.ucs;
        this.structureScore= this.$route.query.structureScore;
  },
  methods:{
    addSum(scor,dis){
      this.structuralPlaneScore=this.structuralPlaneScore+scor;
      if(dis==1)
      this.disable1=true;
      else if(dis==2)
      this.disable2=true;
      else if(dis==3)
      this.disable3=true;
    },
    reset(){
<<<<<<< HEAD
      this.structuralPlaneScore=0;
=======
      this.score=0;
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
      this.disable1=false;
      this.disable2=false;
      this.disable3=false;
    },
    check(){
      if(this.structuralPlaneScore){
        this.$router.push ({ path:'/method1/pagefivesixseven', 
        query: { rockId:this.rockId,ucs:this.ucs,
        structureScore:this.structureScore,structuralPlaneScore:this.structuralPlaneScore } }) 
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
.font-size{
  font-size: 20px !important;
}
.wrapper{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.face-info{
  width: 20%;
}
.button-style{
  display:block;
  margin:0 auto;
}
</style>