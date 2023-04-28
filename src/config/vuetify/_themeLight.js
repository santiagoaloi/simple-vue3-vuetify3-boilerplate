export default {
  light: {
    dark: false,
    colors: {
      primary: '#0062f0',
      surface: '#fff',
      error: '#ff4081',
      secondary: '#0062f0',
      background: '#f0f2f5',

      'appbar-background': '#0062f0',
      drawer: '#fff',

      'inner-card': '#fbfbfb',

      'on-surface': '#24193B',
      'on-surface-variant': '#F4F5FA',
      'on-text-field-background': '#181027',

      'field-outline-focus': '#29c770',
      'text-field-background': '#fff'
    },
    variables: {
      'border-opacity': 0.8,
      'border-color': '#ddd',

      'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.01)',
      'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.05)',
      'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.01)',

      //Custom vars
      'app-background': '#f6f8fa',
      'app-typography': '#3b4256',

      'medium-emphasis-opacity': 0.68,

      'field-border-opacity': 1,
      'field-label': '#292929',
      'field-outline': '#e4e1e1',

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',

      // v-list item nav looks much better this way.
      'theme-navigation-drawer-overlay-multiplier': '1'
    }
  }
}
