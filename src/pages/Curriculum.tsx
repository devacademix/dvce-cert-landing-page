
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Calendar, CheckCircle, Clock, Code, Shield, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Curriculum = () => {
  const modules = [
    {
      week: 1,
      title: "Introduction to Ethical Hacking and VAPT",
      topics: [
        "Overview of cybersecurity",
        "Ethical hacking principles and code of conduct",
        "Legal implications and certifications",
        "Introduction to VAPT (Definition and importance)",
        "Types of VAPT (Vulnerability Assessment vs. Penetration Testing)",
        "Phases of VAPT",
        "Setting up the lab environment (Kali Linux, Metasploitable)"
      ],
      assignment: "Research and write a short essay on the importance of VAPT in modern cybersecurity"
    },
    {
      week: 2,
      title: "Footprinting and Reconnaissance",
      topics: [
        "Passive Reconnaissance (Google dorks, WHOIS, Shodan)",
        "Active Reconnaissance (Nmap, Netdiscover)",
        "Information gathering techniques",
        "OSINT (Open Source Intelligence)",
        "Practical reconnaissance exercises"
      ],
      assignment: "Perform passive and active reconnaissance on a given target and document findings"
    },
    {
      week: 3,
      title: "Setting Up Servers and Deploying Fake Websites",
      topics: [
        "Understanding web servers (Apache, Nginx)",
        "Setting up web server in lab environment",
        "Creating and deploying fake websites (Netflix, Amazon clones)",
        "HTML, CSS, JavaScript fundamentals",
        "Phishing techniques and tools (PhishingFrenzy, Gophish)",
        "Controlled phishing environment setup"
      ],
      assignment: "Set up a fake website and simulate a phishing attack for educational purposes"
    },
    {
      week: 4,
      title: "Scanning Networks",
      topics: [
        "Types of scans (TCP, UDP, ICMP)",
        "Advanced Nmap techniques",
        "Enumeration fundamentals",
        "SMB and SNMP enumeration",
        "Port scanning strategies",
        "Network mapping and documentation"
      ],
      assignment: "Scan and enumerate a given network and document findings"
    },
    {
      week: 5,
      title: "Vulnerability Analysis",
      topics: [
        "Understanding vulnerabilities (SQL Injection, XSS, CSRF)",
        "Common Vulnerability Scoring System (CVSS)",
        "Vulnerability scanning tools (OpenVAS, Nessus, Burp Suite)",
        "Vulnerability assessment methodologies",
        "Risk assessment and prioritization"
      ],
      assignment: "Perform vulnerability scanning on a given target and document findings"
    },
    {
      week: 6,
      title: "System Hacking",
      topics: [
        "System hacking methodologies",
        "Exploitation tools (Metasploit, Hydra)",
        "Common vulnerability exploitation",
        "Post-exploitation techniques",
        "Privilege escalation methods",
        "Maintaining access"
      ],
      assignment: "Exploit a given vulnerability and document findings with proof of concept"
    },
    {
      week: 7,
      title: "Web Application Attacks",
      topics: [
        "Web application security fundamentals",
        "OWASP Top 10 vulnerabilities",
        "Advanced Burp Suite techniques",
        "OWASP ZAP usage",
        "Manual testing techniques",
        "Automated scanning vs manual testing"
      ],
      assignment: "Test a given web application for vulnerabilities and document findings"
    },
    {
      week: 8,
      title: "Malware Threats",
      topics: [
        "Types of malware (Trojan, virus, worms, ransomware)",
        "Malware analysis procedures",
        "Static and dynamic analysis",
        "Sandbox environments",
        "Reverse engineering basics",
        "Malware detection and mitigation"
      ],
      assignment: "Analyze a given malware sample and document findings"
    },
    {
      week: 9,
      title: "Sniffing and Social Engineering",
      topics: [
        "Packet sniffing techniques",
        "Wireshark advanced usage",
        "Tcpdump and command-line tools",
        "Social engineering psychology",
        "Phishing and vishing techniques",
        "Human factor exploitation"
      ],
      assignment: "Conduct packet sniffing and social engineering attack simulation"
    },
    {
      week: 10,
      title: "Denial-of-Service and Session Hijacking",
      topics: [
        "DoS and DDoS attack methodologies",
        "Low Orbit Ion Cannon and other tools",
        "Session hijacking techniques",
        "Session management vulnerabilities",
        "Mitigation strategies",
        "Traffic analysis"
      ],
      assignment: "Conduct DoS and session hijacking attacks on test targets"
    },
    {
      week: 11,
      title: "Evading IDS, Firewalls, and Honeypots",
      topics: [
        "Understanding IDS, firewalls, and honeypots",
        "Evasion techniques and tools",
        "Steganography and covert channels",
        "Anti-forensics techniques",
        "Advanced persistence methods",
        "Detection avoidance strategies"
      ],
      assignment: "Evade IDS, firewalls, and honeypots in given environment"
    },
    {
      week: 12,
      title: "Course Review and Final Project",
      topics: [
        "Comprehensive course review",
        "Advanced penetration testing methodologies",
        "Professional report writing",
        "Final project: Complete VAPT assessment",
        "Presentation skills",
        "Career guidance and certifications"
      ],
      assignment: "Complete final project and submit detailed VAPT report"
    }
  ];

  return (
    <>
      <Helmet>
        <title>DVCE Curriculum - Complete VAPT Training Program | DevAcademix</title>
        <meta name="description" content="Detailed 12-week DVCE curriculum covering ethical hacking, penetration testing, and vulnerability assessment with hands-on labs and practical assignments." />
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
            <Link to="/enrollment">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-full">
                Enroll Now
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm font-semibold mb-6">
              COMPREHENSIVE TRAINING PROGRAM
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">DVCE</span> Curriculum
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              VAPT for Beginners: 12-Week Comprehensive Syllabus with 4 Days per Week Training
            </p>
            
            {/* Program Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-slate-400 text-sm">Weeks</div>
              </div>
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">48</div>
                <div className="text-slate-400 text-sm">Classes</div>
              </div>
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-slate-400 text-sm">Labs</div>
              </div>
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-slate-400 text-sm">Tools</div>
              </div>
            </div>
          </div>

          {/* Curriculum Modules */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Detailed Module Breakdown
            </h2>
            
            <div className="space-y-8">
              {modules.map((module, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30 px-3 py-1">
                          Week {module.week}
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-white">
                          Module {module.week}: {module.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">4 Days</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-orange-400 mb-4 flex items-center">
                          <Code className="w-5 h-5 mr-2" />
                          Topics Covered
                        </h4>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Practical Assignment
                        </h4>
                        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {module.assignment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to Start Your Cybersecurity Journey?
                  </h3>
                  <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals who have transformed their careers with our comprehensive DVCE certification program.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/enrollment">
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                        <Users className="w-5 h-5 mr-2" />
                        Enroll Now
                      </Button>
                    </Link>
                    <Button 
                      variant="outline"
                      className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 font-bold text-lg px-12 py-4 rounded-full transition-all duration-300"
                      onClick={() => window.open("https://chat.whatsapp.com/JCOWIvdDQNuJIuGOIW49r6", '_blank')}
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
