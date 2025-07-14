import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { toast } from 'sonner';

// Import the useAuth hook to access our login function
import { useAuth } from '@/context/AuthContext';

// Define the validation schema for our login form
const formSchema = z.object({
  email: z.string().min(2).max(100),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' }),
});

export function LoginForm() {
  // Get the login function from our AuthContext
  const { login } = useAuth();

  // Standard React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, // We can use isSubmitting for loading states
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // This function will be called on form submission
  const onSubmit = async (data) => {
    try {
      // Call the login function from our context
      await login(data);
      // The navigation to /dashboard is handled inside the login function itself
      toast.success('Login Successful!', {
        description: 'Welcome back!',
      });
    } catch {
      // If the login function throws an error, we catch it here
      toast.error('Login Failed', {
        description: 'Invalid credentials. Please try again.',
      });
    }
  };

  return (
    // We reuse the styling from our previous steps
    <div className="w-full max-w-md p-8 space-y-6 mx-auto bg-slate-800 border border-slate-700 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Enter your credentials to access the dashboard.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-300">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="admin@example.com"
            type="text"
            className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-500"
            {...register('email')}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-slate-300">
            Password
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-500"
            {...register('password')}
            disabled={isSubmitting}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          className="w-full !mt-8 bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-slate-500"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
}
