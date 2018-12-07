//request.js
import axios from "axios";
import qs from "qs";
import app from "../main.js";
import {Message} from 'element-ui';
import { MessageBox } from 'element-ui';
/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: process.env.API_ROOT_URL,  // api的base_url
    timeout: 5000 , // 请求超时时间
//     withCredentials: true
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
 
    config.method === 'post'
        ? config.data = JSON.stringify(config.data)
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/json';
 
    return config;
}, error => {  //请求错误处理
   Message({
       message: '请求超时',
       type: 'warning'
   });
    Promise.reject(error)
});

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {  //成功请求到数据
        //这里根据后端提供的数据进行对应的处理
     //     console.log(response)
        if (response.data.code == 200) {
            return response.data.data;
        } else {
        	Message({
               message: response.data.msg,
               type: 'warning'
           });
          return Promise.reject(data);
        }
    },
    err => {  //响应错误处理
        console.log('error');
 
        let text = JSON.parse(JSON.stringify(err)).response.status 
        switch(text){
             case 400 : 
                  err.message = '请求错误' ; 
                  break ; 
             case 401 : 
                  err.message = '登录信息已过期，请重新登录' ; 
                  break ; 
             case 403 : 
                  err.message = '拒绝访问' ; 
                  break ; 
             case 404  : 
                  err.message = `请求地址错误：${err.response.config.url}` ; 
                  break; 
             case 408 : 
                  err.message = '请求超时'  ; 
                  break ; 
             case 500 : 
                  err.message = '服务器内部错误' ; 
                  break ; 
             case 501 : 
                  err.message = '服务未实现' ; 
                  break ; 
             case 502 : 
                  err.message = '网关错误' ; 
                  break ; 
             case 503 : 
                  err.message = '服务不可用' ; 
                  break;
             case 504 : 
                  err.message = '网关超时' ; 
                  break ; 
             case 505 : 
                  err.message = 'HTTP版本不受支持' ; 
                  break ; 
             default : 
             
        }
        console.log(err)
        Message({
           message: err.message,
           type: 'warning'
       });

        if(text==401){
          console.log('登陆失效了')
        }
        return Promise.reject(error)
    }
);

export default service;

