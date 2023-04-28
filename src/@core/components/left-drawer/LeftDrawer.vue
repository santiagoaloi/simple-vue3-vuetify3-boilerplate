<template>
  <VNavigationDrawer
    :rail="rail"
    color="drawer"
    elevation="7"
    expand-on-hover
    rail-width="55"
    width="260"
  >
    <VList nav>
      <div class="flex items-center pa-2 mb-3 justify-between">
        <RouterLink to="/">
          <VImg src="/company_logos/logo.svg" width="150">
            <template #placeholder>
              <div class="flex items-center justify-center h-full">
                <VProgressCircular color="grey-lighten-4" indeterminate />
              </div>
            </template>
          </VImg>
        </RouterLink>

        <div>
          <VIcon
            :icon="rail ? '$radioOff' : '$radioOn'"
            class="mt-n1 cursor-pointer"
            color="primary"
            size="small"
            @click="rail = !rail"
          />
        </div>
      </div>

      <VListItem
        :ripple="false"
        active-color="primary"
        prepend-icon="$mdiHomeOutline"
        title="Dashboard"
        to="/"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
const rail = ref(false)
</script>
