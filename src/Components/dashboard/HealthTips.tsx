import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Droplets, Moon, Footprints, Apple } from "lucide-react";
import { cn } from "@/lib/utils";

const tips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water today. You've had 5 so far!",
    icon: Droplets,
    color: "text-info",
    bgColor: "bg-info/10",
    progress: 62,
  },
  {
    id: 2,
    title: "Get Moving",
    description: "Take a 15-minute walk after lunch to boost your energy.",
    icon: Footprints,
    color: "text-success",
    bgColor: "bg-success/10",
    progress: 45,
  },
  {
    id: 3,
    title: "Sleep Well",
    description: "Aim for 7-8 hours of sleep. Your average this week: 6.5 hours.",
    icon: Moon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    progress: 81,
  },
  {
    id: 4,
    title: "Eat Balanced",
    description: "Include more vegetables in your dinner tonight.",
    icon: Apple,
    color: "text-accent",
    bgColor: "bg-accent/10",
    progress: 55,
  },
];

export function HealthTips() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-warning/10">
            <Lightbulb className="w-5 h-5 text-warning" />
          </div>
          <CardTitle className="text-lg">Personalized Tips</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={tip.id}
            className="flex gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors animate-slide-up cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn("p-2.5 rounded-xl h-fit", tip.bgColor)}>
              <tip.icon className={cn("w-5 h-5", tip.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground">{tip.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{tip.description}</p>
              <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-1000", 
                    tip.color === "text-info" && "bg-info",
                    tip.color === "text-success" && "bg-success",
                    tip.color === "text-violet-500" && "bg-violet-500",
                    tip.color === "text-accent" && "bg-accent"
                  )}
                  style={{ width: `${tip.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
