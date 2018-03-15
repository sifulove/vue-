import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../axios/api'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    count:0,
    MenuList:null
  },
  getters:{

  },
  mutations:{//只能是同步函数
    add(state,data){
      state.count+=playload.num
    },
    GetMenu(state,data){
      state.MenuList=data
    }
  },
  actions:{//处理异步提交
     add({commit},data){
       commit('add',data)
     },
     GetMenuAS({commit},data){
       Api.GetMenu({name:'admain',fn:function(res){
         console.log(res)
         const obj=res.data
         console.log(obj)
         commit('GetMenu',obj)
       }})
     }
  }
})
store.dispatch('GetMenuAS')
export default store
