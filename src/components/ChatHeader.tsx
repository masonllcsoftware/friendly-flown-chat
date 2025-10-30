import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";

interface ChatHeaderProps {
  title?: string;
  subtitle?: string;
}

const ChatHeader = ({ title = "Chat App", subtitle = "Online" }: ChatHeaderProps) => {
  return (
    <header className="bg-card border-b border-border px-6 py-4 shadow-sm">
      <div className="flex items-center gap-3 max-w-4xl mx-auto">
        <div className="relative">
          <Avatar className="h-11 w-11">
            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
              <MessageCircle className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-card rounded-full"></span>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
