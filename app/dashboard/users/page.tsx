'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/data/mock-users';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import { Loader2 } from 'lucide-react';

export default function UsersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
        <p className="text-muted-foreground mt-1">
          View, search, and manage platform users. Example of the reusable DataTable component
          fetching via React Query.
        </p>
      </div>

      <div className="w-full bg-card rounded-xl border shadow-sm p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
            <p>Loading user data...</p>
          </div>
        ) : error ? (
          <div className="py-10 text-center text-destructive">
            <p>Error loading data. Please try again later.</p>
          </div>
        ) : (
          <DataTable columns={columns} data={data || []} searchKey="email" />
        )}
      </div>
    </div>
  );
}
