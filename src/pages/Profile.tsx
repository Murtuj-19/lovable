import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Bell,
  Lock,
  CreditCard,
  ChevronRight,
  Edit2,
  Heart,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const profileData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 Health Street, Medical City, MC 12345",
  dob: "March 15, 1985",
  patientId: "#12847",
  bloodType: "A+",
  allergies: ["Penicillin", "Peanuts"],
  emergencyContact: {
    name: "John Johnson",
    relation: "Spouse",
    phone: "+1 (555) 987-6543",
  },
};

const notifications = [
  { id: 1, label: "Appointment reminders", enabled: true },
  { id: 2, label: "Medication reminders", enabled: true },
  { id: 3, label: "Lab results ready", enabled: true },
  { id: 4, label: "New messages", enabled: false },
  { id: 5, label: "Health tips", enabled: true },
];

const menuItems = [
  { icon: Shield, label: "Insurance Information", href: "#" },
  { icon: CreditCard, label: "Payment Methods", href: "#" },
  { icon: Lock, label: "Privacy & Security", href: "#" },
  { icon: Bell, label: "Notification Settings", href: "#" },
];

export default function Profile() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            My Profile
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:row-span-2 animate-slide-up">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" />
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                      SJ
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full shadow-md"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <h2 className="text-xl font-bold text-foreground mt-4">{profileData.name}</h2>
                <p className="text-sm text-muted-foreground">Patient ID: {profileData.patientId}</p>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Badge className="bg-primary/10 text-primary">
                    <Heart className="w-3 h-3 mr-1" />
                    {profileData.bloodType}
                  </Badge>
                  <Badge variant="secondary">Active Patient</Badge>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{profileData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <Phone className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">{profileData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-info/10">
                    <MapPin className="w-4 h-4 text-info" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="text-sm font-medium text-foreground">{profileData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Calendar className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Date of Birth</p>
                    <p className="text-sm font-medium text-foreground">{profileData.dob}</p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Medical Info */}
          <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-warning" />
                Medical Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50">
                  <p className="text-sm text-muted-foreground mb-2">Known Allergies</p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.allergies.map((allergy) => (
                      <Badge key={allergy} variant="secondary" className="bg-destructive/10 text-destructive">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-secondary/50">
                  <p className="text-sm text-muted-foreground mb-2">Emergency Contact</p>
                  <p className="font-medium text-foreground">{profileData.emergencyContact.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {profileData.emergencyContact.relation} • {profileData.emergencyContact.phone}
                  </p>
                </div>
              </div>
              
              <Button variant="soft" className="w-full">
                Update Medical Information
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between py-2 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Label htmlFor={`notification-${notification.id}`} className="cursor-pointer">
                    {notification.label}
                  </Label>
                  <Switch
                    id={`notification-${notification.id}`}
                    defaultChecked={notification.enabled}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="animate-slide-up" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {menuItems.map((item, index) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between w-full p-4 hover:bg-secondary/50 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
