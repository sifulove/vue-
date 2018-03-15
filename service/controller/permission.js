var fn_permission=async(ctx,next)=>{
  var name=ctx.params.name;
  var res=[{title:'主菜单1',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
    {title:'主菜单2',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
    {title:'主菜单3',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
    {title:'主菜单4',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
    {title:'主菜单5',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
    {title:'主菜单1',src:'/path11',href:'#icon-business-services'}]
   ctx.response.body = res;
}
module.exports = {
    'POST /permission': fn_permission
};
