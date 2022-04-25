import axios from "axios";

const baseUrl=' http://localhost:3000'//base基础的，根的
//获取轮播图的api，type资源类型，对应以下类型，默认为0，为pc personal computer
//1：android 2.iPhone 3.ipad
export function getBanner(type=0) {//    type:指定参数默认值的第四种方法

//    1
    /*if(!type){
    type=0
    }
    * */
//    2 :  type=type?type:0
//    3:   type=type||0
// return axios.get(baseUrl+'/banner?type='+type)
return axios.get(`${baseUrl}/banner?type=${type}`)//字符串拼接用模板字符串
}
export function getMusicList(limit=10) {
return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// export function getData(type=0) {
// return axios.get(baseUrl+'/data')
// }

//export default 只能导出一个值
//export可以导出多个值