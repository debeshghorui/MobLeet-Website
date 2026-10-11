const PATTERN =
  "01021000130210010200301200102010013020100102003012001020100130201001020030120010201001302010010200301200";

const LEVELS = [
  "var(--heat-0)",
  "var(--heat-1)",
  "var(--heat-2)",
  "var(--heat-3)",
] as const;

const FACTS = [
  {
    term: "Solved",
    detail: "Counted when every test on a problem passes.",
  },
  {
    term: "Submissions",
    detail: "Each run you send to the judge, including the ones that fail.",
  },
  {
    term: "Active days",
    detail: "Days you submitted at least once.",
  },
] as const;

export function ProgressSection() {
  const weeks = 16;
  const days = 7;
  const cell = 14;
  const gap = 5;
  const width = weeks * (cell + gap) - gap;
  const height = days * (cell + gap) - gap;

  return (
    <section id="progress" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-[76rem] px-5 py-16 lg:py-24">
        <h2 className="max-w-[16ch] text-4xl leading-[1.1] sm:text-5xl">
          A calendar of the days you practiced
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-quiet">
          The profile counts solved problems, every submission, and the days
          you sent at least one.
        </p>

        <figure className="mt-12 rounded-3xl border border-line bg-surface p-5 sm:p-8">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-auto w-full max-w-[720px]"
            role="img"
            aria-label="Sample activity calendar with scattered practice days"
          >
            <title>Sample activity calendar</title>
            {Array.from({ length: weeks }, (_, week) =>
              Array.from({ length: days }, (_, day) => {
                const index = week * days + day;
                const level = Number(PATTERN[index] ?? "0");
                const safeLevel = level >= 0 && level <= 3 ? level : 0;
                return (
                  <rect
                    key={`${week}-${day}`}
                    x={week * (cell + gap)}
                    y={day * (cell + gap)}
                    width={cell}
                    height={cell}
                    rx="3"
                    fill={LEVELS[safeLevel]}
                  />
                );
              }),
            )}
          </svg>
          <figcaption className="mt-4 max-w-[48ch] text-sm leading-relaxed text-quiet">
            Sample calendar. It fills from your submissions, not from this
            page.
          </figcaption>
        </figure>

        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.term}>
              <dt className="text-2xl">{fact.term}</dt>
              <dd className="mt-2 max-w-[28ch] text-base leading-relaxed text-quiet">
                {fact.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
