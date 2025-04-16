<template>
  <section>
    <h1>Конвертация валют</h1>
    <div>
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