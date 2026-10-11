import { ApplyLink } from "@/components/apply-link";

const LANGUAGES = ["JavaScript", "Python", "Java"] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dot-field" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100dvh-var(--top-chrome))] max-w-[76rem] flex-col px-5 pt-16 pb-10 sm:pt-24">
        <div className="mx-auto flex w-full max-w-[40rem] flex-1 flex-col items-center text-center">
          <h1 className="text-[2rem] leading-[1.12] sm:text-[2.75rem]">
            Interview problems,{" "}
            <span className="text-lime-text">on your phone.</span>
          </h1>
          <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-quiet sm:text-lg">
            Write JavaScript, Python, or Java. Submit to the judge and see
            which tests passed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ApplyLink />
            <a href="#editor" className="btn btn-ghost">
              See the editor
            </a>
          </div>
        </div>
        <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-quiet sm:text-base">
          {LANGUAGES.map((language) => (
            <li key={language} className="font-heading tracking-[-0.02em]">
              {language}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
