const GROUPS = [
  {
    title: "The app",
    links: [
      { href: "#how", label: "Problems, editor, judge" },
      { href: "#editor", label: "Example problem" },
      { href: "#progress", label: "Practice calendar" },
    ],
  },
  {
    title: "Testing",
    links: [
      { href: "#apply", label: "Apply for access" },
      { href: "#faq", label: "Before you apply" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[76rem] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-2xl tracking-[-0.02em]">MobLeet</p>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-quiet">
            A phone app for interview-style coding practice. Internal testing
            on iOS and Android.
          </p>
        </div>
        {GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-sm text-quiet">{group.title}</p>
            <ul className="mt-3 grid gap-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[76rem] px-5 py-5 text-sm text-quiet">
          MobLeet
        </p>
      </div>
    </footer>
  );
}
