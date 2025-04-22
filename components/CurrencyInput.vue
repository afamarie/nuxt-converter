<template>
  <fieldset class="currency-input">
    <UInput
      v-model="amount"
      type="number"
      aria-label="Currency Amount Field"
      min="0"
      step="0.01"
      @keydown="blockInvalidKeys"
      @input="handleInput"
      @update:model-value="emit('input')"
    />
    <USelect
      v-model="currency"
      :items="CURRENCIES"
      aria-label="Currency Type"
      :ui="{ base: 'uppercase', itemLabel: 'uppercase' }"
      @update:model-value="emit('select')"
    />
  </fieldset>
</template>

<script setup lang="ts">
import type { CurrencyCode } from '@/types'

const { CURRENCIES } = useConverterStore()
const amount = defineModel<number>('amount')
const currency = defineModel<CurrencyCode>('currency')

const emit = defineEmits<{
  (e: 'input' | 'select'): void
}>()

const blockInvalidKeys = (event: KeyboardEvent) => {
  const invalidChars = ['e', 'E', '+', '-', ',']
  if (invalidChars.includes(event.key)) {
    event.preventDefault()
  }
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value

  const valid = /^\d*\.?\d{0,2}$/.test(value)

  if (!valid) {
    target.value = '0'
  }
}
</script>

<style scoped>
.currency-input {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
