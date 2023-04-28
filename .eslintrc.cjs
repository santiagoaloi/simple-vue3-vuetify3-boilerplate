/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json'
    // 'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // <some-component /> becomes <SomeComponent />
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],

    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'ATTR_DYNAMIC',
          'OTHER_DIRECTIVES',
          ['ATTR_STATIC', 'ATTR_SHORTHAND_BOOL'],
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'no-irregular-whitespace': 'off'
  }
}
