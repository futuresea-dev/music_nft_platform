<template>
  <v-container class="c-container">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-flex class="c-carousel-section">
          <div class="c-carousel-container">
            <img
              :src="require(`~/assets/img/banner-${i + 1}.jpg`)"
              alt="Carousel"
              class="c-carousel-img"
            />
          </div>
        </v-flex>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Forth"],
    };
  },
};
</script>
<style scoped>
.c-container {
  max-width: 1280px;
}
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
