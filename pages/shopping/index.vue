<script setup>
definePageMeta({
  layout: "custom",
});
import Footer from "~/components/layouts/Footer.vue";
const loaded = ref(false);
const loading = ref(false);
const select = ref({ name: "Listed: Recent", value: "0" });
const selection = ref([]);
const selectedItems = ref([]);
const showLeftSide = ref(true);
const showRightSide = ref(false);
const totalPrice = ref(0);

const searchItems = [
  { name: "Listed: Recent", value: "0" },
  { name: "Listed: Oldest", value: "1" },
  { name: "Price: Lowest", value: "2" },
  { name: "Price: Lowest", value: "3" },
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
    remaintime: 9,
    value: 0,
    mints: 150,
  },
  {
    img: "/img/music-detail.jpg",
    creator: "billings",
    musicname: "all right",
    time: "Ends in 2d",
    musiclink: "/all-right",
    creatorlink: "/billings",
    price: 0.01,
    remaintime: 9,
    value: 1,
    mints: 150,
  },
  {
    img: "/img/upcoming.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: 0.05,
    remaintime: 9,
    value: 2,
    mints: 150,
  },
  {
    img: "/img/music-logo.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: 0.7,
    remaintime: 9,
    value: 3,
    mints: 150,
  },
  {
    img: "/img/top-selling.jpg",
    creator: "Dessauer",
    musicname: "It Fuzzes And Condensates",
    time: "Ends in 21h",
    musiclink: "/it-fuzzes-and-condensates",
    creatorlink: "/dessauer",
    price: 0.5,
    remaintime: 9,
    value: 4,
    mints: 150,
  },
  {
    img: "/img/music-detail.jpg",
    creator: "billings",
    musicname: "all right",
    time: "Ends in 2d",
    musiclink: "/all-right",
    creatorlink: "/billings",
    price: 0.01,
    remaintime: 9,
    value: 5,
    mints: 150,
  },
  {
    img: "/img/upcoming.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: 0.05,
    remaintime: 9,
    value: 6,
    mints: 150,
  },
  {
    img: "/img/music-logo.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: 0.7,
    remaintime: 9,
    value: 7,
    mints: 150,
  },
  {
    img: "/img/music-logo.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    time: "Ends in 2d",
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
    price: 0.7,
    remaintime: 9,
    value: 8,
    mints: 150,
  },
];

watch(selection, (newValue) => {
  if (selection.value.length > 1) {
    showLeftSide.value = false;
    showRightSide.value = true;
  } else {
    showLeftSide.value = true;
    showRightSide.value = false;
  }

  const new_arr = [];
  let new_price = 0;
  selection.value.forEach((item) => {
    new_arr.push(searchData[item]);
    new_price += parseFloat(searchData[item].price);
  });
  selectedItems.value = new_arr;
  totalPrice.value = new_price;
});

const onClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};

const handleAction = () => {
  console.log("== Buy selected collections ==");
};

const clearSelectedList = () => {
  selectedItems.value = [];
  selection.value = [];
  totalPrice.value = 0;
};
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
      <div class="c-search-left-side" v-if="showLeftSide">
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
            v-for="(item, index) in searchData"
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
        <v-item-group v-model="selection" multiple>
          <v-row>
            <v-col
              xs="2"
              sm="4"
              md="3"
              v-for="(item, index) in searchData"
              :key="index"
            >
              <v-item v-slot="{ isSelected, toggle }">
                <SearchCard
                  :img="item.img"
                  :creator="item.creator"
                  :musicname="item.musicname"
                  :time="item.time"
                  :musiclink="item.musiclink"
                  :creatorlink="item.creatorlink"
                  :price="item.price"
                  :toggle="toggle"
                  :isSelected="isSelected"
                ></SearchCard>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </div>
      <div class="c-search-right-side" v-if="showRightSide">
        <v-layout class="justify-space-between">
          <div class="text-h6">Bags</div>
          <v-btn
            text="Clear"
            variant="text"
            color="primary"
            class="c-buy-btn"
            @click.stop="clearSelectedList()"
          ></v-btn>
        </v-layout>
        <v-list
          lines="one"
          select-strategy="classic"
          class="mt-5 c-selected-list-container"
        >
          <v-list-item
            :value="item.value"
            v-for="(item, index) in selectedItems"
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
                <span>{{ item.price }} ETH</span>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
        <div class="c-totalprice-container">Total {{ totalPrice }} ETH</div>
        <ButtonCardSignBtn
          @handle-action="handleAction"
          text="Buy"
        ></ButtonCardSignBtn>
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
  height: fit-content;
}
.c-search-right-side {
  padding: 40px 20px;
  margin-left: 30px;
  border-radius: 4px;
  width: 300px;
  min-width: 300px;
  background: rgb(var(--v-theme-surface));
  height: fit-content;
}
.c-range-pin {
  margin: 5px 20px 0px 20px;
  font-size: 30px;
}
.c-collection-avatar {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}

.c-selected-list-container {
  min-height: 500px;
}
.c-totalprice-container {
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 20px;
  background-color: black;
  border-radius: 6px;
}
</style>
