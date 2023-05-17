<script setup>
import Footer from "~/components/layouts/Footer.vue";
import Collection from "~/components/User/Collection.vue";
const headerImgUrl = "/img/music-detail-1.jpg";
</script>
<template>
  <div>
    <LayoutsUserHeader :headerImgUrl="headerImgUrl"></LayoutsUserHeader>
    <v-layout class="justify-center">
      <v-layout class="c-detail-content">
        <UserProfile :headerImgUrl="headerImgUrl"></UserProfile>
        <Collection></Collection>
        <UserRecentActivity></UserRecentActivity>
      </v-layout>
    </v-layout>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.c-detail-content {
  max-width: 1280px;
  padding: 0px 10px;
  flex-direction: column;
  overflow: unset !important;
}
</style>
