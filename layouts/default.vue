<script setup lang="ts">
import { RouterView } from "vue-router";
import Logo from "~/components/Logo.vue";
import musicAvatar from "/img/music-avatar.jpg";
const title = ref("Bitsong - Nuxt3 Typescript based Vuetify");
const clipped = ref(false);
const drawer = ref(true);
const miniVariant = ref(false);
const items = ref([
  {
    icon: "mdi-home",
    title: "Home",
    to: "/",
  },
  {
    icon: "mdi-chart-bubble",
    title: "Feed",
    to: "/inspire",
  },
  {
    icon: "mdi-chart-bar",
    title: "Charts",
    to: "/chart",
  },
]);

useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
      : "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
  },
});
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

          <v-list-item style="min-height: 0px">
            <template v-slot:prepend>
              <v-img
                :src="musicAvatar"
                width="32"
                height="32"
                style="border-radius: 4px"
                class="mr-2"
              ></v-img>
            </template>
            <v-list-item-title>Disbeliever</v-list-item-title>
            <v-list-item-subtitle>Danny Dwyer</v-list-item-subtitle>
            <template v-slot:append>
              <v-icon style="margin: auto">
                <v-list-item-subtitle>9h</v-list-item-subtitle>
              </v-icon>
            </template>
          </v-list-item>

          <v-list-item style="min-height: 0px">
            <template v-slot:prepend>
              <v-img
                :src="musicAvatar"
                width="32"
                height="32"
                style="border-radius: 4px"
                class="mr-2"
              ></v-img>
            </template>
            <v-list-item-title>Orthosia</v-list-item-title>
            <v-list-item-subtitle>Reset Robot</v-list-item-subtitle>
            <template v-slot:append>
              <v-icon style="margin: auto">
                <v-list-item-subtitle>9h</v-list-item-subtitle>
              </v-icon>
            </template>
          </v-list-item>

          <v-list-item style="min-height: 0px">
            <template v-slot:prepend>
              <v-img
                :src="musicAvatar"
                width="32"
                height="32"
                style="border-radius: 4px"
                class="mr-2"
              ></v-img>
            </template>
            <v-list-item-title>Rocket Dog Ru</v-list-item-title>
            <v-list-item-subtitle>Goodnight Cody</v-list-item-subtitle>
            <template v-slot:append>
              <v-icon style="margin: auto">
                <v-list-item-subtitle>11h</v-list-item-subtitle>
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
