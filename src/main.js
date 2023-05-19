import rootApp from '@/App.vue'

// needed while using local/custom fonts.
// github.com/stafyniaksacha/vite-plugin-fonts
// import 'virtual:fonts.css'
import 'unfonts.css'

// Styling && Tailwind
import '@/styles'

// `createApp` returns an app instance with configurable context shared.
const VueApp = createApp(rootApp)

// install all modules.
autoImportModules(VueApp)

// Mount the application.
VueApp.mount('#app')
