import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    count:0
  },
  getters:{
    
  },
  moutations:{
    add(state,playload){
      state.count+=playload.num
    }
  }
})
export default store
