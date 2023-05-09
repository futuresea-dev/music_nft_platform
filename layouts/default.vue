<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="text-center">
        <navbar />
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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list flat subheader three-line>
        <v-subheader>UPCOMING</v-subheader>

        <v-list-item-group active-class="">
          <v-list-item style="min-height: 0px">
            <v-list-item-action>
              <v-img
                :src="require('~/assets/img/music-avatar.jpg')"
                width="32"
                height="32"
                style="border-radius: 4px"
              ></v-img>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Disbeliever</v-list-item-title>
              <v-list-item-subtitle>Danny Dwyer</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon style="margin: auto">
              <v-list-item-subtitle>9h</v-list-item-subtitle>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item style="min-height: 0px">
            <v-list-item-action>
              <v-img
                :src="require('~/assets/img/music-avatar.jpg')"
                width="32"
                height="32"
                style="border-radius: 4px"
              ></v-img>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Orthosia</v-list-item-title>
              <v-list-item-subtitle>Reset Robot</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon style="margin: auto">
              <v-list-item-subtitle>9h</v-list-item-subtitle>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item style="min-height: 0px">
            <v-list-item-action>
              <v-img
                :src="require('~/assets/img/music-avatar.jpg')"
                width="32"
                height="32"
                style="border-radius: 4px"
              ></v-img>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Rocket Dog Ru</v-list-item-title>
              <v-list-item-subtitle>Goodnight Cody</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon style="margin: auto">
              <v-list-item-subtitle>11h</v-list-item-subtitle>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
      <v-list flat subheader three-line>
        <v-subheader>LIBRARY</v-subheader>

        <v-list-item-group active-class="">
          <v-list-item style="min-height: 0px">
            <v-list-item-icon>
              <v-icon v-text="'mdi-music'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'My Collection'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item style="min-height: 0px">
            <v-list-item-icon>
              <v-icon v-text="'mdi-heart-outline'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Liked Sounds'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item style="min-height: 0px">
            <v-list-item-icon>
              <v-icon v-text="'mdi-plus'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Create Playlist'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-flex>
        <Nuxt />
      </v-flex>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  name: "DefaultLayout",
  components: {
    Navbar,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
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
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  components: { Navbar },
};
</script>
