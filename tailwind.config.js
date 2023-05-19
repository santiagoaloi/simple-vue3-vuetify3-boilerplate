/** @type {import('tailwindcss').Config} */
// The above line specifies the type of the configuration object as per the Tailwind CSS typings.

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  // Specify the files to search for Tailwind CSS classes in order to optimize the build size.

  corePlugins: {
    // Enable the preflight plugin to reset default browser styles.
    preflight: true
  },

  // Enable the "class" strategy for dark mode, allowing the addition of the "dark" class to elements
  darkMode: 'class',

  // Ensure that classes used in Vuetify components take precedence by assigning the "important" class
  // to the root element with the ID of "app".
  important: '#app'
}
