
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>

        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary text-white">
            <MessageCircle size={23} />
          </div>

          <h1 className="text-2xl font-semibold">Welcome to BanterChatter</h1>
          <p className="mt-2 text-sm leading-6 text-muted">
            Sign in to continue your conversations.
          </p>

          <p className="mt-8 rounded-xl border border-border bg-background p-4 text-sm text-muted">
            Authentication will be connected when the backend auth module is
            implemented.
          </p>

          <Link
            to="/"
            className="mt-6 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Continue exploring
          </Link>
        </div>
      </div>
    </div>
  );
}
