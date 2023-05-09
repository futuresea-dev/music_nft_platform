<template>
  <v-flex>
    <Header></Header>
    <Banner></Banner>
    <v-layout class="d-flex flex-column">
      <ViralSoundsVue />
      <UpcomingDropsVue />
      <FreshlyMintedVue />
      <TopCollectorsVue />
      <ViralPlaylistsVue />
      <RecentDropsVue />
      <v-space class="text-center">
        <v-btn elevation="2" height="48" width="200" outlined>See All</v-btn>
      </v-space>
    </v-layout>
    <Footer></Footer>
  </v-flex>
</template>

<script>
import ViralSoundsVue from "~/components/Dashboard/ViralSounds/ViralSounds.vue";
import UpcomingDropsVue from "~/components/Dashboard/UpcomingDrops/UpcomingDrops.vue";
import FreshlyMintedVue from "~/components/Dashboard/FreshlyMinted/FreshlyMinted.vue";
import TopCollectorsVue from "~/components/Dashboard/TopCollectors/TopCollectors.vue";
import ViralPlaylistsVue from "~/components/Dashboard/ViralPlaylists/ViralPlaylists.vue";
import RecentDropsVue from "~/components/Dashboard/RecentDrops/RecentDrops.vue";

export default {
  components: {
    ViralSoundsVue,
    UpcomingDropsVue,
    FreshlyMintedVue,
    TopCollectorsVue,
    ViralPlaylistsVue,
    RecentDropsVue,
  },
  name: "IndexPage",
};
</script>
