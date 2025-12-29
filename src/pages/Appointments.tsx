import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import {
  CalendarPlus,
  Video,
  MapPin,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    specialty: "Cardiologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    rating: 4.9,
    reviews: 127,
    available: true,
    nextSlot: "Today, 3:00 PM",
  },
  {
    id: 2,
    name: "Dr. Michael Ross",
    specialty: "General Physician",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    rating: 4.8,
    reviews: 203,
    available: true,
    nextSlot: "Tomorrow, 10:00 AM",
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    specialty: "Dermatologist",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
    rating: 4.7,
    reviews: 89,
    available: false,
    nextSlot: "Dec 22, 2:00 PM",
  },
];

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Emily Chen",
    specialty: "Cardiologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    date: "Dec 20, 2024",
    time: "10:00 AM",
    type: "video",
  },
  {
    id: 2,
    doctor: "Dr. Michael Ross",
    specialty: "General Physician",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    date: "Dec 22, 2024",
    time: "2:30 PM",
    type: "in-person",
  },
];

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              Appointments
            </h1>
            <p className="text-muted-foreground mt-1">
              Schedule and manage your visits
            </p>
          </div>
          <Button variant="gradient">
            <CalendarPlus className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-xl border"
              />
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-foreground">Available Slots</p>
                <div className="grid grid-cols-3 gap-2">
                  {["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "4:00 PM", "5:00 PM"].map(
                    (time) => (
                      <Button
                        key={time}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {time}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((apt, index) => (
                <div
                  key={apt.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Avatar className="w-14 h-14 border-2 border-card">
                    <AvatarImage src={apt.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {apt.doctor.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{apt.doctor}</p>
                    <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {apt.date}, {apt.time}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      className={cn(
                        apt.type === "video"
                          ? "bg-info/10 text-info"
                          : "bg-success/10 text-success"
                      )}
                    >
                      {apt.type === "video" ? (
                        <Video className="w-3 h-3 mr-1" />
                      ) : (
                        <MapPin className="w-3 h-3 mr-1" />
                      )}
                      {apt.type === "video" ? "Video Call" : "In-Person"}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="soft" size="sm">
                        {apt.type === "video" ? "Join" : "Directions"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommended Doctors */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recommended Doctors</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                See All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctors.map((doctor, index) => (
                <div
                  key={doctor.id}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Avatar className="w-14 h-14 border-2 border-primary/20">
                    <AvatarImage src={doctor.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {doctor.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">{doctor.name}</p>
                      {doctor.available && (
                        <Badge className="bg-success/10 text-success text-xs">
                          Available
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="font-medium text-foreground">{doctor.rating}</span>
                        <span className="text-muted-foreground">({doctor.reviews})</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Next: {doctor.nextSlot}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="soft" size="sm">
                      Book Now
                    </Button>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
