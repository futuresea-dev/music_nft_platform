<script setup lang="ts">
import { RouterView } from "vue-router";
import Logo from "~/components/Logo.vue";

const clipped = ref(false);
const drawer = ref(true);
const miniVariant = ref(false);
const items = [
  {
    icon: "mdi-home",
    title: "Home",
    to: "/",
  },
  {
    icon: "mdi-cart",
    title: "Shopping",
    to: "/shopping",
  },
];

const upcompingData = [
  {
    img: "/img/music-avatar.jpg",
    creator: "Danny Dwyer",
    creatorlink: "/danny-dwyer",
    musicname: "Disbeliever",
    musiclink: "/disbeliever",
    time: 9,
  },
  {
    img: "/img/recent.jpg",
    creator: "Reset Robot",
    creatorlink: "/reset-robot",
    musicname: "Orthosia",
    musiclink: "/orthosia",
    time: 9,
  },
  {
    img: "/img/top-selling.jpg",
    creator: "Goodnight Cody",
    creatorlink: "/goodnight-cody",
    musicname: "Rocket Dog Ru",
    musiclink: "/rocket-dog-ru",
    time: 11,
  },
];

const creatorNavigate = (creator: string) => {
  navigateTo("/user" + creator);
};

const musicNavigate = (creator: string, musiclink: string) => {
  navigateTo(creator + musiclink);
};
</script>

<template>
  <v-locale-provider>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <div class="text-center">
          <Logo />
        </div>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon class="mr-3">{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list variant="flat" subheader lines="two">
          <v-list-subheader>UPCOMING</v-list-subheader>

          <v-list-item
            style="min-height: 0px"
            v-for="(item, index) in upcompingData"
            :key="index"
          >
            <template v-slot:prepend>
              <v-img
                :src="item.img"
                width="32"
                height="32"
                style="border-radius: 4px"
                class="mr-2"
              ></v-img>
            </template>
            <v-list-item-title
              class="c-hover"
              @click.stop="musicNavigate(item.creatorlink, item.musiclink)"
              >{{ item.musicname }}</v-list-item-title
            >
            <v-list-item-subtitle
              class="c-hover"
              @click.stop="creatorNavigate(item.creatorlink)"
              >{{ item.creator }}</v-list-item-subtitle
            >
            <template v-slot:append>
              <v-icon style="margin: auto">
                <v-list-item-subtitle>{{ item.time }}h</v-list-item-subtitle>
              </v-icon>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list variant="flat" subheader lines="two">
          <v-list-subheader>LIBRARY</v-list-subheader>

          <v-list-item style="min-height: 0px">
            <template v-slot:prepend>
              <v-icon :icon="'mdi-music'"></v-icon>
            </template>
            <v-list-item-title>My Collection</v-list-item-title>
          </v-list-item>
          <v-list-item style="min-height: 0px">
            <template v-slot:prepend>
              <v-icon :icon="'mdi-heart-outline'"></v-icon>
            </template>
            <v-list-item-title>Liked Sounds</v-list-item-title>
          </v-list-item>
          <v-list-item style="min-height: 0px">
            <template v-slot:prepend>
              <v-icon :icon="'mdi-plus'"></v-icon>
            </template>
            <v-list-item-title>Create Playlist</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <div>
          <RouterView />
        </div>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
<style>
.c-hover {
  cursor: pointer;
}

.c-hover:hover {
  color: white;
}
</style>
