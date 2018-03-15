<template>
    <div style="height:100%;">
       <!-- <slidedown></slidedown> -->
       <tabnav :MenuList="menulist"></tabnav>
    </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex'
  import slidedown from '../components/slidedown.vue'
  export default{
    data(){
      return{
      }
    },
    components:{slidedown},
    computed:mapState({
      menulist:'MenuList'
    }),
    mounted:function(){
       console.log(this.menulist)
    },
    methods:{

  }
}
</script>
<style scoped>

</style>
