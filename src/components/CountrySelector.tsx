
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, MapPin } from "lucide-react";

interface CountrySelectorProps {
  onCountrySelect: (country: string, currency: string, exchangeRate: number) => void;
}

const countries = [
  { name: "India", currency: "INR", rate: 1, flag: "🇮🇳" },
  { name: "Pakistan", currency: "PKR", rate: 1, flag: "🇵🇰", specialPrice: true },
  { name: "United States", currency: "USD", rate: 0.012, flag: "🇺🇸" },
  { name: "United Kingdom", currency: "GBP", rate: 0.0095, flag: "🇬🇧" },
  { name: "Canada", currency: "CAD", rate: 0.016, flag: "🇨🇦" },
  { name: "Australia", currency: "AUD", rate: 0.018, flag: "🇦🇺" },
  { name: "Germany", currency: "EUR", rate: 0.011, flag: "🇩🇪" },
  { name: "Singapore", currency: "SGD", rate: 0.016, flag: "🇸🇬" },
  { name: "UAE", currency: "AED", rate: 0.044, flag: "🇦🇪" },
  { name: "Saudi Arabia", currency: "SAR", rate: 0.045, flag: "🇸🇦" },
];

const CountrySelector = ({ onCountrySelect }: CountrySelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSelectedCountry = localStorage.getItem("selectedCountry");
    if (!hasSelectedCountry) {
      setIsOpen(true);
    } else {
      const savedCountry = JSON.parse(hasSelectedCountry);
      onCountrySelect(savedCountry.name, savedCountry.currency, savedCountry.rate);
    }
  }, [onCountrySelect]);

  const handleCountrySelect = () => {
    const country = countries.find(c => c.name === selectedCountry);
    if (country) {
      const countryData = {
        name: country.name,
        currency: country.currency,
        rate: country.rate,
        specialPrice: country.specialPrice
      };
      localStorage.setItem("selectedCountry", JSON.stringify(countryData));
      onCountrySelect(country.name, country.currency, country.rate);
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900 border-slate-700">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Welcome to DevAcademix
          </CardTitle>
          <p className="text-slate-400">
            Please select your country to see localized pricing
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Your Country
            </label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                {countries.map((country) => (
                  <SelectItem 
                    key={country.name} 
                    value={country.name}
                    className="text-white hover:bg-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="text-slate-400">({country.currency})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={handleCountrySelect}
            disabled={!selectedCountry}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-xl"
          >
            Continue to Course
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CountrySelector;
