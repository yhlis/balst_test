// import { GET } from '../utils/_axios'
import drowPointMap from './threeCanvas.js'
new Vue({
  // new Vue ({
  el: '#app',
  data: {
    loadingCanvas: false,
    flag: false,
    state: 'add', //记录添加编辑
    checkAll: false, //全选状态记录
    area: undefined,
    centerPosition: {
      //中心点
      xPoint: undefined,
      yPoint: undefined,
    },
    obj: {
      OneX: '',
      OneY: '',
      TwoX: '',
      TwoY: '',
      Rad: '0',
    },
    Lists: [
      {
        OneX: 4.909723,
        OneY: 0,
        TwoX: 0,
        TwoY: 0,
        Rad: 0,
        id: 1,
        checkAll: true,
      },
      {
        OneX: 0,
        OneY: 0,
        TwoX: -0.362846,
        TwoY: 2.234252,
        Rad: 0,
        id: 2,
        checkAll: true,
      },
      {
        OneX: -0.362846,
        OneY: 2.234252,
        TwoX: 0.043452,
        TwoY: 6.605944,
        Rad: 8.656622,
        id: 3,
        checkAll: true,
      },
      {
        OneX: 0.043452,
        OneY: 6.605944,
        TwoX: 4.909723,
        TwoY: 10.013344,
        Rad: 5.178577,
        id: 4,
        checkAll: true,
      },
    ],
    pointsPositions: [
      {
        xPoint: '',
        yPoint: '',
      },
    ],
    c: '',
    rockDensity: '',
    elasticWaveVelocity: '',
    n1: '10', //掏槽孔耦合系数
    n2: '10', //周边孔耦合系数
    n3: '10', //辅助孔耦合系数
    isopyCoefficient: '3', //不用管，是个定值直接前端输入定值3就行
    initialGroundStress: '3000000', //初始地应力！
    rockDynamicTenStrength: '3000000', //岩石动态抗拉强度！
    holeDiameter: '0.045', //孔直径！
    explosiveDensity: '1100', //炸药密度！
    d: '4100', //炸药爆轰速度！
    dc1: '0.045', //掏槽孔装药直径！
    dc2: '0.032', //周边孔装药直！
    dc3: '0.045', //辅助孔装药直径！
    r1: '5', //最终开挖面的等效半径
    // b: '1', //预估光爆层的厚度！
    b0: '1', //预估爆破层（辅助孔）厚度（排距）b=1！
    r0: '4', //已经形成的临空旧边界半径，可以掏槽孔爆破范围得到
    lc: '4', //装药长度
    l0: '1', //空气/填塞长度
    holeSpace: '', //周边孔孔距
    rowSpace: '', //周边孔排距
    ratio1: '0.6', ///辅助孔孔距取值百分比固定值，也可由用户输入
    ratio2: '0.8', //辅助孔排距百分比固定值，也可由用户输入
    num: '5', //为辅助孔层数！
    holeLength: '4', //循环进尺！
    spaceNumb: '', //掏槽孔预估排数
    // length: '', //循环进尺
    spacing: '1', //孔距
    wedegNum: '5', //楔形掏槽孔层数
    Em :'28718.59',//变形模量

    //辅助孔排距孔距
    auxiliaryArrayRow: [],
    tabList: [
      {
        numColor: 'badge-primary',
        num: '1',
        hrefUrl: 'SurRoc_CroSec',
        text: '围岩条件和断面面积',
      },
      {
        numColor: 'badge-success',
        num: '2',
        hrefUrl: 'Excavation_Explosives',
        text: '掘进参数和炸药参数',
      },
      {
        numColor: 'badge-warning',
        num: '3',
        hrefUrl: 'Hole_spacing_calculation',
        text: '孔距计算',
      },
      {
        numColor: 'badge-info',
        num: '4',
        hrefUrl: 'Borehole calculation',
        text: '炮孔坐标计算',
      },
      // {
      //   numColor: 'badge-danger',
      //   num: '5',
      //   hrefUrl: 'Data_display_and_export',
      //   text: '数据显示及导出',
      // },
    ],
    activeTab: 'SurRoc_CroSec',

    // 计算后的周边孔坐标
    surroundingHoles: [],

    // 直型掏槽孔孔底距离
    cuttingSpace: [],
    // 直型掏槽孔坐标
    // cuttingHoles: [],
    straightCuttingHoles:[],

    // 楔形掏槽孔底和孔口排距
    WedgeCuttingHolesArrayR: [],
    // 楔形掏槽孔坐标
    WedgeCuttingHoles: [],

    // 辅助孔内缩线段坐标列表
    AuxiliaryHoles: [],
    //辅助孔坐标列表
    auxiliaryHoles:[],
  },

 
  mounted() {
    // setTimeout(() => {
    //   this.dropMap()
    // }, 5000)
  },
  // watch: {
  //   lineList: {
  //     // immediate: true,
  //     deep: true,
  //     handler(newValue, olaValue) {
  //       this.dropMap('ContourLine')
  //     },
  //   },
  // },
  computed: {
    lineList() {
      return this.Lists.map(item => {
        return {
          point1: {
            xPoint: item.OneX,
            yPoint: item.OneY,
          },
          point2: {
            xPoint: item.TwoX,
            yPoint: item.TwoY,
          },
          r: item.Rad,
        }
      })
    },

    // 辅助孔排距和孔距数据类型转换
    auxiliaryArrayRowView() {
      const auxiliaryArrayRow = this.auxiliaryArrayRow
      const newPitchSpaceArr = []
      auxiliaryArrayRow.forEach(itemArr => {
        let obj = {
          rowSpacing: '',
          rowPitch: '',
          otP: '',
        }
        obj.rowSpacing = itemArr[0]
        obj.rowPitch = itemArr[1]
        obj.otP = itemArr[2]
        newPitchSpaceArr.push(obj)
      })
      return newPitchSpaceArr
    },

    // 辅助孔线段坐标数据转换
    AuxiliaryHolesView() {
      const AuxiliaryHolesPoints = []
      this.AuxiliaryHoles.forEach(line => {
        line.forEach(pointObj => {
          AuxiliaryHolesPoints.push([pointObj.point1?.xPoint, pointObj.point1?.yPoint], [pointObj.point2?.xPoint, pointObj.point2?.yPoint])
        })
      })
      console.log(AuxiliaryHolesPoints, '辅助孔所有的点')
      // 去除重复点
      const newAuxiliaryHolesPoints = utils_filterPoints(AuxiliaryHolesPoints)
      console.log(newAuxiliaryHolesPoints, '去除重复后的辅助孔坐标')
      return newAuxiliaryHolesPoints
    },

    //辅助孔坐标类型转换
    auxiliaryHolesView() {
      // const cuttingHoles = this.cuttingHoles
      const auxiliaryHoles = this.auxiliaryHoles
      const newauxiliaryHoles = []
      auxiliaryHoles.forEach(itemArr => {
        let obj = {
          auxiliaryHolesX: '',
          auxiliaryHolesY: '',
        }
        obj.auxiliaryHolesX = itemArr[0]
        obj.auxiliaryHolesY = itemArr[1]
        newauxiliaryHoles.push(obj)
      })
      return newauxiliaryHoles
    },

    //周边孔坐标数据转换
    surroundingHolesView() {
      const surroundingHoles = this.surroundingHoles
      const newsurroundingHoles = []
      surroundingHoles.forEach(itemArr => {
        let obj = {
          SurroundX: '',
          SurroundY: '',
        }
        obj.SurroundX = itemArr[0]
        obj.SurroundY = itemArr[1]
        newsurroundingHoles.push(obj)
      })
      return newsurroundingHoles
    },
    //直型掏槽孔坐标数据类型转换
    cuttingHolesView() {
      // const cuttingHoles = this.cuttingHoles
      const straightCuttingHoles = this.straightCuttingHoles
      const newcuttingHoles = []
      straightCuttingHoles.forEach(itemArr => {
        let obj = {
          cuttingHolesX: '',
          cuttingHolesY: '',
        }
        obj.cuttingHolesX = itemArr[0]
        obj.cuttingHolesY = itemArr[1]
        newcuttingHoles.push(obj)
      })
      return newcuttingHoles
    },
    //直型掏槽孔孔底距离数据类型转换
    // cuttingSpaceView() {
    //   const cuttingSpace = this.cuttingSpace
    //   const newcuttingSpaceArr = []
    //   cuttingSpace.forEach(itemArr => {
    //     let obj = {
    //       DistanceStraightCuttingHole1:'',
    //       DistanceStraightCuttingHole2:''

    //     }
    //     obj.DistanceStraightCuttingHole1 = itemArr[0]
    //     obj.DistanceStraightCuttingHole2 = itemArr[1]
    //     newcuttingSpaceArr.push(obj)
    //     console.log(newcuttingSpaceArr)
    //   })
    //   return newcuttingSpaceArr
    // },
    //楔形掏槽孔孔底距离数据类型转换
    WedgeCuttingHolesArrayRView() {
      const WedgeCuttingHolesArrayR = this.WedgeCuttingHolesArrayR
      const newWedgeCuttingArr = []
      WedgeCuttingHolesArrayR.forEach(itemArr => {
        let obj = {
          BottomRowHoles: '',
          OrificeSpacing: '',
        }
        obj.BottomRowHoles = itemArr[0]
        obj.OrificeSpacing = itemArr[1]
        newWedgeCuttingArr.push(obj)
      })
      return newWedgeCuttingArr
    },
    // 计算楔形掏槽孔坐标数据类型转换
    WedgeCuttingHolesView() {
      const WedgeCuttingHoles = this.WedgeCuttingHoles
      const newWedgeCuttingHolesArr = []
      WedgeCuttingHoles.forEach(itemArr => {
        let obj = {
          WedgeCuttingX: '',
          WedgeCuttingY: '',
        }
        obj.WedgeCuttingX = itemArr[0]
        obj.WedgeCuttingY = itemArr[1]
        newWedgeCuttingHolesArr.push(obj)
      })
      return newWedgeCuttingHolesArr
    },
  },
  methods: {
    tabChange(item) {
      this.activeTab = item.hrefUrl
    },
    // var that.Point1.xPoint = this.obj.OneX;
    setData(type, v) {
      //添加，编辑数据
      this.flag = true //弹框显示
      this.state = type
      if (this.state == 'edit') {
        this.obj = { ...v } //...使用针对一级的对象，复杂的对象不使用
      } else {
        this.checkAll = false //全选取消
        this.obj = {}
      }
    },
    submit() {
      //添加，编辑数据提交
      if (this.state == 'add') {
        this.Lists.push({ ...this.obj })
        this.Lists = this.Lists.map((v, i) => {
          return {
            ...v,
            Rad: v.Rad ? v.Rad : 0,
            id: i + 1,
          }
        })
      } else {
        this.Lists.forEach((item, i) => {
          if (item.id == this.obj.id) {
            this.Lists[i] = this.obj
          }
        })
        this.obj = {} //清空
      }
    },
    del(v, i) {
      //数据删除
      this.Lists = this.Lists.filter(item => v.id != item.id) //filter数组筛选，返回满足条件的数值
      this.checkChange()
    },
    checkAllChange() {
      //全选状态的改变
      this.Lists.forEach(v => {
        v.check = this.checkAll
      })
    },
    checkChange() {
      //子选项状态改变
      this.checkAll = this.Lists.every(v => v.check)
    },
    //中心点计算
    async generate() {
      const pointsPositions = []
      this.Lists.forEach(v => {
        pointsPositions.push({ xPoint: v.OneX, yPoint: v.OneY }, { xPoint: v.TwoX, yPoint: v.TwoY })
      })
      this.pointsPositions = pointsPositions
      const res = await POST('/calculate/get_centerPoint', { pointsPositions })
      if (res.code === 1) {
        const centerPosition = { ...res.data.centerPosition }
        this.centerPosition = centerPosition
        const res2 = await POST('/calculate/section_area', {
          centerPosition: this.centerPosition,
          lineList: this.lineList,
        })
        if (res2.code === 1) {
          this.area = res2.data.area
        }
      }
    },
    async SurroundArray() {
      //周边孔排距
      const dataPara = {
        Em: 28718.59, //变形模量
       holeDiameter: this.holeDiameter //炮孔直径holeDiameter

      }
      const res = await POST('/surrounding/array_row', dataPara)
      if (res.code === 1) {
        this.holeSpace = res.data.holeSpace
        this.rowSpace = res.data.rowSpace
      } else {
        // 计算失败
      }
    },
    // 计算周边孔坐标
    async SurroundArrayPosition() {
      const dataPara = {
        lineList: this.lineList,
        surRowSpace: this.holeSpace,
        centerPosition: this.centerPosition,
      }
      const res = await POST('/surrounding/surrounding_holes', dataPara)
      if (res.code === 1) {
        this.surroundingHoles = res.data.surroundingHoles
        console.log(this.surroundingHoles, '计算周边孔坐标')
      }
    },
    // 计算辅助孔的排距和孔距
    async AuxiliaryArray() {
      const dataPara = {
        ratio1: this.ratio1,
        ratio2: this.ratio2,
        num: Number(this.num),
        n3: this.n3,
        isopyCoefficient: this.isopyCoefficient,
        initialGroundStress: this.initialGroundStress,
        rockDynamicTenStrength: this.rockDynamicTenStrength,
        holeLength: this.holeLength,
        holeDiameter: this.holeDiameter,
        explosiveDensity: this.explosiveDensity,
        d: this.d,
        dc3: this.dc3,
        b0: this.b0,
        r0: this.r0,
      }
      const res = await POST('/auxiliary/array_row', dataPara)
      if (res.code === 1) {
        this.auxiliaryArrayRow = res.data.auxiliaryArrayRow
      }
    },

    // 计算辅助孔的坐标线段AuxiliaryArrayPositon
    async  auxiliary_shrink_segment() {
      const dataPara1 = {
        num: Number(this.num),
        lineList: this.lineList,
        pointsPositions: utild_filterobjPoints(this.pointsPositions),
        centerPosition: this.centerPosition,
        surroundArrayRow: [this.holeSpace, this.rowSpace],
        auxiliaryArrayRow: this.auxiliaryArrayRow,
      }
      const res = await POST('/auxiliary/auxiliary_ shrink_segment', dataPara1)
      if (res.code === 1) {
        this.auxiliaryShrinkSegment = res.data.auxiliaryShrinkSegment
        // this.AuxiliaryHoles = res.data.AuxiliaryHoles
        console.log(this.auxiliaryShrinkSegment, '计算辅助孔坐标线段')
      }
    },

    // 计算掏槽孔排距和孔距 --- todo
    getCuthole() {},
    // 计算直型掏槽孔孔底距离
    async straightCuttingCrrayCow() {
      const dataPara = {
        isopyCoefficient: this.isopyCoefficient, //不用管，是个定值直接前端输入定值3就行
        initialGroundStress: this.initialGroundStress, //初始地应力
        rockDynamicTenStrength: this.rockDynamicTenStrength, //岩石动态抗拉强度
        holeDiameter: this.holeDiameter, //炮孔直径holeDiameter
        explosiveDensity: this.explosiveDensity, //炸药密度explosiveDensity
        d: this.d, //炸药爆轰速度
        dc1: this.dc1, //掏槽孔装药直径
      }
      const res = await POST('/cutting/straight_array_row', dataPara)
      if (res.code === 1) {
        this.cuttingSpace = res.data.cuttingSpace
        console.log(this.cuttingSpace, '计算直型掏槽孔孔底距离')
      }
    },
    // 计算直型掏槽孔坐标
    async getCutholePositon() {
      const dataPara = {
        holeSpacing: 1, //掏槽孔孔距（先默认值，不显示在界面上）
        spaceNumb: 5, //掏槽孔排数（先默认值，不显示在界面上）
        columnNumb: 4, //掏槽孔排距（先默认值，不显示在界面上）
        centerBottom: 
        [this.centerPosition.xPoint, 
          this.rowSpace + this.auxiliaryArrayRowView[0].rowPitch
        ], //掏槽孔底边中点坐标（第一个是图形中心的x坐标，第二个是第一层辅助孔的排距+z周边孔的排距）
        // n1: 1,
        n1: this.n1,
        isopyCoefficient: 3, //不用管，是个定值直接前端输入定值3就行
        initialGroundStress: this.initialGroundStress, //初始地应力
        rockDynamicTenStrength: this.rockDynamicTenStrength, //岩石动态抗拉强度
        holeLength: this.holeLength, //炮孔直径
        holeDiameter: this.holeDiameter, //炮孔直径holeDiameter
        explosiveDensity: this.explosiveDensity, //炸药密度explosiveDensity
        d: this.d, //炸药爆轰速度
        dc1: this.dc1,
        cuttingSpace: this.cuttingSpace,
      }
      const res = await POST('/cutting/straight_cutting_holes', dataPara)
      if (res.code === 1) {
        this.straightCuttingHoles = res.data.straightCuttingHoles
        // this.cuttingHoles = res.data.cuttingHoles
        console.log(this.straightCuttingHoles, '直型掏槽孔坐标')
      }
    },
    // 计算楔形掏槽孔底距离
    async DistanceWedgeCuttingHole() {
      const dataPara = {
        n1: this.n1, //掏槽孔的耦合系数
        isopyCoefficient: this.isopyCoefficient, //不用管，是个定值直接前端输入定值3就行
        initialGroundStress: this.initialGroundStress, //初始地应力
        rockDynamicTenStrength: this.rockDynamicTenStrength, //岩石动态抗拉强度
        holeLength: this.holeLength, //开挖深度（循环进尺？）
        holeDiameter: this.holeDiameter, //炮孔直径holeDiameter
        explosiveDensity: this.explosiveDensity, //炸药密度explosiveDensity
        d: this.d, //炸药爆轰速度
        dc1: this.dc1, //掏槽孔装药直径
      }
      const res = await POST('/cutting/wedge_array_row', dataPara)
      if (res.code === 1) {
        this.WedgeCuttingHolesArrayR = res.data.WedgeCuttingHolesArrayR
        console.log(this.WedgeCuttingHolesArrayR, '计算直型掏槽孔孔底距离')
      }
    },
    // 计算楔形掏槽孔坐标
    async CoordinateWedgeCutHole() {
      const dataPara = {
        // n1: 1,
        n1: this.n1, //掏槽孔的耦合系数
        isopyCoefficient: this.isopyCoefficient, //不用管，是个定值直接前端输入定值3就行
        initialGroundStress: this.initialGroundStress, //初始地应力
        rockDynamicTenStrength: this.rockDynamicTenStrength, //岩石动态抗拉强度
        holeLength: this.holeLength, //开挖深度（循环进尺？）
        holeDiameter: this.holeDiameter, //炮孔直径holeDiameter
        explosiveDensity: this.explosiveDensity, //炸药密度explosiveDensity
        d: this.d, //炸药爆轰速度
        dc1: this.dc1,
        centerBottom: [this.centerPosition.xPoint, this.rowSpace + this.auxiliaryArrayRowView[0].rowPitch],

        spacing: this.spacing, //孔距
        wedegNum: this.wedegNum, //楔形掏槽孔层数
      }
      const res = await POST('/cutting/wedge_cutting_holes', dataPara)
      if (res.code === 1) {
        this.WedgeCuttingHoles = res.data.WedgeCuttingHoles
      }
    },


    //计算辅助孔坐标
    async auxiliary_holes(){
      const dataPara1 = {
        pointsPositions: utild_filterobjPoints(this.pointsPositions),//用户输入点列表
        centerPosition: this.centerPosition,//中心点坐标
        surroundArrayRow: [this.holeSpace, this.rowSpace],//周边孔的 第一个是孔距，第二个是排距
        auxiliaryArrayRow: this.auxiliaryArrayRow,
        auxiliaryShrinkSegment: this.auxiliaryShrinkSegment,
        straightCuttingHoles:this.straightCuttingHoles,//直型掏槽孔坐标
      }
      const res = await POST('/auxiliary/auxiliary_holes', dataPara1)
      if (res.code === 1) {
        this.auxiliaryHoles = res.data.auxiliaryHoles
        // this.AuxiliaryHoles = res.data.AuxiliaryHoles
        console.log(this.auxiliaryHoles, '计算辅助孔坐标')
      }

    },
    // 直线轮廓线
    generateSeg() {
      this.dropMap('ContourLine')
    },
    // 弧线轮廓线
    async generateArc() {
      this.loadingCanvas = true
      // 过滤弧线
      const lineArr = _.flattenDepth(this.lineList, 1)
      const arcArcment = lineArr.filter(v => v.r != 0)
      // 计算弧线圆心坐标
      for (let i = 0; i < arcArcment.length; i++) {
        const par = {
          ...arcArcment[i],
          centerPosition: this.centerPosition,
        }
        const res = await POST('/calculate/get_arc_center', par)
        if (res.code === 1) {
          arcArcment[i] = {
            ...arcArcment[i],
            arcCenter: { ...res.data },
          }
          const anglPar = {
            ...arcArcment[i],
            arcCenter: {
              xPoint: res.data.arcCenterX,
              yPoint: res.data.arcCenterY,
            },
          }
          console.log(anglPar, 'anglPar')
          // 计算弧线圆心角的弧度
          const res2 = await POST('/calculate/get_Angle', anglPar)
          if (res2.code === 1) {
            arcArcment[i] = {
              ...arcArcment[i],
              ...res2.data,
              r: Number(arcArcment[i].r),
            }
          }
        }
      }
      setTimeout(() => {
        console.log(arcArcment)
        this.dropMap('ContourArcLine', { arcArcment })
        this.loadingCanvas = false
      }, 3000)
    },
    // 生成轮廓线
    async generateLine() {
      this.loadingCanvas = true
      // 过滤弧线
      const lineArr = _.flattenDepth(this.lineList, 1)
      const arcArcment = lineArr.filter(v => v.r != 0)
      // 计算弧线圆心坐标
      for (let i = 0; i < arcArcment.length; i++) {
        const par = {
          ...arcArcment[i],
          centerPosition: this.centerPosition,
        }
        const res = await POST('/calculate/get_arc_center', par)
        if (res.code === 1) {
          arcArcment[i] = {
            ...arcArcment[i],
            arcCenter: { ...res.data },
          }
          const anglPar = {
            ...arcArcment[i],
            arcCenter: {
              xPoint: res.data.arcCenterX,
              yPoint: res.data.arcCenterY,
            },
          }
          // 计算弧线圆心角的弧度
          const res2 = await POST('/calculate/get_Angle', anglPar)
          if (res2.code === 1) {
            arcArcment[i] = {
              ...arcArcment[i],
              ...res2.data,
              r: Number(arcArcment[i].r),
            }
          }
        }
      }

      // 弧线 arcArcment

      // 直线段
      const lineSegment = lineArr
        .filter(v => v.r == 0)
        .map(v => {
          return {
            startx: v.point1.xPoint,
            starty: v.point1.yPoint,
            endx: v.point2.xPoint,
            endy: v.point2.yPoint,
          }
        })

      setTimeout(() => {
        console.log(arcArcment)
        this.dropMap('allLine', { arcArcment, lineSegment })
        this.loadingCanvas = false
      }, 3000)
    },
    async generatePoint() {
      this.loadingCanvas = true
      const surroundingHoles = this.surroundingHoles
      const straightCuttingHoles = this.straightCuttingHoles// 直型掏槽孔坐标
      const auxiliaryHoles = this.auxiliaryHolesView//辅助孔坐标
      const WedgeCuttingHoles = this.WedgeCuttingHoles//楔形掏槽孔的坐标
      setTimeout(() => {
        this.dropMap('allPoints', { surroundingHoles, straightCuttingHoles, auxiliaryHoles, WedgeCuttingHoles })
        this.loadingCanvas = false
      }, 3000)
    },
    parseLineListData() {
      const lineArr = _.flattenDepth(this.lineList, 1)
      // 直线段
      const lineSegment = lineArr
        .filter(v => v.r == 0)
        .map(v => {
          return {
            startx: v.point1.xPoint,
            starty: v.point1.yPoint,
            endx: v.point2.xPoint,
            endy: v.point2.yPoint,
          }
        })
      return lineSegment
    },
    async creatingaDrawing() {
      this.loadingCanvas = true
      // 过滤弧线
      const lineArr = _.flattenDepth(this.lineList, 1)
      const arcArcment = lineArr.filter(v => v.r != 0)
      // 计算弧线圆心坐标
      for (let i = 0; i < arcArcment.length; i++) {
        const par = {
          ...arcArcment[i],
          centerPosition: this.centerPosition,
        }
        const res = await POST('http://121.4.12.141:8090/calculate/get_arc_center', par)
        if (res.code === 1) {
          arcArcment[i] = {
            ...arcArcment[i],
            arcCenter: { ...res.data },
          }
          const anglPar = {
            ...arcArcment[i],
            arcCenter: {
              xPoint: res.data.arcCenterX,
              yPoint: res.data.arcCenterY,
            },
          }
          // 计算弧线圆心角的弧度
          const res2 = await POST('http://121.4.12.141:8090/calculate/get_Angle', anglPar)
          if (res2.code === 1) {
            arcArcment[i] = {
              ...arcArcment[i],
              ...res2.data,
              r: Number(arcArcment[i].r),
            }
          }
        }
      }

      // 弧线 arcArcment
      // 直线段
      const lineSegment = lineArr
        .filter(v => v.r == 0)
        .map(v => {
          return {
            startx: v.point1.xPoint,
            starty: v.point1.yPoint,
            endx: v.point2.xPoint,
            endy: v.point2.yPoint,
          }
        })
      const surroundingHoles = this.surroundingHoles
      const straightCuttingHoles = this.straightCuttingHoles
      // const AuxiliaryHoles = this.AuxiliaryHolesView
      const auxiliaryHoles = this.auxiliaryHoles
      const WedgeCuttingHoles = this.WedgeCuttingHoles

      const symmetryPoints = this.dealSymmetryPoints({
        surroundingHoles,
        straightCuttingHoles,
        auxiliaryHoles,
        WedgeCuttingHoles,
      })
      setTimeout(() => {
        this.dropMap('allLineAllPoints', {
          arcArcment,
          lineSegment,
          surroundingHoles,
          straightCuttingHoles,
          auxiliaryHoles,
          WedgeCuttingHoles,
          symmetryPoints,
        })
        this.loadingCanvas = false
      }, 2000)
    },
    // 生成对称点
    dealSymmetryPoints(points) {
      const surroundingHoles = this.deal(points.surroundingHoles)
      const straightCuttingHoles = this.deal(points.straightCuttingHoles)
      const auxiliaryHoles = this.deal(points.auxiliaryHoles)
      const WedgeCuttingHoles = this.deal(points.WedgeCuttingHoles)
      const symmetryPoints = {
        surroundingHoles,
        straightCuttingHoles,
        auxiliaryHoles,
        WedgeCuttingHoles,
      }
      return symmetryPoints
    },
    deal(arr) {
      const newArr = _.cloneDeep(arr)
      // 对称线
      const centerLinex = this.centerPosition.xPoint //Math.max(...newArr.map(v => v[0]))
      newArr.forEach(arrItem => {
        arrItem[0] = arrItem[0] == 0 ? 0 : 2 * centerLinex - arrItem[0]
      })
      return newArr
    },
    dropMap(type, params = {}) {
      const lineListData = this.parseLineListData()
      const dataSetMap = {
        surroundingHoles: {
          droptype: 'point',
          data: this.surroundingHoles,
        },
        // 画图的类型  数据
        straightCuttingHoles: {
          droptype: 'point',
          data: this.straightCuttingHoles,
        },
        auxiliaryHoles: {
          droptype: 'point',
          data: this.auxiliaryHoles,
          // data: this.AuxiliaryHolesView,
        },
        WedgeCuttingHoles: {
          droptype: 'point',
          data: this.WedgeCuttingHoles,
        },
        ContourLine: {
          droptype: 'line',
          data: lineListData,
        },
        ContourArcLine: {
          droptype: 'ContourArcLine',
          data: params?.arcArcment || [],
        },
        allLine: {
          droptype: 'allLine',
          data: {
            arcArcment: params?.arcArcment || [],
            lineSegment: params?.lineSegment || [],
          },
        },
        allPoints: {
          droptype: 'allPoints',
          data: {
            surroundingHoles: params?.surroundingHoles || [],
            straightCuttingHoles: params?.straightCuttingHoles || [],
            auxiliaryHoles: params?.auxiliaryHoles || [],
            WedgeCuttingHoles: params?.WedgeCuttingHoles || [],
          },
        },
        allLineAllPoints: {
          droptype: 'allLineAllPoints',
          data: {
            // ...params,
            arcArcment: params?.arcArcment || [],
            lineSegment: params?.lineSegment || [],
            surroundingHoles: params?.surroundingHoles || [],
            straightCuttingHoles: params?.straightCuttingHoles || [],
            auxiliaryHoles: params?.auxiliaryHoles || [],
            WedgeCuttingHoles: params?.WedgeCuttingHoles || [],
            symmetryPoints: params?.symmetryPoints || {},
          },
        },
      }
      if (dataSetMap[type]) {
        new drowPointMap('#engineeringDrawing', dataSetMap[type].droptype, dataSetMap[type].data)
      }
    },
  },
})
