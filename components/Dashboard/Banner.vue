<script setup>
const imgUrl = "/img/banner-";
const slides = [
  {
    img: "/img/banner-1.jpg",
    creator: "Dessauer",
    musicname: "It Fuzzes And Condensates",
    mints: 66,
    musiclink: "/it-fuzzes-and-condensates",
    creatorlink: "/dessauer",
  },
  {
    img: "/img/banner-2.jpg",
    creator: "billings",
    musicname: "all right",
    mints: 100,
    musiclink: "/all-right",
    creatorlink: "/billings",
  },
  {
    img: "/img/banner-3.jpg",
    creator: "bloody white",
    musicname: "wonderboy",
    mints: 15,
    musiclink: "/wonderboy",
    creatorlink: "/bloody-white",
  },
  {
    img: "/img/banner-4.jpg",
    creator: "Sara Phillips",
    musicname: "everybody knows",
    mints: 90,
    musiclink: "/everybody-knows",
    creatorlink: "/sara-phillips",
  },
];
const items = ref(["first", "second", "third", "forth"]);

const creatorNavigate = (creator) => {
  navigateTo("/user" + creator);
};

const musicNavigate = (creator, musiclink) => {
  navigateTo(creator + musiclink);
};
</script>

<template>
  <v-container class="c-container">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <div class="c-carousel-section">
          <div class="c-carousel-container">
            <img
              :src="imgUrl + (i + 1) + '.jpg'"
              alt="Carousel"
              class="c-carousel-img"
            />
          </div>
          <div class="c-carousel-text">
            <v-layout class="align-center">
              <v-btn
                color="white"
                rounded="4"
                size="60"
                class="c-play-btn"
                prepend-icon="mdi-play"
              >
              </v-btn>
              <div class="ml-5">
                <div
                  class="text-h3 c-hover"
                  @click="
                    musicNavigate(slides[i].creatorlink, slides[i].musiclink)
                  "
                >
                  {{ slides[i].musicname }}
                </div>
                <div
                  @click="creatorNavigate(slides[i].creatorlink)"
                  class="c-hover"
                >
                  {{ slides[i].creator }} | {{ slides[i].mints }} Mints
                </div>
              </div>
            </v-layout>
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
.c-carousel-text {
  margin-left: 50px;
}
.c-play-btn {
  font-size: 30px;
}
</style>
