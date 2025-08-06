import { WaitlistHero } from "@/components/WaitlistHero";
import { DataAnalyticsCard, ResumeCard, ProfileCard, PersonalCard, ResumeBuilderCard } from "@/components/DataCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>
      
      {/* Floating cards positioned around the center */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/* Center hero card */}
        <div className="relative">
          <WaitlistHero />
          
          {/* Floating cards around the center */}
          <div className="absolute -top-20 -left-32 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <ResumeBuilderCard />
          </div>
          
          <div className="absolute -top-16 right-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <PersonalCard />
          </div>
          
          <div className="absolute top-16 -right-40 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <DataAnalyticsCard />
          </div>
          
          <div className="absolute top-32 right-12 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <ProfileCard />
          </div>
          
          <div className="absolute -bottom-8 -left-36 animate-fade-in" style={{ animationDelay: '1.7s' }}>
            <ResumeCard />
          </div>
        </div>
      </div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Index;
