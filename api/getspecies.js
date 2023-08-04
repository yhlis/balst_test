import request from '@/utils/request'
const api_name ='/rockType'
// const api_name ='/dictionary'
export default{
    getRockType(){
        return request({
            url: `${api_name}/all`,
            method: 'get'
        })
    },

}