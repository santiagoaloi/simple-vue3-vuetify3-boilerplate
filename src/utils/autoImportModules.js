/*
 * Anything under @/modules
 * will be auto-imported.
 */
const modules = import.meta.globEager('@M/*.js')
export default (app) => Object.values(modules).map((module) => module.install(app))
