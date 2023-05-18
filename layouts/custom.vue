<script setup>
const items = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Shopping",
    to: "/shopping",
  },
];
</script>
<template>
  <v-locale-provider>
    <v-app>
      <v-app-bar height="110" class="c-app-bar">
        <v-layout class="c-app-bar-container">
          <v-layout>
            <Logo />
            <div class="c-btn-group ml-16">
              <v-btn
                :to="item.to"
                v-for="(item, index) in items"
                :key="index"
                >{{ item.title }}</v-btn
              >
            </div>
          </v-layout>
          <v-layout class="justify-end align-center">
            <ButtonWalletBtn></ButtonWalletBtn>
          </v-layout>
        </v-layout>
      </v-app-bar>
      <v-main>
        <div>
          <RouterView />
        </div>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
<style scoped>
.c-app-bar :deep(.v-toolbar__content) {
  justify-content: center;
}
.c-app-bar-container {
  max-width: 1600px;
  justify-content: space-between;
}
.c-btn-group :deep(a) {
  height: 100%;
  border-radius: 0px;
  border-bottom: 4px solid transparent;
  text-transform: none;
  font-size: 18px;
}

.c-btn-group :deep(.v-btn--active) {
  border-bottom: 4px solid rgb(var(--v-theme-primary));
}
.c-btn-group :deep(.v-btn--active > .v-btn__overlay) {
  opacity: 0;
}
</style>
