import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Video, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Emily Chen",
    specialty: "Cardiologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    date: "Dec 20, 2024",
    time: "10:00 AM",
    type: "video",
    status: "upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Michael Ross",
    specialty: "General Physician",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    date: "Dec 22, 2024",
    time: "2:30 PM",
    type: "in-person",
    status: "upcoming",
  },
  {
    id: 3,
    doctor: "Dr. Sarah Williams",
    specialty: "Dermatologist",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
    date: "Dec 28, 2024",
    time: "11:00 AM",
    type: "video",
    status: "scheduled",
  },
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors animate-slide-up",
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Avatar className="w-12 h-12 border-2 border-card">
              <AvatarImage src={appointment.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {appointment.doctor.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{appointment.doctor}</p>
              <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {appointment.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {appointment.time}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <Badge
                variant="secondary"
                className={cn(
                  "gap-1",
                  appointment.type === "video" && "bg-info/10 text-info",
                  appointment.type === "in-person" && "bg-success/10 text-success"
                )}
              >
                {appointment.type === "video" ? (
                  <Video className="w-3 h-3" />
                ) : (
                  <MapPin className="w-3 h-3" />
                )}
                {appointment.type === "video" ? "Video Call" : "In-Person"}
              </Badge>
              <Button variant="soft" size="sm">
                {appointment.type === "video" ? "Join" : "Directions"}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
