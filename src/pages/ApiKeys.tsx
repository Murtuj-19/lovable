import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  FileKey,
  Plus,
  Copy,
  Eye,
  EyeOff,
  Trash2,
  RefreshCw,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const apiKeys = [
  {
    id: 1,
    name: "Production API Key",
    key: "hg_prod_••••••••••••••••ak7x",
    fullKey: "hg_prod_sk_1234567890abcdefghijklmnopqrstak7x",
    type: "production",
    status: "active",
    createdAt: "2024-01-01",
    lastUsed: "2 min ago",
    expiresAt: "2025-01-01",
    permissions: ["read", "write", "transfer"],
  },
  {
    id: 2,
    name: "Development API Key",
    key: "hg_dev_••••••••••••••••b3m2",
    fullKey: "hg_dev_sk_abcdefghijklmnopqrstuvwxyz1234b3m2",
    type: "development",
    status: "active",
    createdAt: "2024-01-10",
    lastUsed: "1 hour ago",
    expiresAt: "2025-01-10",
    permissions: ["read", "write"],
  },
  {
    id: 3,
    name: "Webhook Signing Key",
    key: "hg_whsec_••••••••••••••••x9p4",
    fullKey: "hg_whsec_abcdefghijklmnopqrstuvwxyz12x9p4",
    type: "webhook",
    status: "active",
    createdAt: "2024-01-05",
    lastUsed: "5 min ago",
    expiresAt: "2025-01-05",
    permissions: ["webhook"],
  },
  {
    id: 4,
    name: "Legacy Integration Key",
    key: "hg_legacy_••••••••••••••••j7k1",
    fullKey: "hg_legacy_abcdefghijklmnopqrstuvwxyzj7k1",
    type: "legacy",
    status: "expiring",
    createdAt: "2023-06-15",
    lastUsed: "3 days ago",
    expiresAt: "2024-02-15",
    permissions: ["read"],
  },
];

const typeConfig = {
  production: { color: "bg-success/20 text-success border-success/30" },
  development: { color: "bg-primary/20 text-primary border-primary/30" },
  webhook: { color: "bg-accent/20 text-accent border-accent/30" },
  legacy: { color: "bg-warning/20 text-warning border-warning/30" },
};

const statusConfig = {
  active: { icon: CheckCircle2, color: "bg-success/20 text-success border-success/30" },
  expiring: { icon: AlertTriangle, color: "bg-warning/20 text-warning border-warning/30" },
  expired: { icon: Clock, color: "bg-destructive/20 text-destructive border-destructive/30" },
};

export default function ApiKeys() {
  const [visibleKeys, setVisibleKeys] = useState<Record<number, boolean>>({});
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const toggleKeyVisibility = (id: number) => {
    setVisibleKeys((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("API key copied to clipboard");
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">API Keys</h1>
            <p className="text-muted-foreground">
              Manage API keys for external system integration
            </p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create API Key
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New API Key</DialogTitle>
                <DialogDescription>
                  Generate a new API key for system integration. Keep it secure.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="keyName">Key Name</Label>
                  <Input id="keyName" placeholder="e.g., Production API Key" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keyType">Key Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="webhook">Webhook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select expiration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>
                  Create Key
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="glass border-border/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/10">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {apiKeys.filter((k) => k.status === "active").length}
                </p>
                <p className="text-sm text-muted-foreground">Active Keys</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/10">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {apiKeys.filter((k) => k.status === "expiring").length}
                </p>
                <p className="text-sm text-muted-foreground">Expiring Soon</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <FileKey className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{apiKeys.length}</p>
                <p className="text-sm text-muted-foreground">Total Keys</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Keys list */}
        <div className="space-y-4">
          {apiKeys.map((apiKey) => {
            const typeStyle = typeConfig[apiKey.type as keyof typeof typeConfig];
            const statusStyle = statusConfig[apiKey.status as keyof typeof statusConfig];
            const StatusIcon = statusStyle.icon;

            return (
              <Card key={apiKey.id} className="glass border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <FileKey className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{apiKey.name}</h3>
                          <Badge variant="outline" className={typeStyle.color}>
                            {apiKey.type}
                          </Badge>
                          <Badge variant="outline" className={statusStyle.color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {apiKey.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                            {visibleKeys[apiKey.id] ? apiKey.fullKey : apiKey.key}
                          </code>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => toggleKeyVisibility(apiKey.id)}
                          >
                            {visibleKeys[apiKey.id] ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => copyToClipboard(apiKey.fullKey)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Created: {apiKey.createdAt}</span>
                          <span>•</span>
                          <span>Expires: {apiKey.expiresAt}</span>
                          <span>•</span>
                          <span>Last used: {apiKey.lastUsed}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-wrap gap-1">
                        {apiKey.permissions.map((perm) => (
                          <Badge key={perm} variant="secondary" className="text-xs">
                            {perm}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="gap-1">
                        <RefreshCw className="w-3 h-3" />
                        Rotate
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security notice */}
        <Card className="glass border-warning/30 bg-warning/5">
          <CardContent className="p-4 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="font-medium text-warning">Security Best Practices</p>
              <p className="text-sm text-muted-foreground mt-1">
                Never share your API keys publicly or commit them to version control. 
                Rotate keys regularly and use environment variables for storage.
                Production keys should only be used in production environments.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
