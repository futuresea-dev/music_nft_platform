<script setup>
import logo from "/logo+typo.svg";
</script>

<template>
  <img
    :src="logo"
    alt="Logo"
    width="200"
    height="70"
    class="my-5 cursor-pointer"
    @click="navigateTo('/')"
  />
</template>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
