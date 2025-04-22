<template>
   <NuxtLoadingIndicator />
  <div class="default-layout">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;

  main {
    padding: 1.2rem;
    margin: 0 auto;
    flex: 1;

    max-width: 1040px;
  }
}
</style>
