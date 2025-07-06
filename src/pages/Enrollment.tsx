import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Calendar, MessageCircle, Phone, ArrowLeft, Shield, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { usePricing } from "@/contexts/PricingContext";
import CountrySelector from "@/components/CountrySelector";

const Enrollment = () => {
  const [paymentType, setPaymentType] = useState("onetime");
  const { formatPrice, selectedCountry } = usePricing();

  const handlePayment = () => {
    const paymentUrl = paymentType === "onetime" 
      ? "https://rzp.io/rzp/PW0kNVe"
      : "https://rzp.io/rzp/2UXjVg5y";
    
    window.open(paymentUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank');
  };

  const handleCountrySelect = (country: string, currency: string, exchangeRate: number) => {
    // You can perform additional actions here if needed when the country is selected.
    // For example, update some state or trigger a re-render.
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
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm font-semibold mb-4">
                LIMITED TIME OFFER - {selectedCountry}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Enroll in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">DVCE Certification</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Choose your preferred payment option and start your cybersecurity journey today
              </p>
            </div>

            {/* Professional Payment Options */}
            <Card className="bg-slate-800/30 border-slate-700/50 mb-8 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  Investment Plans
                </CardTitle>
                <p className="text-slate-400">Professional certification program with flexible payment options</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <RadioGroup value={paymentType} onValueChange={setPaymentType} className="space-y-6">
                  
                  {/* One-time Payment - Professional Layout */}
                  <div className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    paymentType === "onetime" 
                      ? "border-orange-500 bg-gradient-to-br from-orange-500/10 to-red-500/5 shadow-2xl shadow-orange-500/20" 
                      : "border-slate-600/50 bg-slate-800/20 hover:border-orange-500/30"
                  }`}>
                    <div className="absolute top-4 right-4">
                      <RadioGroupItem value="onetime" id="onetime" className="w-6 h-6" />
                    </div>
                    
                    <Label htmlFor="onetime" className="cursor-pointer block">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Complete Access Plan</h3>
                            <p className="text-slate-400">Full program access with one-time payment</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs px-2 py-1">
                                MOST POPULAR
                              </Badge>
                              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-2 py-1">
                                BEST VALUE
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-baseline space-x-2 mb-2">
                            <span className="text-4xl font-bold text-orange-400">{formatPrice(2499)}</span>
                            <span className="text-lg text-slate-400 line-through">{formatPrice(14999)}</span>
                          </div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-sm px-3 py-1">
                            83% OFF
                          </Badge>
                        </div>
                      </div>
                    </Label>
                  </div>

                  {/* Installment Payment - Professional Layout */}
                  <div className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    paymentType === "installment" 
                      ? "border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-500/5 shadow-2xl shadow-blue-500/20" 
                      : "border-slate-600/50 bg-slate-800/20 hover:border-blue-500/30"
                  }`}>
                    <div className="absolute top-4 right-4">
                      <RadioGroupItem value="installment" id="installment" className="w-6 h-6" />
                    </div>
                    
                    <Label htmlFor="installment" className="cursor-pointer block">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                            <Calendar className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Flexible Payment Plan</h3>
                            <p className="text-slate-400">Pay in installments - Start with advance payment</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs px-2 py-1">
                                FLEXIBLE
                              </Badge>
                              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs px-2 py-1">
                                LOW UPFRONT
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-baseline space-x-2 mb-2">
                            <span className="text-4xl font-bold text-blue-400">{formatPrice(3400)}</span>
                            <span className="text-lg text-slate-400 line-through">{formatPrice(19999)}</span>
                          </div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-sm px-3 py-1">
                            83% OFF
                          </Badge>
                          <p className="text-sm text-slate-400 mt-2">Advance: {formatPrice(499)}</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {/* Payment Benefits */}
                <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-2xl p-8 border border-slate-600/30">
                  <div className="flex items-center space-x-3 mb-6">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <h4 className="text-xl font-bold text-white">What's Included in Your Investment:</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">8 Comprehensive Modules</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">20+ Hands-on Labs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Live Practical Certification Exam</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Industry-Recognized Certificate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">1-Month Paid Internship</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">100+ Premium Tools Access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">24x7 WhatsApp AI Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Lifetime Validity & Access</span>
                    </div>
                  </div>
                </div>

                {/* Professional Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <Button 
                    onClick={handlePayment}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <CreditCard className="w-6 h-6 mr-3" />
                    {paymentType === "onetime" ? `Secure Payment - ${formatPrice(2499)}` : `Pay Advance - ${formatPrice(499)}`}
                    <Zap className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1 border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold text-lg px-8 py-6 rounded-2xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Get Expert Guidance
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex justify-center items-center space-x-8 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Instant Access</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">500+ Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Need Assistance?</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    WhatsApp Expert Support
                  </Button>
                  <div className="text-slate-400">
                    <p className="font-medium">Get instant support and personalized guidance</p>
                    <p className="text-sm">Available 24x7 for all your queries</p>
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
