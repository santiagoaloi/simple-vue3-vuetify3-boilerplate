<template>
  <div class="wrapper">
    <h1>{{ top }} </h1>
    <p>{{ title }}</p>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  top: {
    type: String,
    default: ''
  },

  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.wrapper { 
  @apply flex flex-col px-4 text-center sm:px-6 lg:px-8
}

h1 {
  @apply block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl
}

p {
  @apply mt-3 text-gray-600 dark:text-gray-400
}
</style>
