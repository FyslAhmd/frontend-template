'use client';

import { useState, FormEvent } from 'react';
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

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [confirmError, setConfirmError] = useState('');

  const validatePassword = (pass: string) => {
    const errors: string[] = [];
    if (pass.length <= 6) errors.push('Must be greater than 6 characters');
    if (!/[A-Z]/.test(pass)) errors.push('Must contain at least one uppercase letter');
    if (!/[a-z]/.test(pass)) errors.push('Must contain at least one lowercase letter');
    if (!/\d/.test(pass)) errors.push('Must contain at least one digit');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass))
      errors.push('Must contain at least one special character');
    return errors;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    if (val) {
      setPasswordErrors(validatePassword(val));
    } else {
      setPasswordErrors([]);
    }

    // Also re-validate confirm password if it's already filled
    if (confirmPassword && val !== confirmPassword) {
      setConfirmError('Passwords do not match');
    } else if (confirmPassword && val === confirmPassword) {
      setConfirmError('');
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setConfirmPassword(val);
    if (val && val !== password) {
      setConfirmError('Passwords do not match');
    } else {
      setConfirmError('');
    }
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    const pErrors = validatePassword(password);
    if (pErrors.length > 0) {
      setPasswordErrors(pErrors);
      return;
    }

    if (password !== confirmPassword) {
      setConfirmError('Passwords do not match');
      return;
    }

    toast.success('Registration successful! Please login.');
    router.push('/login');
  };

  return (
    <Card className="w-full shadow-lg border-muted">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">Create Account</CardTitle>
        <CardDescription>Enter your details to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              required
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordErrors.length > 0 && (
              <ul className="text-[0.8rem] text-destructive list-disc list-inside mt-2 space-y-0.5">
                {passwordErrors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmError && (
              <p className="text-[0.8rem] font-medium text-destructive mt-1">{confirmError}</p>
            )}
          </div>
          <Button type="submit" className="w-full mt-2">
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col border-t pt-6">
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
