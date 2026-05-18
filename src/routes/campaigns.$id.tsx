import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getCampaign, formatXLM } from "@/lib/campaigns";

export const Route = createFileRoute("/campaigns/$id")({
  component: CampaignDetail,
  loader: ({ params }) => {
    const c = getCampaign(params.id);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — Fund4Good` },
            { name: "description", content: loaderData.summary },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.summary },
            { property: "og:image", content: loaderData.image },
            { name: "twitter:image", content: loaderData.image },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Campaign not found</h1>
      <Link to="/" className="mt-4 inline-block text-primary hover:underline">Back to discover</Link>
    </div>
  ),
});

function CampaignDetail() {
  const c = Route.useLoaderData();
  const [amount, setAmount] = useState(50);
  const [pledged, setPledged] = useState(false);
  const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container-page py-12 md:py-16">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← All campaigns</Link>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
              {c.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {c.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{c.summary}</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
              <img src={c.image} alt={c.title} className="aspect-[16/9] w-full object-cover" />
            </div>
            <div className="prose prose-slate mt-8 max-w-none">
              <h2 className="font-display text-xl font-semibold text-foreground">About this project</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{c.story}</p>
              <p className="mt-4 text-sm text-muted-foreground">Created by <span className="text-foreground font-medium">{c.creator}</span></p>
            </div>
          </div>

          {/* Pledge panel */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_4px_30px_-12px_rgba(15,23,42,0.1)]">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-bold">{formatXLM(c.raised)}</span>
                <span className="text-sm text-muted-foreground">{pct}%</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                pledged of {formatXLM(c.goal)} goal
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4 text-sm">
                <div>
                  <div className="font-display text-xl font-semibold">{c.backers}</div>
                  <div className="text-xs text-muted-foreground">Backers</div>
                </div>
                <div>
                  <div className="font-display text-xl font-semibold">{c.daysLeft}</div>
                  <div className="text-xs text-muted-foreground">Days left</div>
                </div>
              </div>

              {pledged ? (
                <div className="mt-6 rounded-xl bg-success/10 p-4 text-sm text-foreground">
                  <div className="font-medium text-foreground">Pledge recorded</div>
                  <div className="mt-1 text-muted-foreground">
                    {formatXLM(amount)} reserved. You'll confirm on-chain when contracts go live.
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-3">
                  <label className="block text-sm font-medium text-foreground">Pledge amount (XLM)</label>
                  <div className="flex gap-2">
                    {[25, 50, 100, 250].map((v) => (
                      <button
                        key={v}
                        onClick={() => setAmount(v)}
                        className={`flex-1 rounded-lg border px-2 py-2 text-sm transition-colors ${
                          amount === v
                            ? "border-foreground bg-foreground text-background"
                            : "border-border bg-card hover:bg-surface"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value) || 0)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
                  />
                  <button
                    onClick={() => setPledged(true)}
                    className="w-full rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Pledge {formatXLM(amount)}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Settled via Stellar smart contract. No platform fees.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
