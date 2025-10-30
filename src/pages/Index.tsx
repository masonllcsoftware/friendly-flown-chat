import { useState } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import ChatHeader from "@/components/ChatHeader";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  username: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! Welcome to the chat app 👋",
      timestamp: "10:30 AM",
      isOwn: false,
      username: "Alex"
    },
    {
      id: "2",
      text: "Thanks! This looks great!",
      timestamp: "10:31 AM",
      isOwn: true,
      username: "You"
    },
    {
      id: "3",
      text: "Feel free to send a message and see how it works!",
      timestamp: "10:31 AM",
      isOwn: false,
      username: "Alex"
    }
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      isOwn: true,
      username: "You"
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: "Message received! This is a demo response.",
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isOwn: false,
        username: "Alex"
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-subtle">
      <ChatHeader />
      
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              timestamp={message.timestamp}
              isOwn={message.isOwn}
              username={message.username}
            />
          ))}
        </div>
      </ScrollArea>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Index;
