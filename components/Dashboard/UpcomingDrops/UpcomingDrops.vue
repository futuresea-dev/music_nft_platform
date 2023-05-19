<script setup>
import Title from "~/components/Dashboard/Title.vue";
import UpcomingCard from "~/components/Dashboard/UpcomingDrops/UpcomingCard.vue";
const upcomingData = [
  {
    creator: "Dessauer",
    musicname: "It Fuzzes And Condensates",
    time: "Starts tomorrow, 12:00 AM",
    musiclink: "/it-fuzzes-and-condensates",
    creatorlink: "/dessauer",
  },
  {
    creator: "billings",
    musicname: "all right",
    time: "Starts tomorrow, 6:00 AM",
    musiclink: "/all-right",
    creatorlink: "/billings",
  },
  {
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Starts tomorrow, 7:00 AM",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
  },
  {
    creator: "Sara Phillips",
    musicname: "everybody knows",
    time: "Starts May 17, 2:00 AM",
    musiclink: "/everybody-knows",
    creatorlink: "/sara-phillips",
  },
  {
    creator: "Trooko",
    musicname: "Ritmo Sabor",
    time: "Starts May 17, 4:00 AM",
    musiclink: "/ritmo-sabor",
    creatorlink: "/trooko",
  },
  {
    creator: "acutek",
    musicname: "Combat Conditions",
    time: "Starts May 17, 5:00 AM",
    musiclink: "/combat-conditions",
    creatorlink: "/acutek",
  },
  {
    creator: "DANC3",
    musicname: "DANC3Mixtape (CRAZY)",
    time: "Starts May 17, 8:40 AM",
    musiclink: "/danc3-mixtape-crazy",
    creatorlink: "/danc3",
  },
];
const model = ref(null);
</script>

<template>
  <v-container class="c-container">
    <Title text="Upcoming Drops" seeAllLink="/shopping"></Title>
    <v-slide-group v-model="model" show-arrows class="c-upcoming-sliders">
      <v-slide-group-item
        v-for="(item, index) in upcomingData"
        :key="index"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <UpcomingCard
          :creator="item.creator"
          :musicname="item.musicname"
          :time="item.time"
          :musiclink="item.musiclink"
          :creatorlink="item.creatorlink"
        ></UpcomingCard>
      </v-slide-group-item>
    </v-slide-group>
  </v-container>
</template>
<style scoped>
.c-upcoming-sliders {
  position: relative;
  overflow: unset;
  border: none;
}
.c-upcoming-sliders :deep(.v-slide-group__prev) {
  position: absolute;
  background: white;
  color: black;
  z-index: 100;
  min-width: 50px;
  min-height: 50px;
  border-radius: 100px;
  transform: translate(-50%, -50%);
  top: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.1),
    0 0 40px rgba(0, 0, 0, 0.05), 0 0 50px rgba(0, 0, 0, 0.03),
    0 0 80px rgba(0, 0, 0, 0.01);
}

.c-upcoming-sliders :deep(.v-slide-group__next) {
  position: absolute;
  background: white;
  color: black;
  z-index: 100;
  min-width: 50px;
  min-height: 50px;
  border-radius: 100px;
  transform: translate(-50%, -50%);
  top: 50%;
  right: -50px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.1),
    0 0 40px rgba(0, 0, 0, 0.05), 0 0 50px rgba(0, 0, 0, 0.03),
    0 0 80px rgba(0, 0, 0, 0.01);
}
</style>
