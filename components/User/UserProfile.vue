<script setup>
const props = defineProps({
  headerImgUrl: {
    type: String,
  },
});
</script>
<template>
  <v-row class="mt-10">
    <v-col cols="4">
      <v-layout class="align-top">
        <div class="c-userprofile-logo">
          <img
            :src="props.headerImgUrl"
            alt="user-logo"
            width="125"
            height="125"
            class="rounded-lg"
          />
          <v-btn text="Follow" class="c-userprofile-follow-btn"></v-btn>
        </div>
        <div class="c-userprofile-detail">
          <div class="c-userprofile-title">Daniel Allan</div>
          <v-layout>
            <span class="c-userprofile-content">0xbcef...785c</span>
            <div class="mx-5">
              <span class="mx-1"><v-icon icon="mdi-twitter"></v-icon></span>
              <span class="mx-1"><v-icon icon="mdi-instagram"></v-icon></span>
            </div>
          </v-layout>
          <v-layout>
            <span class="c-userprofile-content">969 Followers</span
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="c-userprofile-content">33 Following</span>
          </v-layout>
        </div>
      </v-layout>
    </v-col>
    <v-col cols="4">
      <div class="c-userprofile-detail">
        <div class="c-userprofile-title">About</div>
        <span class="c-userprofile-content"
          >producer / artist / songwriter</span
        >
      </div>
    </v-col>
    <v-col cols="2">
      <div class="c-userprofile-detail">
        <div class="c-userprofile-title">39</div>
        <span class="c-userprofile-content">Sounds Released</span>
      </div>
    </v-col>
    <v-col cols="2">
      <div class="c-userprofile-detail">
        <div class="c-userprofile-title">691</div>
        <span class="c-userprofile-content">Collectors</span>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped>
.c-userprofile-logo {
  display: grid;
}
.c-userprofile-follow-btn {
  margin-top: 20px;
  width: 125px;
}
.c-userprofile-detail {
  margin-left: 20px;
  padding-top: 50px;
}
.c-userprofile-title {
  font-size: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  line-height: 22px;
  font-weight: 600;
  margin: 10px 0px;
}
.c-userprofile-content {
  font-size: 18px;
  line-height: 24px;
  min-width: 99px;
}
</style>
