<template>
  <div class="index-page">
    <section>
      <h1>Курсы валют</h1>
      <CurrencyLoader />
      <ul v-if="store.rates">
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

<style scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;

    font-weight: bolder;
  }

  ul {
    font-size: 1.2rem;
    line-height: 1.5;

    text-transform: uppercase;

    li {
      margin-bottom: 1.2rem;
      text-align: center;
    }
  }
}
</style>