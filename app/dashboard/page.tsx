'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const savedRole = localStorage.getItem('user_role');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRole(savedRole);
  }, []);

  const handleLogout = () => {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.removeItem('user_role');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-start gap-6 text-foreground">
      <h1 className="text-4xl font-extrabold tracking-tight">Dashboard</h1>
      <div className="px-4 py-2 bg-muted rounded-full border text-sm">
        Logged in as:{' '}
        <span className="font-semibold text-primary capitalize">{role || 'User'}</span>
      </div>
      <p className="text-muted-foreground max-w-md leading-relaxed">
        This is a protected route. Only authenticated users can see this page. If you log out, you
        will be redirected to the login screen and blocked from returning here via middleware.
      </p>
      <Button onClick={handleLogout} variant="destructive">
        Log Out
      </Button>
    </div>
  );
}
