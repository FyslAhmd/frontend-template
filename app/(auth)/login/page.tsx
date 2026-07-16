'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const handleDemoLogin = (role: string) => {
    // Set cookie for Next.js Middleware route protection
    document.cookie = `auth_token=${role}; path=/; max-age=86400`;
    // Set local storage for client-side components use
    localStorage.setItem('user_role', role);

    toast.success(`Successfully logged in as ${role}`);
    router.push('/dashboard');
  };

  return (
    <Card className="border-white/10 bg-black/40 backdrop-blur-xl text-white shadow-2xl">
      <CardHeader className="space-y-2 text-center pb-8">
        <CardTitle className="text-3xl font-bold tracking-tight">Welcome Back</CardTitle>
        <CardDescription className="text-neutral-400 text-base">
          Choose a demo account to sign in
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Button
            onClick={() => handleDemoLogin('admin')}
            className="w-full h-12 text-base bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Login as Admin
          </Button>
          <Button
            onClick={() => handleDemoLogin('manager')}
            className="w-full h-12 text-base bg-purple-600 hover:bg-purple-500 transition-colors"
          >
            Login as Manager
          </Button>
          <Button
            onClick={() => handleDemoLogin('user')}
            className="w-full h-12 text-base bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
          >
            Login as User
          </Button>
        </div>

        <div className="text-center text-sm text-neutral-400 pt-4 space-y-4 flex flex-col border-t border-white/10">
          <Link href="/forgot-password" className="hover:text-white transition-colors">
            Forgot your password?
          </Link>
          <p>
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
