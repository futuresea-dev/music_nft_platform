<script setup>
const toggle = ref([]);
const activities = [
  {
    desc: "0x8ab...f85d liked this Sound",
    time: 1,
  },
  {
    desc: "Manners/ ST liked this Sound",
    time: 2,
  },
  {
    desc: "gel added this Sound to Feels",
    time: 5,
  },
  {
    desc: "0xb54...f2f3 liked this Sound",
    time: 7,
  },
  {
    desc: "0xb54...f2f3 liked this Sound",
    time: 9,
  },
];
</script>
<template>
  <v-layout class="flex-column py-5">
    <v-btn-toggle v-model="toggle" multiple>
      <v-btn class="mr-2 rounded-lg" :value="0" text="All"></v-btn>
      <v-btn class="mx-2 rounded-lg" :value="1" text="Collected"></v-btn>
      <v-btn class="mx-2 rounded-lg" :value="2" text="Playlists"></v-btn>
      <v-btn class="ml-2 rounded-lg" :value="3" text="Likes"></v-btn>
    </v-btn-toggle>
    <v-table class="c-table-container">
      <tbody>
        <tr v-for="item in activities" :key="item.name">
          <td>
            <v-layout class="align-center">
              <img src="/img/avatar-1.jpg" class="c-avatar" />
              <span class="text-h6">{{ item.desc }}</span>
            </v-layout>
          </td>
          <td class="text-right">{{ item.time }}h</td>
        </tr>
      </tbody>
    </v-table>
  </v-layout>
</template>
<style scoped>
.c-table-container {
  background: transparent;
}
.c-table-container td {
  padding: 20px 0px !important;
}
.c-avatar {
  border-radius: 4px;
  margin-right: 20px;
}
</style>
