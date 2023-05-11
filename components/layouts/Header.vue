<script setup></script>

<template>
  <v-container class="c-container">
    <div class="d-flex">
      <v-autocomplete
        label="Search for anything on Sound"
        prepend-inner-icon="mdi-magnify"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        class="c-search-input"
        variant="solo"
        append-inner-icon=""
      ></v-autocomplete>
      <v-btn elevation="2" height="55">Sign In</v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.c-search-input {
  margin-right: 20px;
}

.c-search-input :deep(.v-field-label--floating) {
  display: none;
}

.c-search-input :deep(.v-field-label) {
  transform: none !important;
}

.c-search-input :deep(.v-field__input) {
  padding-top: 0px;
  padding-bottom: 0px;
}
.c-search-input :deep(.v-field__input input) {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<style>
.c-container {
  max-width: 1200px;
  padding-top: 50px;
}
</style>
