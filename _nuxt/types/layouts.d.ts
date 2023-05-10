import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blank" | "default"
declare module "F:/39_bitsong.io/source/Lock-Song-Nuxt-vuetify-web3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}