<template>
  <NuxtLoadingIndicator />
  <div class="default-layout">
    <AppHeader />
    <UContainer as="main">
      <slot />
    </UContainer>
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
}
</style>
