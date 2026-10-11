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
        <span className="token-key">def</span> climbStairs(self, n: int) {"->"} int:{"\n"}
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

export function ProblemBench({
  focus = "editor",
}: {
  focus?: "problems" | "editor" | "judge";
}) {
  const [languageId, setLanguageId] = useState<(typeof LANGUAGES)[number]["id"]>(
    "javascript",
  );
  const language = LANGUAGES.find((item) => item.id === languageId) ?? LANGUAGES[0];

  return (
    <figure id="editor" className="bench scroll-mt-24 min-w-0 p-5 sm:p-7">
      <div className={focus === "problems" ? undefined : "panel-dim"}>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[1.7rem] leading-none sm:text-3xl">Climbing Stairs</h3>
          <p className="bench-quiet text-sm font-medium">Easy</p>
        </div>
        <p className="mt-4 max-w-[42ch] text-base leading-relaxed">
          Climb 1 or 2 steps. Count the ways to reach the top.
        </p>
        <p className="bench-quiet mt-2 font-mono text-sm">1 &lt;= n &lt;= 45</p>
      </div>

      <div role="group" aria-label="Editor language" className="mt-6 flex flex-wrap gap-2">
        {LANGUAGES.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === language.id}
            className={item.id === language.id ? "lang lang-on" : "lang"}
            onClick={() => setLanguageId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <pre
        className={
          focus === "editor"
            ? "mt-5 overflow-x-auto font-mono text-[15px] leading-7"
            : "panel-dim mt-5 overflow-x-auto font-mono text-[15px] leading-7"
        }
      >
        <code key={language.id} className="code-swap">
          {language.code}
        </code>
      </pre>

      <table
        className={
          focus === "judge"
            ? "mt-6 w-full text-left font-mono text-sm"
            : "panel-dim mt-6 w-full text-left font-mono text-sm"
        }
      >
        <caption className="sr-only">
          Example test results for Climbing Stairs. Each one passed.
        </caption>
        <thead>
          <tr className="bench-quiet">
            <th scope="col" className="pr-6 pb-2 font-medium">
              Input
            </th>
            <th scope="col" className="pr-6 pb-2 font-medium">
              Output
            </th>
            <th scope="col" className="pb-2 font-medium">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {CASES.map(([input, output]) => (
            <tr key={input}>
              <td className="py-1.5 pr-6 tabular-nums">{input}</td>
              <td className="py-1.5 pr-6 tabular-nums">{output}</td>
              <td className="pass py-1.5">Passed</td>
            </tr>
          ))}
        </tbody>
      </table>

      <figcaption className="bench-quiet mt-6 max-w-[48ch] text-sm leading-relaxed">
        Example from the app. The editor and the judge run on your phone, not
        in this browser.
      </figcaption>
    </figure>
  );
}
