<template>
    <div style="height:100%;">
      <div style="background:#242f42;height:100px;position:fixed;top:0;left:0;width:100%;"></div>
      <el-container style="height:100%;padding-top:100px;boxsizing:border-box;">
        <el-aside style="background:#324157;width:240px;">
           <slidedown v-on:changeIndex="changeIndex" v-for="(mainlist,index) in MenuList" :data="mainlist" :dataIndex="index" :showIndex="showIndex"></slidedown>
        </el-aside>
        <el-main>
        </el-main>
      </el-container>
    </div>
</template>
<script type="text/javascript">
  import slidedown from '../slidedown.vue'
  export default{
    props:{
      MenuList:Array
    },
    data(){
      return{
          showIndex:-1,
          prelist:null,
          prechoose:null,
          path:''
      }
    },
    mounted:function(){
      this.path=this.$route.path;
    },
    components:{slidedown},
    methods:{
      changeIndex:function(){
        console.log(this)
      }
    }
  }
</script>
<style scoped>
</style>
