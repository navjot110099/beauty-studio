import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { SignatureRituals } from "@/components/home/SignatureRituals";
import { CategoryList } from "@/components/home/CategoryList";
import { Studio } from "@/components/home/Studio";
import { EditorialBreak } from "@/components/home/EditorialBreak";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { BookingCta } from "@/components/home/BookingCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SignatureRituals />
      <CategoryList />
      <Studio />
      <EditorialBreak />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <InstagramGrid />
      <BookingCta />
    </>
  );
}
