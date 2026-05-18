import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CampaignCard } from "@/components/campaign-card";
import { campaigns } from "@/lib/campaigns";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fund4Good — Transparent crowdfunding on Stellar" },
      {
        name: "description",
        content:
          "Launch campaigns and pledge support for projects that matter. Transparent, low-fee crowdfunding powered by Stellar smart contracts.",
      },
      { property: "og:title", content: "Fund4Good — Transparent crowdfunding on Stellar" },
      {
        property: "og:description",
        content: "Launch campaigns and pledge support for projects that matter.",
      },
    ],
  }),
});

function Index() {
  const totalRaised = campaigns.reduce((s, c) => s + c.raised, 0);
  const totalBackers = campaigns.reduce((s, c) => s + c.backers, 0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Powered by Stellar smart contracts
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Fund the things<br />the world needs next.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Run campaigns or pledge financial support to projects that matter — with transparent,
            low-fee on-chain settlement.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/campaigns/new"
              className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start a campaign
            </Link>
            <a
              href="#discover"
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Explore projects
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat label="Raised" value={`${Math.round(totalRaised / 1000)}k XLM`} />
            <Stat label="Backers" value={totalBackers.toLocaleString()} />
            <Stat label="Active" value={String(campaigns.length)} />
          </dl>
        </div>
      </section>

      {/* Campaign grid */}
      <section id="discover" className="container-page pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
              Discover campaigns
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Hand-picked projects open to pledges right now.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-semibold text-foreground">{value}</dd>
    </div>
  );
}
