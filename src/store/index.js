
import Vuex from 'vuex';
import vue from 'vue';
import userinfo from './userinfo/index.js';

vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userinfo
    }
})