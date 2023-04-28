import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import unfonts from 'unplugin-fonts/vite'
import vuetify from 'vite-plugin-vuetify'
import { dependencies } from '../package.json'
import layouts from 'vite-plugin-vue-layouts'
import vueMacros from 'unplugin-vue-macros/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

export { vue, pages, layouts, vuetify, vueMacros, unfonts, autoImport, components, dependencies }
