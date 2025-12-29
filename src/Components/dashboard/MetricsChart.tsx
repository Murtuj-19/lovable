import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const data = [
  { date: "Mon", heartRate: 72, bloodPressure: 120, weight: 165 },
  { date: "Tue", heartRate: 75, bloodPressure: 118, weight: 164.5 },
  { date: "Wed", heartRate: 70, bloodPressure: 122, weight: 165 },
  { date: "Thu", heartRate: 73, bloodPressure: 119, weight: 164 },
  { date: "Fri", heartRate: 71, bloodPressure: 121, weight: 164.5 },
  { date: "Sat", heartRate: 68, bloodPressure: 117, weight: 163.5 },
  { date: "Sun", heartRate: 72, bloodPressure: 120, weight: 164 },
];

const metrics = [
  { key: "heartRate", label: "Heart Rate", color: "#ec4899", unit: "bpm" },
  { key: "bloodPressure", label: "Blood Pressure", color: "#14b8a6", unit: "mmHg" },
  { key: "weight", label: "Weight", color: "#f59e0b", unit: "lbs" },
];

export function MetricsChart() {
  const [activeMetric, setActiveMetric] = useState("heartRate");

  const currentMetric = metrics.find((m) => m.key === activeMetric)!;

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-lg">Weekly Trends</CardTitle>
          <div className="flex gap-2">
            {metrics.map((metric) => (
              <Button
                key={metric.key}
                variant={activeMetric === metric.key ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveMetric(metric.key)}
                className={cn(
                  "text-xs",
                  activeMetric === metric.key && "shadow-sm"
                )}
              >
                {metric.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={currentMetric.color} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={currentMetric.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                domain={["dataMin - 5", "dataMax + 5"]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.75rem",
                  boxShadow: "var(--shadow-lg)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                itemStyle={{ color: currentMetric.color }}
                formatter={(value: number) => [`${value} ${currentMetric.unit}`, currentMetric.label]}
              />
              <Area
                type="monotone"
                dataKey={activeMetric}
                stroke={currentMetric.color}
                strokeWidth={2.5}
                fill="url(#colorGradient)"
                dot={{ fill: currentMetric.color, strokeWidth: 2, r: 4, stroke: "hsl(var(--card))" }}
                activeDot={{ r: 6, stroke: currentMetric.color, strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
