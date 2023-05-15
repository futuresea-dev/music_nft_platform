<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  subtext: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <v-container class="c-container">
    <v-layout>
      <div>
        <div class="c-text">{{ props.text }}</div>
        <div class="c-subtext">{{ props.subtext }}</div>
      </div>
    </v-layout>
  </v-container>
</template>

<style scoped>
.c-container {
  max-width: 1280px;
}
.c-text {
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  margin: 20px 0px;
}
.c-subtext {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #737373;
}
</style>
