import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, BarChart3, User, FileText, Users } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      title: "Analytics Dashboard",
      description: "See who views your profile in real-time.",
      icon: BarChart3
    },
    {
      title: "Dynamic Profile",
      description: "Create a professional identity that lives beyond the PDF.",
      icon: User
    },
    {
      title: "AI Cover Letter",
      description: "Generate personalized cover letters instantly.",
      icon: FileText
    },
    {
      title: "Recruiter Finder",
      description: "Find and connect with the right people at any company.",
      icon: Users
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-bold text-foreground">Verfolia</span>
        </div>

        {/* Features Dropdown */}
        <div className="flex items-center">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Features
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2" align="center">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <DropdownMenuItem key={index} className="p-4 cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};