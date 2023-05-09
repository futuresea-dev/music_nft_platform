<template>
  <v-container class="c-container">
    <Title
      text="Top Collectors This Week"
      seeAllLink="/charts/top/collectors/7d/mints"
    ></Title>
  </v-container>
</template>
<script>
import Title from "~/components/Dashboard/Title.vue";
export default {
  name: "TopCollectors",
  components: {
    Title,
  },
};
</script>
<style scoped>
.c-container {
  max-width: 1280px;
}
</style>
