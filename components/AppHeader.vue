<template>
  <UContainer
    class="app-header"
    as="header"
  >
    <nav>
      <ULink :to="{ name: 'index' }">Главная</ULink>
      <ULink :to="{ name: 'convert' }">Конвертация</ULink>
    </nav>
    <USelect
      v-model="store.baseCurrency"
      :items="store.CURRENCIES"
      variant="subtle"
      aria-label="Choose base currency"
      :ui="{ base: 'uppercase', itemLabel: 'uppercase' }"
    />
  </UContainer>
</template>

<script setup lang="ts">
const store = useConverterStore()
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
}
</style>
