import request from '@/utils/request'
const api_name ='/project'
<<<<<<< HEAD
=======
// http://localhost:8088//project/create
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
export default{
    getExplosivityIndex(calObj){
        return request({
            url: `${api_name}/get_explosivity_index`,
            method: 'post',
            data: calObj
        })
    },
<<<<<<< HEAD
    //保存工程信息
    saveProject(message){
        return request({
            url: `${api_name}/save_project`,
=======
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
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
            method: 'post',
            data: message
        })
    },
}