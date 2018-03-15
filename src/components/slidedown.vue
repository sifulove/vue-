<template>
    <div>
      <div class="MenuList-1" v-on:click="mainClick($event)">
       <p class="mainTitle">
         <svg class="icon" aria-hidden="true">
            <use :xlink:href='data.href'></use>
         </svg>
         <span>{{data.title}}</span>
         <svg class="icon list-more" aria-hidden="true">
            <use v-if="!data.src" xlink:href="#icon-more"></use>
         </svg>
       </p>
        <ul v-if="!data.src" v-bind:style="styleObject" class="MenuList-2">
          <li :class="{ active: path==list.src }" v-for="list in data.list" v-on:click.stop="itemClick(list.src,$event)">{{list.title}}</li>
        </ul>
      </div>
    </div>
</template>
<script type="text/javascript">
  export default{
    props:{
       data:Object,
       dataIndex:Number,
       showIndex:Number
    },
    data(){
      return{
        //data:{title:'主菜单1',src:null,href:'#icon-business-services',list:[{title:'子菜单1',src:'/path1'},{title:'子菜单2',src:'/path2'}]},
        index:0,
        prechoose:null,
        itimer:null,
        path:'',
        styleObject:{
          height:0
        }
      }
    },
    mounted:function(){
      this.path=this.$router.history.current.path;
      if(this.showIndex==this.dataIndex){
        this.styleObject.height=40*this.data.list.length+'px'
      }else{
        this.styleObject.height='0px'
      }
      // const li=this.$el.children[0].children[1].children;
      // for(var i=0;i<li.length;i++){
      //   if(li[i].getAttribute('class')==this.path){this.prechoose=li[i];this.styleObject.height='80px';this.index=1;}
      // }
    },
    methods:{
      mainClick:function(e){
        const el=e.currentTarget;
        const ul=el.getElementsByTagName('ul')[0];
        const svg=el.getElementsByTagName('p')[0].getElementsByTagName('svg')[1];
        const minH=0;
        let nowH=parseInt(ul.offsetHeight);
        const maxH=40*this.data.list.length;
        const mintime=1;
        const that=this
        this.$emit('changeIndex',1)
        if(this.index==0){
          this.index=1;
          svg.style.transform='rotateZ(90deg)';
          clearInterval(this.itimer)
          this.itimer=setInterval(function() {
              nowH+=2;
              ul.style.height=nowH+'px';
              nowH>=maxH&&(clearInterval(that.itimer))
          },mintime)
        }else{
          this.index=0;
          svg.style.transform='rotateZ(0deg)';
          clearInterval(this.itimer)
          this.itimer=setInterval(function() {
              nowH-=2;
              ul.style.height=nowH+'px';
              nowH<=0&&(clearInterval(that.itimer))
          },mintime)
        }
      },
      itemClick:function(path,event){
        var el=event.currentTarget;
        this.prechoose&&(this.prechoose.style.backgroundColor='#253042')&&(this.prechoose.style.color='#fff')
        el.style.backgroundColor='#fff'
        el.style.color="#606266"
        console.log(path)
        this.prechoose=el;
        this.data.open&&this.data.open(this.data.openData);
        //this.$router.push(path)
      }

  }
}
</script>
<style scoped>
.active{background:#fff;color:#606266;}
.MenuList-1{background: #324157;overflow: hidden;}
.mainTitle{margin:0;line-height: 40px;color: #fff;height: 40px;font-size: 15px;text-align: left;text-indent: 10px;position: relative;}
.list-more{position: absolute;right: 10px;top:10px;font-weight: 900;color:#3b95fb;}
.MenuList-2{margin-left: 30px;list-style: none;color:#fff;background: #253042;line-height: 40px;font-size: 14px;text-align: left;text-indent:20px;}
svg{transition: 0.1s;}
</style>
