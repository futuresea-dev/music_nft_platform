<template>
  <v-container class="c-container">
    <Title text="Viral Playlists"></Title>
  </v-container>
</template>
<script>
import Title from "~/components/Dashboard/Title.vue";
export default {
  name: "ViralPlaylists",
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
