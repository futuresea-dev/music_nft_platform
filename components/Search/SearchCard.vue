<script setup>
const items = ref([
  { title: "Add to playlist", icon: "mdi-playlist-music" },
  { title: "Add to queue", icon: "mdi-playlist-plus" },
  { title: "Share", icon: "mdi-export-variant" },
]);
const recentProps = defineProps({
  img: {
    type: String,
  },
  creator: {
    type: String,
  },
  musicname: {
    type: String,
  },
  time: {
    type: String,
  },
  musiclink: {
    type: String,
  },
  creatorlink: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  toggle: {
    type: Function,
    required: true,
  },
  isSelected: {
    type: Boolean,
  },
});
const creatorNavigate = (creator) => {
  navigateTo("/user" + creator);
};

const musicNavigate = (creator, musiclink) => {
  navigateTo(creator + musiclink);
};
</script>
<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="c-card" v-bind="props">
        <div class="c-card-top-content">
          <v-badge
            class="c-card-badge"
            color="rgba(14, 18, 19, 0.3)"
            content="Starts today, 7:00AM"
            inline
          ></v-badge>
          <v-sheet>
            <NuxtLink :to="recentProps.creatorlink + recentProps.musiclink">
              <img :src="recentProps.img" alt="recent" class="c-recent-img" />
            </NuxtLink>
          </v-sheet>
          <div class="c-gradient"></div>
          <v-icon
            :class="recentProps.isSelected ? 'c-checked-btn' : 'show-none'"
            >mdi-check-bold</v-icon
          >
          <v-btn
            color="Black"
            rounded="4"
            size="60"
            :class="isHovering ? 'c-add-cart-btn' : 'show-none'"
            prepend-icon="mdi-plus"
            variant="flat"
            @click.stop="
              typeof recentProps.toggle === 'function' && recentProps.toggle()
            "
          >
          </v-btn>
          <v-btn
            color="white"
            rounded="4"
            size="60"
            :class="isHovering ? 'c-play-btn' : 'show-none'"
            prepend-icon="mdi-play"
            variant="flat"
          >
          </v-btn>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <v-card-subtitle
              @click.stop="creatorNavigate(recentProps.creatorlink)"
            >
              {{ recentProps.creator }}
            </v-card-subtitle>
            <v-card-title
              @click.stop="
                musicNavigate(recentProps.creatorlink, recentProps.musiclink)
              "
              class="c-recent-card-title"
              >{{ recentProps.musicname }}</v-card-title
            >
          </div>
          <v-layout class="justify-end" v-if="isHovering">
            <!-- <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon="mdi-dots-horizontal"
                  v-bind="props"
                  width="30"
                  height="30"
                  class="ma-2"
                ></v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu> -->
            <v-btn
              variant="text"
              icon="mdi-heart-outline"
              width="30"
              height="30"
              class="ma-2"
            ></v-btn>
          </v-layout>
        </div>
        <v-card-actions>
          <v-layout class="px-3 align-center justify-space-between">
            <div>{{ recentProps.price }} ETH</div>
            <v-btn
              text="Buy"
              variant="text"
              color="primary"
              class="c-buy-btn"
              @click.stop="
                musicNavigate(recentProps.creatorlink, recentProps.musiclink)
              "
            ></v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
.c-card {
  background-color: black;
  color: white;
  border-radius: 10px;
  width: 100%;
  margin: 0px 10px;
  cursor: pointer;
}
.c-card-top-content {
  overflow: hidden;
  aspect-ratio: 1 / 1;
  position: relative;
}
.c-card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
}
.c-gradient {
  background-image: linear-gradient(to top, #0e1213, rgba(14, 18, 19, 0));
  height: 7rem;
  width: 100%;
  position: absolute;
  bottom: 0px;
}
.c-play-btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 30px;
}
.c-card-action-btn {
  width: 100%;
  color: #262626;
  background-color: #fff;
}
.c-recent-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make the image cover the entire container */
  object-position: center;
}
.c-avatar {
  width: 22px;
  height: 22px;
  border-radius: 100px;
  overflow: hidden;
  margin-right: 10px;
}
.c-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make the image cover the entire container */
  object-position: center;
}
.c-desc {
  font-size: 11px;
  font-weight: 600;
  flex-wrap: wrap;
}
.c-recent-card-title {
  width: 180px;
}
.show-none {
  display: none;
}
.c-buy-btn {
  text-transform: none;
}
.c-add-cart-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 25px;
  transform: translate(-50%, -50%);
}
.c-checked-btn {
  position: absolute;
  top: 40px;
  right: 20px;
}
</style>
