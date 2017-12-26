<template>
    <div style="height:100%;">
      <div style="background:#242f42;height:100px;position:fixed;top:0;left:0;width:100%;"></div>
      <el-container style="height:100%;padding-top:100px;boxsizing:border-box;">
        <el-aside style="background:#324157;width:240px;">
           <div v-for="(mainlist,index) in menus" class="MenuList-1" v-on:click="mainClick(index,$event)">
            <p class="mainTitle">
              <svg class="icon" aria-hidden="true">
                 <use :xlink:href='mainlist.href'></use>
              </svg>
              <span>{{mainlist.title}}</span>
              <svg class="icon list-more" aria-hidden="true">
                 <use v-if="!mainlist.src" xlink:href="#icon-more"></use>
              </svg>
            </p>
             <ul v-if="!mainlist.src" v-show="index==showIndex" class="MenuList-2">
               <li v-for="list in mainlist.list" v-on:click.stop="itemClick(list.src,$event)">{{list.title}}</li>
             </ul>
           </div>

        </el-aside>
        <el-main>
        </el-main>
      </el-container>
    </div>
</template>
<script type="text/javascript">
  export default{
    props:{
      menus:Array
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
    methods:{
      mainClick:function(index,event){
        var el=event.currentTarget.getElementsByTagName('p')[0].getElementsByTagName('svg')[1]
        this.prelist&&(this.prelist.style.transform='rotateZ(0deg)')
        if(this.showIndex==index){
          this.showIndex=-1
          this.prelist=null;
        }else{
          this.showIndex=index;
          this.prelist=el;
          el.style.transform='rotateZ(90deg)'
        }
      },
      itemClick:function(path,event){
        var el=event.currentTarget;
        this.prechoose&&(this.prechoose.style.backgroundColor='#253042')&&(this.prechoose.style.color='#fff')
        el.style.backgroundColor='#fff'
        el.style.color="#606266"
        console.log(path)
        this.prechoose=el;
        //this.$router.push(path)
      }
    }
  }
</script>
<style scoped>
.mainTitle{margin:0;line-height: 40px;color: #fff;height: 40px;font-size: 15px;text-align: left;text-indent: 10px;position: relative;}
.list-more{position: absolute;right: 10px;top:10px;font-weight: 900;color:#3b95fb;}
.MenuList-2{margin-left: 30px;list-style: none;color:#fff;background: #253042;line-height: 40px;font-size: 14px;text-align: left;text-indent:20px;}
svg{transition: 0.1s;}
</style>
