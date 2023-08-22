import axios from 'axios'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
withCredentials: true,
// baseURL: 'http://localhost:8088',
baseURL: 'http://121.4.12.141:8089',
timeout: 20000, // 请求超时时间
})

// service.interceptors.request.use(
//     config => {
//         if (cookie.get('user_token')) {
//             config.headers['token'] = cookie.get('user_token');
//          }else{
//             alert("请先登录！")
//             window.location.href="/login";
//          }
//             return config;
//          },
//             error => {
//             return Promise.reject(error);
//         }
// );
//响应拦截器
// service.interceptors.response.use(
//     response => {
//         //如果接口返回token，替换本地旧token
//         if (response.headers.token) {
//             sessionStorage.setItem("token", response.headers.token);
//         }
//         //自定义设置后台返回code对应的响应方式
//         if (response.data.code == 203) { // 未登录或登录超时
//             return Promise.reject(new Error('登录超时'));
//         } else { //接口正常，返回数据
//             return response;
//         }
//     },
//     error => {
//         if (error.message) {
// 				alert('服务器开小差了，请稍后再试!')   
//         }
//         return Promise.reject(error);
//     }
// );
export default service