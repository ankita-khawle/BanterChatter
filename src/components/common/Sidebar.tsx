
import {
  Home,
  MessageCircle,
  Settings,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  mobileMenuOpen: boolean;
  onNavigate: () => void;
}

const navigation = [
  { label: 'Home', path: '/', icon: Home, end: true },
  { label: 'Discover buddies', path: '/buddies', icon: Users },
  { label: 'Conversations', path: '/chat', icon: MessageCircle },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar({ mobileMenuOpen, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-surface transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-5">
        <NavLink
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-3"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
            <MessageCircle size={20} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            BanterChatter
          </span>
        </NavLink>

        <button
          aria-label="Close navigation menu"
          onClick={onNavigate}
          className="rounded-lg p-2 text-muted hover:bg-surface-hover lg:hidden"
        >
          <X size={19} />
        </button>
      </div>

      <div className="flex-1 space-y-7 overflow-y-auto p-4">
        <div>
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map(({ label, path, icon: Icon, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/15 text-accent'
                      : 'text-muted hover:bg-surface-hover hover:text-foreground'
                  }`
                }
              >
                <Icon size={19} />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="rounded-2xl border border-border bg-background p-4">
          <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-primary/15 text-accent">
            <Sparkles size={19} />
          </div>
          <p className="text-sm font-semibold">Your AI companions</p>
          <p className="mt-1 text-xs leading-5 text-muted">
            Find someone to talk to, learn with, or simply share your thoughts.
          </p>
          <NavLink
            to="/buddies"
            onClick={onNavigate}
            className="mt-4 inline-flex text-xs font-semibold text-accent hover:text-white"
          >
            Explore buddies →
          </NavLink>
        </div>
      </div>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl p-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-accent">
            G
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium">Guest user</p>
            <p className="text-xs text-muted">Free plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
