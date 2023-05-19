<script setup lang="ts">
import musicLogo from "/img/music-logo.jpg";
const props = defineProps({
  creator: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  musiclink: {
    type: String,
    required: true,
  },
  creatorlink: {
    type: String,
    required: true,
  },
  mints: {
    type: String,
    required: false,
  },
});

const items = ref([
  { title: "Add to playlist", icon: "mdi-playlist-music" },
  { title: "Add to queue", icon: "mdi-playlist-plus" },
  { title: "Copy Link", icon: "mdi-content-copy" },
  { title: "Share", icon: "mdi-export-variant" },
]);

const creatorNavigate = (creatorlink: string) => {
  navigateTo("/user" + creatorlink);
};

const musicNavigate = (creatorlink: string, musiclink: string) => {
  navigateTo("/" + creatorlink + musiclink);
};
</script>

<template>
  <v-container>
    <v-layout class="align-center">
      <v-layout class="align-center">
        <div class="mr-5">
          <img :src="musicLogo" class="c-avatar" />
        </div>
        <div>
          <div
            class="c-small-text c-hover"
            @click.stop="creatorNavigate(props.creatorlink)"
          >
            {{ props.creator }}
          </div>
          <div
            class="c-title-text c-hover"
            @click.stop="musicNavigate(props.creatorlink, props.musiclink)"
          >
            {{ props.title }}
          </div>
          <div class="c-small-text">{{ props.mints }} mints</div>
        </div>
      </v-layout>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            variant="text"
            icon="mdi-dots-horizontal"
            v-bind="props"
            width="30"
            height="30"
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
  </v-container>
</template>

<style scoped>
.c-avatar {
  border-radius: 8px;
}
.c-title-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.c-small-text {
  font-size: 14px;
  line-height: 18px;
  color: #737373;
}
</style>
