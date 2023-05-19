<script setup>
import Title from "~/components/Dashboard/Title.vue";
import MusicList from "~/components/Dashboard/ViralSounds/MusicList.vue";
</script>
<template>
  <v-container class="c-container">
    <Title
      text="Viral Sounds This Week"
      icon="mdi-camera"
      seeAllLink="/shopping"
    ></Title>
    <v-row>
      <v-col sm="6">
        <MusicList
          creator="angelbaby"
          title="im fine : ( : [Feat. GrimesAI"
          musiclink="/im-fine-feat-grimesai-x-wesghost"
          creatorlink="/angelbaby"
          mints="3,812"
        />
      </v-col>
      <v-col sm="6">
        <MusicList
          creator="NOISE"
          title="Dadabots - RUG THE BOTS"
          musiclink="/im-fine-feat-grimesai-x-wesghost"
          creatorlink="/noise"
          mints="146"
        />
      </v-col>
      <v-col sm="6">
        <MusicList
          creator="Josh Savage"
          title="Bella"
          musiclink="/im-fine-feat-grimesai-x-wesghost"
          creatorlink="/josh-savage"
          mints="362"
        />
      </v-col>
      <v-col sm="6">
        <MusicList
          creator="demotapes"
          title="hold on"
          musiclink="/im-fine-feat-grimesai-x-wesghost"
          creatorlink="/demotapes"
          mints="25"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
