<template>
  <div>
    hhh
    <Hwd v-model="value"></Hwd>
    <Hwd v-model="value"></Hwd>
    <Hwd v-model="value"></Hwd>
  </div>

</template>

<script>
  import Hwd from "../components/HelloWorld"
    export default {
        name: "index",
      data(){
          return{
            value:1
        }
      },
      components:{
          Hwd
      }
    }
</script>

<style scoped>

</style>
