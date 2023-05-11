<script setup>
import upcomingImg from "/img/upcoming.jpg";
const items = ref([
  { title: "Add to playlist", icon: "mdi-playlist-music" },
  { title: "Add to queue", icon: "mdi-playlist-plus" },
  { title: "Share", icon: "mdi-export-variant" },
]);
</script>
<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="c-card" v-bind="props">
        <div class="c-card-top-content">
          <v-badge
            class="c-card-badge"
            color="rgba(14, 18, 19, 0.3)"
            content="Starts today, 7:00AM"
            inline
          ></v-badge>
          <v-sheet>
            <NuxtLink to="/groggyjones/jump-ship">
              <img :src="upcomingImg" alt="Upcoming" class="c-upcoming-img" />
            </NuxtLink>
          </v-sheet>
          <div class="c-gradient"></div>
          <v-btn
            color="white"
            rounded="4"
            size="60"
            :class="isHovering ? 'c-play-btn' : 'show-none'"
            prepend-icon="mdi-play"
          >
          </v-btn>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <v-card-subtitle> Groggy Jones </v-card-subtitle>
            <v-card-title>Jump Ship</v-card-title>
          </div>
          <v-layout class="justify-end" v-if="isHovering">
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
            <v-btn
              variant="text"
              icon="mdi-heart-outline"
              v-bind="props"
              width="30"
              height="30"
              class="ma-2"
            ></v-btn>
          </v-layout>
        </div>
        <v-card-actions>
          <v-btn
            prepend-icon="mdi-bell"
            text="Get Notified"
            class="c-card-action-btn"
          >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
.c-card {
  background-color: black;
  color: white;
  border-radius: 10px;
  width: 270px;
  margin: 0px 10px;
  cursor: pointer;
}
.c-card-top-content {
  overflow: hidden;
  aspect-ratio: 1 / 1;
  position: relative;
}
.c-card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
}
.c-gradient {
  background-image: linear-gradient(to top, #0e1213, rgba(14, 18, 19, 0));
  height: 7rem;
  width: 100%;
  position: absolute;
  bottom: 0px;
}
.c-play-btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 30px;
}
.c-card-action-btn {
  width: 100%;
  color: #262626;
  background-color: #fff;
}
.c-upcoming-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make the image cover the entire container */
  object-position: center;
}

.show-none {
  display: none;
}
</style>
