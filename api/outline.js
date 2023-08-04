import request from '@/utils/request'

const api_name ='/outline'
//http://localhost:8088/outline/save_update_outline
export default{
    saveOutline(formData){
        //保存和更新断面轮廓线
        return request({
            url: `${api_name}/save_update_outline`,
            data: formData,
            method: 'post'
        })
    },
}