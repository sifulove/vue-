import axios from 'axios'
let basePath='';
if (!window.location.origin) {
    // 兼容ie
    if (window["context"] == undefined) {
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        }
        window["context"] = location.origin+"/V6.0";
    }
    basePath=window.location.origin+"/"+window.location.pathname.split("/")[1];

} else{
    basePath=window.location.origin;
}
basePath=basePath.replace(/8080$/,3000)
console.log(basePath)
axios.defaults.baseURL=basePath;
const Api={
    GetMenu:(Data)=>{
      console.log(Data);
      axios({
        method:'POST',
        url:'/permission',
        data:{
          stoken:'111111',
          name:Data.name
        }
      }).then(function(res){
        Data.fn(res)
      })
    }
}
export default Api;
