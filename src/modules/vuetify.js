import { createVuetify } from 'vuetify'

// Default configurations
import { defaults, theme, icons } from '@/config/vuetify'

// Dont import @/@core/scss/vuetify/_variables.scss
// as it is imported by vuetify plugin in vite.config.js
import '@/@core/scss/vuetify/index.scss'

// Icons
import { aliases as iconAliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

export const install = (app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdiSvg',
      aliases: {
        ...icons,
        ...iconAliases
      },
      sets: {
        mdiSvg
      }
    },
    theme,
    defaults
  })

  app.use(vuetify)
}
