import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from './ui/button';

export function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="py-4 px-8 bg-slate-800 border-b border-slate-700">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          MyApp
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-indigo-400' : 'text-white'
            }
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'text-indigo-400' : 'text-white'
              }
            >
              Dashboard
            </NavLink>
          )}
          {user ? (
            <Button onClick={logout} variant="secondary">
              Logout
            </Button>
          ) : (
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
