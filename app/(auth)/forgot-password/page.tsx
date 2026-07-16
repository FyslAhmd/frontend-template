'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <Card className="border-white/10 bg-black/40 backdrop-blur-xl text-white shadow-2xl">
      <CardHeader className="space-y-2 text-center pb-6">
        <CardTitle className="text-3xl font-bold tracking-tight">
          {step === 1 && 'Reset Password'}
          {step === 2 && 'Verify Code'}
          {step === 3 && 'New Password'}
        </CardTitle>
        <CardDescription className="text-neutral-400 text-base">
          {step === 1 && 'Enter your email to receive a verification code'}
          {step === 2 && 'Enter the 6-digit code sent to your email'}
          {step === 3 && 'Create a new secure password'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-5">
            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="text-neutral-300">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="name@example.com"
                className="bg-neutral-900/50 border-neutral-800 focus:border-blue-500 h-11"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Send Reset Code
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-5">
            <div className="space-y-2 text-left">
              <Label htmlFor="otp" className="text-neutral-300">
                Verification Code
              </Label>
              <Input
                id="otp"
                required
                placeholder="123456"
                maxLength={6}
                className="bg-neutral-900/50 border-neutral-800 focus:border-blue-500 h-11 text-center tracking-widest text-xl font-mono"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Verify Code
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep(1)}
              className="w-full h-11 text-neutral-400 hover:text-white transition-colors"
            >
              Back to Email
            </Button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-5">
            <div className="space-y-2 text-left">
              <Label htmlFor="new-password" className="text-neutral-300">
                New Password
              </Label>
              <Input
                id="new-password"
                type="password"
                required
                className="bg-neutral-900/50 border-neutral-800 focus:border-blue-500 h-11"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="confirm-password" className="text-neutral-300">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                required
                className="bg-neutral-900/50 border-neutral-800 focus:border-blue-500 h-11"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-blue-600 hover:bg-blue-500 transition-colors mt-2"
            >
              Update Password
            </Button>
          </form>
        )}

        {step === 1 && (
          <div className="text-center text-sm text-neutral-400 mt-6 pt-6 border-t border-white/10">
            <Link
              href="/login"
              className="hover:text-white transition-colors flex items-center justify-center gap-2"
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
        )}
      </CardContent>
    </Card>
  );
}
