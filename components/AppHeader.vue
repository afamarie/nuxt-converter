<template>
  <header class="app-header">
    <div class="container">
      <nav>
        <ULink to="/">Главная</ULink>
        <ULink to="/convert">Конвертация</ULink>
      </nav>
      <USelect
        v-model="store.baseCurrency"
        :items="store.CURRENCIES"
        variant="subtle"
        :ui="{ base: 'uppercase', itemLabel: 'uppercase' }"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
const store = useConverterStore();
</script>

<style scoped lang="scss">
.app-header {
  background-color: #f8f9fa;

  .container {
    display: flex;
    flex-wrap: wrap;

    gap: 1.2rem;

    padding: 1.2rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    max-width: 1040px;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
}
</style>
