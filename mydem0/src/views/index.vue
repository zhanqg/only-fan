<template>
  <div class="contain">
    <banner></banner>
    <div class="nav flex-around" >
      <div class="nav-item" v-for="(item,index) in classList">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href=item.img></use>
        </svg>
        <div class="common-font">{{item.name}}</div>
      </div>
    </div>
    <hot></hot>
  </div>

</template>

<script>
  import Hwd from "../components/HelloWorld"
  import banner from "../components/common/headBanner"
  import hot from "../components/index/hot"
  import cheap from "../components/index/cheap"
  import newshop from "../components/index/newshop"
    export default {
        name: "index",
      data(){
          return{
            value:1,
            classList:[{img:'#icon-shengnvguo',name:'新鲜果蔬'},
              {img:'#icon-kouqianghuli',name:'日用百货'},
              {img:'#icon-jiu1',name:'中外名酒'},
              {img:'#icon-naizhipin',name:'营养奶品'},
              {img:'#icon-lingshi',name:'休闲零食'},
            ]
        }
      },
      components:{
          Hwd,
        banner,
        hot,
        cheap,
        newshop
      }
    }
</script>
<style>
.swiper-pagination-bullet-active{
  background: chocolate;
}
</style>
<style scoped lang="scss">
  /*@import "../assets/css/common.css";*/
  .contain{
    margin: 0;
    padding: 0;
    width: 3.75rem;
    background: #f4f6f6;
    .nav{
      margin: 20px auto;
      width: 3.45rem;
      height: 1rem;
      //border: 1px red solid;
      background: white;
      border-radius: 10px;
      box-shadow: 0.8vw 1.067vw 5.333vw rgba(45,45,45,.15);
      .nav-item{
        width: .5rem;
        height: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg{
          width: .5rem;
          height: .5rem;
        }
      }

      /*background: red;*/
    }
  }
</style>
