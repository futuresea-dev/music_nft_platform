<template>
  <v-container>
    <v-layout>
      <v-layout class="align-center">
        <div class="pr-2">
          <img :src="require(`~/assets/img/music-logo.jpg`)" class="c-avatar" />
        </div>
        <v-flex>
          <div class="c-small-text">angelbaby</div>
          <div class="c-title-text">im fine :(:)[Feat. GrimesAI]</div>
          <div class="c-small-text">2,968 mints</div>
        </v-flex>
      </v-layout>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon size="24" mdi>mdi-dots-horizontal</v-icon>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "MusicList",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
<style scoped>
.c-avatar {
  border-radius: 4px;
}
.c-title-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
}
.c-small-text {
  font-size: 14px;
  line-height: 18px;
  color: #737373;
}
</style>
