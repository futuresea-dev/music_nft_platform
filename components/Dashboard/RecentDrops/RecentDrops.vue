<template>
  <v-container class="c-container">
    <Title text="Recent Drops" seeAllLink="recent"></Title>
  </v-container>
</template>
<script>
import Title from "~/components/Dashboard/Title.vue";
export default {
  name: "RecentDrops",
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
