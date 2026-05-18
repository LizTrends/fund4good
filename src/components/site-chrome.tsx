import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            F4
          </span>
          <span>Fund4Good</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Discover</Link>
          <Link to="/campaigns/new" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Start a campaign</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface md:inline-flex">
            Connect wallet
          </button>
          <Link
            to="/campaigns/new"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Launch
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-bold">F4</span>
          <span className="text-foreground font-medium">Fund4Good</span>
          <span>· Built on Stellar</span>
        </div>
        <p>© {new Date().getFullYear()} Fund4Good. Transparent funding for projects that matter.</p>
      </div>
    </footer>
  );
}
