import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Pill, Calendar, MessageSquare, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "record",
    title: "Blood Test Results Available",
    description: "Your lab results from Dec 15 are ready to view",
    time: "2 hours ago",
    icon: FileText,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    id: 2,
    type: "medication",
    title: "Medication Reminder",
    description: "Time to take your evening vitamins",
    time: "4 hours ago",
    icon: Pill,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 3,
    type: "appointment",
    title: "Appointment Confirmed",
    description: "Dr. Emily Chen confirmed your Dec 20 appointment",
    time: "Yesterday",
    icon: Calendar,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 4,
    type: "message",
    title: "New Message from Dr. Ross",
    description: "Follow-up on your recent consultation",
    time: "2 days ago",
    icon: MessageSquare,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 5,
    type: "metric",
    title: "Health Goal Achieved",
    description: "Congratulations! You hit your daily step goal",
    time: "3 days ago",
    icon: Activity,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className={cn("p-2 rounded-xl mt-0.5", activity.bgColor)}>
                <activity.icon className={cn("w-4 h-4", activity.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{activity.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5 truncate">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
