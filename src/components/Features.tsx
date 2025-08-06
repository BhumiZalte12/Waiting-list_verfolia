import { BarChart3, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      subtitle: "See Who's Engaged & What They Care About",
      description: "Go beyond a simple view count. Get a live, data-driven dashboard that shows you which companies are viewing your profile, their location, and which projects and skills they're spending the most time on."
    },
    {
      icon: Zap,
      title: "Dynamic Professional Identity",
      subtitle: "Build a Profile that Lives & Breathes",
      description: "Forget static PDFs. Create an interactive profile that showcases your work with embeddable videos, verified skills, and project portfolios. This is your professional story, not just a summary of your past."
    },
    {
      icon: Brain,
      title: "AI-Powered Career Assistant",
      subtitle: "Go from Application to Insight in Minutes",
      description: "Our AI isn't just for suggestions. It's a strategic partner. Instantly generate tailored cover letters, find the right recruiters at any company, and get personalized tips to boost your profile's performance."
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card 
            key={index} 
            className="glass-card p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardContent className="p-0 space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <h4 className="text-primary font-semibold">
                  {feature.subtitle}
                </h4>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};