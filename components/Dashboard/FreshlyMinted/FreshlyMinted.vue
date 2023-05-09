<template>
  <v-container class="c-container">
    <Title text="Freshly Minted by Top Collectors" seeAllLink="/feed"></Title>
  </v-container>
</template>
<script>
import Title from "~/components/Dashboard/Title.vue";
export default {
  name: "FreshlyMinted",
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
