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

    // Add comments here to describe the purpose of each plugin

    // Vue Macros plugin: https://github.com/sxzz/unplugin-vue-macros
    vueMacros(),

    // Auto Import plugin: https://github.com/antfu/unplugin-auto-import
    // Automatically import dependencies inside Single-File Components (SFCs) or JavaScript.
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
      dirs: ['src/utils/**', 'src/composables/**', 'src/stores/**/**', 'src/pages/**/**/stores'],

      vueTemplate: true,
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),

    // Vue Components plugin: https://github.com/antfu/unplugin-vue-components
    // Automatically import Vue Single-File Components (SFCs).
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

    // Vue Layouts plugin: https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    // Simplifies Vue layouts and nested routing.
    layouts({
      exclude: ['components']
    }),

    // Vue Pages plugin: https://github.com/hannoeru/vite-plugin-pages
    // Dynamically generates Vue routes from a directory structure.
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
