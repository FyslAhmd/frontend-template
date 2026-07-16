'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Read from localStorage to showcase the demo credentials feature
    const savedRole = localStorage.getItem('user_role');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRole(savedRole);
  }, []);

  const handleLogout = () => {
    // Clear cookie (which middleware uses) and localStorage
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.removeItem('user_role');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8 flex flex-col items-start gap-6 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight">Dashboard</h1>
      <div className="px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800 text-sm">
        Logged in as:{' '}
        <span className="font-semibold text-blue-400 capitalize">{role || 'User'}</span>
      </div>
      <p className="text-neutral-400 max-w-md leading-relaxed">
        This is a protected route. Only authenticated users can see this page. If you log out, you
        will be redirected to the login screen and blocked from returning here via middleware.
      </p>
      <Button onClick={handleLogout} variant="destructive">
        Log Out
      </Button>
    </div>
  );
}
