import rootApp from '@/App.vue'

// needed while using local/custom fonts.
// github.com/stafyniaksacha/vite-plugin-fonts
// import 'virtual:fonts.css'
import 'unfonts.css'

// Styling && Tailwind
import '@/styles'

let VueApp

// `createApp` returns an app instance with configurable context shared.
VueApp = createApp(rootApp)

// install all modules.
autoImportModules(VueApp)

// Mount the application.
VueApp.mount('#app')
