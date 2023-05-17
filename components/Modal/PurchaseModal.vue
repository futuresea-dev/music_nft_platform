<script setup>
import { ref } from "vue";
const img = "/img/music-detail.jpg";
const counter = ref(1);
const totalPrice = ref(0.005);
const handleAction = () => {
  console.log("== Buy ==");
};
watch(counter, (newValue) => {
  totalPrice.value = newValue * 0.05;
});
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
      <div class="text-subtitle-1 d-flex">Quantity</div>
      <div class="text-h6 d-flex">
        <v-btn
          density="compact"
          icon="mdi-minus"
          @click.stop="counter--"
        ></v-btn>
        <span class="mx-5">
          {{ counter }}
        </span>
        <v-btn density="compact" icon="mdi-plus" @click="counter++"></v-btn>
      </div>
    </v-layout>
    <v-layout class="justify-space-between">
      <div class="text-subtitle-1">Total Price</div>
      <div class="text-h6">{{ totalPrice.toFixed(2) }}ETH</div>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-card-actions>
      <button-card-sign-btn
        @handle-action="handleAction"
        text="Buy"
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
