import request from '@/utils/request'
const api_name ='/auxiliaryHoles'
export default{
    //计算辅助孔
    getAuxHoles(getData){
        return request({
            url: `${api_name}/get_aux_holes`,
            method: 'post',
            data: getData
        })
    },
    
    //保存辅助孔
    saveAuxHoles(datas){
        return request({
            url: `${api_name}/save_aux_holes`,
            method: 'post',
            data: datas
        })
    },

    //查询辅助孔
    readAuxHoles(projectId){
        return request({
            url: `${api_name}/read_aux_holes/${projectId}`,
            method: 'get'
        })
    },
    
}