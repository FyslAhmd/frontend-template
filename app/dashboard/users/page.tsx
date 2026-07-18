'use client';

import { BaseModal } from '@/components/ui/base-modal';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { DynamicForm, FormFieldConfig } from '@/components/ui/dynamic-form';
import { fetchUsers } from '@/data/mock-users';
import { useQuery } from '@tanstack/react-query';
import { Loader2, Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import { columns } from './columns';

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['Admin', 'Manager', 'User'], { message: 'Please select a role' }),
  status: z.enum(['Active', 'Inactive', 'Pending'], { message: 'Please select a status' }),
  profileImage: z.any().optional(),
});

const userFields: FormFieldConfig[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
  {
    name: 'role',
    label: 'User Role',
    type: 'radio',
    options: [
      { label: 'Admin', value: 'Admin' },
      { label: 'Manager', value: 'Manager' },
      { label: 'User', value: 'User' },
    ],
  },
  {
    name: 'status',
    label: 'Account Status',
    type: 'select',
    options: [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
      { label: 'Pending', value: 'Pending' },
    ],
  },
  {
    name: 'profileImage',
    label: 'Profile Picture',
    type: 'file',
    accept: 'image/*',
    description: 'Upload a JPG, PNG, or GIF.',
  },
];

export default function UsersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddUser = async (formData: z.infer<typeof userSchema>) => {
    setIsSubmitting(true);
    // Simulate API call for adding a user
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsAddModalOpen(false);
    toast.success(`${formData.name} added successfully!`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
          <p className="text-muted-foreground mt-1">
            View, search, and manage platform users. Example of the reusable DataTable and
            DynamicForm.
          </p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
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

      <BaseModal
        title="Create New User"
        description="Fill out the details below to add a new user to the system."
        isOpen={isAddModalOpen}
        onClose={setIsAddModalOpen}
      >
        <DynamicForm
          schema={userSchema}
          fields={userFields}
          defaultValues={
            {
              name: '',
              email: '',
              role: undefined,
              status: undefined,
              profileImage: null,
            } as unknown as z.infer<typeof userSchema>
          }
          onSubmit={handleAddUser}
          submitText="Save User"
          isLoading={isSubmitting}
        />
      </BaseModal>
    </div>
  );
}
