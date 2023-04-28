export default {
  // Native Vuetify Components

  VToolbar: {
    VBtn: {
      ripple: false,
      color: 'primary-button',
      variant: 'elevated'
    }
  },

  VBtn: {
    ripple: false,
    color: 'primary-button'
  },

  VCard: {
    flat: true
  },

  VAppBar: {
    flat: true,
    color: 'appbar-background',
    VBtn: {
      ripple: false
    }
  },

  VTextField: {
    hideDetails: 'auto',
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    persistentPlaceholder: true
  },

  VSelect: {
    hideDetails: 'auto',
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background'
  },

  VTextarea: {
    hideDetails: 'auto',
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    rows: 3
  },

  VAutocomplete: {
    hideDetails: 'auto',
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' }
  },

  VTooltip: { location: 'bottom' },

  VImg: { transition: false },

  VNavigationDrawer: {
    color: 'navigation-drawer',
    width: 280,
    permanent: true
  },

  VAlert: {
    border: 'start',
    borderColor: 'purple-accent-4',
    elevation: true
  }
}
