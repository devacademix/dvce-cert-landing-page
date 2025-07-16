
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Calendar, MessageCircle, ArrowLeft, Shield, Star, Zap, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { usePricing } from "@/contexts/PricingContext";
import CountrySelector from "@/components/CountrySelector";

const Enrollment = () => {
  const [paymentType, setPaymentType] = useState("onetime");
  const { formatPrice, selectedCountry } = usePricing();

  // Same pricing for all countries
  const currentPrices = {
    onetime: { original: 16999, discounted: 2500 },
    installment: { original: 19999, discounted: 3000, advance: 500 }
  };

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

      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 text-white">
        {/* Header */}
        <header className="border-b border-blue-800/30 backdrop-blur-sm bg-blue-950/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center space-x-4">
              <ArrowLeft className="w-6 h-6 text-blue-400" />
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                  alt="DVCE Certificate Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    DevAcademix
                  </h1>
                  <p className="text-xs text-slate-400">Professional Cybersecurity Training</p>
                </div>
              </div>
            </Link>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Course Info */}
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold mb-4 sm:mb-6">
                🔥 LIMITED TIME OFFER 🔥
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                Enroll in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">DVCE Certification</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 px-4">
                Start your cybersecurity journey today with our comprehensive certification program
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-lg sm:text-xl px-4 sm:px-6 py-2">
                  85% OFF
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg sm:text-xl px-4 sm:px-6 py-2">
                  ⏰ Offer Ends Soon!
                </Badge>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Get Certified as a Cybersecurity Expert
              </h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/lovable-uploads/41419c8b-a1c8-4758-866c-af5870f31f1a.png" 
                        alt="DVCE Certificate of Completion" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Certificate of Completion</h3>
                      <p className="text-slate-300 text-sm sm:text-base">Official DVCE certification upon course completion</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/lovable-uploads/b20243c6-1463-47f5-9c62-c3393d50af27.png" 
                        alt="White Hat Certified Cybersecurity Expert" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">White Hat Certification</h3>
                      <p className="text-slate-300 text-sm sm:text-base">Professional qualification certificate with distinction</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced Payment Options */}
            <Card className="bg-slate-800/40 border-slate-700/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Investment Plans
                </CardTitle>
                <p className="text-slate-300 text-base sm:text-lg px-4">
                  Professional certification program with flexible payment options
                </p>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6">
                <RadioGroup value={paymentType} onValueChange={setPaymentType} className="space-y-6 sm:space-y-8">
                  
                  {/* One-time Payment */}
                  <div className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-3 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                    paymentType === "onetime" 
                      ? "border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/10 shadow-2xl shadow-purple-500/30" 
                      : "border-slate-600/50 bg-slate-800/30 hover:border-purple-500/50"
                  }`}>
                    {/* Popular Badge */}
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg">
                        🌟 MOST POPULAR
                      </Badge>
                    </div>
                    
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <RadioGroupItem value="onetime" id="onetime" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <Label htmlFor="onetime" className="cursor-pointer block">
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                          <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl shadow-lg">
                            <Shield className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                              Complete Access Plan
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                              Full program access with one-time payment
                            </p>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                                BEST VALUE
                              </Badge>
                              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                                INSTANT ACCESS
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="flex flex-col sm:flex-row items-center sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-3">
                              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400">
                                ₹{currentPrices.onetime.discounted.toLocaleString()}
                              </span>
                              <span className="text-lg sm:text-xl md:text-2xl text-slate-400 line-through">
                                ₹{currentPrices.onetime.original.toLocaleString()}
                              </span>
                            </div>
                            <Badge className="bg-red-500/30 text-red-300 border-red-500/50 text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 font-bold">
                              SAVE ₹{(currentPrices.onetime.original - currentPrices.onetime.discounted).toLocaleString()}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  {/* Installment Payment */}
                  <div className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-3 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                    paymentType === "installment" 
                      ? "border-blue-500 bg-gradient-to-br from-blue-500/20 to-purple-500/10 shadow-2xl shadow-blue-500/30" 
                      : "border-slate-600/50 bg-slate-800/30 hover:border-blue-500/50"
                  }`}>
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <RadioGroupItem value="installment" id="installment" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <Label htmlFor="installment" className="cursor-pointer block">
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                          <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl shadow-lg">
                            <Calendar className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Flexible Payment Plan</h3>
                            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Pay in installments - Start with advance payment</p>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                                FLEXIBLE
                              </Badge>
                              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                                LOW UPFRONT
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="flex flex-col sm:flex-row items-center sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-3">
                              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
                                ₹{currentPrices.installment.discounted.toLocaleString()}
                              </span>
                              <span className="text-lg sm:text-xl md:text-2xl text-slate-400 line-through">
                                ₹{currentPrices.installment.original.toLocaleString()}
                              </span>
                            </div>
                            <Badge className="bg-red-500/30 text-red-300 border-red-500/50 text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 font-bold">
                              SAVE ₹{(currentPrices.installment.original - currentPrices.installment.discounted).toLocaleString()}
                            </Badge>
                            <p className="text-sm sm:text-base md:text-lg text-slate-300 mt-2 font-semibold">
                              Start with: ₹{currentPrices.installment.advance.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {/* What's Included Section */}
                <div className="bg-gradient-to-r from-slate-700/40 to-slate-800/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-600/30 mt-8 sm:mt-12">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8">
                    <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400" />
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">What's Included in Your Investment</h4>
                    <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/50 rounded-xl">
                        <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 flex-shrink-0" />
                        <span className="text-slate-200 text-sm sm:text-base md:text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 sm:pt-12">
                  <Button 
                    onClick={handlePayment}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-12 py-6 sm:py-8 rounded-2xl shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.05] border-2 border-purple-400/50"
                  >
                    <CreditCard className="w-6 sm:w-8 h-6 sm:h-8 mr-3 sm:mr-4" />
                    <span className="flex-1">
                      {paymentType === "onetime" 
                        ? `Secure Payment - ₹${currentPrices.onetime.discounted.toLocaleString()}` 
                        : `Pay Advance - ₹${currentPrices.installment.advance.toLocaleString()}`
                      }
                    </span>
                    <Zap className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3" />
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1 border-2 sm:border-3 border-purple-500/60 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 font-bold text-lg sm:text-xl px-6 sm:px-10 py-6 sm:py-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.05] bg-slate-800/50"
                  >
                    <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4" />
                    Get Expert Guidance
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 pt-6 sm:pt-8 border-t border-slate-700/50">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300">
                    <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">Instant Access</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300">
                    <Star className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">500+ Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700/50 rounded-2xl">
              <CardContent className="p-6 sm:p-10 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Need Assistance?</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-10 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-lg sm:text-xl"
                  >
                    <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 mr-3 sm:mr-4" />
                    WhatsApp Expert Support
                  </Button>
                  <div className="text-slate-300 text-center">
                    <p className="font-semibold text-base sm:text-lg">Get instant support and personalized guidance</p>
                    <p className="text-sm sm:text-base">Available 24x7 for all your queries</p>
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
