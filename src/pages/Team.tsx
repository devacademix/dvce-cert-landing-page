
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Code, Video, Share2, Shield, Bug, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Team = () => {
  const teamMembers = [
    {
      name: "Vishal Paswan",
      role: "Founder DevAcademix",
      specialization: "CEH Bug Bounty Trainer",
      icon: <Award className="w-8 h-8 text-blue-400" />,
      description: "Certified Ethical Hacker and Bug Bounty expert with extensive experience in cybersecurity training.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/50"
    },
    {
      name: "Pulkit",
      role: "CTO",
      specialization: "AI Engineer",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      description: "Chief Technology Officer specializing in AI and machine learning solutions for cybersecurity.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/50"
    },
    {
      name: "Dask",
      role: "Security Engineer",
      specialization: "Penetration Testing",
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      description: "Expert security engineer with deep knowledge in penetration testing and vulnerability assessment.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/50"
    },
    {
      name: "Yash",
      role: "Cyber Security Trainer",
      specialization: "Ethical Hacker Trainer",
      icon: <Bug className="w-8 h-8 text-indigo-400" />,
      description: "Experienced ethical hacker and trainer specializing in advanced cybersecurity techniques.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/50"
    },
    {
      name: "Priyanshu",
      role: "Video Editor",
      specialization: "Content Creation",
      icon: <Video className="w-8 h-8 text-violet-400" />,
      description: "Professional video editor creating engaging educational content for cybersecurity training.",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop&crop=face",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/50"
    },
    {
      name: "Priyanshu",
      role: "Social Media Manager",
      specialization: "Digital Marketing",
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      description: "Social media management expert handling digital marketing and community engagement.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | DevAcademix</title>
        <meta name="description" content="Meet the expert team behind DevAcademix DVCE certification program. Our cybersecurity professionals and trainers." />
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
              <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/curriculum" className="text-slate-300 hover:text-blue-400 transition-colors">Curriculum</Link>
              <Link to="/winners" className="text-slate-300 hover:text-blue-400 transition-colors">Top Winners</Link>
              <Button 
                onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-6 py-2 rounded-full"
              >
                Support
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm mb-8">
              👥 Meet Our Team
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Expert Team
              </span>
              <br />
              <span className="text-white">Behind DVCE</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Meet the passionate cybersecurity professionals and educators who make DevAcademix a world-class training platform.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`bg-gradient-to-br ${member.gradient} border ${member.borderColor} backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}>
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-6">
                    {/* Enhanced image styling with multiple layers */}
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-50 animate-pulse`}></div>
                      
                      {/* Main image container */}
                      <div className={`relative w-32 h-32 rounded-full border-4 ${member.borderColor} overflow-hidden shadow-2xl`}>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20`}></div>
                      </div>

                      {/* Floating icon badge */}
                      <div className={`absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-3 border-2 ${member.borderColor} shadow-lg`}>
                        {member.icon}
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-80 animate-bounce delay-300"></div>
                      <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-60 animate-bounce delay-700"></div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-3">{member.name}</CardTitle>
                  <Badge className={`bg-gradient-to-r ${member.gradient} text-white border ${member.borderColor} mb-3 px-4 py-1`}>
                    {member.role}
                  </Badge>
                  <p className="text-sm text-slate-300 font-medium bg-slate-800/30 rounded-full px-4 py-2">{member.specialization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-center leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Learn from the Experts?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/enrollment">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-xl px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/curriculum">
                <Button 
                  variant="outline" 
                  className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 font-bold text-xl px-8 py-6 rounded-full backdrop-blur-sm"
                >
                  View Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
