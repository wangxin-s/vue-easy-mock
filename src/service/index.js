import tools from '@/utils/tools.js';
//import url from './url'

const common = function () {
  return JSON.parse(sessionStorage.getItem('assent_token'));
}

export const login = (data) => {
  //接口公参添加
  data = {
    data, ...common
  };
  let cfg = {
    method: 'post',
    url: '/api/mock',
    // http xxx   url:url['接口别名']
    data,
  }
  return tools.ajax(cfg);
}
