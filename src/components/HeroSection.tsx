import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, Linkedin, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you when Verfolia launches.",
    });
    setEmail("");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Verfolia - Your Professional Identity, Unlocked",
        text: "Join the waitlist for Verfolia - a new kind of platform that turns your skills into a dynamic, data-powered profile.",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share link copied to clipboard.",
      });
    }
  };

  return (
    <div className="text-center space-y-8 max-w-4xl mx-auto">
      {/* Main Headline */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
          Your Professional Identity,{" "}
          <span className="text-primary">Unlocked</span>.
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Stop sending your professional identity into the void. Verfolia is a new kind of platform 
          that turns your skills and projects into a dynamic, data-powered profile. Get unprecedented 
          transparency and know exactly how recruiters are engaging with you.
        </p>
      </div>

      {/* Waitlist Form */}
      <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
        <div className="flex w-full space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background/50 border-primary/30 h-12"
          />
          <Button 
            onClick={handleJoinWaitlist}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-12"
          >
            Join Waitlist
          </Button>
          <Button 
            onClick={handleShare}
            variant="outline"
            size="icon"
            className="h-12 w-12 border-primary/30"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.open("https://linkedin.com/company/verfolia", "_blank")}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.open("https://instagram.com/verfolia", "_blank")}
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};