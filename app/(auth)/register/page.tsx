'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration successful! Please login using demo credentials.');
    router.push('/login');
  };

  return (
    <Card className="border-white/10 bg-black/40 backdrop-blur-xl text-white shadow-2xl">
      <CardHeader className="space-y-2 text-center pb-6">
        <CardTitle className="text-3xl font-bold tracking-tight">Create Account</CardTitle>
        <CardDescription className="text-neutral-400 text-base">
          Enter your details to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2 text-left">
            <Label htmlFor="name" className="text-neutral-300">
              Full Name
            </Label>
            <Input
              id="name"
              required
              placeholder="John Doe"
              className="bg-neutral-900/50 border-neutral-800 focus:border-blue-500 h-11"
            />
          </div>
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
          <div className="space-y-2 text-left">
            <Label htmlFor="password" className="text-neutral-300">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              className="bg-neutral-900/50 border-neutral-800 focus:border-blue-500 h-11"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-11 bg-blue-600 hover:bg-blue-500 mt-2 transition-colors"
          >
            Sign Up
          </Button>
        </form>

        <div className="text-center text-sm text-neutral-400 mt-6 pt-6 border-t border-white/10">
          <p>
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
