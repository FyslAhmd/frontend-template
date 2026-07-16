export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'User';
  status: 'Active' | 'Inactive' | 'Pending';
};

export const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  { id: '3', name: 'Alice Johnson', email: 'alice@example.com', role: 'Manager', status: 'Active' },
  { id: '4', name: 'Bob Brown', email: 'bob@example.com', role: 'User', status: 'Pending' },
  { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', role: 'User', status: 'Active' },
  { id: '6', name: 'Diana Evans', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { id: '7', name: 'Frank Green', email: 'frank@example.com', role: 'User', status: 'Inactive' },
  { id: '8', name: 'Grace Hill', email: 'grace@example.com', role: 'Manager', status: 'Pending' },
  { id: '9', name: 'Ian Scott', email: 'ian@example.com', role: 'User', status: 'Active' },
  { id: '10', name: 'Julia Adams', email: 'julia@example.com', role: 'User', status: 'Active' },
  { id: '11', name: 'Kevin Lee', email: 'kevin@example.com', role: 'Manager', status: 'Inactive' },
  { id: '12', name: 'Laura Miller', email: 'laura@example.com', role: 'User', status: 'Pending' },
];

export const fetchUsers = async (): Promise<User[]> => {
  // Simulate network latency (800ms)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 800);
  });
};
