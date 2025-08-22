import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Currency {
  code: string;
  symbol: string;
  rate: number;
}

interface CurrencyContextType {
  currentCurrency: Currency;
  currencies: Currency[];
  changeCurrency: (currencyCode: string) => void;
  formatPrice: (price: number) => string;
}

const currencies: Currency[] = [
  { code: 'EUR', symbol: '€', rate: 1 },
  { code: 'USD', symbol: '$', rate: 1.08 },
  { code: 'GBP', symbol: '£', rate: 0.86 },
  { code: 'TND', symbol: 'TND', rate: 3.25 },
  { code: 'MAD', symbol: 'MAD', rate: 10.8 },
  { code: 'CAD', symbol: 'CAD', rate: 1.47 }
];

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(currencies[0]); // EUR par défaut

  const changeCurrency = (currencyCode: string) => {
    const currency = currencies.find(c => c.code === currencyCode);
    if (currency) {
      setCurrentCurrency(currency);
    }
  };

  const formatPrice = (price: number) => {
    const convertedPrice = price * currentCurrency.rate;
    if (currentCurrency.code === 'EUR') {
      return `${convertedPrice.toFixed(2)}${currentCurrency.symbol}`;
    }
    return `${currentCurrency.symbol}${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currentCurrency,
        currencies,
        changeCurrency,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};