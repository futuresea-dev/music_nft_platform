<script setup>
const props = defineProps({
  img: String,
  name: String,
  addr: String,
  collected: Number,
  following: Number,
  followers: Number,
});
</script>

<template>
  <v-card color="black" class="rounded-lg" style="position: relative">
    <div>
      <img
        :src="props.img"
        alt="musiclogo"
        width="64"
        height="64"
        class="rounded-lg"
        style="
          border: 3px solid white;
          position: absolute;
          top: 50px;
          left: 20px;
        "
      />
    </div>
    <div style="height: 100px; width: 400px; overflow: hidden">
      <img :src="props.img" alt="musiclogo" width="500" height="500" />
    </div>
    <v-layout class="align-center justify-space-between pa-2">
      <div>
        <v-card-title>{{ props.name }}</v-card-title>
        <v-card-subtitle>{{ props.addr }}</v-card-subtitle>
      </div>
      <v-btn text="Follow"></v-btn>
    </v-layout>
    <v-layout class="justify-space-between pa-2">
      <div>
        <v-card-title>{{ props.collected }}K</v-card-title>
        <v-card-subtitle>Collected</v-card-subtitle>
      </div>
      <div>
        <v-card-title>{{ props.following }}</v-card-title>
        <v-card-subtitle>Following</v-card-subtitle>
      </div>
      <div>
        <v-card-title>{{ props.followers }}</v-card-title>
        <v-card-subtitle>Followers</v-card-subtitle>
      </div>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
