import { ArrowUpRight, ArrowDownRight, Network, ArrowLeftRight, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    name: "Active Connections",
    value: "47",
    change: "+3",
    changeType: "positive" as const,
    icon: Network,
    description: "Hospital systems connected",
  },
  {
    name: "Data Transfers",
    value: "12,847",
    change: "+18%",
    changeType: "positive" as const,
    icon: ArrowLeftRight,
    description: "This month",
  },
  {
    name: "Security Score",
    value: "98.5%",
    change: "+0.5%",
    changeType: "positive" as const,
    icon: Shield,
    description: "HIPAA compliance",
  },
  {
    name: "Avg. Latency",
    value: "45ms",
    change: "-12ms",
    changeType: "positive" as const,
    icon: Clock,
    description: "Response time",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.name}
          className={cn(
            "glass border-border/50 hover:border-primary/30 transition-all duration-300",
            "animate-fade-up opacity-0",
            `stagger-${index + 1}`
          )}
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-primary/10">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                  stat.changeType === "positive"
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive"
                )}
              >
                {stat.changeType === "positive" ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground/80 mt-1">{stat.name}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
