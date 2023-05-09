<template>
  <v-container class="c-container">
    <v-flex class="d-flex">
      <v-flex class="d-flex align-center">
        <div class="c-text">{{ text }}</div>
        <v-icon mdi>{{ icon }}</v-icon>
      </v-flex>
      <nuxt-link :to="seeAllLink" v-if="seeAllLink">
        <v-btn elevation="2" class="c-btn">See All</v-btn>
      </nuxt-link>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "DashboardTitle",
  props: {
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
  },
};
</script>

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
