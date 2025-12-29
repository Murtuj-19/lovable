import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftRight, CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";

const transfers = [
  {
    id: "TRF-001",
    source: "Mayo Clinic",
    destination: "Johns Hopkins",
    type: "Patient Records",
    status: "completed",
    time: "2 min ago",
    size: "2.4 MB",
  },
  {
    id: "TRF-002",
    source: "Cleveland Clinic",
    destination: "Mass General",
    type: "Lab Results",
    status: "in_progress",
    time: "5 min ago",
    size: "856 KB",
  },
  {
    id: "TRF-003",
    source: "Stanford Health",
    destination: "UCLA Medical",
    type: "Imaging Data",
    status: "completed",
    time: "12 min ago",
    size: "45.2 MB",
  },
  {
    id: "TRF-004",
    source: "Mount Sinai",
    destination: "NYU Langone",
    type: "Prescriptions",
    status: "failed",
    time: "18 min ago",
    size: "124 KB",
  },
  {
    id: "TRF-005",
    source: "Cedars-Sinai",
    destination: "UCSF Health",
    type: "Patient Records",
    status: "completed",
    time: "25 min ago",
    size: "1.8 MB",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "bg-success/20 text-success border-success/30",
    label: "Completed",
  },
  in_progress: {
    icon: Clock,
    color: "bg-warning/20 text-warning border-warning/30",
    label: "In Progress",
  },
  failed: {
    icon: AlertCircle,
    color: "bg-destructive/20 text-destructive border-destructive/30",
    label: "Failed",
  },
};

export function RecentTransfers() {
  return (
    <Card className="glass border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <ArrowLeftRight className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Recent Transfers</CardTitle>
              <p className="text-sm text-muted-foreground">Latest data exchange activity</p>
            </div>
          </div>
          <Badge variant="outline" className="border-primary/30 text-primary">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transfers.map((transfer) => {
            const status = statusConfig[transfer.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;
            
            return (
              <div
                key={transfer.id}
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-secondary">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium truncate">{transfer.source}</span>
                    <ArrowLeftRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                    <span className="font-medium truncate">{transfer.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span>{transfer.type}</span>
                    <span>•</span>
                    <span>{transfer.size}</span>
                    <span>•</span>
                    <span>{transfer.time}</span>
                  </div>
                </div>

                <Badge variant="outline" className={status.color}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {status.label}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
