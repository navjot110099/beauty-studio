import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { CategoryNav } from "@/components/services/CategoryNav";
import { ServiceCategorySection } from "@/components/services/ServiceCategorySection";
import { Packages } from "@/components/services/Packages";
import { PricingGuide } from "@/components/services/PricingGuide";
import { Team } from "@/components/services/Team";
import { Faq } from "@/components/services/Faq";
import { BookingForm } from "@/components/services/BookingForm";
import { BookingProvider } from "@/components/services/BookingContext";
import { categories } from "@/lib/data";
import { unsplash } from "@/lib/utils";

const description =
  "The Velora treatment menu: signature facials, lived-in balayage, editorial and bridal makeup, and advanced skin treatments — with durations, prices and online appointment requests.";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Pricing — Velora Beauty",
    description,
    url: "/services",
    images: [{ url: unsplash("1761718210089-ba3bb5ccb54f", 1200, 630), width: 1200, height: 630, alt: "Facial treatment at Velora" }],
  },
};

export default function ServicesPage() {
  return (
    <BookingProvider>
      <ServicesHero />
      <CategoryNav />
      {categories.map((c, i) => (
        <ServiceCategorySection key={c.id} category={c} flip={i % 2 === 1} />
      ))}
      <Packages />
      <PricingGuide />
      <Team />
      <Faq />
      <BookingForm />
    </BookingProvider>
  );
}
