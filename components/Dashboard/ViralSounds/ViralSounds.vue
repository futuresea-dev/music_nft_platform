<template>
  <v-container class="c-container">
    <Title
      text="Viral Sounds This Week"
      icon="mdi-camera"
      seeAllLink="/charts"
    ></Title>
    <v-row>
      <v-col sm="6">
        <MusicList />
      </v-col>
      <v-col sm="6">
        <MusicList />
      </v-col>
      <v-col sm="6">
        <MusicList />
      </v-col>
      <v-col sm="6">
        <MusicList />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Title from "~/components/Dashboard/Title.vue";
import MusicList from "~/components/Dashboard/ViralSounds/MusicList.vue";
export default {
  name: "ViralSounds",
  components: {
    Title,
    MusicList,
  },
};
</script>
<style scoped>
.c-container {
  max-width: 1280px;
}
</style>
