'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const WaitlistHero = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Data Analytics");

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

  return (
    <Card className="glass-card glow-border w-96 h-80 shadow-glow animate-pulse-glow">
      <CardContent className="p-8 h-full flex flex-col justify-center items-center space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            Join the Waitlist
          </h1>
          <h2 className="text-3xl font-bold text-foreground">
            for Verfolia
          </h2>
        </div>

        <div className="w-full space-y-4">
          <Input
            type="text"
            value={category}
            readOnly
            className="w-full bg-secondary/50 border-primary/30 text-center font-medium"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-background/50 border-primary/30"
          />

          <Button 
            onClick={handleJoinWaitlist}
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-3 rounded-lg"
          >
            Join Waitlist
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
