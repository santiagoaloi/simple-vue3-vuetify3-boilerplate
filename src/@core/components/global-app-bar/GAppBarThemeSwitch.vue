<template>
  <div>
    <VBtn
      v-if="currentTheme === 'light'"
      color="white"
      icon="$mdiWeatherNight"
      variant="text"
      @click="currentTheme = 'dark'"
    />
    <VBtn
      v-else
      color="white"
      icon="$mdiWhiteBalanceSunny"
      variant="text"
      @click="currentTheme = 'light'"
    />
  </div>
</template>
<script setup>
// Theme logic
const { currentTheme } = toRefs(useAppStore())
</script>
