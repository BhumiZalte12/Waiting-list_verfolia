import Header from "@/components/Header"; // Correct: No curly braces
import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { DataAnalyticsCard, ResumeCard, ProfileCard, PersonalCard, ResumeBuilderCard } from "@/components/DataCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10 pt-32">
        {/* Hero Section with Floating Cards */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="relative">
            <HeroSection />
            
            {/* 4 Floating cards positioned around the hero without text collision */}
            {/* Top Left */}
            <div className="absolute -top-24 -left-60 animate-fade-in hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <ResumeBuilderCard />
            </div>
            
            {/* Top Right */}
            <div className="absolute -top-24 -right-60 animate-fade-in hidden lg:block" style={{ animationDelay: '0.8s' }}>
              <DataAnalyticsCard />
            </div>
            
            {/* Bottom Left */}
            <div className="absolute -bottom-20 -left-60 animate-fade-in hidden lg:block" style={{ animationDelay: '1.1s' }}>
              <ResumeCard />
            </div>
            
            {/* Bottom Right */}
            <div className="absolute -bottom-20 -right-60 animate-fade-in hidden lg:block" style={{ animationDelay: '1.4s' }}>
              <ProfileCard />
            </div>
          </div>
          
          {/* Ambient glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 relative z-10">
          <Features />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
