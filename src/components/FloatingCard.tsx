import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard = ({ children, className = "", delay = 0 }: FloatingCardProps) => {
  return (
    <Card 
      className={`glass-card p-4 shadow-float animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </Card>
  );
};