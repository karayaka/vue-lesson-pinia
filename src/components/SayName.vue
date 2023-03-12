<template>
    <p>{{ props.msg }}</p>
    <slot name="out"></slot>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  msg: { type: String, required: true },
  bar: Number
})
  
</script>