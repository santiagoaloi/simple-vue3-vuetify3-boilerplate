<template>
  <VApp :theme="currentTheme">
    <!--
      handles layouts only 
    -->
    <RouterView> </RouterView>
  </VApp>
</template>

<script setup>
import { useTailwindTheme } from '@C/tailwind-theme'
const { currentTheme } = toRefs(useAppStore())
useTailwindTheme(currentTheme)
</script>
