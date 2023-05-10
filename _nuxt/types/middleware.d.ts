import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "F:/39_bitsong.io/source/Lock-Song-Nuxt-vuetify-web3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}