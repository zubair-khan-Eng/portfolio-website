import { Footer } from "@/components/portfolio/Footer";
import { HomeSections } from "@/components/portfolio/HomeSections";
import { Navbar } from "@/components/portfolio/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
