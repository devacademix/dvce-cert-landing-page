import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Award, Clock, Shield, Target, BookOpen, Code, Zap, ArrowRight, MessageCircle, Globe, TrendingUp, Lock, Eye, Wrench, Search, AlertTriangle, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CountrySelector from "@/components/CountrySelector";
import { usePricing } from "@/contexts/PricingContext";

const Index = () => {
  const { formatPrice, updateCountry } = usePricing();

  const handleCountrySelect = (country: string, currency: string, exchangeRate: number) => {
    updateCountry(country, currency, exchangeRate);
  };

  return (
    <>
      <Helmet>
        <title>DVCE Certification | DevAcademix</title>
        <meta name="description" content="Become a Certified Cybersecurity Expert with DevAcademix. Learn ethical hacking, penetration testing, and secure coding." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <header className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
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
            </Link>
            <Button 
              onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm font-semibold mb-4">
                LIMITED TIME OFFER
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Certified Cybersecurity Expert</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Master ethical hacking, penetration testing, and secure coding with our comprehensive DVCE certification program.
              </p>
              <div className="flex space-x-4">
                <Link to="/enrollment">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-8 py-4 rounded-full">
                    Enroll Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
                  variant="outline" 
                  className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold text-lg px-6 py-4 rounded-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <img 
                src="/lovable-uploads/59c9963b-9494-46e8-935a-a44999199693.png" 
                alt="Cybersecurity Expert" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent rounded-b-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">DVCE Certification</h3>
                <p className="text-sm text-slate-400">Advance your career in cybersecurity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-slate-400">Students Enrolled</p>
            </div>
            <div>
              <Award className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">98%</h2>
              <p className="text-slate-400">Certification Rate</p>
            </div>
            <div>
              <Clock className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">6+ Months</h2>
              <p className="text-slate-400">Average Time to Completion</p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-xl font-bold">Comprehensive Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Covering ethical hacking, penetration testing, secure coding, and more.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <Target className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-xl font-bold">Hands-on Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  20+ hands-on labs to apply your knowledge in real-world scenarios.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-xl font-bold">Expert Instruction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Learn from industry experts with years of experience in cybersecurity.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 4 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <Code className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-xl font-bold">Real-World Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Build a portfolio of real-world projects to showcase your skills.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 5 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <Zap className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-xl font-bold">Career Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Get access to career coaching, resume reviews, and job placement assistance.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 6 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-xl font-bold">Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Earn an industry-recognized certification to validate your skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Enroll in our DVCE certification program today and take the first step towards a rewarding career in cybersecurity.
          </p>
          <Link to="/enrollment">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-2xl px-16 py-6 rounded-full">
              Enroll Now <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </section>
      </div>

      <CountrySelector onCountrySelect={handleCountrySelect} />
    </>
  );
};

export default Index;
