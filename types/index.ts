type CurrencyCode = "rub" | "usd" | "eur";
type RatePair = `${CurrencyCode}-${CurrencyCode}`;

type Rates = {
  [key in RatePair]?: number;
};

export type { CurrencyCode, RatePair, Rates };