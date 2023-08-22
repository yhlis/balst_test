<template>
<<<<<<< HEAD
<!-- 此文件为threejs文件用以数据可视化 -->
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
export default {
  name: "show",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      arcLine: null,
      straightLine: null,

      outLineData:{},
<<<<<<< HEAD
      getFatherData:null,       //接收轮廓线
      getVertices:null,         //接收掏槽孔数据点
      getVertices2:null,        //接收周边孔数据点
      getTube:null,
=======
      getFatherData:null,
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    };
  },
  props: {
      itemData: {
        type: Object,
        default () {
          return {}
        }
<<<<<<< HEAD
      },
      vertices:{type: Array,
        default () {
          return []
        }},
      vertices2:{type: Array,
        default () {
          return []
        }},
      tube:{type: Array,
        default () {
          return []
        }},
=======
      }
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
  },

  methods: {
    init() {
    // 创建场景和相机
    //与show.js不同
    let container = document.getElementById("container");
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70,
        container.clientWidth / container.clientHeight,
        0.01,
        2000);
    this.camera.position.set(5, 5, 8);
    // 创建渲染器
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    //与show.js不同
    container.appendChild(this.renderer.domElement);

    //控制器
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', this.render);
    },

    ArcLine(x, y, rx, StartAngle, endAngle) {
        var geometry = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
        // // 创建弧线几何体
        //参数：前两个参数圆弧坐标原点x,y  第三个为：圆弧半径    0, 2 * Math.PI：圆弧起始角度

        // var StartAngle1 = (StartAngle / Math.PI * 180) / 180 * Math.PI
        // var endAngle1 = (endAngle / Math.PI * 180) / 180 * Math.PI

        var StartAngle1 = (((StartAngle / Math.PI) * 180) / 180) * Math.PI
        var endAngle1 = (((endAngle / Math.PI) * 180) / 180) * Math.PI

        var arc = new THREE.ArcCurve(x, y, rx, StartAngle1, endAngle1);
        //getPoints是基类Curve的方法,返回一个vector2对象作为元素组成的数组
        var points = arc.getPoints(50); //分段数50,返回51个顶点
        // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
        geometry.setFromPoints(points);

        // 创建线段材质
        var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

        // 创建线段对象
        this.arcLine = new THREE.Line(geometry, material);

        // 将线段添加到场景中
        this.scene.add(this.arcLine);
    },
    StraigrtLine(x, y, z, i, j, k) { //x,y,z为第一个点的坐标，i，j,k为第二个点的坐标
        const geometry = new THREE.BufferGeometry();
        const start = new THREE.Vector3(x, y, z);
        const end = new THREE.Vector3(i, j, k);
        const lineCurve = new THREE.LineCurve3(start, end);
        const points2 = lineCurve.getPoints(100);
        geometry.setFromPoints(points2);
        const material = new THREE.LineBasicMaterial({
            color: 0x8888,
            linewidth: 1,
        });
        const straightLine = new THREE.Line(geometry, material);
        this.scene.add(straightLine);
    },

    showTube(x, y, z, i, j, k) {
        // 三维样条曲线
        const path = new THREE.CatmullRomCurve3([
<<<<<<< HEAD
            new THREE.Vector3(x, y, 0),
            new THREE.Vector3(i, j, k),
            // new THREE.Vector3(0.0, 0.0, 0.0),
            // new THREE.Vector3(-3.0, 4.0, 3.0),
=======
            new THREE.Vector3(0.0, 0.0, 0.0),
            new THREE.Vector3(-3.0, 4.0, 3.0),
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
        ]);
        // 样条曲线path作为TubeGeometry参数生成管道
        const geometry = new THREE.TubeGeometry(path, 200, 0.1, 100);

        const material = new THREE.MeshBasicMaterial({
            //map: texture,
            //side: THREE.DoubleSide, //双面显示看到管道内壁
            color: 0xffffff,
            wireframeLinecap: 'square',
            aoMapIntensity: 0,
        });
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
    },
    initPoint(vertices) {
        let canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;

        let context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";

        //canvas 创建圆
        context.arc(50, 50, 20, 0, 2 * Math.PI);
        context.fill();

        // 创建材质
        let texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        //创建点,是用PointsMaterial的map属性来设置材质
        let geometry = new THREE.BufferGeometry();
        // 点位置
        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(vertices, 3)
        );


        let material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.4,
            map: texture
        });

        let points = new THREE.Points(geometry, material);


        return points;
    },
    render () {
      this.renderer.render(this.scene, this.camera)
    },  
<<<<<<< HEAD
    //实现画图测试
=======
    //测试数据
    testMethod(){
this.StraigrtLine(0, 0, 2 * 4.909723, 0)
this.StraigrtLine(0, 0, -0.362846, 2.234252)
this.StraigrtLine(2 * 4.909723, 0, 0.36 * 2 + 2 * 4.75, 2.234252)
this.ArcLine(8.178, 3.6452, 8.6566, (2.7925 / Math.PI) * 180, (3.3053 / Math.PI) * 180 - (Math.PI * 4.9) / 4)
this.ArcLine(4.91 - (8.178 - 4.91), 3.6452, 8.656622, (-2.7925 / Math.PI) * 180 + (Math.PI * 7) / 8, (3.3053 / Math.PI) * 180 - (Math.PI * 2) / 9.5)
this.ArcLine(4.9097, 4.8347, 5.1785, (1.5707 / Math.PI) * 180 + (Math.PI * 7) / 5, (3.5997 / Math.PI) * 180 + (Math.PI * 13) / 10)
    },
    //实现画图
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    buildLine(){
      // console.log()
      // if(this.outLineData){
      //   this.outLineData.forEach((item,index) => {
      //    console(item.x2)
      //   });
      // }
    },
<<<<<<< HEAD
     // 清空场景
    clearScene() {
    if (this.scene) {
      this.render = null
      this.scene.traverse(function (v) {
        if (v.type === 'Mesh') {
          v.geometry.dispose()
          v.material.dispose()
        }
      })
      while (this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0])
      }
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer.domElement = null
      this.renderer = null
      this.scene.clear()
      this.scene = null
      this.camera = null
      this.controls = null
    }
    }
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
  },
  watch: {
      itemData:{
        handler(newV) {
          this.getFatherData = newV;//将监听到修改的值赋予到getFatherData中
            // console.log("getFatherData"+JSON.stringify(this.getFatherData));
<<<<<<< HEAD
            console.log("this.getFatherData   "+typeof(this.getFatherData))
            // if(this.getFatherData !== undefined && Object.keys(this.getFatherData).length !== 0){
              this.getFatherData.data.map((item) => {
                if(item.r == 0){
                  this.StraigrtLine(item.x1,item.y1,0,item.x2,item.y2,0)
                }else{
                  this.ArcLine(item.arcCenterX,item.arcCenterY,item.r,item.endAngle,item.startAngle)
                }
              });
            // }
        },
        deep: true,
        // immediate:true
      },
      vertices:{
        handler(newV) {
          this.getVertices = newV;
          // console.log("getVertices 是的烦烦烦烦烦烦"+JSON.stringify(this.getVertices));
          console.log("this.getVertices   "+typeof(this.getVertices))
          var points = this.initPoint(this.getVertices);
          this.scene.add(points);
        },
        deep: true,
      },
      vertices2:{
        handler(newV) {
          this.getVertices2 = newV;
          console.log("this.getVertices2    "+typeof(this.getVertices2))
          var points2 = this.initPoint(this.getVertices2);
          this.scene.add(points2); 
        },
        deep: true,
      },
      tube:{
        handler(newV) {
          this.getTube = newV;
          // console.log("tube    啊啊啊啊啊啊啊啊啊啊啊"+JSON.stringify(this.getTube));
          this.getTube.map((item) => {
          this.showTube(item.x1,item.y1,0,item.x2,item.y2,item.z2)
          });
        },
        deep: true,
      },
    },

  mounted() {
    this.getFatherData= this.itemData;
    this.init();
=======
            this.getFatherData.data.map((item) => {
              if(item.r == 0){
                this.StraigrtLine(item.x1,item.y1,0,item.x2,item.y2,0)
              }else{
                this.ArcLine(item.arcCenterX,item.arcCenterY,item.r,item.endAngle,item.startAngle)
              }
            });
        },
        // object对象启深度监听功能
        deep: true
      }
    },

  mounted() { 
    this.getFatherData= this.itemData;
    this.init();
    //测试
    // this.testMethod();
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    // this.showTube();
    this.render();
  },
  created(){
<<<<<<< HEAD
    this.clearScene();
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    //当屏幕尺寸发生改变时重新渲染物体,未实现
    window.addEventListener('resize', (event) => {
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    })
  }
};
</script>
<style scoped>
#container {
  height:500px;
  width:650px;
}

</style>