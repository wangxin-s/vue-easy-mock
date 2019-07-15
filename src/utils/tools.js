import axios from 'axios';

//添加请求拦截器， 在发送请求前 做些什么 例如添加接口公参，
axios.interceptors.request.use((cfg) => {

    return cfg;
})

//添加接口响应拦截器
axios.interceptors.response.use((res) => {

    return res;
})

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;



let Tools = {
    async ajax(cfg){
        let res = await axios(cfg);
        return res;
    }
}

export default Tools;
