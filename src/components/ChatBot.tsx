import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  text: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

async function getAiResponse(myText: string = 'hello'): Promise<string | null> {
  try {
    const resp = await fetch('/api/bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: myText }),
    });
    const data = await resp.json();
    return data.AnnuarAi || null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

function formatResponse(response: string): string {
  let formatted = response.replace(/\n/g, '<br>');
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, (_, p1) => `<b>${p1.toUpperCase()}</b>`);
  return formatted;
}

function formatTimeAgo(timestamp: Date): string {
  const now = new Date();
  const elapsedSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);

  if (elapsedSeconds < 60) return `${elapsedSeconds} sec ago`;
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  if (elapsedMinutes < 60) return `${elapsedMinutes} min ago`;
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) return `${elapsedHours} hr ago`;
  const elapsedDays = Math.floor(elapsedHours / 24);
  return `${elapsedDays} day${elapsedDays > 1 ? 's' : ''} ago`;
}

const ChatDialog: React.FC<ChatDialogProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const messageInput = (form.elements.namedItem('message') as HTMLInputElement).value.trim();
    if (messageInput === '') return;

    const timestamp = new Date();

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, type: 'user', timestamp },
    ]);
    (form.elements.namedItem('message') as HTMLInputElement).value = "";

    setIsLoading(true);

    const aiResponse = await getAiResponse(messageInput);

    setIsLoading(false);

    if (aiResponse) {
      const formattedResponse = formatResponse(aiResponse);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: formattedResponse, type: 'ai', timestamp: new Date() },
      ]);
    }

    (form.elements.namedItem('message') as HTMLInputElement).value = '';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" md:p-4 py-4 px-3 h-full md:max-h-[78vh]  z-[9999] flex flex-col">
        <DialogHeader>
          <DialogTitle>Chat with Annuar Ai</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="flex flex-col flex-1 gap-3">
          <Card className=" no-scrollbar flex-1 overflow-y-auto  p-3 md:max-h-[50vh] max-h-[73vh]">
            {messages.length === 0 && (
              <span className="bg-gray-400/20 rounded-full p-3 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 w-max">
                Enter prompt to talk to Annuar Ai
              </span>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'} mb-4`}
              >
                <div className={`max-w-[90%] flex flex-col ${message.type === 'ai' ? 'items-start' : 'items-end'}`}>
                  <div
                    className={`px-4 py-3 rounded-lg ${message.type === 'ai'
                      ? 'text-black dark:text-white bg-muted shadow-md'
                      : 'bg-zinc-800  text-white shadow-md'
                      }`}
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formatTimeAgo(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </Card>
          <form
            onSubmit={handleSubmit}
            className="pt-2 mt-auto relative overflow-hidden rounded-lg border focus-within:ring-1 focus-within:ring-ring"
          >
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <div className="flex items-center pt-0 px-2 py-2">
              <input
                required
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="bg-transparent ring-offset-0 focus-visible:border-0 focus-visible:outline-0 resize-none border-0 shadow-none focus-visible:ring-0 flex-grow"
              />
              <Button
                type="submit"
                size="sm"
                className="ml-2 gap-1.5 min-w-10 h-10"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="text-2xl animate-spin" /> : <Send />}
              </Button>
            </div>
          </form>
          <small className='text-xs text-gray-400 text-center'>Messages are generated by AI and may be inaccurate or inappropriate</small>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;


