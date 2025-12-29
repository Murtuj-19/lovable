import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export function HealthScoreCard() {
  const score = 87;
  const improvement = 5;

  return (
    <Card variant="gradient" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      
      <CardContent className="relative p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-primary-foreground/80 text-sm font-medium">Health Score</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-5xl font-bold text-primary-foreground">{score}</span>
              <span className="text-primary-foreground/70 text-lg">/100</span>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-primary-foreground/90">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-foreground/20">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">+{improvement}%</span>
              </div>
              <span className="text-xs">from last month</span>
            </div>
          </div>
          
          {/* Circular progress indicator */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(score / 100) * 251.2} 251.2`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-primary-foreground/80">
          Excellent! Your health metrics are trending positively.
        </p>
      </CardContent>
    </Card>
  );
}
