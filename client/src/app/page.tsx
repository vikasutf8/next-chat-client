import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";
import { get } from "http";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOption, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session :CustomSession |null = await getServerSession(authOption)
  return (
<div className="min-h-screen bg-base-200 flex flex-col">
    <Navbar user={session?.user}/>
    <HeroSection/>
    <FeatureSection/>
    <UserReviews/>
    <Footer/>
</div>
  );
}
