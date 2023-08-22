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
<<<<<<< HEAD
    //计算底边中点纵坐标
    getBottomY(data){
        return request({
            url: `${api_name}/get_bottom_y`,
            data: data,
            method: 'post'
        })
    },
=======
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
}