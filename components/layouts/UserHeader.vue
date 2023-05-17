<script setup>
const creator = "angelbaby";
const mints = "5.6K";
const props = defineProps({
  headerImgUrl: {
    type: String,
  },
});
</script>
<template>
  <div
    class="c-music-detail-header"
    :style="`background-image: url(${headerImgUrl})`"
  >
    <div class="mask-content">
      <v-layout class="c-content">
        <div class="c-title-img">
          <img :src="headerImgUrl" alt="title" />
        </div>
      </v-layout>
    </div>
  </div>
</template>
<style scoped>
.c-music-detail-header {
  background-size: cover;
  background-position: center;
  height: 540px;
}
.mask-content {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  background: rgba(2, 2, 2, 0.3);
  backdrop-filter: blur(80px);
  justify-content: center;
}
.c-content {
  max-width: 1280px;
  align-items: center;
  justify-content: right;
}
.c-title {
  font-family: var(--fonts-title);
  font-weight: 500;
  font-size: 48px;
  line-height: 54px;
}

.c-title-img {
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
}

.c-title-img img {
  width: 100%;
  height: 100%;
}
.c-play-btn {
  font-size: 80px;
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  width: 120px;
  height: 120px;
  color: black;
}
</style>
