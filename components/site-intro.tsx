export function SiteIntro() {
  return (
    <div className="border-b border-line">
      <div className="mx-auto grid max-w-[76rem] gap-8 px-5 py-8 md:grid-cols-2 md:gap-16">
        <p className="max-w-[36ch] text-base leading-relaxed text-quiet">
          You are on the MobLeet website. You cannot solve problems in the
          browser here.
        </p>
        <p className="max-w-[36ch] text-base leading-relaxed text-quiet md:justify-self-end">
          The app runs on iPhone and Android. Apply below, and we email you if
          a testing spot opens.
        </p>
      </div>
    </div>
  );
}
