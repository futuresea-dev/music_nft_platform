<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  seeAllLink: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <v-container class="c-container">
    <v-layout>
      <v-layout class="align-center">
        <div class="c-text">{{ props.text }}</div>
        <v-icon :icon="props.icon"></v-icon>
      </v-layout>
      <nuxt-link :to="props.seeAllLink" v-if="props.seeAllLink">
        <v-btn elevation="2" class="c-btn">See All</v-btn>
      </nuxt-link>
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
}
.c-btn {
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  border-color: rgb(230 230 230 / var(--tw-border-opacity));
  text-transform: none;
  font-size: 13px;
  font-weight: bold;
  width: 40px;
  height: 20px;
}
</style>
