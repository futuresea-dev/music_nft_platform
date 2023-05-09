<template>
  <v-container class="c-container">
    <Title text="Upcoming Drops" seeAllLink="/upcoming"></Title>
  </v-container>
</template>
<script>
import Title from "~/components/Dashboard/Title.vue";
export default {
  name: "UpcomingDrops",
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
