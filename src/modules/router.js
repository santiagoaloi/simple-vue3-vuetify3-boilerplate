import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

// Progress bar on top of the page.
// Customize styles in @/styles/_progress-bar.css
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(),

  /* Initial list of routes that should be added to the router.*/
  routes: [...setupLayouts(generatedRoutes)],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

const install = (app) => app.use(router)

// Exporting router so Pinia can import it
// allowing router in store modules.
export { install, router }
