<script setup>
import Title from "~/components/Dashboard/Title.vue";
import TopSellingCard from "./TopSellingCard.vue";
const data = [
  {
    img: "/img/top-selling.jpg",
    creator: "Dessauer",
    musicname: "It Fuzzes And Condensates",
    time: "Ends in 21h",
    musiclink: "/it-fuzzes-and-condensates",
    creatorlink: "/dessauer",
    mintedbyuser: [
      {
        img: "/img/avatar.jpg",
        name: "parrott",
      },
    ],
  },
  {
    img: "/img/top-selling.jpg",
    creator: "billings",
    musicname: "all right",
    time: "Ends in 2d",
    musiclink: "/all-right",
    creatorlink: "/billings",
    mintedbyuser: [
      {
        img: "/img/avatar.jpg",
        name: "parrott",
      },
    ],
  },
  {
    img: "/img/top-selling.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    mintedbyuser: [
      {
        img: "/img/avatar.jpg",
        name: "parrott",
      },
    ],
  },
  {
    img: "/img/top-selling.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    mintedbyuser: [
      {
        img: "/img/avatar.jpg",
        name: "parrott",
      },
    ],
  },
];
</script>
<template>
  <v-container class="c-container">
    <Title text="Top Selling" seeAllLink="/shopping"></Title>
    <v-row>
      <v-col sm="3" v-for="(item, index) in data" :key="index">
        <TopSellingCard
          :img="item.img"
          :creator="item.creator"
          :musicname="item.musicname"
          :time="item.time"
          :musiclink="item.musiclink"
          :creatorlink="item.creatorlink"
          :mintedbyuser="item.mintedbyuser"
        ></TopSellingCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
