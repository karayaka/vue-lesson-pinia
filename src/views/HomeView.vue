<template>
    <p>Home Page</p>
    <p>{{ store.count}}</p>
    <p>{{ store.double}}</p>
    <button @click="store.increment()">artır</button>
</template>
<script lang="ts" setup>
import {counterStore} from'@/store/couter'

var store=counterStore();


</script>