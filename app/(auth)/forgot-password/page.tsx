'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Verification code sent to your email');
    setStep(2);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Code verified successfully');
    setStep(3);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Password reset successfully! Please login.');
    router.push('/login');
  };

  return (
    <Card className="w-full shadow-lg border-muted">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">
          {step === 1 && 'Reset Password'}
          {step === 2 && 'Verify Code'}
          {step === 3 && 'New Password'}
        </CardTitle>
        <CardDescription>
          {step === 1 && 'Enter your email to receive a verification code'}
          {step === 2 && 'Enter the 6-digit code sent to your email'}
          {step === 3 && 'Create a new secure password'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" required placeholder="name@example.com" />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Code
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                required
                placeholder="123456"
                maxLength={6}
                className="text-center tracking-widest text-xl font-mono"
              />
            </div>
            <Button type="submit" className="w-full">
              Verify Code
            </Button>
            <Button type="button" variant="ghost" onClick={() => setStep(1)} className="w-full">
              Back to Email
            </Button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" required />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-2">
              Update Password
            </Button>
          </form>
        )}
      </CardContent>

      {step === 1 && (
        <CardFooter className="flex flex-col border-t pt-6">
          <div className="text-center text-sm text-muted-foreground">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to login
            </Link>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
