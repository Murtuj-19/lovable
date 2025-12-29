import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Download,
  Calendar,
  Globe,
  Clock,
  Zap,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const transferData = [
  { month: "Jan", transfers: 8420, volume: 1240 },
  { month: "Feb", transfers: 9150, volume: 1380 },
  { month: "Mar", transfers: 10280, volume: 1520 },
  { month: "Apr", transfers: 9870, volume: 1460 },
  { month: "May", transfers: 11420, volume: 1690 },
  { month: "Jun", transfers: 12847, volume: 1920 },
];

const regionData = [
  { name: "North America", value: 45, color: "hsl(199, 89%, 48%)" },
  { name: "Europe", value: 28, color: "hsl(142, 71%, 45%)" },
  { name: "Asia Pacific", value: 18, color: "hsl(263, 70%, 58%)" },
  { name: "Middle East", value: 6, color: "hsl(38, 92%, 50%)" },
  { name: "Others", value: 3, color: "hsl(215, 20%, 55%)" },
];

const latencyData = [
  { hour: "00:00", latency: 42 },
  { hour: "04:00", latency: 38 },
  { hour: "08:00", latency: 52 },
  { hour: "12:00", latency: 65 },
  { hour: "16:00", latency: 58 },
  { hour: "20:00", latency: 48 },
];

const topConnections = [
  { name: "Mayo Clinic", transfers: 2847, change: 12.5 },
  { name: "Johns Hopkins", transfers: 2156, change: 8.3 },
  { name: "Cleveland Clinic", transfers: 1892, change: -2.1 },
  { name: "NHS England", transfers: 1654, change: 15.7 },
  { name: "Stanford Health", transfers: 1423, change: 5.2 },
];

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">
              Insights and performance metrics for your exchange network
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Last 30 Days
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Total Transfers", value: "12,847", change: "+18.2%", trend: "up", icon: BarChart3 },
            { name: "Data Volume", value: "1.92 TB", change: "+24.1%", trend: "up", icon: TrendingUp },
            { name: "Avg. Latency", value: "45ms", change: "-12ms", trend: "up", icon: Clock },
            { name: "Success Rate", value: "99.7%", change: "+0.3%", trend: "up", icon: Zap },
          ].map((metric) => (
            <Card key={metric.name} className="glass border-border/50">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <metric.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      metric.trend === "up"
                        ? "bg-success/20 text-success border-success/30"
                        : "bg-destructive/20 text-destructive border-destructive/30"
                    }
                  >
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {metric.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transfer trends */}
          <Card className="glass border-border/50 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Transfer Trends</CardTitle>
                  <p className="text-sm text-muted-foreground">Monthly transfer volume</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={transferData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="transferGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 10%)",
                        border: "1px solid hsl(217, 33%, 17%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="transfers"
                      stroke="hsl(199, 89%, 48%)"
                      strokeWidth={2}
                      fill="url(#transferGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Regional distribution */}
          <Card className="glass border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Regional Distribution</CardTitle>
                  <p className="text-sm text-muted-foreground">Traffic by region</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 10%)",
                        border: "1px solid hsl(217, 33%, 17%)",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {regionData.map((region) => (
                  <div key={region.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }} />
                      <span>{region.name}</span>
                    </div>
                    <span className="font-medium">{region.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Latency chart */}
          <Card className="glass border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Latency Performance</CardTitle>
                  <p className="text-sm text-muted-foreground">Average response time (ms)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={latencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
                    <XAxis
                      dataKey="hour"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 10%)",
                        border: "1px solid hsl(217, 33%, 17%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="latency" fill="hsl(263, 70%, 58%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top connections */}
          <Card className="glass border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Top Connections</CardTitle>
                  <p className="text-sm text-muted-foreground">By transfer volume</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topConnections.map((conn, index) => (
                  <div key={conn.name} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground w-6">
                      #{index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{conn.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{conn.transfers.toLocaleString()}</span>
                          <Badge
                            variant="outline"
                            className={
                              conn.change > 0
                                ? "bg-success/20 text-success border-success/30 text-xs"
                                : "bg-destructive/20 text-destructive border-destructive/30 text-xs"
                            }
                          >
                            {conn.change > 0 ? "+" : ""}
                            {conn.change}%
                          </Badge>
                        </div>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          style={{ width: `${(conn.transfers / 2847) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
