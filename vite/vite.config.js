import dns from 'dns'
import { fileURLToPath, URL } from 'node:url'
import { createVitePlugins } from './vite.plugins'

// https://vitejs.dev/config/
import { defineConfig } from 'vite'

/*
 * Use localhost instead of loopback 127.0.0.1
 * https://vitejs.dev/config/server-options.html
 */
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  /*
   * PLugins are managed separately for easier management.
   */

  plugins: createVitePlugins(),

  /*
   * Resolvers provide path shortcuts,
   * autocomplete is configured in jsconfig.json
   */

  resolve: {
    dedupe: ['vue'],

    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url)),
      '@U': fileURLToPath(new URL('../src/utils', import.meta.url)),
      '@P': fileURLToPath(new URL('../src/pages', import.meta.url)),
      '@M': fileURLToPath(new URL('../src/modules', import.meta.url)),
      '@S': fileURLToPath(new URL('../src/stores', import.meta.url)),
      '@C': fileURLToPath(new URL('../src/composables', import.meta.url))
    },

    extensions: ['.js', '.json', '.vue']
  },

  server: {
    /** Whether to enable HTTPS */
    https: false,

    /** Set host: true to use the form of Network to access the project by IP */
    host: true, // host: "0.0.0.0"

    /** Whether to automatically open the browser */
    open: true,

    /** Cross domain settings allowed */
    cors: true,

    /** When the port is occupied, whether to exit directly */
    strictPort: false,

    /** The port number*/
    port: 8000
  },

  preview: {
    port: 8089
  },

  /** prevent Vite from clearing the screen **/
  clearScreen: false,

  define: {
    'process.env': {}
  },

  optimizeDeps: {
    exclude: ['pinia', 'vuetify'],
    entries: ['./src/**/*.vue']
  },

  build: {
    assetsDir: 'static/assets',

    /** Eliminate the warning that the package size exceeds 500kb */
    chunkSizeWarningLimit: 2000,

    // Turning off brotliSize display can slightly reduce packaging time
    reportCompressedSize: false,

    sourcemap: true,

    rollupOptions: {
      output: {
        compact: true
      }
    }
  }
})
