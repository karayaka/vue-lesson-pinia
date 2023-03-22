<template>
  <div v-if="store.state.showMessage">
    {{ store.state.message }}
    <button @click="store.mutations.hideMessage()">Kapat</button>
  </div>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/counter">Conter</RouterLink>
  <router-view></router-view>
</template>

<script setup lang="ts">
import store from '@/store/message_store'



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
