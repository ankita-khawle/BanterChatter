
import { Settings } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
          <Settings size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="mt-1 text-sm text-muted">
            Manage your account and preferences.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
        <Settings className="mx-auto text-accent" size={30} />
        <h2 className="mt-4 text-lg font-semibold">Settings are coming soon</h2>
        <p className="mt-2 text-sm text-muted">
          Account preferences, subscription, and personalization will live here.
        </p>
      </div>
    </div>
  );
}
