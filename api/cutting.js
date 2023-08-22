import request from '@/utils/request'

const api_name ='/cutting'
const api_name2 ='/cuttingArray'
const api_name3 ='/cuttingHoles'
export default{
    //计算掏槽孔排距信息
    getCuttingArray(tableData){
        return request({
            url: `${api_name}/get_cuttingArray`,
            data: tableData,
            method: 'post'
        })
    },

    //保存掏槽孔信息
    saveCutting(tableData){
        return request({
            url: `${api_name}/save_cutting`,
            data: tableData,
            method: 'post'
        })
    },

    //保存掏槽排距表
    saveCuttingArray(tableData){
        return request({
            url: `${api_name2}/save_cutting_array`,
            data: tableData,
            method: 'post'
        })
    },

    //计算掏槽孔
    getCutting(cuttingId){
        return request({
            url: `${api_name3}/get_cutting_holes/${cuttingId}`,
            method: 'get'
        })
    },

    //保存掏槽孔
    saveCuttingHoles(tableData){
        return request({
            url: `${api_name3}/save_cutting_holes`,
            data: tableData,
            method: 'post'
        })
    },

    //查询掏槽孔
    getCuttingHoles(projectId){
        return request({
            url: `${api_name3}/read_cutting_holes/${projectId}`,
            method: 'get'
        })
    },

}