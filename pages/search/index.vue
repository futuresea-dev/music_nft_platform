<script lang="ts" setup>
definePageMeta({
  layout: "custom",
});
import Footer from "~/components/layouts/Footer.vue";
const loaded = ref(false);
const loading = ref(false);
const select = ref({ name: "Listed: Recent", value: "0" });
const searchItems = [
  { name: "Listed: Recent", value: "0" },
  { name: "Listed: Oldest", value: "1" },
  { name: "Price: Lowest", value: "2" },
  { name: "Price: Lowest", value: "3" },
];

const onClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};

const collections = [
  {
    img: "/img/music-avatar.jpg",
    creator: "Danny Dwyer",
    musicname: "Disbeliever",
    time: 9,
    value: 0,
    mints: 100,
  },
  {
    img: "/img/recent.jpg",
    creator: "Reset Robot",
    musicname: "Orthosia",
    time: 9,
    value: 1,
    mints: 150,
  },
  {
    img: "/img/top-selling.jpg",
    creator: "Goodnight Cody",
    musicname: "Rocket Dog Ru",
    time: 11,
    value: 2,
    mints: 600,
  },
  {
    img: "/img/music-avatar.jpg",
    creator: "Danny Dwyer",
    musicname: "Disbeliever",
    time: 9,
    value: 3,
    mints: 100,
  },
  {
    img: "/img/recent.jpg",
    creator: "Reset Robot",
    musicname: "Orthosia",
    time: 9,
    value: 4,
    mints: 150,
  },
];

const searchData = [
  {
    img: "/img/top-selling.jpg",
    creator: "Dessauer",
    musicname: "It Fuzzes And Condensates",
    time: "Ends in 21h",
    musiclink: "/it-fuzzes-and-condensates",
    creatorlink: "/dessauer",
    price: "0.5",
  },
  {
    img: "/img/top-selling.jpg",
    creator: "billings",
    musicname: "all right",
    time: "Ends in 2d",
    musiclink: "/all-right",
    creatorlink: "/billings",
    price: "0.01",
  },
  {
    img: "/img/top-selling.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: "0.05",
  },
  {
    img: "/img/top-selling.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: "0.7",
  },
];
</script>
<template>
  <v-container class="c-container-land">
    <v-row>
      <v-col cols="8">
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <v-select
          v-model="select"
          :items="searchItems"
          item-title="name"
          item-value="value"
          label="Select"
          variant="solo"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
    <v-layout>
      <div class="c-search-left-side">
        <div class="text-h6">Price range</div>
        <v-layout class="mt-5">
          <v-text-field label="Min" variant="solo" single-line></v-text-field>
          <span class="c-range-pin">-</span>
          <v-text-field label="Max" variant="solo" single-line></v-text-field>
        </v-layout>

        <div class="text-h6">Collections</div>
        <v-list lines="one" select-strategy="classic" class="mt-5">
          <v-list-item
            :value="item.value"
            v-for="(item, index) in collections"
            :key="index"
            class="py-5"
          >
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <img :src="item.img" alt="avatar" class="c-collection-avatar" />
              </v-list-item-action>
            </template>

            <v-list-item-title>{{ item.musicname }}</v-list-item-title>

            <v-list-item-subtitle>
              {{ item.creator }}
            </v-list-item-subtitle>
            <template v-slot:append="{ isActive }">
              <v-list-item-action start>
                <span>{{ item.mints }}</span>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
      </div>
      <div>
        <v-row>
          <v-col
            xs="2"
            sm="4"
            md="3"
            v-for="(item, index) in searchData"
            :key="index"
          >
            <SearchCard
              :img="item.img"
              :creator="item.creator"
              :musicname="item.musicname"
              :time="item.time"
              :musiclink="item.musiclink"
              :creatorlink="item.creatorlink"
              :price="item.price"
            ></SearchCard>
          </v-col>
        </v-row>
      </div>
    </v-layout>
  </v-container>
  <Footer></Footer>
</template>
<style scoped>
.c-container-land {
  margin-top: 100px;
  max-width: 1600px;
}
.c-search-left-side {
  padding: 20px;
  border-radius: 4px;
  width: 300px;
  min-width: 300px;
  background: rgb(var(--v-theme-surface), 0.7);
}

.c-range-pin {
  margin: 5px 20px 0px 20px;
  font-size: 30px;
}
.c-collection-avatar {
  width: 32px;
  height: 32px;
}
</style>
