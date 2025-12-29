import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Network,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  MoreVertical,
  Globe,
  Building2,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const connections = [
  {
    id: 1,
    name: "Mayo Clinic",
    location: "Rochester, MN, USA",
    region: "North America",
    status: "active",
    lastSync: "2 min ago",
    transfersToday: 245,
    type: "HL7 FHIR",
  },
  {
    id: 2,
    name: "Johns Hopkins Hospital",
    location: "Baltimore, MD, USA",
    region: "North America",
    status: "active",
    lastSync: "5 min ago",
    transfersToday: 189,
    type: "HL7 FHIR",
  },
  {
    id: 3,
    name: "Cleveland Clinic",
    location: "Cleveland, OH, USA",
    region: "North America",
    status: "active",
    lastSync: "1 min ago",
    transfersToday: 312,
    type: "HL7 v2",
  },
  {
    id: 4,
    name: "NHS England",
    location: "London, UK",
    region: "Europe",
    status: "active",
    lastSync: "8 min ago",
    transfersToday: 156,
    type: "HL7 FHIR",
  },
  {
    id: 5,
    name: "Charité Berlin",
    location: "Berlin, Germany",
    region: "Europe",
    status: "pending",
    lastSync: "1 hour ago",
    transfersToday: 0,
    type: "HL7 FHIR",
  },
  {
    id: 6,
    name: "Singapore General Hospital",
    location: "Singapore",
    region: "Asia Pacific",
    status: "active",
    lastSync: "3 min ago",
    transfersToday: 98,
    type: "HL7 FHIR",
  },
  {
    id: 7,
    name: "Apollo Hospitals",
    location: "Chennai, India",
    region: "Asia Pacific",
    status: "inactive",
    lastSync: "2 days ago",
    transfersToday: 0,
    type: "HL7 v2",
  },
  {
    id: 8,
    name: "King Faisal Specialist Hospital",
    location: "Riyadh, Saudi Arabia",
    region: "Middle East",
    status: "active",
    lastSync: "12 min ago",
    transfersToday: 67,
    type: "HL7 FHIR",
  },
];

const statusConfig = {
  active: { icon: CheckCircle2, color: "bg-success/20 text-success border-success/30" },
  pending: { icon: Clock, color: "bg-warning/20 text-warning border-warning/30" },
  inactive: { icon: XCircle, color: "bg-destructive/20 text-destructive border-destructive/30" },
};

export default function Connections() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredConnections = connections.filter((conn) =>
    conn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conn.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Connections</h1>
            <p className="text-muted-foreground">
              Manage your hospital system connections worldwide
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Connection
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Connection</DialogTitle>
                <DialogDescription>
                  Configure a new hospital system connection to the exchange network.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Hospital Name</Label>
                  <Input id="name" placeholder="Enter hospital name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="protocol">Protocol</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select protocol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fhir">HL7 FHIR R4</SelectItem>
                      <SelectItem value="v2">HL7 v2.x</SelectItem>
                      <SelectItem value="cda">CDA/CCD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endpoint">API Endpoint</Label>
                  <Input id="endpoint" placeholder="https://" />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>
                  Add Connection
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search connections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <ArrowUpDown className="w-4 h-4" />
              Sort
            </Button>
          </div>
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
                  {connections.filter((c) => c.status === "active").length}
                </p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/10">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {connections.filter((c) => c.status === "pending").length}
                </p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {new Set(connections.map((c) => c.region)).size}
                </p>
                <p className="text-sm text-muted-foreground">Regions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredConnections.map((connection) => {
            const status = statusConfig[connection.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;

            return (
              <Card
                key={connection.id}
                className="glass border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{connection.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{connection.location}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Test Connection</DropdownMenuItem>
                        <DropdownMenuItem>Edit Settings</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={status.color}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {connection.status.charAt(0).toUpperCase() + connection.status.slice(1)}
                    </Badge>
                    <Badge variant="secondary">{connection.type}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Last Sync</p>
                      <p className="font-medium">{connection.lastSync}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Transfers Today</p>
                      <p className="font-medium">{connection.transfersToday}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
