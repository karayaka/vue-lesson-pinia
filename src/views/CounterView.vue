<template>
    <p>Counter</p>
    <p>{{ store.count}}</p>
    <p>{{ store.double}}</p>
    <button @click="store.discrement()">azalt</button>
</template>
<script lang="ts" setup>
import {counterStore} from'@/store/couter'

var store=counterStore();


</script>