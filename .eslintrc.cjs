/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vuetify/base',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'vue/html-comment-indent': ['error'],
    'vue/html-comment-content-spacing': ['error', 'always'],

    'vue/html-comment-content-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always'
      }
    ],

    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 0,
        blocks: {
          template: {
            singleline: 'always',
            multiline: 'always',
            maxEmptyLines: 0
          },
          script: {
            singleline: 'always',
            multiline: 'always',
            maxEmptyLines: 0
          }
        }
      }
    ],

    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits']
      }
    ],

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
