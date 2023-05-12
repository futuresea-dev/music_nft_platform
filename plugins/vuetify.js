// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin(nuxtApp => {
  const darkTheme = {
    dark: true,
    colors: {
      primary: colors.pink.accent2, // dark deep purple
      secondary: colors.blue.base, // blue
    },
  };

  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "darkTheme",
      themes: {
        darkTheme
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})