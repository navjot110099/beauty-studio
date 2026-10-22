export type Service = {
  name: string;
  description: string;
  duration: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  intro: string;
  image: { id: string; alt: string };
  services: Service[];
};

export const categories: ServiceCategory[] = [
  {
    id: "facials",
    index: "01",
    title: "Facial Treatments",
    kicker: "Skin, read by hand",
    intro:
      "Every facial begins with a skin consultation under daylight lamps. We adjust products, pressure and pacing to what your skin is asking for that morning — never a fixed script.",
    image: { id: "1731514771613-991a02407132", alt: "Therapist applying a cooling mask during a facial" },
    services: [
      {
        name: "The Velora Signature Facial",
        description:
          "Our house ritual. Double cleanse, enzyme exfoliation, lymphatic sculpting massage and a mask blended for your skin on the day.",
        duration: "75 min",
        price: "£145",
        note: "Most booked",
      },
      {
        name: "Hydra Glow Infusion",
        description:
          "Vortex extraction and hyaluronic infusion for dull, dehydrated skin. Leaves a clean, glass-like finish with zero downtime.",
        duration: "60 min",
        price: "£125",
      },
      {
        name: "Sculpt & Lift",
        description:
          "Deep buccal and gua sha massage to release jaw tension and define the contours of the face. Ideal before an event.",
        duration: "90 min",
        price: "£175",
      },
      {
        name: "Calm Barrier Facial",
        description:
          "Fragrance-free, low-stimulation treatment for reactive or rosacea-prone skin, finished with a cold-stone ceramide mask.",
        duration: "60 min",
        price: "£115",
      },
      {
        name: "Express Radiance",
        description: "Cleanse, peel and finish in half an hour. A lunchtime reset that keeps the glow without the fuss.",
        duration: "30 min",
        price: "£70",
      },
    ],
  },
  {
    id: "hair",
    index: "02",
    title: "Hair Services",
    kicker: "Cut, colour, finish",
    intro:
      "Soft, lived-in colour and cuts designed around how you actually wear your hair. All hair services include a consultation, wash, head massage and finish.",
    image: { id: "1695527081848-1e46c06e6458", alt: "Stylist finishing a client's soft waves in the salon" },
    services: [
      {
        name: "Precision Cut & Finish",
        description: "A considered cut built for your texture and routine, with a lesson in styling it at home.",
        duration: "60 min",
        price: "from £95",
      },
      {
        name: "Lived-in Balayage",
        description:
          "Hand-painted, diffused colour that grows out softly for four to six months. Includes toner and bond protection.",
        duration: "3 hrs",
        price: "from £280",
        note: "Patch test required",
      },
      {
        name: "Gloss & Tone",
        description: "Refreshes faded colour, neutralises brass and adds mirror shine between colour appointments.",
        duration: "45 min",
        price: "£85",
      },
      {
        name: "Signature Blow-Dry",
        description: "Volume, smooth or undone waves — finished with a cool shot so it lasts for days.",
        duration: "45 min",
        price: "£55",
      },
      {
        name: "Restorative Bond Treatment",
        description: "Rebuilds broken bonds in coloured or heat-styled hair. Add to any service or book on its own.",
        duration: "30 min",
        price: "£60",
      },
      {
        name: "Occasion Hair & Up-do",
        description: "Sculpted chignons, soft Hollywood waves or a polished sleek pony for evenings and ceremonies.",
        duration: "75 min",
        price: "£120",
      },
    ],
  },
  {
    id: "makeup",
    index: "03",
    title: "Makeup",
    kicker: "Skin-first artistry",
    intro:
      "Our artists work skin-first: prep, then just enough coverage to look like you on your best day. Lashes, brows and lip are finished to suit the light you'll be seen in.",
    image: { id: "1709477542170-f11ee7d471a0", alt: "Makeup artist applying eye makeup with a fine brush" },
    services: [
      {
        name: "Editorial Makeup",
        description: "Camera-ready, luminous makeup for shoots, launches and portraits. Includes strip lashes.",
        duration: "60 min",
        price: "£110",
      },
      {
        name: "Bridal Makeup",
        description:
          "A full trial at the studio plus wedding-morning application, touch-up kit and lip to take with you.",
        duration: "2 sessions",
        price: "£420",
        note: "Includes trial",
      },
      {
        name: "Evening Glamour",
        description: "A defined eye, sculpted skin and long-wear lip for dinners, galas and late nights.",
        duration: "60 min",
        price: "£95",
      },
      {
        name: "Private Makeup Lesson",
        description:
          "One-to-one session with a senior artist. We edit your makeup bag and build a five-minute everyday face.",
        duration: "90 min",
        price: "£160",
      },
    ],
  },
  {
    id: "skin",
    index: "04",
    title: "Skin Treatments",
    kicker: "Clinical, never cold",
    intro:
      "Advanced, results-driven treatments carried out by our skin therapists in a calm, private suite. Courses are planned around your calendar and your skin's recovery.",
    image: { id: "1679581860295-f48874d8681a", alt: "Woman applying a serum to her cheek" },
    services: [
      {
        name: "Medical-grade Peel",
        description:
          "Lactic, mandelic or salicylic blends chosen for pigmentation, texture or congestion. Includes SPF and aftercare kit.",
        duration: "45 min",
        price: "£135",
      },
      {
        name: "Microneedling with Growth Factors",
        description: "Collagen induction for scarring, fine lines and enlarged pores, with numbing and LED recovery.",
        duration: "75 min",
        price: "£295",
        note: "Consultation required",
      },
      {
        name: "LED Light Therapy",
        description: "Red and near-infrared light to calm inflammation and support repair. Add on to any facial.",
        duration: "30 min",
        price: "£60",
      },
      {
        name: "Dermaplaning & Glow",
        description: "Removes vellus hair and dead skin for a smooth canvas, followed by a brightening vitamin C mask.",
        duration: "45 min",
        price: "£90",
      },
      {
        name: "Clarifying Back Facial",
        description: "Cleanse, steam, extraction and a clay mask for the back and shoulders. Ideal before summer.",
        duration: "60 min",
        price: "£110",
      },
    ],
  },
];

export const packages = [
  {
    name: "The Seasonal Reset",
    price: "£295",
    saving: "Save £45",
    duration: "3 hours",
    description: "An afternoon to reset skin and hair in one visit — our most-gifted package.",
    includes: ["Velora Signature Facial", "Gloss & Tone", "Signature Blow-Dry", "Herbal tea & take-home sample edit"],
    featured: true,
  },
  {
    name: "The Bridal Edit",
    price: "from £890",
    saving: "Bespoke",
    duration: "4 appointments",
    description: "Planned from six months out so your skin, hair and makeup arrive at their best on the day.",
    includes: [
      "Two hair & makeup trials",
      "Pre-wedding Sculpt & Lift facial",
      "Wedding-morning hair & makeup",
      "Touch-up kit and lip to keep",
    ],
    featured: false,
  },
  {
    name: "The Clarity Programme",
    price: "£780",
    saving: "Save £120",
    duration: "6 sessions · 12 weeks",
    description: "A structured course for pigmentation, congestion and uneven tone, with progress photography.",
    includes: [
      "Skin analysis & treatment plan",
      "Three medical-grade peels",
      "Three LED recovery sessions",
      "Home-care prescription",
    ],
    featured: false,
  },
];

export const pricingTiers = {
  levels: ["Stylist", "Senior Stylist", "Creative Director"],
  rows: [
    { service: "Precision Cut & Finish", prices: ["£95", "£120", "£165"] },
    { service: "Lived-in Balayage", prices: ["£280", "£330", "£410"] },
    { service: "Full Head Colour", prices: ["£140", "£165", "£210"] },
    { service: "Gloss & Tone", prices: ["£85", "£95", "£120"] },
    { service: "Signature Blow-Dry", prices: ["£55", "£65", "£85"] },
  ],
};

export const team = [
  {
    name: "Amélie Laurent",
    role: "Founder & Creative Director",
    focus: "Precision cutting, soft colour",
    years: "18 years",
    image: { id: "1544005313-94ddf0286df2", alt: "Portrait of Amélie Laurent, founder of Velora" },
  },
  {
    name: "Priya Nair",
    role: "Lead Skin Therapist",
    focus: "Peels, microneedling, barrier repair",
    years: "11 years",
    image: { id: "1667053508464-eb11b394df83", alt: "Portrait of Priya Nair, lead skin therapist" },
  },
  {
    name: "Sofia Marchetti",
    role: "Senior Colourist",
    focus: "Balayage, glosses, colour correction",
    years: "9 years",
    image: { id: "1582896911227-c966f6e7fb93", alt: "Portrait of Sofia Marchetti, senior colourist" },
  },
  {
    name: "Hannah Okafor",
    role: "Bridal & Editorial Artist",
    focus: "Bridal, editorial, skin prep",
    years: "8 years",
    image: { id: "1654765437547-6b572f52ee1a", alt: "Portrait of Hannah Okafor, makeup artist" },
  },
];

export const faqs = [
  {
    q: "Do I need to pay a deposit to book?",
    a: "Appointments over £100 are secured with a 50% deposit, which comes off your final bill. Shorter services are reserved with card details only.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for 48 hours' notice to move or cancel. Within 48 hours the deposit is kept; missed appointments are charged in full. Life happens — call us and we'll always try to help.",
  },
  {
    q: "I've never had a facial before. Which should I choose?",
    a: "Book the Velora Signature Facial. Your therapist will assess your skin at the start and adapt every step, so it works as a first treatment and a benchmark for future ones.",
  },
  {
    q: "Do you need a patch test before colour?",
    a: "Yes. New colour clients, and anyone who hasn't coloured with us in six months, need a quick patch test at least 48 hours beforehand. It takes five minutes and is free.",
  },
  {
    q: "Are your treatments safe during pregnancy?",
    a: "Many are. Our Calm Barrier Facial, blow-dries and makeup are pregnancy-safe; we avoid peels, microneedling and certain actives. Let us know when booking and we'll tailor everything.",
  },
  {
    q: "Which products do you use?",
    a: "We work with independent, clinically tested brands and our own Velora treatment blends. Everything we use on you is available to buy in the studio, without pressure.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes — physical cards from £50 or any treatment as a gift. They're valid for 12 months and can be used across every service.",
  },
];

export const testimonials = [
  {
    quote:
      "I've had facials in Paris, Seoul and New York. Nothing has come close to the way Priya reads skin — I walked out looking rested in a way no product has ever managed.",
    name: "Charlotte W.",
    detail: "Velora Signature Facial",
  },
  {
    quote:
      "Sofia gave me the colour I've been describing to hairdressers for a decade. Four months later it's still growing out beautifully. I've finally stopped looking.",
    name: "Imogen R.",
    detail: "Lived-in Balayage",
  },
  {
    quote:
      "Hannah made me feel like the calmest person in the building on my wedding morning. The makeup lasted through tears, dinner and a 2am dance floor.",
    name: "Aisha K.",
    detail: "The Bridal Edit",
  },
  {
    quote:
      "It's the quiet that gets you. No upselling, no rush, just people who are very, very good at what they do. My standing appointment is non-negotiable.",
    name: "Eleanor T.",
    detail: "Monthly Seasonal Reset",
  },
];
