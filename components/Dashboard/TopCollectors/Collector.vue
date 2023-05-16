<script setup>
import FollowModal from "~/components/Modal/FollowModal.vue";
const propsData = defineProps({
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  addr: {
    type: String,
  },
  mints: {
    type: Number,
  },
  collected: {
    type: Number,
  },
  following: {
    type: Number,
  },
  followers: {
    type: Number,
  },
});
const navigateCreator = (creator) => {
  navigateTo("/user" + creator);
};
</script>
<template>
  <v-container>
    <v-layout class="align-center c-collector">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-layout class="align-center" v-bind="props">
            <div class="mr-5 py-2 d-flex align-center">
              <img :src="propsData.img" class="c-avatar" alt="avatar" />
            </div>
            <div>
              <div
                class="c-title-text"
                @click.stop="navigateCreator(propsData.link)"
              >
                {{ propsData.name }}
              </div>
              <div class="c-small-text">{{ propsData.mints }}K mints</div>
            </div>
          </v-layout>
        </template>

        <follow-modal
          :img="propsData.img"
          :name="propsData.name"
          :addr="propsData.addr"
          :collected="propsData.collected"
          :following="propsData.following"
          :followers="propsData.followers"
        ></follow-modal>
      </v-menu>
    </v-layout>
  </v-container>
</template>
<style>
.c-collector:hover {
  background-color: rgba(var(--v-theme-surface));
  border-radius: 10px;
  cursor: pointer;
}
.c-avatar {
  border-radius: 100px;
  width: 64px;
  height: 64px;
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
