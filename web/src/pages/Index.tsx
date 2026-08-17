import { DownloadCta } from "@/components/site/DownloadCta";
import { Faq } from "@/components/site/Faq";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Nav } from "@/components/site/Nav";
import { Sports } from "@/components/site/Sports";
import { Stats } from "@/components/site/Stats";
import { Steps } from "@/components/site/Steps";
import { Testimonials } from "@/components/site/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Steps />
        <Sports />
        <Stats />
        <Features />
        <Testimonials />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
