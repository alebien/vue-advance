<!--
 * @Date: 2023-05-09 15:10:13
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-10 10:37:48
 * @FilePath: \vue-advance\src\views\About.vue
-->
<template>
  <div class="about">
    <h1>{{ user.name }}</h1>
    <h3>{{ user.age }}</h3>

    <input type="text" v-model="name">
    <input type="number" v-model="age">
    <button @click="user.reset">reset</button>
    <button @click="user.edit(name, age)">edit</button>
  </div>
</template>

<script lang='ts' setup>
import { useDemoStore } from '@/stores/demo';
import { ref } from 'vue';                 

const age = ref(0);
const name = ref(''); 

const user = useDemoStore();
console.log(user);

</script>
