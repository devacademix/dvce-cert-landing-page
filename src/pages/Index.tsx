import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Target, Award, Users, BookOpen, Zap, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Index = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    { title: "Intro to VAPT", description: "Foundation concepts and methodology" },
    { title: "Lab Setup", description: "Kali Linux, DVWA, OWASP Juice Shop" },
    { title: "Recon & Scanning", description: "Nmap, Gobuster, Information Gathering" },
    { title: "Vulnerability Analysis", description: "Identifying and prioritizing vulnerabilities" },
    { title: "Exploitation", description: "SQLi, XSS, LFI, RCE techniques" },
    { title: "Privilege Escalation", description: "System compromise and persistence" },
    { title: "Final Practical Exam", description: "Live hacking challenge" },
    { title: "Report Writing", description: "Professional pentest documentation" }
  ];

  const learningOutcomes = [
    "Information Gathering & Reconnaissance",
    "Vulnerability Scanning (Nmap, Nikto, Nessus)",
    "Web Application Exploits (SQL Injection, XSS, File Upload)",
    "System Hacking & Privilege Escalation",
    "Post-exploitation Techniques",
    "Professional Penetration Testing Reports"
  ];

  const keyFeatures = [
    { icon: Target, title: "100% Practical Certification", desc: "No theory, no MCQs - only hands-on labs" },
    { icon: Shield, title: "Real-world Lab Environments", desc: "Practice on actual vulnerable systems" },
    { icon: Award, title: "Industry-Recognized Certificate", desc: "Digital badge with credential ID" },
    { icon: Zap, title: "Live Hacking Challenge", desc: "Final exam with practical penetration testing" }
  ];

  return (
    <>
      <Helmet>
        <title>DVCE – Practical Cybersecurity Certification by DevAcademix</title>
        <meta name="description" content="Get certified in Vulnerability Assessment & Penetration Testing with the DVCE course by DevAcademix. 100% hands-on training + real exam." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        {/* Matrix Background Effect */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[length:40px_40px] bg-[radial-gradient(circle_at_center,_#ff4757_1px,_transparent_1px)]"></div>
        </div>

        {/* Header */}
        <header className="relative z-50 border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                alt="DVCE Certificate Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  DevAcademix
                </h1>
                <p className="text-xs text-slate-400">Professional Cybersecurity Training</p>
              </div>
            </div>
            <Link to="/enrollment">
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-2 rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                Enroll Now
              </Button>
            </Link>
          </div>
        </header>

        {/* Sticky CTA Button */}
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/enrollment">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 animate-pulse">
              Limited Seats - Enroll Now!
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-8">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm font-semibold">
                100% PRACTICAL
              </Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 px-4 py-2 text-sm font-semibold">
                REAL LAB-BASED EXAM
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Launch Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 animate-pulse">
                Cybersecurity Career
              </span>
              <br />
              with DVCE Certification
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Master real-world <strong className="text-orange-400">Vulnerability Assessment & Penetration Testing (VAPT)</strong>.
              <br />
              Learn through hands-on labs, pass a practical exam, and earn an industry-recognized certificate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/enrollment">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105">
                  Enroll Now - Limited Seats Available
                </Button>
              </Link>
              <div className="flex items-center space-x-2 text-slate-400">
                <Users className="w-5 h-5" />
                <span>Join 500+ certified professionals</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-slate-400">Practical Training</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">8</div>
                <div className="text-slate-400">Comprehensive Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">70%</div>
                <div className="text-slate-400">Passing Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">∞</div>
                <div className="text-slate-400">Lifetime Validity</div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Master</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive hands-on training covering all aspects of professional penetration testing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {learningOutcomes.map((outcome, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-200 font-medium">{outcome}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Modules</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                8 comprehensive modules designed to take you from beginner to certified VAPT expert
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {modules.map((module, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{module.title}</h3>
                    <p className="text-slate-400 text-sm">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">DVCE</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Industry-leading practical certification program designed for real-world success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/10 text-center">
                  <CardContent className="p-8">
                    <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Format Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-orange-500/30 shadow-2xl shadow-orange-500/10">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 text-orange-400 mx-auto mb-8" />
                  <h2 className="text-4xl font-bold mb-6">
                    Final Exam <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Format</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-orange-400 mb-4">Live Practical Lab</h3>
                      <p className="text-6xl font-bold text-white mb-2">80</p>
                      <p className="text-slate-300">marks</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-red-400 mb-4">Professional Report</h3>
                      <p className="text-6xl font-bold text-white mb-2">20</p>
                      <p className="text-slate-300">marks</p>
                    </div>
                  </div>
                  
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-8">
                    <p className="text-2xl font-bold text-orange-400 mb-2">Passing Score: 70/100</p>
                    <p className="text-slate-300">No theory • No multiple-choice questions • 100% practical evaluation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Certificate</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                Industry-recognized digital certificate with blockchain verification
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-left">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-slate-200">Digital certificate with candidate name</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-slate-200">Unique credential ID and QR code</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-slate-200">Lifetime validity</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-slate-200">Optional blockchain verification</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-slate-200">LinkedIn badge for professional profiles</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg p-4 border border-slate-600/50">
                  <img 
                    src="/lovable-uploads/2133cbde-82aa-47b5-8021-6574637825dd.png" 
                    alt="DVCE Certificate Sample" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Cybersecurity Career?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                Join hundreds of certified professionals who have advanced their careers with DVCE certification
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8 mb-8">
                <p className="text-2xl font-bold text-orange-400 mb-4">⚡ Limited Time Offer</p>
                <p className="text-lg text-slate-300">Secure your seat today - Only a few spots remaining in this batch!</p>
              </div>

              <Link to="/enrollment">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-16 py-6 rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105">
                  Enroll Now - Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 border-t border-slate-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                    alt="DVCE Certificate Logo" 
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                      DevAcademix
                    </h3>
                    <p className="text-xs text-slate-400">Professional Cybersecurity Training</p>
                  </div>
                </div>
                <p className="text-slate-400">
                  Leading provider of practical cybersecurity certification programs
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">About DevAcademix</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Course Details</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Certification</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Student Portal</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>WhatsApp Support</span>
                  </a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">YouTube</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Discord</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>&copy; 2024 DevAcademix. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
