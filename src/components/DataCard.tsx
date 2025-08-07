
import {
  BarChart3,
  PieChart,
  TrendingUp,
  FileText, // For Resume
  User,     // For Profile
  Fingerprint, // For Personal
  Wand,     // For Builder
  FilePlus2 // For Builder
} from "lucide-react";
import { FloatingCard } from "./FloatingCard";

export const DataAnalyticsCard = () => {
  return (
    <FloatingCard className="w-72 h-48" delay={0.5}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-foreground">Data Analytics</h3>
        <BarChart3 className="w-5 h-5 text-primary" />
      </div>
      <div className="flex items-center justify-between space-x-4 h-full pb-8">
        {/* Left Side: Pie Chart */}
        <div className="relative">
          <PieChart className="w-20 h-20 text-primary/80" strokeWidth={1.5} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full" />
          </div>
          <p className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary">76%</p>
        </div>
        {/* Right Side: Bar Chart */}
        <div className="flex-1 flex flex-col items-end">
          <div className="flex items-end space-x-1.5 h-20">
            {[40, 60, 30, 70, 50, 80].map((height, i) => (
              <div
                key={i}
                className="w-2.5 bg-primary/70 rounded-sm hover:bg-primary transition-colors"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex items-center space-x-1 mt-2 text-xs text-green-500">
            <TrendingUp className="w-4 h-4" />
            <span>+15%</span>
          </div>
        </div>
      </div>
    </FloatingCard>
  );
};

export const ResumeCard = () => {
  return (
    <FloatingCard className="w-72 h-48" delay={1}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-foreground">Your Resume</h3>
          <p className="text-xs text-muted-foreground">Updated 2 days ago</p>
        </div>
        <div className="p-2 bg-primary/10 rounded-lg">
          <FileText className="w-6 h-6 text-primary" />
        </div>
      </div>
      {/* Mini Document Diagram */}
      <div className="border bg-background/30 rounded-md p-3 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
          <div className="flex-1 space-y-1">
            <div className="h-2 w-3/4 bg-primary/40 rounded"></div>
            <div className="h-2 w-1/2 bg-muted rounded"></div>
          </div>
        </div>
        <div className="space-y-1.5 pt-2">
          <div className="h-1.5 w-full bg-muted rounded"></div>
          <div className="h-1.5 w-full bg-muted rounded"></div>
          <div className="h-1.5 w-5/6 bg-muted rounded"></div>
        </div>
      </div>
    </FloatingCard>
  );
};
export const ProfileCard = () => {
  return (
    <FloatingCard className="w-72 h-44" delay={1.5}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-foreground">Jane Doe</h3>
          <p className="text-xs text-muted-foreground">Software Engineer</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-foreground">Profile Strength</span>
          <span className="text-xs font-bold text-primary">85%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
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
    <FloatingCard className="w-72 h-48 flex flex-col" delay={0.2}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-bold text-foreground">Resume Builder</h3>
        <div className="p-1.5 bg-primary/10 rounded-lg">
          <Wand className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <FilePlus2 className="w-16 h-16 text-primary/50 mb-2" />
        <p className="text-sm text-muted-foreground">Add new sections or skills</p>
      </div>
    </FloatingCard>
  );
};