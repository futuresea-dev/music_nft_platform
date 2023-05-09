<template>
  <v-layout class="c-footer">
    <v-flex class="d-flex">
      <v-layout class="d-flex justify-space-between flex-column">
        <img
          :src="require('~/assets/img/logo.png')"
          alt="Logo"
          width="200"
          height="70"
        />
        <div>
          <div class="grey--text text-caption">© Copyright 2023 Sound.xyz</div>
          <div class="grey--text text-caption">All rights reserved.</div>
        </div>
      </v-layout>
      <v-layout class="d-flex justify-space-between">
        <v-flex>
          <div class="c-header-text">Company</div>
          <div class="c-body-text">Careers</div>
          <div class="c-body-text">Market</div>
          <div class="c-body-text">Terms of Service</div>
          <div class="c-body-text">Privacy Policy</div>
        </v-flex>
        <v-flex>
          <div class="c-header-text">Resources</div>
          <div class="c-body-text">About</div>
          <div class="c-body-text">Blog</div>
          <div class="c-body-text">FAQ</div>
          <div class="c-body-text">Docs</div>
        </v-flex>
        <v-flex>
          <div class="c-header-text">Follow Us</div>
          <v-flex class="d-flex">
            <v-icon mdi size="30" class="mr-2">mdi-twitter</v-icon>
            <v-icon mdi size="30" class="mr-2">mdi-instagram</v-icon>
            <v-icon mdi size="30" class="mr-2">mdi-mirror</v-icon>
            <v-icon mdi size="30" class="mr-2">mdi-email</v-icon>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.c-footer {
  width: 100%;
  padding: 50px 30px;
  margin-top: 20px;
  background-color: rgb(247 247 247);
}
.c-header-text {
  color: rgb(31 31 31 / 1);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  margin: 10px 0px;
}
.c-body-text {
  color: rgb(31 31 31 / 0.8);
  font-size: 15px;
  line-height: 18px;
  margin: 10px 0px;
}
</style>
