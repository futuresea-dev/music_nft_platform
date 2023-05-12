<script setup>
import Logo from "/logo+typo.svg";
</script>
<template>
  <v-layout class="c-footer">
    <v-layout>
      <v-layout class="d-flex justify-space-between flex-column">
        <img :src="Logo" alt="Logo" width="200" height="70" />
        <div>
          <div class="grey--text text-caption">© Copyright 2023 Sound.xyz</div>
          <div class="grey--text text-caption">All rights reserved.</div>
        </div>
      </v-layout>
      <v-layout class="d-flex justify-space-between">
        <div>
          <div class="c-header-text">Company</div>
          <div class="c-body-text">Careers</div>
          <div class="c-body-text">Market</div>
          <div class="c-body-text">Terms of Service</div>
          <div class="c-body-text">Privacy Policy</div>
        </div>
        <div>
          <div class="c-header-text">Resources</div>
          <div class="c-body-text">About</div>
          <div class="c-body-text">Blog</div>
          <div class="c-body-text">FAQ</div>
          <div class="c-body-text">Docs</div>
        </div>
        <div>
          <div class="c-header-text">Follow Us</div>
          <v-layout>
            <v-icon mdi size="30" class="mr-2">mdi-twitter</v-icon>
            <v-icon mdi size="30" class="mr-2">mdi-instagram</v-icon>
            <v-icon mdi size="30" class="mr-2">mdi-mirror</v-icon>
            <v-icon mdi size="30" class="mr-2">mdi-email</v-icon>
          </v-layout>
        </div>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<style scoped>
.c-footer {
  width: 100%;
  padding: 50px 30px;
  margin-top: 20px;
  background-color: rgb(var(--v-theme-surface));
}
.c-header-text {
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  margin: 10px 0px;
}
.c-body-text {
  font-size: 15px;
  line-height: 18px;
  margin: 10px 0px;
}
</style>
