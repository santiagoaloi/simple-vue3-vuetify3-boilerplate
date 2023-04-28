<template>
  <VContainer class="container">
    <VCard class="card" elevation="8">
      <VCardText class="card-text">
        <div class="inner-wrapper">
          <div class="header-wrapper">
            <slot name="header" />
          </div>
          <div class="content-wrapper">
            <slot name="default" />
          </div>
        </div>
      </VCardText>
    </VCard>
  </VContainer>
</template>
<style scoped>
.container {
  @apply flex h-full
}

.card {
  @apply p-2 rounded-lg border h-full w-full
}

.card-text {
  font-size: 1rem;
  @apply h-full
}

.inner-wrapper {
  @apply flex h-full flex-col
}

.header-wrapper {
  @apply flex items-center gap-1 border-b pb-3
}

.content-wrapper {
  @apply no-scrollbar flex flex-col overflow-auto
}
</style>
