<script setup>
import Title from "~/components/Dashboard/Title.vue";
import Collector from "./Collector.vue";
import musicLogo from "/img/music-logo.jpg";
const data = ref([
  {
    img: musicLogo,
    name: "Camel Lightmode",
    addr: "0xaa0...4bb2",
    mints: 2.4,
    collected: 2.5,
    following: 7,
    followers: 8,
    link: "/camel-lightmode",
  },
  {
    img: musicLogo,
    name: "0x503...b8dd",
    addr: "0x503...b8dd",
    mints: 100,
    collected: 113,
    following: 11,
    followers: 1,
    link: "/0x503...b8dd",
  },
  {
    img: musicLogo,
    name: "noisealt.eth",
    addr: "0xaa0...4bb2",
    mints: 70,
    collected: 377,
    following: 7,
    followers: 1,
    link: "/noisealt.eth",
  },
]);
</script>
<template>
  <v-container class="c-container">
    <Title text="Top Collectors This Week" seeAllLink="/shopping"></Title>
    <v-row class="ma-2">
      <v-col sm="4" v-for="(item, index) in data" :key="index">
        <Collector
          :img="item.img"
          :name="item.name"
          :addr="item.addr"
          :mints="item.mints"
          :collected="item.collected"
          :following="item.following"
          :followers="item.followers"
          :link="item.link"
        ></Collector>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
