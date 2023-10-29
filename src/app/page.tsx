import BannerPrincipal from "@/components/containers/banner-principal";
import About from "@/components/containers/about";
import BannerStatistics from "@/components/containers/banner-statistics";
import Benefits from "@/components/containers/benefits";
import Experience from "@/components/containers/experience";
import Testimonials from "@/components/containers/testimonials";
import home from "@/utils/data/home.json";

export default function HomePage() {
  return (
    <main>
      <BannerPrincipal />
      <About />
      <BannerStatistics />
      <Benefits benefits={home.benefits} />
      <Experience experience={home.experience} />
      <Testimonials testimonials={home.testimonials} />
    </main>
  );
}
