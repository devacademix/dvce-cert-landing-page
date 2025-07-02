
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Calendar, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Enrollment = () => {
  const [paymentType, setPaymentType] = useState("onetime");

  const handlePayment = () => {
    const paymentUrl = paymentType === "onetime" 
      ? "https://rzp.io/rzp/PW0kNVe"
      : "https://rzp.io/rzp/2UXjVg5y";
    
    window.open(paymentUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank');
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
                LIMITED TIME OFFER
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Enroll in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">DVCE Certification</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Choose your preferred payment option and start your cybersecurity journey today
              </p>
            </div>

            {/* Payment Options */}
            <Card className="bg-slate-800/50 border-slate-700/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">
                  Select Payment Option
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={paymentType} onValueChange={setPaymentType} className="space-y-4">
                  {/* One-time Payment */}
                  <div className="flex items-center space-x-3 p-6 rounded-lg border border-slate-600/50 hover:border-orange-500/50 transition-colors">
                    <RadioGroupItem value="onetime" id="onetime" />
                    <Label htmlFor="onetime" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <CreditCard className="w-8 h-8 text-orange-400" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">One-Time Payment</h3>
                            <p className="text-slate-400">Pay once and get full access</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-400">₹1,499</div>
                          <div className="text-sm text-slate-400 line-through">₹2,499</div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                            40% OFF
                          </Badge>
                        </div>
                      </div>
                    </Label>
                  </div>

                  {/* Installment Payment */}
                  <div className="flex items-center space-x-3 p-6 rounded-lg border border-slate-600/50 hover:border-orange-500/50 transition-colors">
                    <RadioGroupItem value="installment" id="installment" />
                    <Label htmlFor="installment" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Calendar className="w-8 h-8 text-orange-400" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">Installment Plan</h3>
                            <p className="text-slate-400">Pay in parts - Advance ₹499</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-400">₹1,699</div>
                          <div className="text-sm text-slate-400 line-through">₹3,499</div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                            51% OFF
                          </Badge>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {/* Payment Details */}
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">8 Comprehensive Modules</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">100% Practical Labs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">Live Practical Exam</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">Industry Certificate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">Lifetime Validity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">WhatsApp Support</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={handlePayment}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    {paymentType === "onetime" ? "Pay ₹1,499 Now" : "Pay Advance ₹499"}
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-semibold px-8 py-4 rounded-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Support
                  </Button>
                  <div className="text-slate-400">
                    <p>Get instant support and answers to your questions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enrollment;
