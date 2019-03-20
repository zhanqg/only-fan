<template>
    <div class="hot-contain">
      <div class="hot-title common-index-title-font flex-around">热销商品</div>
      <div class="content">
        <div class="flex-around content-item">
          <div class="item-left">
            <div class="common-font16">新鲜水果</div>
            <div class="big flex-around">
              <img src="../../assets/img/1.jpg" alt="">
            </div>
            <span class="common-font14">￥123</span><br/><span class="common-font14">销量：221</span>
          </div>
          <div class="item-right">
            <div class="top"></div>
            <div class="bottom"></div>
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
    background: white;
    .hot-title{
      width: 100%;
      height: .3rem;
      /*border-radius: 15px;*/
      background: white;
    }
    .content{
      border: 1px red solid;
      .content-item{
       width: 3.75rem;
       // height: 1.5rem;
        .big{
          width: 100%;
        }
      }
    }
  }
    .item-left{
      width: 50%;
      border-right: 0.5px #f4f6f6 solid;
      img{

        width: 1.5rem;
        height: 2rem;
      }
      .big{
        width: 1.5rem;
        height: 2.5rem;
        span{
          width: 0.2rem;
        }
    }

  }
  .item-right{
     width: 50%;
     height: 20px;
     border: 1px seagreen solid;
   }
</style>
