<script setup>
import Title from "~/components/Detail/Title.vue";

const activities = [
  {
    desc: "Daniel Allan minted #5",
    time: 1,
  },
  {
    desc: "Daniel Allan minted #4",
    time: 2,
  },
  {
    desc: "Daniel Allan minted #3",
    time: 5,
  },
  {
    desc: "Daniel Allan minted #2",
    time: 7,
  },
  {
    desc: "Daniel Allan minted #1",
    time: 9,
  },
];
</script>
<template>
  <div class="mt-10">
    <Title text="Recent Activity"></Title>
    <v-layout class="flex-column py-5">
      <v-table class="c-table-container">
        <tbody>
          <tr v-for="item in activities" :key="item.name">
            <td>
              <v-layout class="align-center">
                <img src="/img/music-detail-1.jpg" class="c-avatar" />
                <span class="text-h6">{{ item.desc }}</span>
              </v-layout>
            </td>
            <td class="text-right">{{ item.time }}h</td>
          </tr>
        </tbody>
      </v-table>
    </v-layout>
  </div>
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
  width: 64px;
  height: 64px;
}
</style>
