import { Card, CardContent } from "@/components/ui/card";
import { Heart, Thermometer, Activity, Droplets, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const vitals = [
  {
    name: "Heart Rate",
    value: "72",
    unit: "bpm",
    icon: Heart,
    status: "normal",
    trend: "stable",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    name: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    icon: Activity,
    status: "normal",
    trend: "down",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Temperature",
    value: "98.6",
    unit: "°F",
    icon: Thermometer,
    status: "normal",
    trend: "stable",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    name: "Oxygen Level",
    value: "98",
    unit: "%",
    icon: Droplets,
    status: "excellent",
    trend: "up",
    color: "text-info",
    bgColor: "bg-info/10",
  },
];

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const statusColors = {
  excellent: "text-success",
  normal: "text-muted-foreground",
  warning: "text-warning",
  critical: "text-destructive",
};

export function VitalsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {vitals.map((vital, index) => {
        const TrendIcon = trendIcons[vital.trend as keyof typeof trendIcons];
        return (
          <Card
            key={vital.name}
            variant="interactive"
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className={cn("p-2 rounded-xl", vital.bgColor)}>
                  <vital.icon className={cn("w-5 h-5", vital.color)} />
                </div>
                <div className={cn("flex items-center gap-1", statusColors[vital.status as keyof typeof statusColors])}>
                  <TrendIcon className="w-4 h-4" />
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground font-medium mb-1">
                {vital.name}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">{vital.value}</span>
                <span className="text-sm text-muted-foreground">{vital.unit}</span>
              </div>
              
              <div className="mt-2 flex items-center gap-1">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  vital.status === "excellent" && "bg-success",
                  vital.status === "normal" && "bg-primary",
                  vital.status === "warning" && "bg-warning",
                  vital.status === "critical" && "bg-destructive"
                )} />
                <span className="text-xs text-muted-foreground capitalize">{vital.status}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
