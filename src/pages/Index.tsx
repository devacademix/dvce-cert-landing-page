import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, BookOpen, Code, Trophy, Star, CheckCircle, Play, Globe, Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/zmbhrw", '_blank');
  };

  const handleWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank');
  };

  const modules = [
    { title: "Linux Fundamentals", description: "Master Linux command line and system administration", icon: <Code className="w-8 h-8 text-blue-400" /> },
    { title: "Networking Essentials", description: "TCP/IP, routing, switching, and network security", icon: <Globe className="w-8 h-8 text-purple-400" /> },
    { title: "Web Application Security", description: "OWASP Top 10, SQL injection, XSS vulnerabilities", icon: <Shield className="w-8 h-8 text-cyan-400" /> },
    { title: "Penetration Testing", description: "Ethical hacking methodologies and tools", icon: <Lock className="w-8 h-8 text-indigo-400" /> },
    { title: "Vulnerability Assessment", description: "Identify and assess security weaknesses", icon: <Zap className="w-8 h-8 text-violet-400" /> },
    { title: "Incident Response", description: "Handle security breaches and forensics", icon: <Trophy className="w-8 h-8 text-blue-400" /> },
    { title: "Security Tools Mastery", description: "Nmap, Metasploit, Burp Suite, Wireshark", icon: <Award className="w-8 h-8 text-purple-400" /> },
    { title: "Practical Labs", description: "Hands-on exercises in controlled environments", icon: <BookOpen className="w-8 h-8 text-cyan-400" /> }
  ];

  const features = [
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Industry-Recognized Certification",
      description: "Earn the prestigious DVCE (DevAcademix Vulnerability and Cybersecurity Expert) certification"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "Expert Instructors",
      description: "Learn from certified ethical hackers and cybersecurity professionals with real-world experience"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-cyan-400" />,
      title: "Comprehensive Curriculum",
      description: "8 modules covering everything from basics to advanced penetration testing techniques"
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-400" />,
      title: "Hands-On Learning",
      description: "Practice in real lab environments with vulnerable applications and networks"
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevAcademix - Professional Cybersecurity Training & DVCE Certification</title>
        <meta name="description" content="Master cybersecurity with DevAcademix's DVCE certification program. Learn ethical hacking, penetration testing, and vulnerability assessment from industry experts." />
        <meta name="keywords" content="cybersecurity training, ethical hacking, penetration testing, DVCE certification, vulnerability assessment, security training" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                  DevAcademix
                </h1>
                <p className="text-sm text-slate-300 font-medium">Professional Cybersecurity Training</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/team" className="text-slate-300 hover:text-blue-400 transition-colors">Team</Link>
              <Link to="/curriculum" className="text-slate-300 hover:text-blue-400 transition-colors">Curriculum</Link>
              <Link to="/winners" className="text-slate-300 hover:text-blue-400 transition-colors">Top Winners</Link>
              <Button 
                onClick={handleWhatsAppGroup}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-6 py-2 rounded-full"
              >
                Support
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="text-center lg:text-left">
                <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm mb-8">
                  🎯 DVCE Certification Program
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                    Master
                  </span>
                  <br />
                  <span className="text-white">Cybersecurity</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Expert
                  </span>
                </h1>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                  Become a certified cybersecurity professional with our comprehensive DVCE program. 
                  Learn ethical hacking, penetration testing, and vulnerability assessment from industry experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link to="/enrollment">
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                      Start Your Journey
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleWhatsApp}
                    className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 font-bold text-xl px-8 py-6 rounded-full backdrop-blur-sm"
                  >
                    <Play className="mr-3 h-6 w-6" /> Watch Demo
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="order-first md:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cybersecurity Technology" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-24">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm mb-8">
              ✨ Key Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Why Choose DevAcademix?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-900/90 border-slate-700 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <CardHeader className="text-center">
                    <div className="p-4 bg-slate-800/30 rounded-full inline-flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative z-10 py-32 bg-gradient-to-r from-slate-900/50 to-purple-900/30 backdrop-blur-xl">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Programming and Cybersecurity Training"
                  className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
                />
              </div>

              {/* Right Column */}
              <div>
                <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm mb-8">
                  🌟 Why Choose DevAcademix
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Industry-Leading Training
                </h2>
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="bg-slate-800/50 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="relative z-10 py-24">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm mb-8">
              📚 Course Curriculum
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="bg-slate-900/90 border-slate-700 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <CardHeader className="text-center">
                    <div className="p-4 bg-slate-800/30 rounded-full inline-flex items-center justify-center mb-4">
                      {module.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Become a Cybersecurity Expert?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have advanced their careers with our DVCE certification. 
              Start your cybersecurity journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/enrollment">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Enroll Now - ₹2,999
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWhatsApp}
                className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 font-bold text-xl px-8 py-6 rounded-full backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-slate-950/90 border-t border-slate-800/50 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                    alt="DevAcademix Logo" 
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    DevAcademix
                  </h3>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Empowering the next generation of cybersecurity professionals through comprehensive training and certification programs.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
                  >
                    WhatsApp
                  </Button>
                  <Button 
                    onClick={handleWhatsAppGroup}
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                  >
                    Support Group
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">Home</Link></li>
                  <li><Link to="/curriculum" className="text-slate-400 hover:text-blue-400 transition-colors">Curriculum</Link></li>
                  <li><Link to="/team" className="text-slate-400 hover:text-blue-400 transition-colors">Our Team</Link></li>
                  <li><Link to="/winners" className="text-slate-400 hover:text-blue-400 transition-colors">Top Winners</Link></li>
                  <li><Link to="/enrollment" className="text-slate-400 hover:text-blue-400 transition-colors">Enrollment</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Programs</h4>
                <ul className="space-y-3">
                  <li><span className="text-slate-400">DVCE Certification</span></li>
                  <li><span className="text-slate-400">Ethical Hacking</span></li>
                  <li><span className="text-slate-400">Penetration Testing</span></li>
                  <li><span className="text-slate-400">Vulnerability Assessment</span></li>
                  <li><span className="text-slate-400">Security Training</span></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 mt-12 text-center">
              <p className="text-slate-400">
                © 2024 DevAcademix. All rights reserved. | Building the future of cybersecurity education.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
