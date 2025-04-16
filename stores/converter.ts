import { defineStore } from "pinia";

type CurrencyCode = "rub" | "usd" | "eur";
type RatePair = `${CurrencyCode}-${CurrencyCode}`;

type Rates = {
  [key in RatePair]?: number;
};

export const useConverterStore = defineStore("converter", () => {
  const CURRENCIES: CurrencyCode[] = ["rub", "usd", "eur"];
  const baseCurrency = ref<string>("rub");
  const rates = ref<Rates>({});
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchRates = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(
        "https://status.neuralgeneration.com/api/currency")
      rates.value = await response.json();
    } catch (err) {
      error.value = "Не удалось загрузить курсы валют";
      console.error("Error fetching rates:", err);  
    } finally {
      loading.value = false;
    }
  };

  const getRate = (from: CurrencyCode, to: CurrencyCode): number => {
    const rateKey: RatePair = `${from}-${to}`;
    return Number(rates.value[rateKey]?.toFixed(2)) || 1;
  };

  const getConverted = (
    from: CurrencyCode,
    to: CurrencyCode,
    amount: number
  ): number => {
    const rateKey: RatePair = `${from}-${to}`;
    const rate = rates.value[rateKey] || 1;
    return Number((amount * rate).toFixed(2));
  };

  fetchRates();

  return {
    fetchRates,
    getRate,
    getConverted,
    baseCurrency,
    rates,
    loading,
    error,
    CURRENCIES,
  };
});
