<template>
    <div>
        <p v-if="store.userListLoading">loading...</p>
        <ul v-else>
            <li v-for="user in store.users" :key="user.id" >
                {{ user.first_name }}
            </li>
        </ul>
    </div>

</template>
<script lang="ts" setup>
import {counterStore} from'@/store/couter'
import { onMounted } from 'vue';

var store=counterStore();

onMounted(()=>{
    store.getUsers();
})

</script>