<template>
  <SayName :msg="msg">
    <template v-slot:out >
      <p>dişardan geldi2</p>
    </template>
  </SayName>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SayName from '@/components/SayName.vue'
let msg=ref("mesajs");

setTimeout(()=>{
  msg.value="mesaj değişti";
},2500)


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
