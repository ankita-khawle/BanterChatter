
import { MessageCircle } from 'lucide-react';

export function ChatPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
          <MessageCircle size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Your conversations</h1>
          <p className="mt-1 text-sm text-muted">
            Pick up where you left off.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
        <MessageCircle className="mx-auto text-accent" size={30} />
        <h2 className="mt-4 text-lg font-semibold">No conversations yet</h2>
        <p className="mt-2 text-sm text-muted">
          Your conversations will appear here once you start chatting.
        </p>
      </div>
    </div>
  );
}
