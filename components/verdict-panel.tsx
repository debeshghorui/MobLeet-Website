const CASES = [
  { input: "2", output: "2", delay: "0.35s" },
  { input: "3", output: "3", delay: "0.85s" },
  { input: "4", output: "5", delay: "1.35s" },
] as const;

export function VerdictPanel() {
  return (
    <figure className="relative flex h-full min-h-0 flex-col bg-lime text-lime-ink">
      <div className="relative z-10 px-6 pt-12 pb-6 sm:px-10 sm:pt-16 lg:px-14 lg:pt-20">
        <p className="font-heading max-w-[16ch] text-[2.4rem] leading-[1.02] tracking-[-0.03em] sm:text-5xl">
          Climbing Stairs
        </p>
        <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-lime-ink/75">
          An easy example from the app. Climb 1 or 2 steps and count the ways
          to the top.
        </p>
        <p className="mt-3 font-mono text-sm leading-relaxed text-lime-ink/65">
          1 &lt;= n &lt;= 45
        </p>

        <pre className="mt-8 max-w-full overflow-x-auto font-mono text-[15px] leading-7">
          <code>
            <span className="panel-key">function</span> climbStairs(n) {"{"}
            {"\n"}
            {"  "}
            <span className="panel-note">{"// Write your code here"}</span>
            {"\n"}
            {"}"}
          </code>
        </pre>

        <table className="mt-8 w-auto text-left font-mono text-[15px]">
          <caption className="sr-only">
            Sample test cases for Climbing Stairs. Each one passes.
          </caption>
          <thead>
            <tr className="panel-note text-sm">
              <th scope="col" className="pr-8 pb-2 font-medium">
                Input
              </th>
              <th scope="col" className="pr-8 pb-2 font-medium">
                Output
              </th>
              <th scope="col" className="pb-2 font-medium">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {CASES.map((testCase) => (
              <tr key={testCase.input}>
                <td className="py-1.5 pr-8 tabular-nums">{testCase.input}</td>
                <td className="py-1.5 pr-8 tabular-nums">{testCase.output}</td>
                <td className="py-1.5">
                  <span className="sr-only">Passed</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="size-6"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7.2 12.4 L10.6 15.7 L16.8 8.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-draw"
                      style={{ animationDelay: testCase.delay }}
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="font-heading mt-10 text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
          Accepted
        </p>
        <p className="mt-3 text-base text-lime-ink/75">All test cases passed.</p>
      </div>

      <svg
        viewBox="0 0 360 100"
        className="mt-8 h-24 w-full text-lime-ink lg:mt-auto"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 88 H90 V66 H180 V44 H270 V22 H360"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="stroke-draw stair-draw"
          opacity="0.28"
        />
      </svg>
      <figcaption className="sr-only">
        Climbing Stairs in MobLeet. Starter code, three passing test cases,
        then the verdict Accepted.
      </figcaption>
    </figure>
  );
}
