import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white">
      <Navbar />
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
