import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import { FloatingCard } from "./FloatingCard";

export const DataAnalyticsCard = () => {
  return (
    <FloatingCard className="w-64 h-32" delay={0.5}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Data Analytics</h3>
        <BarChart3 className="w-4 h-4 text-primary" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <PieChart className="w-12 h-12 text-primary" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1">
          <TrendingUp className="w-8 h-8 text-primary mb-1" />
          <div className="flex space-x-1">
            {[40, 60, 30, 70, 50, 80].map((height, i) => (
              <div 
                key={i} 
                className="w-2 bg-primary/60 rounded-sm" 
                style={{ height: `${height/2}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </FloatingCard>
  );
};

export const ResumeCard = () => {
  return (
    <FloatingCard className="w-56 h-40" delay={1}>
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-primary rounded-full"></div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Resume</h3>
          <div className="w-16 h-1 bg-muted rounded mt-1"></div>
        </div>
      </div>
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary/40 rounded-sm"></div>
            <div className="flex-1 h-1 bg-muted rounded"></div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full inline-block">
          Current Resume
        </div>
      </div>
    </FloatingCard>
  );
};

export const ProfileCard = () => {
  return (
    <FloatingCard className="w-60 h-36" delay={1.5}>
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">Profile</h3>
          <div className="w-20 h-1 bg-muted rounded mt-1"></div>
          <div className="w-16 h-1 bg-muted rounded mt-1"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="w-full h-1 bg-muted rounded"></div>
        <div className="w-3/4 h-1 bg-muted rounded"></div>
        <div className="w-2/3 h-1 bg-muted rounded"></div>
      </div>
      <div className="mt-3">
        <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-md inline-block">
          Current Results
        </div>
      </div>
    </FloatingCard>
  );
};

export const PersonalCard = () => {
  return (
    <FloatingCard className="w-52 h-36" delay={2}>
      <div className="flex items-center space-x-3 mb-3">
        <h3 className="text-sm font-semibold text-foreground">Personal</h3>
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-1 bg-muted rounded"></div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
        <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-md">
          Completed
        </div>
      </div>
    </FloatingCard>
  );
};

export const ResumeBuilderCard = () => {
  return (
    <FloatingCard className="w-48 h-32" delay={0.2}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Resume Card</h3>
        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary/40 rounded"></div>
          <div className="flex-1 h-1 bg-muted rounded"></div>
        </div>
        <div className="w-3/4 h-1 bg-muted rounded"></div>
        <div className="w-2/3 h-1 bg-muted rounded"></div>
      </div>
    </FloatingCard>
  );
};