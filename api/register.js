import request from '@/utils/request'

const api_name ='/user'
export default{
    //用户注册功能
    doRegister(formData){
        return request({
            url: `${api_name}/register`,
            data: formData,
            method: 'post'
        })
    }
}