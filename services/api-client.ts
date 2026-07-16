import axios from 'axios';
import { toast } from 'sonner';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Example: Attach auth token here
    // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here
    const message =
      error.response?.data?.message || error.message || 'An unexpected error occurred';

    // Example: Handle 401 unauthorized errors to logout user
    // if (error.response?.status === 401) {
    //   // Handle logout logic
    // }

    // Optionally show toast for error messages globally
    if (typeof window !== 'undefined') {
      toast.error(message);
    }

    return Promise.reject(error);
  }
);
