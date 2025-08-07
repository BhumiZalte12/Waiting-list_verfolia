import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  BarChart3,
  User,
  FileText,
  Users
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const features = [
    { title: "Analytics Dashboard", description: "See who views your profile.", icon: BarChart3, path: "#features" },
    { title: "Dynamic Profile", description: "A profile that lives beyond the PDF.", icon: User, path: "#features" },
    { title: "AI Cover Letter", description: "Generate personalized cover letters.", icon: FileText, path: "#features" },
    { title: "Recruiter Finder", description: "Connect with the right people.", icon: Users, path: "#features" }
  ];

  const navLinks = [
    { title: "Home", path: "/" },
    
  ];

  const handleFeatureClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setFeaturesOpen(false);
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 w-full">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="flex items-center justify-between px-6 py-3 rounded-3xl"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Darker for better visibility
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Logo Section */}
            <div className="flex-1 flex justify-start">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                   <img src="/Logo.png" alt="Verfolia Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-2xl font-bold tracking-tight">
                  Verfolia
                </span>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-2 mx-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 rounded-2xl text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.title}
                </Link>
              ))}
               {/* Features Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setFeaturesOpen(true)}
                  className="flex items-center gap-x-1 px-4 py-2 rounded-2xl text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  <span>Features</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {featuresOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 z-50 mt-3 w-80 origin-top-right rounded-xl shadow-xl bg-background border border-border"
                      onMouseLeave={() => setFeaturesOpen(false)}
                    >
                      <div className="p-2">
                        {features.map((feature) => {
                          const Icon = feature.icon;
                          return (
                            <a href={feature.path} key={feature.title} onClick={handleFeatureClick} className="block p-3 rounded-lg hover:bg-muted transition-colors">
                              <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-foreground font-medium text-sm">{feature.title}</p>
                                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex-1 flex justify-end">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden size-9 flex items-center justify-center text-white"
                >
                  <svg width={20} height={20} fill="currentColor"><path d="M3 5h14M3 12h14M3 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
              <div className="relative h-full flex flex-col p-6">
                  <div className="flex items-center justify-between">
                      <Link to="/" className="flex items-center space-x-3">
                          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="/Logo.png" alt="Verfolia Logo" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-white text-2xl font-bold tracking-tight">
                          Verfolia
                          </span>
                      </Link>
                      <button onClick={() => setMobileMenuOpen(false)} className="size-10 flex items-center justify-center text-white"><X className="h-6 w-6" /></button>
                  </div>
                  <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className="block text-3xl font-semibold text-white">{link.title}</Link>
                    ))}
                     <a href="#features" onClick={(e) => {handleFeatureClick(e); setMobileMenuOpen(false);}} className="block text-3xl font-semibold text-white">Features</a>
                  </nav>
              </div>
            </div>
      )}
    </>
  );
}
