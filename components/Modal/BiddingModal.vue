<script setup>
import { ref } from "vue";
const img = "/img/music-detail.jpg";
const currentPrice = ref(0.005);
const handleAction = () => {
  console.log("== Place bid ==");
};
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
      <div class="text-subtitle-1">Auction Ends In</div>
      <div class="text-body-1">{{ 7 }}h</div>
    </v-layout>
    <v-layout class="justify-space-between">
      <div class="text-subtitle-1">Current Bid</div>
      <div class="text-h6">{{ currentPrice.toFixed(2) }}ETH</div>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-card-actions>
      <button-card-sign-btn
        @handle-action="handleAction"
        text="Place bid"
      ></button-card-sign-btn>
      <!-- <v-btn text="Sign In" class="c-detail-action-btn"> </v-btn> -->
    </v-card-actions>
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
