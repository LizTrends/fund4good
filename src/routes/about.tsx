import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Fund4Good" },
      { name: "description", content: "Fund4Good is a transparent crowdfunding platform powered by Stellar smart contracts." },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page max-w-3xl py-16 md:py-24">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">About</span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Crowdfunding without the middlemen.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Fund4Good lets anyone run a campaign for a cause, project, or idea — and lets supporters
          pledge directly through Stellar smart contracts. No platform fees skimmed off the top.
          No opaque payouts. Just transparent, on-chain funding.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Pillar title="Transparent" body="Every pledge and payout is verifiable on the Stellar ledger." />
          <Pillar title="Low fee" body="Settle in seconds for fractions of a cent — funds reach creators faster." />
          <Pillar title="Global" body="Anyone with a Stellar wallet can back a project, anywhere." />
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-xl font-semibold">Ready to launch?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Take your idea live in minutes.</p>
          <Link to="/campaigns/new" className="mt-4 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
            Start a campaign
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
