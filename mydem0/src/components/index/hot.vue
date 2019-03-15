<template>
    <div class="hot-contain">
      <div class="hot-title common-index-title-font flex-around">热销商品</div>
      <div class="content">
        <div class="flex-around content-item">
          <div class="item-left">
            <div class="common-font">新鲜水果</div>
            <div class="big">
              <!--<img src="../../assets/img/1.jpg" alt="">-->
              <span>￥123</span><br/><span>销量：221</span>
            </div>
          </div>
          <div style="font-size: 20px;">
            <span>啊啊啊啊</span>
            <span>啊啊啊啊</span>
            <span>啊啊啊啊</span>
            <span>啊啊啊啊</span>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "hot"
    }
</script>

<style scoped lang="scss">
  /*@import "../../assets/css/common.css";*/
  .hot-contain{
    width: 100%;
    .hot-title{
      width: 100%;
      height: .3rem;
      /*border-radius: 15px;*/
      background: white;
    }
    .content{
      border: 1px red solid;
      content-item{
       width: 3.75rem;
       // height: 1.5rem;

      }
    }
  }
  .item-left{
    img{

      width: 1.5rem;
      height: 2rem;
    }
    .big{
      width: 1.5rem;
      height: 2.5rem;
      span{
        font-size: 0.12rem;
      }
    }
  }
</style>
