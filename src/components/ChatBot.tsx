
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
    return data.girrafeAi || null;
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

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, type: 'user' },
    ]);
    (form.elements.namedItem('message') as HTMLInputElement).value = "";

    setIsLoading(true);

    const aiResponse = await getAiResponse(messageInput);

    setIsLoading(false);

    if (aiResponse) {
      const formattedResponse = formatResponse(aiResponse);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: formattedResponse, type: 'ai' },
      ]);
    }

    (form.elements.namedItem('message') as HTMLInputElement).value = '';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:p-4 py-4 px-3 h-full md:max-h-[75vh]  bg-background z-[9999] flex flex-col">
        <DialogHeader>
          <DialogTitle>Chat with Annuar Ai</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="flex flex-col flex-1 gap-3">
          <Card className="no-scrollbar flex-1 overflow-y-auto bg-background p-3 md:max-h-[50vh] max-h-[73vh]">
            {messages.length === 0 && (
              <span className="bg-gray-400/20 rounded-full p-3 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 w-max">
                Enter prompt to talk to Annuar Ai
              </span>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'} mb-2`}
              >
                <div
                  className={`message-bubble p-3 rounded-lg ${message.type === 'ai' ? 'ai-response bg-transparent' : 'my-response bg-gray-400/40'}`}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </Card>
          <form
            onSubmit={handleSubmit}
            className="pt-2 mt-auto relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          >
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <div className="flex items-center pt-0 gap-3 px-2 py-2">
              <Input
                required
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="focus-visible:border-0 focus-visible:outline-0 resize-none border-0 shadow-none focus-visible:ring-0 flex-grow ps-1"
              />
              <Button
                type="submit"
                size="sm"
                className="ml-auto gap-1.5 min-w-10 h-10"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? <Loader2 className="text-2xl animate-spin" /> : <Send />}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;


