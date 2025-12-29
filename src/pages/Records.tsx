import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  FlaskConical,
  Pill,
  Stethoscope,
  Search,
  Download,
  Calendar,
  ChevronRight,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "All Records", icon: FileText, count: 24, active: true },
  { name: "Lab Results", icon: FlaskConical, count: 8 },
  { name: "Prescriptions", icon: Pill, count: 12 },
  { name: "Visit Summaries", icon: Stethoscope, count: 4 },
];

const records = [
  {
    id: 1,
    title: "Complete Blood Count (CBC)",
    type: "Lab Result",
    date: "Dec 15, 2024",
    doctor: "Dr. Emily Chen",
    status: "normal",
    icon: FlaskConical,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    id: 2,
    title: "Lisinopril 10mg",
    type: "Prescription",
    date: "Dec 10, 2024",
    doctor: "Dr. Michael Ross",
    status: "active",
    icon: Pill,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 3,
    title: "Annual Physical Examination",
    type: "Visit Summary",
    date: "Dec 5, 2024",
    doctor: "Dr. Michael Ross",
    status: "completed",
    icon: Stethoscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 4,
    title: "Lipid Panel",
    type: "Lab Result",
    date: "Nov 28, 2024",
    doctor: "Dr. Emily Chen",
    status: "attention",
    icon: FlaskConical,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 5,
    title: "Metformin 500mg",
    type: "Prescription",
    date: "Nov 20, 2024",
    doctor: "Dr. Sarah Williams",
    status: "expired",
    icon: Pill,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
  {
    id: 6,
    title: "Cardiology Consultation",
    type: "Visit Summary",
    date: "Nov 15, 2024",
    doctor: "Dr. Emily Chen",
    status: "completed",
    icon: Stethoscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const statusColors = {
  normal: "bg-success/10 text-success",
  active: "bg-primary/10 text-primary",
  completed: "bg-secondary text-secondary-foreground",
  attention: "bg-warning/10 text-warning",
  expired: "bg-muted text-muted-foreground",
};

export default function Records() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              Health Records
            </h1>
            <p className="text-muted-foreground mt-1">
              Access and manage your medical documents
            </p>
          </div>
          <Button variant="gradient">
            <Download className="w-4 h-4 mr-2" />
            Download All
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search records..."
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "secondary"}
              className={cn(
                "shrink-0 gap-2",
                category.active && "shadow-sm"
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              <Badge
                variant="secondary"
                className={cn(
                  "ml-1",
                  category.active && "bg-primary-foreground/20 text-primary-foreground"
                )}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Records List */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {records.map((record, index) => (
                <div
                  key={record.id}
                  className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={cn("p-3 rounded-xl", record.bgColor)}>
                    <record.icon className={cn("w-5 h-5", record.color)} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-foreground">{record.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {record.type} • {record.doctor}
                        </p>
                      </div>
                      <Badge className={statusColors[record.status as keyof typeof statusColors]}>
                        {record.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {record.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
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
