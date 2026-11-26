
import { Sparkles, Users } from 'lucide-react';

export function BuddyPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
          <Users size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Discover your buddies</h1>
          <p className="mt-1 text-sm text-muted">
            Find an AI companion for your next conversation.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
        <Sparkles className="mx-auto text-accent" size={30} />
        <h2 className="mt-4 text-lg font-semibold">Something interesting is coming</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
          Buddy profiles, personalities, categories, and discovery filters will
          be introduced in the next feature milestone.
        </p>
      </div>
    </div>
  );
}
