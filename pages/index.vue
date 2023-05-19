<script setup lang="ts">
import Header from "~/components/layouts/Header.vue";
import ViralSoundsVue from "~/components/Dashboard/ViralSounds/ViralSounds.vue";
import TopSelling from "~/components/Dashboard/TopSelling/TopSelling.vue";
import UpcomingDrops from "~/components/Dashboard/UpcomingDrops/UpcomingDrops.vue";
import TopCollectors from "~/components/Dashboard/TopCollectors/TopCollectors.vue";
import RecentDrops from "~/components/Dashboard/RecentDrops/RecentDrops.vue";
import Footer from "~/components/layouts/Footer.vue";
</script>
<template>
  <div>
    <Header></Header>
    <DashboardBanner></DashboardBanner>
    <v-layout class="flex-column">
      <ViralSoundsVue></ViralSoundsVue>
      <UpcomingDrops></UpcomingDrops>
      <TopCollectors></TopCollectors>
      <TopSelling></TopSelling>
      <RecentDrops></RecentDrops>
      <v-spacer class="text-center">
        <v-btn
          elevation="2"
          height="48"
          width="200"
          variant="outlined"
          to="/shopping"
          class="c-hover"
          >See All</v-btn
        >
      </v-spacer>
    </v-layout>
    <Footer></Footer>
  </div>
</template>
