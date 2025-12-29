import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeftRight,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  Eye,
  RefreshCw,
  FileText,
  User,
  Activity,
  Calendar,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transfers = [
  {
    id: "TRF-20240115-001",
    source: "Mayo Clinic",
    destination: "Johns Hopkins",
    dataType: "Patient Records",
    patientId: "PT-****-8472",
    status: "completed",
    timestamp: "2024-01-15 14:32:05",
    size: "2.4 MB",
    duration: "1.2s",
  },
  {
    id: "TRF-20240115-002",
    source: "Cleveland Clinic",
    destination: "Mass General",
    dataType: "Lab Results",
    patientId: "PT-****-3918",
    status: "in_progress",
    timestamp: "2024-01-15 14:35:12",
    size: "856 KB",
    duration: "-",
  },
  {
    id: "TRF-20240115-003",
    source: "Stanford Health",
    destination: "UCLA Medical",
    dataType: "Imaging Data",
    patientId: "PT-****-7245",
    status: "completed",
    timestamp: "2024-01-15 14:28:33",
    size: "45.2 MB",
    duration: "8.4s",
  },
  {
    id: "TRF-20240115-004",
    source: "Mount Sinai",
    destination: "NYU Langone",
    dataType: "Prescriptions",
    patientId: "PT-****-1563",
    status: "failed",
    timestamp: "2024-01-15 14:22:18",
    size: "124 KB",
    duration: "-",
    error: "Connection timeout",
  },
  {
    id: "TRF-20240115-005",
    source: "NHS England",
    destination: "Charité Berlin",
    dataType: "Patient Records",
    patientId: "PT-****-9384",
    status: "completed",
    timestamp: "2024-01-15 14:18:45",
    size: "1.8 MB",
    duration: "2.1s",
  },
  {
    id: "TRF-20240115-006",
    source: "Singapore General",
    destination: "Apollo Hospitals",
    dataType: "Discharge Summary",
    patientId: "PT-****-4827",
    status: "queued",
    timestamp: "2024-01-15 14:36:00",
    size: "512 KB",
    duration: "-",
  },
];

const statusConfig = {
  completed: { icon: CheckCircle2, color: "bg-success/20 text-success border-success/30", label: "Completed" },
  in_progress: { icon: RefreshCw, color: "bg-primary/20 text-primary border-primary/30", label: "In Progress" },
  failed: { icon: XCircle, color: "bg-destructive/20 text-destructive border-destructive/30", label: "Failed" },
  queued: { icon: Clock, color: "bg-warning/20 text-warning border-warning/30", label: "Queued" },
};

const dataTypes = [
  { type: "Patient Records", icon: User, count: 4521 },
  { type: "Lab Results", icon: Activity, count: 3287 },
  { type: "Imaging Data", icon: FileText, count: 1856 },
  { type: "Prescriptions", icon: FileText, count: 2943 },
];

export default function Exchange() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransfers = transfers.filter((transfer) =>
    transfer.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transfer.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transfer.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Data Exchange</h1>
            <p className="text-muted-foreground">
              Monitor and manage health data transfers between systems
            </p>
          </div>
          <Button className="gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            New Transfer
          </Button>
        </div>

        {/* Data type stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataTypes.map((item) => (
            <Card key={item.type} className="glass border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold">{item.count.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{item.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transfers table */}
        <Card className="glass border-border/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ArrowLeftRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Transfer Log</CardTitle>
                  <p className="text-sm text-muted-foreground">Real-time data exchange monitoring</p>
                </div>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search transfers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="in_progress">In Progress</TabsTrigger>
                <TabsTrigger value="failed">Failed</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transfer ID</TableHead>
                        <TableHead>Source → Destination</TableHead>
                        <TableHead>Data Type</TableHead>
                        <TableHead>Patient ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransfers.map((transfer) => {
                        const status = statusConfig[transfer.status as keyof typeof statusConfig];
                        const StatusIcon = status.icon;

                        return (
                          <TableRow key={transfer.id}>
                            <TableCell className="font-mono text-sm">{transfer.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{transfer.source}</span>
                                <ArrowLeftRight className="w-3 h-3 text-muted-foreground" />
                                <span className="font-medium">{transfer.destination}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{transfer.timestamp}</p>
                            </TableCell>
                            <TableCell>{transfer.dataType}</TableCell>
                            <TableCell className="font-mono text-sm">{transfer.patientId}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={status.color}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {status.label}
                              </Badge>
                            </TableCell>
                            <TableCell>{transfer.size}</TableCell>
                            <TableCell>{transfer.duration}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="w-4 h-4" />
                                </Button>
                                {transfer.status === "failed" && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <RefreshCw className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-0">
                <div className="text-center py-8 text-muted-foreground">
                  Filter applied: Showing completed transfers only
                </div>
              </TabsContent>

              <TabsContent value="in_progress" className="mt-0">
                <div className="text-center py-8 text-muted-foreground">
                  Filter applied: Showing in-progress transfers only
                </div>
              </TabsContent>

              <TabsContent value="failed" className="mt-0">
                <div className="text-center py-8 text-muted-foreground">
                  Filter applied: Showing failed transfers only
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
