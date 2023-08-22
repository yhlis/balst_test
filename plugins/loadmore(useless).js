import Vue from 'vue'

Vue.directive('loadmore', {
    bind(el, binding) {
        const selectWrap = el.querySelector('.el-table__body-wrapper')
          selectWrap.addEventListener('scroll', function () {
            const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
            // 判断是否到底,scrollTop为已滚动到元素上边界的像素数，scrollHeight为元素完整的高度，clientHeight为内容的可见宽度
            if (scrollDistance <= 10) {
              binding.value()
            }
          })
            
    }
})
