<template>
  <v-btn
    v-if="!isLoggedIn"
    color="primary"
    rounded="pill"
    variant="flat"
    @click.stop="dialog = true"
  >
    Connect
  </v-btn>

  <v-menu v-if="isLoggedIn">
    <template v-slot:activator="{ props }">
      <v-btn class="ml-2" icon="mdi-account-outline" v-bind="props"></v-btn>
    </template>

    <v-card width="300">
      <v-list>
        <v-list-item
          class="pr-0 my-2"
          prepend-avatar="/img/default.png"
          :title="name"
          :subtitle="formatShortAddress(address, 6)"
        >
          <template v-slot:append>
            <app-btn-copy :text="address ?? ``"></app-btn-copy>
          </template>
        </v-list-item>
      </v-list>
      <v-btn variant="flat" block @click.stop="disconnect"> Disconnect </v-btn>
    </v-card>
  </v-menu>

  <v-dialog width="350" v-model="dialog">
    <v-card>
      <v-card-title>Connect Wallet</v-card-title>
      <v-list class="mb-1">
        <v-list-item
          class="mx-2 pa-2"
          @click="onConnect(SessionType.KEPLR)"
          prepend-avatar="/img/keplr-logo.png"
          title="Keplr"
          subtitle="Connect with Keplr"
        >
        </v-list-item>
        <v-list-item
          class="mx-2 pa-2"
          @click="onConnect(SessionType.LEAPWALLET)"
          prepend-avatar="/img/leapwallet-logo.png"
          title="Leap Wallet"
          subtitle="Connect with Leap Wallet"
        >
        </v-list-item>
        <v-list-item
          class="mx-2 pa-2"
          @click="onConnect(SessionType.COSMOSTATION)"
          prepend-avatar="/img/cosmostation-logo.png"
          title="Cosmostation"
          subtitle="Connect with Cosmostation Extension"
        >
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { SessionType } from "~~/types";
import { useWalletStore } from "~~/store/wallet";
import { storeToRefs } from "pinia";
import AppBtnCopy from "./AppBtnCopy.vue";

const { connect, disconnect, generateToken } = useWalletStore();
const { isLoggedIn, address, name } = storeToRefs(useWalletStore());

const dialog = ref(false);

const onConnect = async (session: SessionType) => {
  try {
    await connect(session);
    await generateToken();

    if (isLoggedIn.value) {
      dialog.value = false;
    }
  } catch (error) {
    throw error;
  }
};
</script>
