"use client";

import { useState } from "react";

const LANGUAGES = [
  {
    id: "javascript",
    label: "JavaScript",
    code: (
      <>
        <span className="token-key">function</span> climbStairs(n) {"{"}
        {"\n"}
        {"  "}
        <span className="token-note">{"// Write your code here"}</span>
        {"\n"}
        {"}"}
      </>
    ),
  },
  {
    id: "python",
    label: "Python",
    code: (
      <>
        <span className="token-key">class</span> Solution:{"\n"}
        {"    "}
        <span className="token-key">def</span> climbStairs(self, n: int) {"->"}{" "}
        int:{"\n"}
        {"        "}
        <span className="token-note"># Write your code here</span>
        {"\n"}
        {"        "}
        <span className="token-key">pass</span>
      </>
    ),
  },
  {
    id: "java",
    label: "Java",
    code: (
      <>
        <span className="token-key">public int</span> climbStairs(
        <span className="token-key">int</span> n) {"{"}
        {"\n"}
        {"    "}
        <span className="token-note">{"// Write your code here"}</span>
        {"\n"}
        {"    "}
        <span className="token-key">return</span> 0;{"\n"}
        {"}"}
      </>
    ),
  },
] as const;

const CASES = [
  ["2", "2"],
  ["3", "3"],
  ["4", "5"],
] as const;

export function LanguageStage() {
  const [languageId, setLanguageId] = useState<(typeof LANGUAGES)[number]["id"]>(
    "javascript",
  );
  const language = LANGUAGES.find((item) => item.id === languageId) ?? LANGUAGES[0];

  return (
    <section id="editor" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-20 lg:py-24">
        <div className="min-w-0">
          <h2 className="max-w-[14ch] text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            The in-app editor
          </h2>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-quiet">
            On your phone you pick a language, write starter code, and tap
            Submit. The judge runs every test case. You only solve the problem
            when they all pass.
          </p>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-quiet">
            You can search the list and filter by Easy, Medium, and Hard.
          </p>

          <fieldset className="mt-8">
            <legend className="sr-only">Language</legend>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((item) => (
                <label key={item.id} className="choice">
                  <input
                    type="radio"
                    name="language"
                    value={item.id}
                    checked={languageId === item.id}
                    onChange={() => setLanguageId(item.id)}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div
            key={language.id}
            className="code-swap mt-6 overflow-x-auto rounded-xl bg-surface px-5 py-5"
            aria-live="polite"
            aria-label={`${language.label} starter code`}
          >
            <pre className="font-mono text-[15px] leading-7">
              <code>{language.code}</code>
            </pre>
          </div>
        </div>

        <div className="min-w-0 lg:pt-2">
          <h3 className="text-3xl tracking-[-0.03em]">
            The cases stay put
          </h3>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-quiet">
            Switching language changes the starter. The inputs and expected
            outputs stay the same.
          </p>
          <table className="mt-6 w-full max-w-sm text-left font-mono text-base">
            <caption className="sr-only">
              Climbing Stairs sample cases shared by every language
            </caption>
            <thead>
              <tr className="text-sm text-quiet">
                <th scope="col" className="pb-2 font-medium">
                  Input
                </th>
                <th scope="col" className="pb-2 font-medium">
                  Output
                </th>
              </tr>
            </thead>
            <tbody>
              {CASES.map(([input, output]) => (
                <tr key={input} className="border-t border-line">
                  <td className="py-3 tabular-nums">{input}</td>
                  <td className="py-3 tabular-nums">{output}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-quiet">
            The problem screen also keeps constraints, hints, and your past
            submissions.
          </p>
        </div>
      </div>
    </section>
  );
}
