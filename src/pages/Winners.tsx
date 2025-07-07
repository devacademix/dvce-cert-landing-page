
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Medal, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Winners = () => {
  const topWinners = [
    {
      position: 1,
      name: "Coming Soon",
      score: "TBD",
      achievement: "First Position",
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Outstanding performance in DVCE certification program"
    },
    {
      position: 2,
      name: "Coming Soon",
      score: "TBD",
      achievement: "Second Position",
      icon: <Medal className="w-8 h-8 text-gray-400" />,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Excellent performance in practical labs and certification"
    },
    {
      position: 3,
      name: "Coming Soon",
      score: "TBD",
      achievement: "Third Position",
      icon: <Award className="w-8 h-8 text-amber-600" />,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "Great performance in VAPT challenges and assessments"
    },
    {
      position: 4,
      name: "Coming Soon",
      score: "TBD",
      achievement: "Fourth Position",
      icon: <Star className="w-8 h-8 text-blue-400" />,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      description: "Strong performance in cybersecurity fundamentals"
    },
    {
      position: 5,
      name: "Coming Soon",
      score: "TBD",
      achievement: "Fifth Position",
      icon: <Trophy className="w-8 h-8 text-green-400" />,
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop&crop=face",
      description: "Solid performance in all certification modules"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Top Winners | DevAcademix DVCE</title>
        <meta name="description" content="Celebrate the top performers of DevAcademix DVCE certification program. See our hall of fame winners." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-slate-300 hover:text-orange-400 transition-colors">Home</Link>
              <Link to="/team" className="text-slate-300 hover:text-orange-400 transition-colors">Team</Link>
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
            <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 px-6 py-3 text-lg font-bold rounded-full backdrop-blur-sm mb-8">
              🏆 Hall of Fame
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Top 5 Winners
              </span>
              <br />
              <span className="text-white">DVCE Champions</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Celebrating the outstanding performers of our DVCE certification program. These champions have demonstrated exceptional skills in cybersecurity and ethical hacking.
            </p>
          </div>

          {/* Notice */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-xl mb-16">
            <div className="text-center">
              <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">First Batch Starting Soon!</h3>
              <p className="text-slate-300 text-lg">
                Our top 5 winners will be featured here after the completion of our first batch. 
                Be among the first to join and claim your spot in our hall of fame!
              </p>
            </div>
          </div>

          {/* Winners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {topWinners.map((winner, index) => (
              <Card key={index} className={`bg-slate-900/90 border-slate-700 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                winner.position === 1 ? 'ring-2 ring-yellow-500/50' : 
                winner.position === 2 ? 'ring-2 ring-gray-400/50' : 
                winner.position === 3 ? 'ring-2 ring-amber-600/50' : ''
              }`}>
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-6">
                    <img 
                      src={winner.image} 
                      alt={winner.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-slate-600 opacity-50"
                    />
                    <div className={`absolute -bottom-2 -right-2 rounded-full p-2 border-2 border-slate-700 ${
                      winner.position === 1 ? 'bg-yellow-500/20' :
                      winner.position === 2 ? 'bg-gray-400/20' :
                      winner.position === 3 ? 'bg-amber-600/20' :
                      'bg-slate-800'
                    }`}>
                      {winner.icon}
                    </div>
                    <div className="absolute top-0 left-0 bg-slate-800/90 rounded-full px-3 py-1 text-sm font-bold text-white">
                      #{winner.position}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-400 mb-2">{winner.name}</CardTitle>
                  <Badge className={`mb-2 ${
                    winner.position === 1 ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                    winner.position === 2 ? 'bg-gray-400/20 text-gray-300 border-gray-400/30' :
                    winner.position === 3 ? 'bg-amber-600/20 text-amber-300 border-amber-600/30' :
                    'bg-blue-500/20 text-blue-300 border-blue-500/30'
                  }`}>
                    {winner.achievement}
                  </Badge>
                  <p className="text-sm text-slate-500 font-medium">Score: {winner.score}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-center leading-relaxed">{winner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-12 border border-orange-500/30 backdrop-blur-xl">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Want to Be Our Next Champion?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Join our DVCE certification program and compete with the best. Show your cybersecurity skills and earn your place in our hall of fame!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enrollment">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/">
                  <Button 
                    variant="outline" 
                    className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold text-xl px-8 py-6 rounded-full backdrop-blur-sm"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winners;
