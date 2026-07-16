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
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    let role = '';
    if (email === 'admin@example.com' && password === 'admin123') {
      role = 'admin';
    } else if (email === 'manager@example.com' && password === 'manager123') {
      role = 'manager';
    } else if (email === 'user@example.com' && password === 'user123') {
      role = 'user';
    }

    if (!role) {
      toast.error('Invalid credentials. Please use the demo accounts.');
      return;
    }

    document.cookie = `auth_token=${role}; path=/; max-age=86400`;
    localStorage.setItem('user_role', role);

    toast.success(`Successfully logged in as ${role}`);
    router.push('/dashboard');
  };

  const fillDemoCredentials = (role: 'admin' | 'manager' | 'user') => {
    setEmail(`${role}@example.com`);
    setPassword(`${role}123`);
    toast.info(`Filled with ${role} credentials`);
  };

  return (
    <Card className="w-full shadow-lg border-muted">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">Welcome Back</CardTitle>
        <CardDescription>Enter your email and password to sign in</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or fill demo credentials</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('admin')}>
            Admin
          </Button>
          <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('manager')}>
            Manager
          </Button>
          <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('user')}>
            User
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col border-t pt-6">
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
