<script setup>
import { ref } from 'vue';

const counter =ref(0)
const increment = () => {
    counter.value ++
    console.log(counter)
}
</script>
<template>
    <button @click="increment" >counter {{ counter }}</button>
</template>

<style>

</style>