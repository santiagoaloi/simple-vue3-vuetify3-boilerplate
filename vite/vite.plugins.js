/*
 * Keeping inports separately to clean Vite config.
 * Any library usage should be prefixed with ``
 */
import {
  vue,
  vuetify,
  vueMacros,
  autoImport,
  components,
  layouts,
  pages,
  unfonts
} from './vite.plugin.inports.js'

export function createVitePlugins() {
  const vitePlugins = [
    vue({
      /* reactivityTransform is in beta stage */
      reactivityTransform: true
    }),

    vuetify({
      styles: { configFile: 'src/@core/scss/vuetify/variables.scss' }
    }),

    // https://github.com/sxzz/unplugin-vue-macros
    vueMacros(),

    // https://github.com/antfu/unplugin-auto-import
    // Autoimport dependencies inside SFCs or JS.
    autoImport({
      imports: [
        'vue',
        'vue/macros',
        'pinia',

        {
          // Vue Router
          'vue-router': ['createRouter', 'createWebHistory', 'useRouter', 'useRoute'],

          // Vuetify
          vuetify: ['useDisplay', 'createVuetify', 'useTheme']
        }
      ],
      dirs: [
        'src/utils/**',

        //Stores
        'src/stores/**/**',
        'src/pages/**/**/stores'
      ],
      vueTemplate: true,
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),

    // https://github.com/antfu/unplugin-vue-components
    // Autoimport Vue SFCs.
    components({
      dirs: [
        // Base reusable components
        'src/@core/components',

        // Layout individual components (default, secure, etc...)
        'src/layouts/components/**/**',

        // Any SFCs inside page views. (careful with name collisions)
        // name duplication will cause ignoring those imports.
        'src/pages/**/*'
      ],
      extensions: ['vue'],
      dts: true
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    layouts({
      exclude: ['components']
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    pages({
      dirs: [
        {
          dir: 'src/pages/*',
          baseRoute: '/'
        }
      ],

      importMode(filepath, options) {
        for (const page of options.dirs) {
          if (page.baseRoute === '' && filepath.startsWith(`/${page.dir}/index`)) return 'sync'
        }
        return 'async'
      },

      // Only vue SFCs allowed, exclude any other extension from becoming a route.
      extensions: ['vue'],

      exclude: ['**/components/**', '**/pages/**/stores/**', '**/pages/**/scripts/**']
    }),

    unfonts({
      // Custom fonts.
      custom: {
        families: [
          {
            name: 'Product Sans',
            local: 'Product Sans',
            // 👉 ProductSans-Regular.woff
            src: './src/styles/fonts/*.woff'
          }
        ]
      }
    })
  ]

  return vitePlugins
}
