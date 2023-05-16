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
        <v-btn class="c-play-btn" prepend-icon="mdi-play"> </v-btn>
        <div class="mr-16">
          <div class="c-title">im fine : ( : [Feat. GrimesAI X WesGhost]</div>
          <v-layout>
            <div class="c-subtitle">{{ creator }}</div>
            &nbsp;|&nbsp;
            <div>{{ mints }} Mints</div>
          </v-layout>
        </div>
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
