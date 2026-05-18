import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/campaigns/new")({
  component: NewCampaign,
  head: () => ({
    meta: [
      { title: "Start a campaign — Fund4Good" },
      { name: "description", content: "Launch your crowdfunding campaign on Stellar in minutes." },
    ],
  }),
});

function NewCampaign() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page max-w-2xl py-12 md:py-20">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back</Link>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Start a campaign
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tell us about your project. You'll deploy a Stellar smart contract escrow once details are confirmed.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success">✓</div>
            <h2 className="mt-4 font-display text-xl font-semibold">Campaign drafted</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your draft is saved. Connect a Stellar wallet to deploy the escrow contract.
            </p>
            <Link to="/" className="mt-6 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
              Back to discover
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-10 space-y-6"
          >
            <Field label="Project title" required>
              <input required className="input" placeholder="Solar Power for Rural Schools" />
            </Field>
            <Field label="Category" required>
              <select className="input" defaultValue="">
                <option value="" disabled>Choose a category</option>
                {["Education","Health","Environment","Arts","Community","Technology"].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Short summary" hint="One line, max 140 characters." required>
              <input required maxLength={140} className="input" />
            </Field>
            <Field label="Project story" required>
              <textarea required rows={6} className="input resize-none" placeholder="What are you building? Who does it help? How will funds be used?" />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Funding goal (XLM)" required>
                <input required type="number" min={1} className="input" placeholder="50000" />
              </Field>
              <Field label="Duration (days)" required>
                <input required type="number" min={1} max={90} className="input" placeholder="30" />
              </Field>
            </div>

            <button type="submit" className="w-full rounded-full bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
              Save draft
            </button>
            <p className="text-center text-xs text-muted-foreground">
              You won't be charged. Funds settle via Stellar smart contracts only after launch.
            </p>
          </form>
        )}
      </section>
      <SiteFooter />

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          font-family: var(--font-sans);
        }
        .input:focus { outline: none; border-color: var(--color-foreground); }
      `}</style>
    </div>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">
          {label}{required && <span className="ml-0.5 text-muted-foreground">*</span>}
        </span>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
    </label>
  );
}
