<script setup>
import Title from "~/components/Dashboard/Title.vue";
import UpcomingCard from "~/components/Dashboard/UpcomingDrops/UpcomingCard.vue";
const model = ref(null);
</script>

<template>
  <v-container class="c-container">
    <Title text="Upcoming Drops" seeAllLink="/upcoming"></Title>
    <v-slide-group v-model="model" show-arrows class="c-upcoming-sliders">
      <v-slide-group-item
        v-for="n in 6"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <UpcomingCard></UpcomingCard>
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
