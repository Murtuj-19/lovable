import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Check,
  CheckCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    specialty: "Cardiologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    lastMessage: "Your test results look great! Keep up the good work.",
    time: "2 min ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Dr. Michael Ross",
    specialty: "General Physician",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    lastMessage: "Remember to take your medication before the appointment.",
    time: "1 hour ago",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    specialty: "Dermatologist",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
    lastMessage: "The cream should help reduce the inflammation.",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "Nurse Station",
    specialty: "General Inquiries",
    avatar: "",
    lastMessage: "Your appointment has been confirmed for Dec 20.",
    time: "2 days ago",
    unread: 1,
    online: true,
  },
];

const messages = [
  {
    id: 1,
    sender: "doctor",
    text: "Hello Sarah! I've reviewed your recent blood test results.",
    time: "10:30 AM",
    read: true,
  },
  {
    id: 2,
    sender: "doctor",
    text: "Your cholesterol levels have improved significantly since your last visit. Great job maintaining your diet!",
    time: "10:31 AM",
    read: true,
  },
  {
    id: 3,
    sender: "patient",
    text: "Thank you, Dr. Chen! I've been following the meal plan you recommended.",
    time: "10:35 AM",
    read: true,
  },
  {
    id: 4,
    sender: "patient",
    text: "Should I continue with the same diet or make any changes?",
    time: "10:36 AM",
    read: true,
  },
  {
    id: 5,
    sender: "doctor",
    text: "Yes, please continue with the current plan. It's clearly working well for you. I'd also recommend adding 30 minutes of light cardio exercise 3 times a week.",
    time: "10:40 AM",
    read: true,
  },
  {
    id: 6,
    sender: "doctor",
    text: "Your test results look great! Keep up the good work. Let me know if you have any questions before our next appointment.",
    time: "10:42 AM",
    read: false,
  },
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState("");

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Messages
          </h1>
          <p className="text-muted-foreground mt-1">
            Communicate securely with your healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)] lg:h-[600px]">
          {/* Conversations List */}
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-border py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-9"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-y-auto h-[calc(100%-80px)]">
              {conversations.map((conv, index) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={cn(
                    "flex items-center gap-3 p-4 cursor-pointer transition-colors animate-slide-up",
                    selectedConversation.id === conv.id
                      ? "bg-primary/10"
                      : "hover:bg-secondary/50"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative">
                    <Avatar className="w-12 h-12 border-2 border-card">
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {conv.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-card" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground truncate">{conv.name}</p>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  
                  {conv.unread > 0 && (
                    <Badge className="bg-primary text-primary-foreground">
                      {conv.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <CardHeader className="border-b border-border py-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedConversation.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {selectedConversation.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    {selectedConversation.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full border-2 border-card" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{selectedConversation.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.online ? "Online" : "Offline"} • {selectedConversation.specialty}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex animate-slide-up",
                    msg.sender === "patient" ? "justify-end" : "justify-start"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-3",
                      msg.sender === "patient"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <div
                      className={cn(
                        "flex items-center justify-end gap-1 mt-1",
                        msg.sender === "patient"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      <span className="text-[10px]">{msg.time}</span>
                      {msg.sender === "patient" && (
                        msg.read ? (
                          <CheckCheck className="w-3.5 h-3.5" />
                        ) : (
                          <Check className="w-3.5 h-3.5" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Input Area */}
            <div className="border-t border-border p-4 flex-shrink-0">
              <div className="flex items-end gap-3">
                <Button variant="ghost" size="icon">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[44px] max-h-32 resize-none"
                  rows={1}
                />
                <Button variant="gradient" size="icon" className="rounded-xl">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Messages are encrypted and HIPAA compliant
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
