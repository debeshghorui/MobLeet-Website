const STEPS = [
  {
    title: "Read this page",
    detail: "See what the app does before you install anything.",
  },
  {
    title: "Send the form",
    detail: "Name, email, and whether you use iPhone, Android, or both.",
  },
  {
    title: "Wait for email",
    detail: "If a testing spot opens, the install steps arrive there.",
  },
  {
    title: "Open the app",
    detail: "Sign in with GitHub or Google and start a problem.",
  },
] as const;

export function AccessPath() {
  return (
    <section className="border-b border-line" aria-labelledby="path-title">
      <div className="mx-auto max-w-[76rem] px-5 py-16 lg:py-24">
        <h2
          id="path-title"
          className="max-w-[18ch] text-4xl leading-[1.1] sm:text-5xl"
        >
          How a test build reaches your phone
        </h2>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-quiet">
          MobLeet is not on the App Store or Play Store yet. Testers are added
          from this list.
        </p>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, index) => (
            <li key={step.title} className="min-w-0">
              <p className="font-heading text-3xl text-lime-text tabular-nums">
                {index + 1}
              </p>
              <h3 className="mt-3 text-2xl leading-tight">{step.title}</h3>
              <p className="mt-2 max-w-[28ch] text-base leading-relaxed text-quiet">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
