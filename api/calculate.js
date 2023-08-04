import request from '@/utils/request'
const api_name ='/project'
// http://localhost:8088//project/create
export default{
    getExplosivityIndex(calObj){
        return request({
            url: `${api_name}/get_explosivity_index`,
            method: 'post',
            data: calObj
        })
    },
    //创建工程
    createProject(){
        return request({
            url: `${api_name}/create`,
            method: 'get',
        })
    },
    //保存工程信息
    saveProject(message){
        return request({
            url: `${api_name}/save_update_project`,
            method: 'post',
            data: message
        })
    },
}