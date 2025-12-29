import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarPlus,
  FileText,
  Pill,
  MessageSquarePlus,
  Stethoscope,
  FlaskConical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const actions = [
  {
    name: "Book Appointment",
    icon: CalendarPlus,
    href: "/appointments",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "hover:bg-primary/20",
  },
  {
    name: "View Records",
    icon: FileText,
    href: "/records",
    color: "text-info",
    bgColor: "bg-info/10",
    hoverBg: "hover:bg-info/20",
  },
  {
    name: "Medications",
    icon: Pill,
    href: "/records",
    color: "text-success",
    bgColor: "bg-success/10",
    hoverBg: "hover:bg-success/20",
  },
  {
    name: "Send Message",
    icon: MessageSquarePlus,
    href: "/messages",
    color: "text-accent",
    bgColor: "bg-accent/10",
    hoverBg: "hover:bg-accent/20",
  },
  {
    name: "Find Doctor",
    icon: Stethoscope,
    href: "/appointments",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    hoverBg: "hover:bg-violet-500/20",
  },
  {
    name: "Lab Results",
    icon: FlaskConical,
    href: "/records",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    hoverBg: "hover:bg-rose-500/20",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Link
              key={action.name}
              to={action.href}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 animate-scale-in",
                action.bgColor,
                action.hoverBg,
                "hover:scale-105 active:scale-95"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <action.icon className={cn("w-6 h-6", action.color)} />
              <span className="text-xs font-medium text-foreground text-center leading-tight">
                {action.name}
              </span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
