import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Key, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const securityItems = [
  {
    name: "Encryption Status",
    status: "active",
    icon: Lock,
    description: "AES-256 end-to-end encryption",
  },
  {
    name: "Authentication",
    status: "active",
    icon: Key,
    description: "OAuth 2.0 + MFA enabled",
  },
  {
    name: "Compliance Check",
    status: "active",
    icon: FileCheck,
    description: "HIPAA, GDPR, HITECH compliant",
  },
  {
    name: "Threat Detection",
    status: "warning",
    icon: AlertTriangle,
    description: "2 low-risk alerts pending",
  },
];

export function SecurityStatus() {
  return (
    <Card className="glass border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Shield className="w-5 h-5 text-success" />
            </div>
            <div>
              <CardTitle className="text-lg">Security Status</CardTitle>
              <p className="text-sm text-muted-foreground">System protection overview</p>
            </div>
          </div>
          <Badge className="bg-success/20 text-success border-success/30">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Secure
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Security score */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Security Score</span>
            <span className="text-2xl font-bold text-success">98.5%</span>
          </div>
          <Progress value={98.5} className="h-2 bg-muted" />
          <p className="text-xs text-muted-foreground mt-2">
            Excellent security posture. 2 minor recommendations pending.
          </p>
        </div>

        {/* Security items */}
        <div className="space-y-3">
          {securityItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div
                className={`p-2 rounded-lg ${
                  item.status === "active" ? "bg-success/10" : "bg-warning/10"
                }`}
              >
                <item.icon
                  className={`w-4 h-4 ${
                    item.status === "active" ? "text-success" : "text-warning"
                  }`}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${
                  item.status === "active" ? "bg-success" : "bg-warning"
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
