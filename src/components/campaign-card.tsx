import { Link } from "@tanstack/react-router";
import { type Campaign, formatXLM } from "@/lib/campaigns";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  return (
    <Link
      to="/campaigns/$id"
      params={{ id: campaign.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={campaign.image}
          alt={campaign.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
          {campaign.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
            {campaign.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {campaign.summary}
          </p>
        </div>
        <div className="mt-auto space-y-3">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div>
              <div className="font-semibold text-foreground">{formatXLM(campaign.raised)}</div>
              <div className="text-xs text-muted-foreground">of {formatXLM(campaign.goal)}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-foreground">{pct}%</div>
              <div className="text-xs text-muted-foreground">{campaign.daysLeft} days left</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
