
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Award, Clock, Shield, Target, BookOpen, Code, Zap, ArrowRight, MessageCircle, Globe, TrendingUp, Lock, Eye, Wrench, Search, AlertTriangle, Activity, Calendar, Trophy, Server, Bot, FileText, Briefcase, BookMarked, Network, Cloud, Bug, Linkedin, Github, Users2, Flag } from "lucide-react";
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

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 border-b border-slate-800/50 backdrop-blur-xl bg-slate-950/80">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                  alt="DevAcademix Logo" 
                  className="w-16 h-16 object-contain filter drop-shadow-2xl transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">
                  DevAcademix
                </h1>
                <p className="text-sm text-slate-300 font-medium">Professional Cybersecurity Training</p>
              </div>
            </Link>
            <Button 
              onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-8 py-3 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Support
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm">
                  📢 NEW CERTIFICATION PROGRAM
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">
                    DVCE
                  </span>
                  <br />
                  <span className="text-white">Certification</span>
                </h1>
                <p className="text-2xl text-slate-300 font-medium">
                  DevAcademix VAPT Certified Expert
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Master hands-on offensive security and VAPT with our comprehensive certification program focused on real-world penetration testing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/enrollment">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Enroll Now <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
                <Button 
                  onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
                  variant="outline" 
                  className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold text-xl px-8 py-6 rounded-full backdrop-blur-sm"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Free Consultation
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/59c9963b-9494-46e8-935a-a44999199693.png" 
                  alt="Cybersecurity Expert" 
                  className="w-full rounded-3xl shadow-2xl border border-slate-700/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30">
                    <h3 className="text-2xl font-bold mb-2 text-white">DVCE Certification</h3>
                    <p className="text-slate-300 text-lg">First Batch: 25th July 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="relative z-10 container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              🔐 Program Overview
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">8 Comprehensive Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Complete curriculum covering all aspects of VAPT and offensive security.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <Target className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">20+ Hands-on Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Practical labs for real-world experience in penetration testing.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <Server className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">Server Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Learn server setup and configuration for security testing.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <Bot className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">AI-Powered Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">WhatsApp-based AI hacking assistant for 24x7 support.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <Briefcase className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">1-Month Internship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Remote or on-project internship with certificate and recommendation.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <Wrench className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">100+ Premium Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Access to professional penetration testing and security tools.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Exam Format Section */}
        <section className="relative z-10 container mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-12 backdrop-blur-xl border border-slate-700/50">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              🧪 Exam Format
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Flag className="w-8 h-8 text-orange-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Capture 4 Flags</h3>
                    <p className="text-slate-300">Each flag worth 20 points from a dedicated target server</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-orange-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Report Submission</h3>
                    <p className="text-slate-300">Submit detailed report with Proof of Concept (20 points)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Trophy className="w-8 h-8 text-orange-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Passing Criteria</h3>
                    <p className="text-slate-300">Minimum 70 points out of 100 required to pass</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Scoring Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">4 Flags × 20 points</span>
                    <span className="text-orange-400 font-bold text-xl">80 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Report + PoC</span>
                    <span className="text-orange-400 font-bold text-xl">20 points</span>
                  </div>
                  <hr className="border-slate-600" />
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total Points</span>
                    <span className="text-green-400 font-bold text-2xl">100 points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Standards Section */}
        <section className="relative z-10 container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            📊 Industry-Relevant Curriculum
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <Shield className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">Standards Aligned</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">OWASP Top 10, MITRE ATT&CK, and NIST Standards compliance</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <Network className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">Multi-Platform Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Web, Network, and Cloud Penetration Testing coverage</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <Bug className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-xl font-bold text-white">Bug Bounty Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Real-world scenarios and bug bounty techniques</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="relative z-10 container mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-3xl p-12 backdrop-blur-xl border border-purple-500/30">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              🏆 Rewards & Recognition
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Top 5 Performers</h3>
                <p className="text-slate-300">Featured on DevAcademix website and social media</p>
              </div>
              
              <div className="text-center">
                <Briefcase className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Paid Opportunities</h3>
                <p className="text-slate-300">Eligible for paid internships and freelance projects</p>
              </div>
              
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">White Hat Badge</h3>
                <p className="text-slate-300">Special digital "White Hat Hacker" badge issued</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white">500+</h2>
              <p className="text-slate-400 text-lg">Students Enrolled</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white">98%</h2>
              <p className="text-slate-400 text-lg">Certification Rate</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Calendar className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white">25 July</h2>
              <p className="text-slate-400 text-lg">First Batch Starts</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white">3 Months</h2>
              <p className="text-slate-400 text-lg">Live Classes</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Ready to Become a VAPT Expert?
            </h2>
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
              Join our DVCE certification program and master the art of ethical hacking with hands-on experience and industry recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/enrollment">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Enroll Now <ArrowRight className="w-8 h-8 ml-4" />
                </Button>
              </Link>
              <Button 
                onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
                variant="outline" 
                className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold text-2xl px-12 py-8 rounded-full backdrop-blur-sm"
              >
                <MessageCircle className="w-8 h-8 mr-4" />
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </div>

      <CountrySelector onCountrySelect={handleCountrySelect} />
    </>
  );
};

export default Index;
