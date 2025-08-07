import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WaitlistHero } from "@/components/WaitlistHero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { FloatingCard } from "@/components/floating-card";
import { Button } from "@/components/ui/button";
import { FileText, Users, BarChart3, TrendingUp, Zap, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-start gap-24 px-6 relative pt-32 pb-48">
          
          {/* Top Text Content */}
          <HeroSection />

          {/* Center Waitlist Box and Floating Cards */}
          <div className="relative">
            <WaitlistHero />
            
            <div className="absolute inset-0 hidden lg:block">
              {/* Resume Card - Top Left */}
              <FloatingCard
                className="absolute -top-8 -left-64 pointer-events-none"
                delay="none"
                size="md"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-card-foreground mb-1">Resume</h4>
                    <div className="space-y-1">
                      <div className="h-2 bg-muted rounded-full w-full"></div>
                      <div className="h-2 bg-muted rounded-full w-3/4"></div>
                      <div className="h-2 bg-muted rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Data Analytics Card - Top Right */}
              <FloatingCard
                className="absolute -top-4 -right-72 pointer-events-none"
                delay="delayed-2"
                size="lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <h4 className="text-sm font-semibold text-card-foreground">Data Analytics</h4>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/30 relative">
                    <div className="absolute inset-2 rounded-full bg-primary/20"></div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <div className="h-1 bg-primary rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-primary" />
                      <div className="h-1 bg-primary/60 rounded-full flex-1"></div>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Resume Craft Card - Bottom Left */}
              <FloatingCard
                className="absolute -bottom-28 -left-56 pointer-events-none"
                delay="delayed"
                size="md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-card-foreground mb-1">Resume Craft</h4>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-muted rounded-full w-full"></div>
                      <div className="h-1.5 bg-muted rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Profile Card - Bottom Right */}
              <FloatingCard
                className="absolute -bottom-24 -right-60 pointer-events-none"
                delay="none"
                size="md"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Profile</h4>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-muted rounded-full w-full"></div>
                      <div className="h-1.5 bg-muted rounded-full w-3/4"></div>
                      <div className="h-1.5 bg-muted rounded-full w-1/2"></div>
                    </div>
                    <Button variant="glass" size="sm" className="mt-2 text-xs">
                      Current Results
                    </Button>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
          
          {/* Ambient glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 relative z-10">
          <Features />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
