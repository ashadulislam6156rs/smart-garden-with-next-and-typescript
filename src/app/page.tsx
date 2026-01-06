import Banner from "@/components/designs/home/Banner";
import HowItWorks from "@/components/designs/home/HowItWorks";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black flex-1">
      <main className="w-full mx-auto bg-base-100">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      </main>
    </div>
  );
}
