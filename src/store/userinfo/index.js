export default {
  state: {
    tips: {
      register: '恭喜您，注册成功！现在开始学习吧！',
      setPwd: '密码重设成功，请重新登录!',
      approve: '认证信息已提交，等待审批。',
    }
  },
  /*getters: {//实时监听 state 值的变化
    name(state) {
      return state.name;
    },
    age(state) {
      return state.age
    }
  },
  mutations:{// 改变state 值触发方法
    nameSet(state) {
      state.name = 'libai'
    },
    ageSet(state,items=1) {
      state.age += items
    }
  },
  actions:{
    nameSetFun(context) {
      context.commit('nameSet');
    },
    ageSetFun(context,item) {
      context.commit('ageSet',item);
    }
  }*/
}
