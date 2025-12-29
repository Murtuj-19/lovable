import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Lock,
  Key,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Clock,
  UserCheck,
  Globe,
  Server,
  Activity,
} from "lucide-react";

const auditLogs = [
  {
    id: 1,
    action: "Data Transfer Initiated",
    user: "system@healthgate.io",
    source: "Mayo Clinic",
    timestamp: "2024-01-15 14:32:05",
    status: "success",
    details: "Patient records transfer to Johns Hopkins",
  },
  {
    id: 2,
    action: "Connection Test",
    user: "admin@healthgate.io",
    source: "Dashboard",
    timestamp: "2024-01-15 14:28:12",
    status: "success",
    details: "NHS England connection verified",
  },
  {
    id: 3,
    action: "API Key Rotation",
    user: "security@healthgate.io",
    source: "Security Panel",
    timestamp: "2024-01-15 14:15:33",
    status: "success",
    details: "Rotated API key for Cleveland Clinic",
  },
  {
    id: 4,
    action: "Failed Login Attempt",
    user: "unknown",
    source: "Login Portal",
    timestamp: "2024-01-15 13:45:18",
    status: "warning",
    details: "Invalid credentials - IP: 192.168.x.x",
  },
  {
    id: 5,
    action: "Permission Change",
    user: "admin@healthgate.io",
    source: "User Management",
    timestamp: "2024-01-15 13:22:41",
    status: "info",
    details: "Updated read access for Stanford Health",
  },
];

const complianceItems = [
  { name: "HIPAA", status: "compliant", score: 100 },
  { name: "GDPR", status: "compliant", score: 98 },
  { name: "HITECH", status: "compliant", score: 100 },
  { name: "SOC 2", status: "compliant", score: 95 },
  { name: "ISO 27001", status: "in_progress", score: 85 },
];

const securityMetrics = [
  { name: "Encryption Coverage", value: "100%", icon: Lock, status: "success" },
  { name: "MFA Adoption", value: "98%", icon: UserCheck, status: "success" },
  { name: "API Security Score", value: "A+", icon: Server, status: "success" },
  { name: "Active Threats", value: "0", icon: AlertTriangle, status: "success" },
];

export default function Security() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Security Center</h1>
            <p className="text-muted-foreground">
              Monitor security posture and compliance status
            </p>
          </div>
          <Button className="gap-2">
            <Shield className="w-4 h-4" />
            Run Security Scan
          </Button>
        </div>

        {/* Security score banner */}
        <Card className="glass border-success/30 bg-gradient-to-r from-success/5 to-primary/5">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overall Security Score</p>
                  <p className="text-4xl font-bold text-success">98.5%</p>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Security Posture</span>
                  <Badge className="bg-success/20 text-success border-success/30">Excellent</Badge>
                </div>
                <Progress value={98.5} className="h-3 bg-muted" />
                <p className="text-xs text-muted-foreground mt-2">
                  2 minor recommendations to achieve 100% score
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {securityMetrics.map((metric) => (
            <Card key={metric.name} className="glass border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <metric.icon className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Compliance status */}
          <Card className="glass border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Compliance Status</CardTitle>
                  <p className="text-sm text-muted-foreground">Regulatory compliance overview</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {complianceItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.score}%</span>
                      <Badge
                        variant="outline"
                        className={
                          item.status === "compliant"
                            ? "bg-success/20 text-success border-success/30"
                            : "bg-warning/20 text-warning border-warning/30"
                        }
                      >
                        {item.status === "compliant" ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {item.status === "compliant" ? "Compliant" : "In Progress"}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security features */}
          <Card className="glass border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Security Features</CardTitle>
                  <p className="text-sm text-muted-foreground">Active protection measures</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "End-to-End Encryption", desc: "AES-256 encryption for all data", icon: Lock, active: true },
                { name: "Multi-Factor Authentication", desc: "Required for all admin access", icon: Key, active: true },
                { name: "Intrusion Detection", desc: "24/7 automated threat monitoring", icon: Eye, active: true },
                { name: "Access Logging", desc: "Complete audit trail", icon: Activity, active: true },
                { name: "Geo-Fencing", desc: "Location-based access control", icon: Globe, active: true },
                { name: "Auto Key Rotation", desc: "90-day automatic rotation", icon: Key, active: true },
              ].map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/30"
                >
                  <div className="p-2 rounded-lg bg-success/10">
                    <feature.icon className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{feature.name}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Audit log */}
        <Card className="glass border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Audit Log</CardTitle>
                  <p className="text-sm text-muted-foreground">Recent security events</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div
                  key={log.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      log.status === "success"
                        ? "bg-success/10"
                        : log.status === "warning"
                        ? "bg-warning/10"
                        : "bg-primary/10"
                    }`}
                  >
                    {log.status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    ) : log.status === "warning" ? (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    ) : (
                      <Activity className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{log.action}</p>
                      <Badge
                        variant="outline"
                        className={
                          log.status === "success"
                            ? "bg-success/20 text-success border-success/30"
                            : log.status === "warning"
                            ? "bg-warning/20 text-warning border-warning/30"
                            : "bg-primary/20 text-primary border-primary/30"
                        }
                      >
                        {log.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{log.details}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{log.user}</span>
                      <span>•</span>
                      <span>{log.source}</span>
                      <span>•</span>
                      <span>{log.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
