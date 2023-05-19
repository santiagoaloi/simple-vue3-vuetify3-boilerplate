<template>
  <div>
    <GSnackbar />
    <LeftDrawer />
    <GAppBar />
    <VMain scrollable>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <VFadeTransition hide-on-leave>
            <VContainer fluid>
              <Component :is="Component" />
            </VContainer>
          </VFadeTransition>
        </template>
      </RouterView>
    </VMain>
  </div>
</template>
