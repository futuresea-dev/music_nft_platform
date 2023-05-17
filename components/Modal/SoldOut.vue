<script setup>
const img = "/img/music-detail.jpg";
const power = ref(100);
</script>
<template>
  <v-card class="c-container">
    <v-layout>
      <img :src="img" class="c-detail-card-avatar" />
      <div class="c-ellipsis">
        <v-card-subtitle>angelbaby</v-card-subtitle>
        <v-card-title>im fine : ( : [Feat. GrimesAI X WesGhost]</v-card-title>
      </div>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout class="justify-space-between">
      <div class="text-h6 align-self-center">Mint Details</div>
      <v-chip class="ma-2" color="pink" label text-color="white">
        Sold Out
      </v-chip>
    </v-layout>
    <v-layout class="justify-space-between">
      <div class="text-subtitle-1">Price</div>
      <div>0.005ETH</div>
    </v-layout>
    <v-layout class="justify-space-between">
      <div class="text-subtitle-1">Collected</div>
      <div>5589 / 5589</div>
    </v-layout>
    <v-progress-linear
      v-model="power"
      color="pink"
      height="25"
      rounded="5"
      class="my-5"
    ></v-progress-linear>
    <v-divider class="my-3"></v-divider>
    <v-layout class="justify-space-between">
      <div class="text-subtitle-1">Total Raised</div>
      <div class="text-h5">7.045 ETH</div>
    </v-layout>
  </v-card>
</template>
<style scoped>
.c-container {
  padding: 20px;
  min-width: 400px;
  height: fit-content;
  width: 400px;
  margin-bottom: 20px;
}
.c-detail-card-avatar {
  width: 64px;
  height: 64px;
  border-radius: 8px;
}
.c-detail-action-btn {
  width: 100%;
  color: #262626;
  background-color: #fff;
  font-size: 20px;
  text-transform: none;
  font-weight: 700;
  height: 60px;
  margin-top: 20px;
}
.c-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
