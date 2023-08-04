<template>
  <div class="main">
    <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
      <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label" min-width="180" />
    </el-table>
  </div>
</template>

<script>
import { getMergeCells } from '@/utils/table.js'
export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      tableColumn: [
        { prop: 'School', label: '学校' },
        { prop: 'Grade', label: '年级' },
        { prop: 'Class', label: '班级' },
        { prop: 'Name', label: '姓名' },
        { prop: 'Chinese', label: '中文' },
        { prop: 'Math', label: '数学' },
        { prop: 'English', label: '英文' }
      ],
      tableData: [
        { School: '第一小学', Grade: '1年级', Class: '1班', Name: '张三', Chinese: '90', Math: '100', English: '80' },
        { School: '第一小学', Grade: '1年级', Class: '1班', Name: '张伟', Chinese: '90', Math: '99', English: '89' },
        { School: '第一小学', Grade: '1年级', Class: '2班', Name: '李四', Chinese: '90', Math: '85', English: '80' },
        { School: '第一小学', Grade: '1年级', Class: '3班', Name: '王五', Chinese: '79', Math: '100', English: '80' },
        { School: '第一小学', Grade: '2年级', Class: '1班', Name: '赵六', Chinese: '95', Math: '100', English: '80' },
        { School: '第一小学', Grade: '2年级', Class: '2班', Name: '钱八', Chinese: '98', Math: '85', English: '80' },
        { School: '第一小学', Grade: '2年级', Class: '3班', Name: '陈九', Chinese: '79', Math: '100', English: '100' },
        { School: '第一小学', Grade: '3年级', Class: '1班', Name: '黄十', Chinese: '91', Math: '88', English: '80' },
        { School: '第一小学', Grade: '3年级', Class: '2班', Name: '魏一', Chinese: '90', Math: '86', English: '87' },
        { School: '第一小学', Grade: '3年级', Class: '3班', Name: '杨二', Chinese: '79', Math: '99', English: '80' },
        { School: '第二小学', Grade: '3年级', Class: '3班', Name: '袁零', Chinese: '79', Math: '99', English: '80' }
      ]
    }
  },
  computed: {
    // 获取所有单元格合并数据
    spanArr() {
      if (!this.tableColumn.length) return []
      const mergeCols = ['School', 'Grade', 'Class'] // 需要合并的列（字段）
      return getMergeCells(this.tableData, this.tableColumn, mergeCols)
    }
  },
  methods: {
    // 表数据合并
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      return this.spanArr[rowIndex][columnIndex]
    }
  }
}
</script>
<style>
.main {
  width: 100%;
  height: 100%;
}
</style>

