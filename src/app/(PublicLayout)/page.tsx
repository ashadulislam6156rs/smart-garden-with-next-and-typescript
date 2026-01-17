import UserCard from "@/components/auth/UserCard";
import AboutSmartGarden from "@/components/designs/home/AboutSmartGarden";
import Banner from "@/components/designs/home/Banner";
import BlogSection from "@/components/designs/home/BlogSection";
import Feature from "@/components/designs/home/Feature";
import HowItWorks from "@/components/designs/home/HowItWorks";
import SpecialOffers from "@/components/designs/home/SpecialOffers";
import Testimonials from "@/components/designs/home/Testimonials";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <div className="bg-black flex-1">
      <main className="w-full mx-auto bg-base-100">
        <Banner></Banner>
        <SpecialOffers></SpecialOffers>
        <BlogSection></BlogSection>
        <HowItWorks></HowItWorks>
        <Feature></Feature>
        <Testimonials></Testimonials>
        <AboutSmartGarden></AboutSmartGarden>
      </main>
    </div>
  );
}
