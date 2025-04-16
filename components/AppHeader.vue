<template>
  <header class="app-header">
    <nav>
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/convert">Конвертация</NuxtLink>
    </nav>
    <USelect v-model="store.baseCurrency" :items="store.CURRENCIES" />
  </header>
</template>

<script setup lang="ts">
const store = useConverterStore();

</script>