import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin } from "lucide-react";

const regions = [
  { name: "North America", connections: 18, status: "active", color: "bg-success" },
  { name: "Europe", connections: 14, status: "active", color: "bg-primary" },
  { name: "Asia Pacific", connections: 9, status: "active", color: "bg-accent" },
  { name: "Middle East", connections: 4, status: "active", color: "bg-warning" },
  { name: "South America", connections: 2, status: "pending", color: "bg-muted" },
];

export function ConnectionsMap() {
  return (
    <Card className="glass border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Global Connections</CardTitle>
              <p className="text-sm text-muted-foreground">47 active connections worldwide</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Simplified world visualization */}
        <div className="relative h-48 rounded-xl overflow-hidden bg-muted/30 data-grid mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Connection lines */}
                <path
                  d="M 100 100 Q 200 50 300 80"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  className="animate-data-flow"
                />
                <path
                  d="M 80 120 Q 200 150 320 100"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  className="animate-data-flow"
                  style={{ animationDelay: "0.5s" }}
                />
              </svg>
              
              {/* Region nodes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-success animate-pulse" />
              <div className="absolute top-1/3 left-1/2 w-4 h-4 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.3s" }} />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.6s" }} />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-warning animate-pulse" style={{ animationDelay: "0.9s" }} />
            </div>
          </div>
        </div>

        {/* Region list */}
        <div className="space-y-3">
          {regions.map((region) => (
            <div
              key={region.name}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${region.color}`} />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{region.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{region.connections} connections</span>
                <Badge
                  variant={region.status === "active" ? "default" : "secondary"}
                  className={region.status === "active" ? "bg-success/20 text-success border-success/30" : ""}
                >
                  {region.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
