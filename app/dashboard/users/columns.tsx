'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/data/mock-users';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useState } from 'react';
import { BaseModal } from '@/components/ui/base-modal';
import { Button } from '@/components/ui/button';

const UserActions = ({ user }: { user: User }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="h-8 w-8 p-0 flex items-center justify-center rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="font-semibold text-xs">Actions</DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
            Copy user ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsModalOpen(true)}>
            View user details
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
            Delete user
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <BaseModal
        title="User Details"
        description={`Details for ${user.name}`}
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        footer={
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">ID</p>
              <p className="font-semibold">{user.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Role</p>
              <p className="font-semibold">{user.role}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <p className="font-semibold">{user.status}</p>
            </div>
          </div>
        </div>
      </BaseModal>
    </>
  );
};

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className="flex items-center">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <button
          className="flex items-center hover:text-foreground transition-colors outline-none focus-visible:underline"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <div
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors
            ${
              status === 'Active'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : status === 'Inactive'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
            }
          `}
        >
          {status}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <UserActions user={row.original} />,
  },
];
