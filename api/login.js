import request from '@/utils/request'

const api_name ='/user'
export default{
    doLogin(formData){
        return request({
            url: `${api_name}/login`,
            data: formData,
            method: 'post'
        })
    },

    //token获取用户信息
    getUserInfo(){
        return request({
            url: `${api_name}/getLoginInfo`,
            method: 'get'
        })
    },
}