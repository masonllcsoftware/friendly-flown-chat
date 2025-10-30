import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  timestamp: string;
  isOwn?: boolean;
  avatarUrl?: string;
  username?: string;
}

const ChatMessage = ({ message, timestamp, isOwn = false, avatarUrl, username }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 mb-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
      isOwn && "flex-row-reverse"
    )}>
      <Avatar className="h-10 w-10 flex-shrink-0">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback className={cn(
          "text-sm font-medium",
          isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        )}>
          {username?.charAt(0).toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>
      
      <div className={cn(
        "flex flex-col max-w-[70%]",
        isOwn && "items-end"
      )}>
        <div className={cn(
          "rounded-2xl px-4 py-2.5 shadow-message transition-smooth hover:shadow-lg",
          isOwn 
            ? "bg-message-sent text-message-sent-foreground rounded-br-md" 
            : "bg-message-received text-message-received-foreground rounded-bl-md"
        )}>
          <p className="text-sm leading-relaxed break-words">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1 px-1">
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
