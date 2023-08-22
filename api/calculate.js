import request from '@/utils/request'
const api_name ='/project'
export default{
    getExplosivityIndex(calObj){
        return request({
            url: `${api_name}/get_explosivity_index`,
            method: 'post',
            data: calObj
        })
    },
    //保存工程信息
    saveProject(message){
        return request({
            url: `${api_name}/save_project`,
            method: 'post',
            data: message
        })
    },
}