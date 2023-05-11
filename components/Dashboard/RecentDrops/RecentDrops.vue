<script setup>
import Title from "~/components/Dashboard/Title.vue";
import RecentCard from "./RecentCard.vue";
</script>
<template>
  <v-container class="c-container">
    <Title text="Recent Drops" seeAllLink="recent"></Title>
    <v-row>
      <v-col sm="3">
        <RecentCard></RecentCard>
      </v-col>
      <v-col sm="3">
        <RecentCard></RecentCard>
      </v-col>
      <v-col sm="3">
        <RecentCard></RecentCard>
      </v-col>
      <v-col sm="3">
        <RecentCard></RecentCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
