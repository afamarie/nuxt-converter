<template>
  <div class="currency-loader">
    <p v-if="store.loading">Загрузка курсов валют...</p>
    <div v-else-if="store.error">
      <p>{{ store.error }}</p>
      <UButton variant="soft" @click="store.fetchRates">Попробовать снова</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useConverterStore();
</script>

<style scoped>
.currency-loader {
  text-align: center;

  p {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  }
}
</style>
