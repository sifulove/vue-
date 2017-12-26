import tabview from './tab.vue'

const tabmenu = {
  install: function(Vue){
    Vue.component('tabmenu',tabview)
  }
}
export default tabmenu
