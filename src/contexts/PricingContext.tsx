
import { createContext, useContext, useState, ReactNode } from "react";

interface PricingContextType {
  selectedCountry: string;
  currency: string;
  exchangeRate: number;
  formatPrice: (priceInINR: number) => string;
  convertPrice: (priceInINR: number) => number;
  updateCountry: (country: string, currency: string, rate: number) => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
};

interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider = ({ children }: PricingProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [currency, setCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(1);

  const convertPrice = (priceInINR: number) => {
    // Same pricing for all countries - just convert to local currency
    return Math.round(priceInINR * exchangeRate);
  };

  const formatPrice = (priceInINR: number) => {
    const convertedPrice = convertPrice(priceInINR);
    
    const formatters: { [key: string]: Intl.NumberFormat } = {
      INR: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }),
      PKR: new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR' }),
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
      CAD: new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }),
      AUD: new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }),
      EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
      SGD: new Intl.NumberFormat('en-SG', { style: 'currency', currency: 'SGD' }),
      AED: new Intl.NumberFormat('ar-AE', { style: 'currency', currency: 'AED' }),
      SAR: new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }),
    };

    const formatter = formatters[currency] || formatters.INR;
    return formatter.format(convertedPrice);
  };

  const updateCountry = (country: string, curr: string, rate: number) => {
    setSelectedCountry(country);
    setCurrency(curr);
    setExchangeRate(rate);
  };

  return (
    <PricingContext.Provider value={{
      selectedCountry,
      currency,
      exchangeRate,
      formatPrice,
      convertPrice,
      updateCountry,
    }}>
      {children}
    </PricingContext.Provider>
  );
};
