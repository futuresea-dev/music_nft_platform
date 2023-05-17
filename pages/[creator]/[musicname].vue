<script setup>
import Footer from "~/components/layouts/Footer.vue";
const tab = ref(null);
const items = [
  { title: "Add to playlist", icon: "mdi-playlist-music" },
  { title: "Add to queue", icon: "mdi-playlist-plus" },
];
const headerImgUrl = "/img/music-detail.jpg";
</script>
<template>
  <div>
    <layouts-music-header :headerImgUrl="headerImgUrl"></layouts-music-header>
    <v-layout class="justify-center">
      <v-layout class="c-detail-content">
        <div class="c-detail-left-side">
          <v-layout class="c-action-group">
            <v-btn prepend-icon="mdi-heart-outline" text="Like"></v-btn>
            <v-btn prepend-icon="mdi-export-variant" text="Share"></v-btn>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="text"
                  icon="mdi-dots-horizontal"
                  v-bind="props"
                  width="30"
                  height="30"
                  class="ma-2"
                ></v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-layout>
          <div class="my-5">
            <v-tabs v-model="tab" align-tabs="start">
              <v-tab :value="1" :ripple="false">Details</v-tab>
              <v-tab :value="2" :ripple="false">Activity</v-tab>
            </v-tabs>
            <v-window v-model="tab">
              <v-window-item :key="1" :value="1">
                <detail-content></detail-content>
              </v-window-item>
              <v-window-item :key="2" :value="2">
                <detail-activity-content></detail-activity-content>
              </v-window-item>
            </v-window>
          </div>
        </div>
        <div>
          <ModalSoldOut></ModalSoldOut>
          <modal-purchase-modal></modal-purchase-modal>
          <modal-bidding-modal></modal-bidding-modal>
        </div>
      </v-layout>
    </v-layout>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.c-detail-content {
  max-width: 1280px;
  gap: 1.5rem;
  padding: 50px 10px;
  justify-content: space-between;
}
.c-detail-left-side {
  flex-grow: inherit;
}
.c-action-group {
  align-items: center;
  gap: 10px;
}
</style>
