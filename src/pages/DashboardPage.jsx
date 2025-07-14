import { useAuth } from '@/context/AuthContext'; // We will create this soon

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      <p className="text-slate-300 mt-4 text-lg">
        Welcome,{' '}
        <span className="font-bold text-indigo-400">{user?.email}</span>!
      </p>
      <p className="text-slate-400 mt-2">
        Your role is:{' '}
        <span className="px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
          {user?.role}
        </span>
      </p>
      {user?.role === 'admin' && (
        <div className="mt-8 p-4 bg-slate-800 border border-slate-700 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-400">Admin Panel</h2>
          <p className="text-slate-400">
            You can see this because you are an admin.
          </p>
        </div>
      )}
    </div>
  );
}
