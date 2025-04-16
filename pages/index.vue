<template>
  <div class="index-page">
    <section>
      <h1>Курсы валют</h1>
      <div v-if="store.loading">
        Загрузка курсов валют...
      </div>
      <div v-else-if="store.error">
        <p>{{ store.error }}</p>
        <UButton @click="store.fetchRates">Попробовать снова</UButton>
      </div>

      <ul v-else>
        <li v-for="(currency, i) in currencies" :key="i">
          <div>
            1 {{ currency }} = {{ store.getRate(currency, store.baseCurrency) }} {{ store.baseCurrency }}
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const store = useConverterStore()

const currencies = computed<string[]>(() => {
  return store.CURRENCIES.filter((currency) => currency !== store.baseCurrency)
})

</script>