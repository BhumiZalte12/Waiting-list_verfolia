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
import myPhoto from '@/assets/logo_verfolia.jpg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const features = [
    { title: "Analytics Dashboard", description: "See who views your profile.", icon: BarChart3, path: "/analytics" },
    { title: "Dynamic Profile", description: "A profile that lives beyond the PDF.", icon: User, path: "/profile" },
    { title: "AI Cover Letter", description: "Generate personalized cover letters.", icon: FileText, path: "/ai-tools" },
    { title: "Recruiter Finder", description: "Connect with the right people.", icon: Users, path: "/recruiters" }
  ];

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" }
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={myPhoto} alt="Verfolia Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-foreground">Verfolia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <Link key={link.title} to={link.path} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.title}
              </Link>
            ))}
            
            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={() => setFeaturesOpen((prev) => !prev)}
                onMouseEnter={() => setFeaturesOpen(true)}
                className="flex items-center gap-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                    className="absolute left-1/2 -translate-x-1/2 z-50 mt-3 w-80 origin-top rounded-xl shadow-xl"
                    style={{
                      backdropFilter: "blur(20px)",
                      backgroundColor: "rgba(23, 23, 23, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    <div className="p-2">
                      {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                          <Link to={feature.path} key={feature.title} className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="text-white font-medium text-sm">{feature.title}</p>
                                <p className="text-xs text-neutral-400">{feature.description}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-foreground">Verfolia</span>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navLinks.map((link) => (
                      <Link key={link.title} to={link.path} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted">
                        {link.title}
                      </Link>
                    ))}
                    <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground">Features</p>
                    {features.map((feature) => (
                        <Link key={feature.title} to={feature.path} className="-mx-3 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-muted-foreground hover:bg-muted">
                            {feature.title}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}