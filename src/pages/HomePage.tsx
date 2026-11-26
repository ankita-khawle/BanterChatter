
import { ArrowRight, MessageCircle, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-accent">
          <Sparkles size={14} />
          Your space for meaningful conversations
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          A little conversation can make a big difference.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Meet AI companions with different personalities, interests, and
          perspectives. Find your conversation buddy and start chatting.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/buddies"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Find your buddy
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/chat"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-surface"
          >
            <MessageCircle size={17} />
            Open conversations
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
            <Users size={22} />
          </div>
          <h2 className="text-lg font-semibold">Different personalities</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Choose companions based on your interests, mood, and the kind of
            conversations you enjoy.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
            <MessageCircle size={22} />
          </div>
          <h2 className="text-lg font-semibold">Conversations that flow</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Have natural conversations and explore ideas in a space designed
            around you.
          </p>
        </div>
      </div>
    </div>
  );
}
