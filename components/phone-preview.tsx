export function PhonePreview() {
  return (
    <div className="phone-stage" aria-hidden="true">
      <svg
        viewBox="0 0 320 640"
        className="phone-frame"
        role="img"
        aria-label=""
      >
        <defs>
          <linearGradient id="phone-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
          </linearGradient>
          <clipPath id="phone-screen">
            <rect x="18" y="52" width="284" height="536" rx="28" />
          </clipPath>
        </defs>

        <rect
          x="4"
          y="8"
          width="312"
          height="624"
          rx="44"
          fill="var(--surface)"
          stroke="url(#phone-edge)"
          strokeWidth="2"
        />
        <rect x="118" y="24" width="84" height="10" rx="5" fill="currentColor" opacity="0.2" />

        <g clipPath="url(#phone-screen)" className="text-foreground">
          <rect x="18" y="52" width="284" height="536" fill="var(--background)" />

          <rect x="18" y="52" width="284" height="56" fill="var(--surface)" />
          <text x="36" y="88" className="phone-label" fill="currentColor">
            Problems
          </text>
          <rect x="228" y="72" width="58" height="22" rx="11" fill="var(--lime)" className="phone-pill" />
          <text x="240" y="88" className="phone-micro" fill="var(--lime-ink)">
            Easy
          </text>

          <g className="phone-row-draw" style={{ animationDelay: "0.1s" }}>
            <rect x="32" y="128" width="256" height="52" rx="14" fill="var(--surface)" />
            <circle cx="52" cy="154" r="6" fill="var(--lime)" />
            <text x="68" y="158" className="phone-row-title" fill="currentColor">
              Climbing Stairs
            </text>
            <text x="250" y="158" className="phone-micro" fill="var(--quiet)">
              Easy
            </text>
          </g>
          <g className="phone-row-draw" style={{ animationDelay: "0.25s" }}>
            <rect x="32" y="192" width="256" height="52" rx="14" fill="var(--surface)" />
            <circle cx="52" cy="218" r="6" fill="var(--quiet)" opacity="0.5" />
            <text x="68" y="222" className="phone-row-title" fill="currentColor">
              Valid Palindrome
            </text>
            <text x="238" y="222" className="phone-micro" fill="var(--quiet)">
              Easy
            </text>
          </g>

          <g className="phone-screen-editor">
            <rect x="18" y="268" width="284" height="320" fill="var(--background)" />
            <text x="32" y="300" className="phone-label" fill="currentColor">
              Climbing Stairs
            </text>
            <rect x="32" y="316" width="256" height="140" rx="14" fill="var(--surface)" />
            <text x="44" y="342" className="phone-code" fill="var(--peach)">
              function
            </text>
            <text x="108" y="342" className="phone-code" fill="currentColor">
              climbStairs(n) {"{"}
            </text>
            <text x="56" y="364" className="phone-code-dim" fill="var(--quiet)">
              {"// your code"}
            </text>
            <rect x="32" y="472" width="256" height="44" rx="14" fill="var(--lime)" />
            <text x="118" y="500" className="phone-submit" fill="var(--lime-ink)">
              Submit
            </text>
          </g>

          <g className="phone-screen-verdict">
            <rect x="18" y="268" width="284" height="320" fill="var(--lime)" />
            <text x="32" y="340" className="phone-verdict" fill="var(--lime-ink)">
              Accepted
            </text>
            <text x="32" y="368" className="phone-micro" fill="var(--lime-ink)" opacity="0.75">
              All test cases passed
            </text>
            <path
              d="M48 420 H120 V392 H192 V364 H264"
              fill="none"
              stroke="var(--lime-ink)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-draw phone-stair"
              opacity="0.45"
            />
            <g transform="translate(200 400)">
              <circle cx="0" cy="0" r="14" fill="none" stroke="var(--lime-ink)" strokeWidth="2" />
              <path
                d="M-6 0 L-2 4 L7 -5"
                fill="none"
                stroke="var(--lime-ink)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="stroke-draw"
                style={{ animationDelay: "0.5s" }}
              />
            </g>
          </g>
        </g>
      </svg>
      <p className="sr-only">
        MobLeet on a phone: browse problems, write code, submit, and see Accepted
        when every test passes.
      </p>
    </div>
  );
}
