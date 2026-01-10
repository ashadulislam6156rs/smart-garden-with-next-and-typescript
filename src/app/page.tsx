import Banner from "@/components/designs/home/Banner";
import Feature from "@/components/designs/home/Feature";
import HowItWorks from "@/components/designs/home/HowItWorks";
import SpecialOffers from "@/components/designs/home/SpecialOffers";
import Testimonials from "@/components/designs/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black flex-1">
      <main className="w-full mx-auto bg-base-100">
      <Banner></Banner>
        <HowItWorks></HowItWorks>
        <Feature></Feature>
        <Testimonials></Testimonials>
        <SpecialOffers></SpecialOffers>
      </main>
    </div>
  );
}
