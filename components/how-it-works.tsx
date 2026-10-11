"use client";

import { useState } from "react";

import { ProblemBench } from "@/components/problem-bench";

const TABS = [
  {
    id: "problems",
    label: "Problems",
    title: "Pick a problem",
    detail:
      "Search the list and filter by Easy, Medium, or Hard. Each problem has a description, examples, constraints, and hints.",
    points: [
      "Easy, Medium, and Hard filters",
      "Description, examples, and constraints",
      "Hints when you want them",
    ],
  },
  {
    id: "editor",
    label: "Editor",
    title: "Write in the editor",
    detail:
      "Open JavaScript, Python, or Java. The starter is already there. You type the solution on the phone.",
    points: [
      "JavaScript, Python, or Java",
      "A starter is already in the file",
      "You type the solution on the phone",
    ],
  },
  {
    id: "judge",
    label: "Judge",
    title: "Submit to the judge",
    detail:
      "One tap runs every test. The problem counts as solved only when they all pass.",
    points: [
      "One tap runs every test",
      "Solved only when they all pass",
    ],
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function HowItWorks() {
  const [tab, setTab] = useState<TabId>("problems");
  const active = TABS.find((item) => item.id === tab) ?? TABS[0];

  return (
    <section id="how" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[76rem] px-5 py-20 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-[16ch] text-4xl leading-[1.1] sm:text-5xl">
            What you do in the app
          </h2>
          <div
            role="tablist"
            aria-label="Parts of the app"
            className="flex w-max max-w-full gap-1 overflow-x-auto rounded-full border border-line p-1"
            onKeyDown={(event) => {
              const index = TABS.findIndex((item) => item.id === tab);
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const next =
                event.key === "ArrowRight"
                  ? TABS[(index + 1) % TABS.length]
                  : TABS[(index - 1 + TABS.length) % TABS.length];
              setTab(next.id);
              document.getElementById(`tab-${next.id}`)?.focus();
            }}
          >
            {TABS.map((item) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                type="button"
                role="tab"
                className="tab"
                aria-selected={item.id === tab}
                aria-controls={`panel-${item.id}`}
                tabIndex={item.id === tab ? 0 : -1}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
          >
            <h3 className="text-2xl leading-tight sm:text-3xl">{active.title}</h3>
            <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-quiet">
              {active.detail}
            </p>
            <ul className="mt-8 grid gap-4">
              {active.points.map((point) => (
                <li key={point} className="border-t border-line pt-4 text-base">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ProblemBench focus={tab} />
        </div>
      </div>
    </section>
  );
}
