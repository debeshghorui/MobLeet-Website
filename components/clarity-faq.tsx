const ITEMS = [
  {
    q: "Can I solve problems on this website?",
    a: "No. The editor and the judge live in the MobLeet app. This page shows an example and takes testing applications.",
  },
  {
    q: "Is there a public download?",
    a: "Not yet. Apply with the form. If a spot opens, we email install instructions for iOS or Android.",
  },
  {
    q: "What do I need on the phone?",
    a: "An iPhone or Android phone, and a GitHub or Google account. In the editor you pick JavaScript, Python, or Java.",
  },
] as const;

export function ClarityFaq() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-line" aria-labelledby="faq-title">
      <div className="mx-auto max-w-[76rem] px-5 py-16 lg:py-24">
        <h2 id="faq-title" className="text-4xl leading-[1.1] sm:text-5xl">
          Before you apply
        </h2>
        <div className="mt-8 max-w-[46rem]">
          {ITEMS.map((item) => (
            <article key={item.q} className="border-t border-line py-7">
              <h3 className="text-xl leading-snug">{item.q}</h3>
              <p className="mt-2 max-w-[58ch] text-base leading-relaxed text-quiet">
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
