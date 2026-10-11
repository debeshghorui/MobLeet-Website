import { AccessForm } from "@/components/access-form";
import { AccessPath } from "@/components/access-path";
import { ClarityFaq } from "@/components/clarity-faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ProgressSection } from "@/components/progress-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main">
        <Hero />
        <HowItWorks />
        <ProgressSection />
        <AccessPath />
        <ClarityFaq />
        <AccessForm />
      </main>
      <SiteFooter />
    </div>
  );
}
