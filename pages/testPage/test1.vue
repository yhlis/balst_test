<template>
  <div>
    <el-table
      :data="tableData"
      size="mini"
      style="width: 600px"
      @cell-mouse-enter="handleCellEnter"
      @cell-mouse-leave="handleCellLeave"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.date" placeholder="请输入内容"></el-input>
          <div class="item__txt">{{scope.row.date}}</div>
        </div>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <div class="item" slot-scope="scope">
          <el-input class="item__input" v-model="scope.row.name" placeholder="请输入内容"></el-input>
          <div class="item__txt">{{scope.row.name}}</div>
        </div>
      </el-table-column>
      <el-table-column
        prop="food"
        label="食物">
        <div class="item" slot-scope="scope">
          <el-select class="item__input" v-model="scope.row.food" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div class="item__txt">{{foodLabel(scope.row.food)}}</div>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Batch',
  data () {
    return {
      // 下拉选项
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      // 表格数据
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        food: '选项5'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        food: '选项5'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        food: '选项5'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        food: '选项5'
      }],
      // 需要编辑的属性
      editProp: ['date', 'name', 'food']
    }
  },
  computed: {
    foodLabel () {
      return (val) => {
        return this.options.find(o => o.value === val).label
      }
    }
  },
  methods: {
    /** 鼠标移入cell */
    handleCellEnter (row, column, cell, event) {
      const property = column.property
      if (this.editProp.includes(property)) {
        cell.querySelector('.item__input').style.display = 'block'
        cell.querySelector('.item__txt').style.display = 'none'
      }
    },
    /** 鼠标移出cell */
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
.item .item__input {
  display: none;
  width: 100px;
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

