import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, CheckCircle, ShieldCheck, Star, Users, Zap, BookOpen, Calendar, Target, Award, Shield, Code, Terminal, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DVCE Certification - Become a Cybersecurity Expert | DevAcademix</title>
        <meta name="description" content="Join the DVCE certification program and gain expertise in cybersecurity. Learn ethical hacking, VAPT, and protect against cyber threats." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Header */}
        <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/90 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/d12e9913-d9e0-4d7b-a9ba-452f0373064a.png" 
                alt="DVCE Certificate Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  DevAcademix
                </h1>
                <p className="text-xs text-slate-400">Professional Cybersecurity Training</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/curriculum" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                DVCE Curriculum
              </Link>
              <Link to="/team" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/winners" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Winners
              </Link>
            </nav>

            {/* CTA Button */}
            <Link to="/enrollment">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Enroll Now
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Become a Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cybersecurity Expert</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Join our comprehensive DVCE certification program and master the skills to protect against cyber threats.
              </p>
              <div className="flex space-x-4">
                <Link to="/enrollment">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/curriculum">
                  <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-bold px-8 py-3 rounded-full transition-all duration-300">
                    View DVCE Curriculum
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <img 
                src="/lovable-uploads/4e959599-653d-494f-8949-734491f2947b.png" 
                alt="Cybersecurity Expert" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </section>

        {/* Tools & Scripts Comparison Table */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Premium Tools & Scripts Collection
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access our extensive arsenal of cybersecurity tools and custom scripts
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-600/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">What You Get Access To</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-600/50">
                      <TableHead className="text-cyan-400 font-bold">Category</TableHead>
                      <TableHead className="text-cyan-400 font-bold">Count</TableHead>
                      <TableHead className="text-cyan-400 font-bold">Description</TableHead>
                      <TableHead className="text-cyan-400 font-bold">Access Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-slate-600/30 hover:bg-slate-700/30">
                      <TableCell className="font-medium text-white flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-cyan-400" />
                        Premium Tools
                      </TableCell>
                      <TableCell className="text-2xl font-bold text-cyan-400">1000+</TableCell>
                      <TableCell className="text-slate-300">
                        Professional penetration testing tools, vulnerability scanners, and security utilities
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          Full Access
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-slate-600/30 hover:bg-slate-700/30">
                      <TableCell className="font-medium text-white flex items-center gap-2">
                        <Code className="w-5 h-5 text-blue-400" />
                        Custom Scripts
                      </TableCell>
                      <TableCell className="text-2xl font-bold text-blue-400">500+</TableCell>
                      <TableCell className="text-slate-300">
                        Social engineering scripts, automation tools, and custom exploits for VAPT
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          Full Access
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-slate-600/30 hover:bg-slate-700/30">
                      <TableCell className="font-medium text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-400" />
                        Lab Environment
                      </TableCell>
                      <TableCell className="text-2xl font-bold text-purple-400">24/7</TableCell>
                      <TableCell className="text-slate-300">
                        Cloud-based virtual labs with pre-configured vulnerable applications
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          Unlimited
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-slate-600/30 hover:bg-slate-700/30">
                      <TableCell className="font-medium text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-orange-400" />
                        AI Assistant
                      </TableCell>
                      <TableCell className="text-2xl font-bold text-orange-400">24/7</TableCell>
                      <TableCell className="text-slate-300">
                        AI-powered hacking assistant for instant guidance and support
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          WhatsApp
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Program Overview Section - Enhanced */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              DVCE Program Overview
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              DevAcademix VAPT Certified Expert - A comprehensive certification program focused on hands-on offensive security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">8</h3>
                <p className="text-slate-300">Comprehensive Modules</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">20+</h3>
                <p className="text-slate-300">Hands-on Labs</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">3</h3>
                <p className="text-slate-300">Months Training</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">1500+</h3>
                <p className="text-slate-300">Tools & Scripts</p>
              </CardContent>
            </Card>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <ShieldCheck className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold">AI-Powered Support</h3>
                </div>
                <p className="text-slate-300">
                  24x7 WhatsApp support with AI-powered hacking assistant for instant guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold">Real Internship</h3>
                </div>
                <p className="text-slate-300">
                  1-Month remote internship with offer letter and completion certificate.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">Lifetime Access</h3>
                </div>
                <p className="text-slate-300">
                  Lifetime access to recorded sessions and premium tools collection.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/curriculum">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Full DVCE Curriculum
              </Button>
            </Link>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <ShieldCheck className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold">Comprehensive Curriculum</h3>
                </div>
                <p className="text-slate-300">
                  Master ethical hacking, VAPT, and cybersecurity essentials with our expertly designed curriculum.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold">Hands-on Labs</h3>
                </div>
                <p className="text-slate-300">
                  Gain practical experience through real-world scenarios and hands-on labs.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">Industry-Recognized Certification</h3>
                </div>
                <p className="text-slate-300">
                  Earn a certification that validates your skills and enhances your career prospects.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div>
              <img 
                src="/lovable-uploads/991c982d-f89f-499d-892d-8e195a59f807.png"
                alt="Experienced Instructors"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Experienced Instructors</h3>
              <p className="text-slate-300 mb-6">
                Learn from industry experts with years of experience in cybersecurity.
              </p>
              <h3 className="text-2xl font-bold mb-4">Flexible Learning Options</h3>
              <p className="text-slate-300 mb-6">
                Choose from flexible payment plans and learn at your own pace.
              </p>
              <h3 className="text-2xl font-bold mb-4">Career Support</h3>
              <p className="text-slate-300 mb-6">
                Get access to career resources and job placement assistance.
              </p>
              <Link to="/curriculum">
                <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-bold px-6 py-2 rounded-full transition-all duration-300">
                  View DVCE Detailed Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold">John Doe</h3>
                </div>
                <p className="text-slate-300 italic">
                  "The DVCE certification program exceeded my expectations. The hands-on labs were invaluable, and I now feel confident in my cybersecurity skills."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                </div>
                <p className="text-slate-300 italic">
                  "I highly recommend the DVCE program to anyone looking to advance their career in cybersecurity. The instructors were knowledgeable and supportive."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action - Fixed Background Issue */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-lg text-slate-200 mb-12 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with our comprehensive DVCE certification program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enrollment">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Enroll Now <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <Link to="/curriculum">
                <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-bold px-12 py-4 rounded-full transition-all duration-300">
                  <BookOpen className="w-6 h-6 mr-2" />
                  View DVCE Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/curriculum" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    DVCE Curriculum
                  </Link>
                  <Link to="/team" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    Our Team
                  </Link>
                  <Link to="/winners" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    Top Winners
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Programs</h3>
                <div className="space-y-2">
                  <Link to="/curriculum" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    VAPT Training
                  </Link>
                  <Link to="/enrollment" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    Enrollment
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Contact</h3>
                <p className="text-slate-400">Professional Cybersecurity Training</p>
              </div>
            </div>
            <div className="text-center text-slate-400 mt-8 pt-8 border-t border-slate-800/50">
              <p>&copy; 2024 DevAcademix. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
