import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, ShieldCheck, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DVCE Certification - Become a Cybersecurity Expert | DevAcademix</title>
        <meta name="description" content="Join the DVCE certification program and gain expertise in cybersecurity. Learn ethical hacking, VAPT, and protect against cyber threats." />
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

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/curriculum" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">
              Curriculum
            </Link>
            <Link to="/team" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/winners" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">
              Winners
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/enrollment">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
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
                Become a Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Cybersecurity Expert</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Join our comprehensive DVCE certification program and master the skills to protect against cyber threats.
              </p>
              <div className="flex space-x-4">
                <Link to="/enrollment">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold px-8 py-3 rounded-full transition-all duration-300">
                  Learn More
                </Button>
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
                  <Zap className="w-8 h-8 text-orange-400" />
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

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Career?</h2>
          <p className="text-lg text-slate-300 mb-12">
            Enroll in the DVCE certification program today and become a cybersecurity expert.
          </p>
          <Link to="/enrollment">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
              Enroll Now <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8">
          <div className="container mx-auto px-4 text-center text-slate-400">
            <p>&copy; 2024 DevAcademix. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
