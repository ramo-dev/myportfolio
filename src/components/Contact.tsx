
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner'; // Import Sonner for toast notifications
import { Loader2 } from 'lucide-react'; // Import loader icon

interface ContactMeProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendMail = async () => {
    setLoading(true);
    try {
      const url = process.env.NEXT_PUBLIC_REMOTE_URL ?? '';
      if (!url) {
        throw new Error('The API URL is not defined');
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const text = await response.text();
      toast.success(text);
    } catch (err) {
      console.error('Failed to send email:', err);
      toast.error('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendMail(); // Wait for the mail sending and toast notifications
    if (onClose) onClose(); // Close the dialog after showing toast notifications
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle>Send a Message</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Your Message:</Label>
            <Textarea
              required
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full flex items-center justify-center">
            {loading && <Loader2 className="animate-spin mr-2" />}
            Send a Message
          </Button>
          <div className="mt-4 text-center text-sm">
            Want to talk to my AI bot?{" "}
            <Link href="#" className="underline">
              Try it
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Contact: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (

    <div className="mt-16 h-[14rem] flex flex-col rounded-lg shadow-lg" id="contact">
      <h1 className="text-3xl font-extrabold text-foreground mb-4 self-start">
        Contact Me
      </h1>
      <p className="text-lg text-foreground mb-4 self-start">
        Want to chat? Just send me a message and I'll respond as soon as possible.
        <br />
        Or reach out from the socials on the floating panel.
      </p>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="self-start  font-semibold py-2  rounded-lg  transition-colors duration-300"
      >
        Contact Me
      </Button>
      <ContactMe isOpen={isDialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default Contact;

