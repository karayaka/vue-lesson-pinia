<template>
    <p>Home Page</p>
    <p>{{ store.count}}</p>
    <p>{{ store.double}}</p>
    <button @click="store.increment()">artır</button>
</template>
<script lang="ts" setup>
import {counterStore} from'@/store/couter'
import {onMounted} from 'vue'
var store=counterStore();
//28 ders ve 29 ders
onMounted(onMount)
function onMount():void{
    //store.count=3;
}

</script>