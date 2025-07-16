import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  List,
  CheckCircle,
  BookOpenCheck,
  DollarSign,
  FileCheck,
  LayoutDashboard,
  Headphones,
  Clock,
  Code,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Layers,
  ServerCrash,
  Bug,
  Terminal,
  Search,
  Settings,
  Network,
  Key,
  AlertTriangle,
  Download,
  MessageSquare,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Enrollment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEnrollment = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/5z8vnez4hb9in", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: name,
            Email: email,
            Phone: phone,
            Course: "DVCE",
            Price: "₹2,999",
            Date: new Date().toLocaleDateString(),
          },
        }),
      });

      if (response.ok) {
        toast({
          title: "Enrollment Successful!",
          description: "You have successfully enrolled in the DVCE certification program.",
        });
        setName("");
        setEmail("");
        setPhone("");
      } else {
        toast({
          variant: "destructive",
          title: "Enrollment Failed",
          description: "There was an error during enrollment. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Enrollment Error",
        description: "An unexpected error occurred. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enroll Now | DevAcademix DVCE Certification</title>
        <meta name="description" content="Join DevAcademix's comprehensive DVCE certification program. Master cybersecurity, ethical hacking, and penetration testing with expert guidance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-8 h-8 border-2 border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 left-16 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-cyan-400/30 transform rotate-45 animate-pulse"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 border-b border-slate-800/50 backdrop-blur-xl bg-slate-950/80">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-6 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                  alt="DevAcademix Logo" 
                  className="w-16 h-16 object-contain filter drop-shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                  DevAcademix
                </h1>
                <p className="text-sm text-slate-300 font-medium">Professional Cybersecurity Training</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Home</Link>
              <Link to="/team" className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Team</Link>
              <Link to="/curriculum" className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Curriculum</Link>
              <Link to="/winners" className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Top Winners</Link>
              <Button 
                onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Support
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Hero Section with 3D Effect */}
          <div className="text-center mb-16 transform animate-fade-in">
            <div className="relative inline-block">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-8 py-4 text-lg font-bold rounded-full backdrop-blur-sm mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                🎯 DVCE Certification Program
              </Badge>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6 transform hover:scale-105 transition-all duration-500">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-gradient">
                Enroll Now
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Start Your Journey</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-500">
              Join our comprehensive DVCE certification program and become a cybersecurity expert. Limited seats available for the upcoming batch.
            </p>
          </div>

          {/* Enhanced Pricing Cards with 3D Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-slide-up animation-delay-1000">
            <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative">
                <CardTitle className="text-2xl font-bold text-white mb-4">Basic Plan</CardTitle>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300">
                  ₹ 2,999
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                    Access to all 8 modules
                  </li>
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                    Lifetime access to course content
                  </li>
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <List className="w-4 h-4 mr-2 text-slate-500" />
                    Community support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative">
                <CardTitle className="text-2xl font-bold text-white mb-4">Standard Plan</CardTitle>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300">
                  ₹ 4,999
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
                    Everything in Basic Plan
                  </li>
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
                    Access to premium labs
                  </li>
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
                    Priority support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative">
                <CardTitle className="text-2xl font-bold text-white mb-4">Premium Plan</CardTitle>
                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300">
                  ₹ 7,999
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-indigo-400" />
                    Everything in Standard Plan
                  </li>
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-indigo-400" />
                    One-on-one mentorship
                  </li>
                  <li className="flex items-center text-slate-400 transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-indigo-400" />
                    Exclusive access to advanced content
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Professional Frontend Development Section */}
          <div className="mb-16 animate-slide-up animation-delay-1500">
            <div className="bg-gradient-to-r from-slate-900/80 to-purple-900/40 rounded-3xl p-8 border border-slate-700 backdrop-blur-xl relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4 transform hover:scale-110 transition-all duration-300">
                    <Code className="w-8 h-8 text-blue-400 animate-pulse" />
                  </div>
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    Professional Frontend Development
                  </h2>
                  <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                    Master modern frontend technologies with cutting-edge tools and frameworks used by industry leaders.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl group hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Terminal className="w-6 h-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-white text-lg">React & Next.js</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm text-center">Modern React development with Next.js framework</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl group hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-6 h-6 text-purple-400" />
                      </div>
                      <CardTitle className="text-white text-lg">TypeScript</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm text-center">Type-safe development with modern TypeScript</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl group hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Layers className="w-6 h-6 text-cyan-400" />
                      </div>
                      <CardTitle className="text-white text-lg">Tailwind CSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm text-center">Utility-first CSS framework for rapid UI development</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl group hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Network className="w-6 h-6 text-indigo-400" />
                      </div>
                      <CardTitle className="text-white text-lg">API Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm text-center">RESTful APIs and GraphQL integration</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-900/50 to-purple-900/30 rounded-3xl p-8 border border-slate-700 backdrop-blur-xl">
              <div className="text-center mb-8">
                <FileCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  DVCE Certification
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Earn the prestigious DVCE (DevAcademix Vulnerability and Cybersecurity Expert) certification upon successful completion of the program.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl">
                  <CardHeader className="text-center">
                    <LayoutDashboard className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Comprehensive Modules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-center">Covering all essential cybersecurity domains</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl">
                  <CardHeader className="text-center">
                    <BookOpenCheck className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Practical Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-center">Hands-on labs and real-world scenarios</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl">
                  <CardHeader className="text-center">
                    <TrendingUp className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Career Advancement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-center">Enhance your skills and boost your career prospects</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Learning Paths Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-900/50 to-purple-900/30 rounded-3xl p-8 border border-slate-700 backdrop-blur-xl">
              <div className="text-center mb-8">
                <UserCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Customized Learning Paths
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Tailor your learning experience with our customized paths designed to meet your specific goals and skill levels.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl">
                  <CardHeader className="text-center">
                    <Layers className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Beginner Path</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-center">Ideal for those new to cybersecurity</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl">
                  <CardHeader className="text-center">
                    <ServerCrash className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Advanced Path</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-center">For experienced professionals seeking advanced skills</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enhanced Enrollment Form */}
          <div className="max-w-2xl mx-auto animate-slide-up animation-delay-2000">
            <Card className="bg-slate-900/90 border-slate-700 backdrop-blur-xl shadow-2xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    Secure Your Spot Now
                  </CardTitle>
                  <p className="text-slate-400">Fill out the form below to begin your cybersecurity journey</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 transform hover:scale-105 transition-transform duration-300">
                    <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-slate-800/50 border-slate-600 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div className="grid gap-4 transform hover:scale-105 transition-transform duration-300">
                    <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-800/50 border-slate-600 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div className="grid gap-4 transform hover:scale-105 transition-transform duration-300">
                    <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-slate-800/50 border-slate-600 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleEnrollment}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-xl py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Processing...' : 'Enroll Now - ₹2,999'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-slate-400 mb-4">Need help with enrollment?</p>
                    <Button 
                      onClick={() => window.open("https://wa.link/zmbhrw", '_blank')}
                      variant="outline"
                      className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 font-bold px-8 py-3 rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    >
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enrollment;
