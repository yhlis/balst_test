import request from '@/utils/request'

const api_name ='/surroundingHoles'
export default{
    //计算周边孔的排距和光爆层厚度
    arrayRow(projectId){
        return request({
            url: `${api_name}/array_row/${projectId}`,
            method: 'get'
        })
    },

    //计算周边孔
    getSurrounding(tableData){
        return request({
            url: `${api_name}/get_surrounding`,
            data: tableData,
            method: 'post'
        })
    },

    //保存周边孔
    saveSurrounding(tableData){
        return request({
            url: `${api_name}/save_surrounding`,
            data: tableData,
            method: 'post'
        })
    },

    //查询周边孔
    readSurrounding(projectId){
        return request({
            url: `${api_name}/read_surrounding/${projectId}`,
            method: 'get'
        })
    },
}