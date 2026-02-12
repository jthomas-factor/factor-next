'use client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from './Button';
import { InfoIcon } from 'lucide-react';

const EmailAlert = () => (
  <Alert className="mb-4">
    <InfoIcon />
    <AlertTitle>Message sent!</AlertTitle>
    <AlertDescription>
      Thank you for contacting FACTOR Inc. We will respond to your inquiry
      shortly.
    </AlertDescription>
  </Alert>
);

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Email error:', data.error);
        setShowError(true);
        return;
      }

      setShowSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error('Unexpected error:', err);
      setShowError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* Success Alert */}
      {showSuccess && <EmailAlert />}

      {/* Optional Error Alert */}
      {showError && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Message failed</AlertTitle>
          <AlertDescription>
            There was an issue sending your message. Please try again.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <div className="flex flex-col gap-6">
          <Textarea
            className="h-[180px] resize-none"
            placeholder="Enter your message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <Button text="Send Message" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
