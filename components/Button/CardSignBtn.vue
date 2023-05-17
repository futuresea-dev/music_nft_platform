<script setup lang="ts">
import { SessionType } from "~~/types";
import { useWalletStore } from "~~/store/wallet";
import { storeToRefs } from "pinia";

const { connect, disconnect, generateToken } = useWalletStore();
const { isLoggedIn, address, name } = storeToRefs(useWalletStore());
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

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

<template>
  <v-btn
    v-if="!isLoggedIn"
    variant="flat"
    @click.stop="dialog = true"
    class="c-detail-action-btn"
  >
    Sign In
  </v-btn>

  <v-btn
    v-if="isLoggedIn"
    variant="flat"
    @click.stop="$emit('handle-action')"
    class="c-detail-action-btn"
  >
    {{ props.text }}
  </v-btn>

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

<style scoped>
.c-detail-action-btn {
  width: 100%;
  color: #262626;
  background-color: #fff;
  font-size: 20px;
  text-transform: none;
  font-weight: 700;
  height: 60px;
  margin-top: 20px;
}
</style>
