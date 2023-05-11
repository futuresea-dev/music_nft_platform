<script setup>
import image1 from "/img/banner-1.jpg";
import image2 from "/img/banner-2.jpg";
import image3 from "/img/banner-3.jpg";
import image4 from "/img/banner-4.jpg";
const slides = ref(["First", "Second", "Third", "Forth"]);
const images = [image1, image2, image3, image4];
</script>

<template>
  <v-container class="c-container">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <div class="c-carousel-section">
          <div class="c-carousel-container">
            <img :src="images[i + 1]" alt="Carousel" class="c-carousel-img" />
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style scoped>
.c-carousel-section {
  padding: 0rem 2.5rem;
  background-color: rgb(15 15 15);
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 400px;
}
.c-carousel-container {
  mask-image: linear-gradient(
    90deg,
    transparent,
    black 2%,
    black 98%,
    transparent
  );
  width: 600px;
  height: 600px;
  top: -87px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
}
.c-carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
