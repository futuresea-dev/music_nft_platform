<template>
  <v-container class="c-container">
    <v-flex class="d-flex">
      <v-text-field
        solo
        label="Search for anything on Sound"
        prepend-inner-icon="mdi-magnify"
        class="c-search-input"
      ></v-text-field>
      <v-btn elevation="2" height="48">Sign In</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.c-container {
  max-width: 1280px;
  padding-top: 50px;
}

.c-search-input {
  margin-right: 20px;
}
.c-search-input ::v-deep .v-input__slot {
  height: 48px;
}
</style>
