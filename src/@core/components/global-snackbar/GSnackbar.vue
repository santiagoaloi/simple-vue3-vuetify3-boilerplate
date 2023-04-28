<template>
  <VSnackbar
    v-if="app.globalSnackbar.model"
    v-model="app.globalSnackbar.model"
    :color="app.globalSnackbar.color"
    :location="mobile ? 'bottom center' : 'bottom right'"
    :max-width="mobile ? undefined : 400"
    timeout="8000"
    transition="scroll-y-reverse-transition"
  >
    {{ app.globalSnackbar.text }}

    <template #actions>
      <VBtn color="white" icon @click="app.globalSnackbar.model = false">
        <VIcon size="large"> $cancel </VIcon></VBtn
      >
    </template>
  </VSnackbar>
</template>

<script setup>
const app = useAppStore()
const { mobile } = useDisplay()
</script>
