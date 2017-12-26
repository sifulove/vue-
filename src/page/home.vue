<template>
    <div style="height:100%;">
       <tabmenu :menus='menus'></tabmenu>
    </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        menus:[
          {title:'主菜单1',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
          {title:'主菜单2',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
          {title:'主菜单3',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
          {title:'主菜单4',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
          {title:'主菜单5',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
          {title:'主菜单1',src:'/path11',href:'#icon-business-services'}
        ]
      }
    },
    mounted:function(){
       console.log(this)
    },
    methods:{

  }
}
</script>
<style scoped>

</style>
