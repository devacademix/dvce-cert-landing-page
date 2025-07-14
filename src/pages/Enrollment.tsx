
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Calendar, MessageCircle, ArrowLeft, Shield, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { usePricing } from "@/contexts/PricingContext";
import CountrySelector from "@/components/CountrySelector";

const Enrollment = () => {
  const [paymentType, setPaymentType] = useState("onetime");
  const { formatPrice, selectedCountry } = usePricing();

  const getCurrentPrices = () => {
    if (selectedCountry === "Pakistan") {
      return {
        onetime: { original: 25000, discounted: 5000 }
      };
    }
    return {
      onetime: { original: 16999, discounted: 2500 },
      installment: { original: 19999, discounted: 3000, advance: 500 }
    };
  };

  const currentPrices = getCurrentPrices();

  const handlePayment = () => {
    let paymentUrl = "";
    
    if (paymentType === "onetime") {
      if (selectedCountry === "Pakistan") {
        paymentUrl = "https://rzp.io/rzp/DVCE-Puk";
      } else {
        paymentUrl = "https://rzp.io/rzp/one-time-dvce";
      }
    } else {
      paymentUrl = "https://rzp.io/rzp/devacademix-DVEC";
    }
    
    window.open(paymentUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank');
  };

  const handleCountrySelect = (country: string, currency: string, exchangeRate: number) => {
    // Reset payment type when country changes to Pakistan (only one-time available)
    if (country === "Pakistan") {
      setPaymentType("onetime");
    }
  };

  return (
    <>
      <Helmet>
        <title>Enroll Now - DVCE Certification | DevAcademix</title>
        <meta name="description" content="Enroll in DVCE certification course with flexible payment options. Choose one-time payment or installment plans." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <header className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
              <ArrowLeft className="w-6 h-6 text-orange-400" />
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                  alt="DVCE Certificate Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    DevAcademix
                  </h1>
                  <p className="text-xs text-slate-400">Professional Cybersecurity Training</p>
                </div>
              </div>
            </Link>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Course Info */}
            <div className="text-center mb-12">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-6 py-3 text-lg font-bold mb-6">
                🔥 LIMITED TIME OFFER - {selectedCountry} 🔥
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enroll in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">DVCE Certification</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Choose your preferred payment option and start your cybersecurity journey today
              </p>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xl px-6 py-2">
                  {selectedCountry === "Pakistan" ? "80% OFF" : "85% OFF"}
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xl px-6 py-2">
                  ⏰ Offer Ends Soon!
                </Badge>
              </div>
            </div>

            {/* Enhanced Payment Options */}
            <Card className="bg-slate-800/40 border-slate-700/50 mb-8 backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-4xl font-bold text-white mb-4">
                  Choose Your Investment Plan
                </CardTitle>
                <p className="text-slate-300 text-lg">Professional certification program with flexible payment options</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <RadioGroup value={paymentType} onValueChange={setPaymentType} className="space-y-8">
                  
                  {/* One-time Payment - Enhanced Layout */}
                  <div className={`relative p-8 rounded-3xl border-3 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                    paymentType === "onetime" 
                      ? "border-orange-500 bg-gradient-to-br from-orange-500/20 to-red-500/10 shadow-2xl shadow-orange-500/30" 
                      : "border-slate-600/50 bg-slate-800/30 hover:border-orange-500/50"
                  }`}>
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                        🌟 MOST POPULAR
                      </Badge>
                    </div>
                    
                    <div className="absolute top-6 right-6">
                      <RadioGroupItem value="onetime" id="onetime" className="w-6 h-6" />
                    </div>
                    
                    <Label htmlFor="onetime" className="cursor-pointer block">
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex items-center space-x-6">
                          <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg">
                            <Shield className="w-12 h-12 text-white" />
                          </div>
                          <div className="text-center lg:text-left">
                            <h3 className="text-3xl font-bold text-white mb-2">Complete Access Plan</h3>
                            <p className="text-slate-300 text-lg mb-4">Full program access with one-time payment</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                                BEST VALUE
                              </Badge>
                              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                                INSTANT ACCESS
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-baseline space-x-3">
                              <span className="text-5xl font-bold text-orange-400">
                                {formatPrice(currentPrices.onetime.discounted)}
                              </span>
                              <span className="text-2xl text-slate-400 line-through">
                                {formatPrice(currentPrices.onetime.original)}
                              </span>
                            </div>
                            <Badge className="bg-red-500/30 text-red-300 border-red-500/50 text-lg px-4 py-2 font-bold">
                              SAVE {formatPrice(currentPrices.onetime.original - currentPrices.onetime.discounted)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  {/* Installment Payment - Only for non-Pakistan */}
                  {selectedCountry !== "Pakistan" && (
                    <div className={`relative p-8 rounded-3xl border-3 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                      paymentType === "installment" 
                        ? "border-blue-500 bg-gradient-to-br from-blue-500/20 to-purple-500/10 shadow-2xl shadow-blue-500/30" 
                        : "border-slate-600/50 bg-slate-800/30 hover:border-blue-500/50"
                    }`}>
                      <div className="absolute top-6 right-6">
                        <RadioGroupItem value="installment" id="installment" className="w-6 h-6" />
                      </div>
                      
                      <Label htmlFor="installment" className="cursor-pointer block">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                          <div className="flex items-center space-x-6">
                            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                              <Calendar className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                              <h3 className="text-3xl font-bold text-white mb-2">Flexible Payment Plan</h3>
                              <p className="text-slate-300 text-lg mb-4">Pay in installments - Start with advance payment</p>
                              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-3 py-1">
                                  FLEXIBLE
                                </Badge>
                                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-3 py-1">
                                  LOW UPFRONT
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="flex flex-col items-center space-y-2">
                              <div className="flex items-baseline space-x-3">
                                <span className="text-5xl font-bold text-blue-400">
                                  {formatPrice(currentPrices.installment.discounted)}
                                </span>
                                <span className="text-2xl text-slate-400 line-through">
                                  {formatPrice(currentPrices.installment.original)}
                                </span>
                              </div>
                              <Badge className="bg-red-500/30 text-red-300 border-red-500/50 text-lg px-4 py-2 font-bold">
                                SAVE {formatPrice(currentPrices.installment.original - currentPrices.installment.discounted)}
                              </Badge>
                              <p className="text-lg text-slate-300 mt-2 font-semibold">
                                Start with: {formatPrice(currentPrices.installment.advance)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  )}
                </RadioGroup>

                {/* What's Included Section */}
                <div className="bg-gradient-to-r from-slate-700/40 to-slate-800/40 rounded-3xl p-8 border border-slate-600/30 mt-12">
                  <div className="flex items-center justify-center space-x-3 mb-8">
                    <Star className="w-8 h-8 text-yellow-400" />
                    <h4 className="text-3xl font-bold text-white">What's Included in Your Investment</h4>
                    <Star className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "8 Comprehensive Modules",
                      "20+ Hands-on Labs", 
                      "Live Practical Certification Exam",
                      "Industry-Recognized Certificate",
                      "1-Month Paid Internship",
                      "100+ Premium Tools Access",
                      "24x7 WhatsApp AI Support",
                      "Lifetime Validity & Access"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                        <span className="text-slate-200 text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 pt-12">
                  <Button 
                    onClick={handlePayment}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-2xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-[1.05] border-2 border-orange-400/50"
                  >
                    <CreditCard className="w-8 h-8 mr-4" />
                    {paymentType === "onetime" 
                      ? `Secure Payment - ${formatPrice(currentPrices.onetime.discounted)}` 
                      : `Pay Advance - ${formatPrice(currentPrices.installment.advance)}`
                    }
                    <Zap className="w-6 h-6 ml-3" />
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1 border-3 border-orange-500/60 text-orange-300 hover:bg-orange-500/20 hover:border-orange-400 font-bold text-xl px-10 py-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.05] bg-slate-800/50"
                  >
                    <MessageCircle className="w-6 h-6 mr-4" />
                    Get Expert Guidance
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex justify-center items-center space-x-12 pt-8 border-t border-slate-700/50">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                    <span className="text-lg font-medium">Instant Access</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg font-medium">500+ Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700/50 rounded-2xl">
              <CardContent className="p-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Need Assistance?</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-6 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-xl"
                  >
                    <MessageCircle className="w-8 h-8 mr-4" />
                    WhatsApp Expert Support
                  </Button>
                  <div className="text-slate-300 text-center">
                    <p className="font-semibold text-lg">Get instant support and personalized guidance</p>
                    <p className="text-base">Available 24x7 for all your queries</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CountrySelector onCountrySelect={handleCountrySelect} />
    </>
  );
};

export default Enrollment;
