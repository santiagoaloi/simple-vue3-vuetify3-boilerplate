<template>
  <VBtn @click="array.push(1)"> add numbers </VBtn>
  <VBtn @click="array.length = 0"> erase </VBtn>

  <div>{{ array }}</div>
</template>
<script setup>
const array = reactive([])
</script>
