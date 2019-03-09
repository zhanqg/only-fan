<template>
  <div>
    <banner></banner>
    <a href="http://wpa.qq.com/msgrd?v=3&uin=1714051576">wpa咨询</a>
  </div>

</template>

<script>
  import Hwd from "../components/HelloWorld"
  import banner from "../components/common/headBanner"
    export default {
        name: "index",
      data(){
          return{
            value:1
        }
      },
      components:{
          Hwd,
        banner,
      }
    }
</script>

<style scoped>

</style>
