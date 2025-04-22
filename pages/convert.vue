<template>
  <section class="convert-page">
    <h1>Конвертация валют</h1>
    <CurrencyLoader />
    <div v-if="store.rates">
      <CurrencyInput v-model="from" @input="convertFromFirst" @select="convertFromFirst"/>
      <CurrencyInput v-model="to" @input="convertFromSecond" @select="convertFromFirst"/>
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useConverterStore()
const startTo = store.CURRENCIES.find((currency) => currency !== store.baseCurrency) || store.CURRENCIES[0]
const from = reactive({ currency: store.baseCurrency, amount: 0 })
const to = reactive({ currency: startTo, amount: 0 })

const convertFromFirst = () => {
  to.amount = store.getConverted(from.currency, to.currency, from.amount)
}

const convertFromSecond = () => {
  from.amount = store.getConverted(to.currency, from.currency, to.amount)
}
</script>

<style scoped>
.convert-page {
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

  .currency-input + .currency-input {
    margin-top: 1.2rem;
  }
}
</style>