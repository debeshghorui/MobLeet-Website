import { VerdictPanel } from "@/components/verdict-panel";

export function SubmitDemo() {
  return (
    <section aria-labelledby="verdict-heading">
      <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col justify-center border-t border-line px-5 py-16 lg:border-t-0 lg:px-[max(1.25rem,calc((100vw-76rem)/2+1.25rem))] lg:py-24">
          <h2
            id="verdict-heading"
            className="max-w-[12ch] text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl"
          >
            The judge tells you when you are done
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-quiet">
            Each submit runs your code against every test case. You see
            Accepted only when they all pass, or a clear wrong answer or error
            otherwise.
          </p>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-quiet">
            Climbing Stairs is a real easy problem from the app, with the same
            sample cases you will see in the editor.
          </p>
        </div>
        <div className="min-h-[28rem]">
          <VerdictPanel />
        </div>
      </div>
    </section>
  );
}
