import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Activity,
  Footprints,
  Droplets,
  Moon,
  Scale,
  TrendingUp,
  TrendingDown,
  Plus,
  Target,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { cn } from "@/lib/utils";

const weeklyData = [
  { day: "Mon", steps: 8500, calories: 2100, sleep: 7.5 },
  { day: "Tue", steps: 10200, calories: 1950, sleep: 6.8 },
  { day: "Wed", steps: 7800, calories: 2200, sleep: 7.2 },
  { day: "Thu", steps: 9100, calories: 2050, sleep: 8.0 },
  { day: "Fri", steps: 11500, calories: 1900, sleep: 7.0 },
  { day: "Sat", steps: 6500, calories: 2400, sleep: 8.5 },
  { day: "Sun", steps: 8900, calories: 2150, sleep: 7.8 },
];

const metrics = [
  {
    name: "Daily Steps",
    value: "8,943",
    goal: "10,000",
    progress: 89,
    icon: Footprints,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
    trendValue: "+12%",
  },
  {
    name: "Heart Rate",
    value: "72",
    unit: "bpm",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    status: "Normal",
    trend: "stable",
  },
  {
    name: "Water Intake",
    value: "5",
    goal: "8",
    unit: "glasses",
    progress: 62,
    icon: Droplets,
    color: "text-info",
    bgColor: "bg-info/10",
    trend: "down",
    trendValue: "-8%",
  },
  {
    name: "Sleep",
    value: "7.5",
    goal: "8",
    unit: "hours",
    progress: 94,
    icon: Moon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    trend: "up",
    trendValue: "+5%",
  },
  {
    name: "Weight",
    value: "164",
    unit: "lbs",
    icon: Scale,
    color: "text-warning",
    bgColor: "bg-warning/10",
    trend: "down",
    trendValue: "-2 lbs",
  },
  {
    name: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    icon: Activity,
    color: "text-success",
    bgColor: "bg-success/10",
    status: "Optimal",
    trend: "stable",
  },
];

const goals = [
  { name: "Weekly Exercise", current: 4, target: 5, unit: "days" },
  { name: "Meditation", current: 15, target: 20, unit: "min/day" },
  { name: "Fruit & Veggies", current: 3, target: 5, unit: "servings" },
];

export default function Metrics() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              Health Metrics
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your daily wellness and progress
            </p>
          </div>
          <Button variant="gradient">
            <Plus className="w-4 h-4 mr-2" />
            Log Metric
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <Card
              key={metric.name}
              variant="interactive"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={cn("p-2 rounded-xl", metric.bgColor)}>
                    <metric.icon className={cn("w-5 h-5", metric.color)} />
                  </div>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-xs",
                      metric.trend === "up" && "bg-success/10 text-success",
                      metric.trend === "down" && "bg-destructive/10 text-destructive",
                      metric.trend === "stable" && "bg-muted text-muted-foreground"
                    )}
                  >
                    {metric.trend === "up" && <TrendingUp className="w-3 h-3 mr-1" />}
                    {metric.trend === "down" && <TrendingDown className="w-3 h-3 mr-1" />}
                    {metric.trendValue || metric.status}
                  </Badge>
                </div>
                
                <p className="text-xs text-muted-foreground font-medium">{metric.name}</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                  {metric.unit && (
                    <span className="text-sm text-muted-foreground">{metric.unit}</span>
                  )}
                  {metric.goal && (
                    <span className="text-sm text-muted-foreground">/ {metric.goal}</span>
                  )}
                </div>
                
                {metric.progress && (
                  <div className="mt-3">
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Steps Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekly Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.75rem",
                      }}
                    />
                    <Bar
                      dataKey="steps"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Sleep Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sleep Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyData}>
                    <defs>
                      <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                      domain={[5, 10]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.75rem",
                      }}
                      formatter={(value: number) => [`${value} hours`, "Sleep"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="sleep"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      fill="url(#sleepGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Weekly Goals</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              Edit Goals
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <div
                  key={goal.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">{goal.name}</p>
                    <span className="text-sm text-muted-foreground">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress
                    value={(goal.current / goal.target) * 100}
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
