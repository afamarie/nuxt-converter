<template>
  <div class="currency-input">
    <UInput v-model="model.amount" type="number" @update:modelValue="emit('input')" />
    <USelect
      v-model="model.currency"
      :items="CURRENCIES"
      @update:modelValue="emit('select')"
    />
  </div>
</template>

<script setup lang="ts">
const { CURRENCIES } = useConverterStore();

const model = defineModel<{
  amount: number;
  currency: string;
}>();

const emit = defineEmits<{
  (e: "input"): void;
  (e: "updated"): void;
}>();
</script>
