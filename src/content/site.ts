/**
 * All website copy lives here, taken from content_prd.md.
 * Headings use `{X}` to mark a letter that is set in the swash script face,
 * e.g. "{S}paces into" renders a calligraphic S followed by "PACES INTO".
 */

export const brand = {
  name: "6 Designs",
  tagline: "Six Designs | Among Creativities",
  siteTitle: "6 Designs ensures Interior Design for Unique Transformations",
  shareTitle: "Transform your home or workspace with thoughtful design",
  shareDescription:
    "6 Designs delivers tailored solutions in interior design and construction, emphasizing creativity and client satisfaction for both home and commercial spaces.",
  metaDescription:
    "6 Designs specializes in interior design and construction, merging aesthetics with functionality in residential and commercial spaces tailored to client needs.",
  url: "https://6designs.org",
};

export const contact = {
  phone: "+880 1841 889 887",
  phoneHref: "tel:+8801841889887",
  email: "6designs327@gmail.com",
  emailHref: "mailto:6designs327@gmail.com",
  whatsapp: "https://wa.me/+8801841889887?text=Hello",
  addressLines: ["327, Road #22, Mohakhali DOHS", "Dhaka 1206, Bangladesh"],
  address: "327, Road #22, Mohakhali DOHS, Dhaka 1206, Bangladesh",
  mapEmbed:
    "https://www.google.com/maps?q=Road+22,+Mohakhali+DOHS,+Dhaka+1206,+Bangladesh&output=embed",
  socials: [
    { label: "Facebook", href: "https://facebook.com/6designsinterior" },
    { label: "WhatsApp", href: "https://wa.me/+8801841889887?text=Hello" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/about" },
  { label: "What we do", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const cta = {
  heading: ["Make an impact", "{T}oday"],
  button: { label: "Get Started", href: "/contact#inquiry" },
};

export const footer = {
  about:
    "6 Designs is dedicated to crafting experiences that empower individuals through thoughtful interior design and construction.",
  copyright: "© 2026 6 Designs. All rights reserved.",
  marquee: "{G}et in touch",
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    lines: ["Transform", "{S}paces into", "Experiences."],
    subheading:
      "Experience the perfect blend of design and functionality with our expert team at 6 Designs.",
    button: { label: "Get Started", href: "/contact#inquiry" },
    image: { src: "/images/hero-living-room.jpg", alt: "Living room interior designed by 6 Designs" },
  },

  about: {
    eyebrow: "Who we are",
    heading: ["{A}bout", "6 Designs"],
    paragraphs: [
      "6 Designs is an interior design and construction firm specializing in residential and commercial transformations that merge modern aesthetics with functional precision. The studio is built on a philosophy of creativity, detail, and client-focused delivery, ensuring every project is tailored to reflect the unique vision and lifestyle of its clients.",
      "At 6 Designs, spaces are treated as canvases for innovation. From layout design and 3D visualization to material selection and technical execution, the team transforms ideas into immersive environments — whether it's a stylish home renovation or a dynamic commercial workspace.",
    ],
    link: { label: "Learn More", href: "/about" },
    images: [
      { src: "/images/tv-wall-slats.jpg", alt: "Living room with timber slat TV wall, interior work in R#23, Mohakhali DOHS" },
      { src: "/images/dining-stone-wall.jpg", alt: "Dining area with stone feature wall and chandelier" },
    ],
    stats: [
      { value: 200, suffix: "+", label: "Projects" },
      { value: 90, suffix: "+", label: "Happy Clients" },
      { value: 2, suffix: "k+", label: "Drawings" },
      { value: 70, suffix: "+", label: "Partner Organizations" },
    ],
  },

  expertise: {
    eyebrow: "What we do",
    heading: "Our {E}xpertise",
    slides: [
      {
        tag: "Design",
        title: "Interior Design",
        description: "Space planning, mood boards, 2D layouts, and a 30-second to 3-minute 3D walkthrough.",
        accent: "Includes up to three design revisions per project.",
        note: "Living room with a custom TV and display wall.",
        image: { src: "/images/living-room-tv-wall.jpg", alt: "Living room with custom TV and display wall" },
        detail: { src: "/images/render-3d-walkthrough.jpg", alt: "3D interior visualization example" },
      },
      {
        tag: "Construction",
        title: "Construction & Development",
        description: "Civil works through finishing, with timeline, procurement and site management.",
        accent: "On-site supervision with QA and progress reporting.",
        note: "Interior construction site, from civil works to handover.",
        image: { src: "/images/dining-stone-wall.jpg", alt: "Finished dining area with stone wall" },
        detail: { src: "/images/construction-site.jpg", alt: "Interior construction site" },
      },
      {
        tag: "Joinery",
        title: "Custom Cabinetry & Kitchens",
        description: "Bespoke storage and modular kitchens, with Basic and Premium accessory options.",
        accent: "Made-to-measure storage, TV units, wardrobes and joinery.",
        note: "Modular kitchen with breakfast table.",
        image: { src: "/images/kitchen-dining.jpg", alt: "Custom cabinetry and modular kitchen" },
        detail: { src: "/images/tv-unit-wardrobe.jpg", alt: "Custom TV unit and wardrobe joinery" },
      },
      {
        tag: "Ceilings",
        title: "Partitioning & False Ceilings",
        description: "Gypsum and metal partitions, acoustic and decorative ceilings, with integrated lighting.",
        accent: "Partitions and ceilings designed together with the lighting plan.",
        note: "Corridor with decorative partition and false ceiling.",
        image: { src: "/images/corridor-partition.jpg", alt: "Corridor with decorative partition and false ceiling" },
        detail: { src: "/images/false-ceiling.jpg", alt: "Office partition and false ceiling" },
      },
      {
        tag: "Workspaces",
        title: "Commercial Fit-outs",
        description: "Turnkey workspace planning, brand-aligned finishes, reception and breakout areas.",
        accent: "Workspaces planned from layout to finishing.",
        note: "Executive office and meeting lounge.",
        image: { src: "/images/office-workspace.jpg", alt: "Commercial fit-out example" },
        detail: { src: "/images/office-lounge.jpg", alt: "Executive office with lounge seating" },
      },
      {
        tag: "Visualization",
        title: "3D Visualization & Walkthroughs",
        description: "Renders and MP4 walkthroughs that speed up client and contractor approvals.",
        accent: "30-second to 3-minute MP4 walkthroughs.",
        note: "3D render and walkthrough.",
        image: { src: "/images/render-3d-building.jpg", alt: "3D render of a residential building" },
        detail: { src: "/images/render-3d-walkthrough.jpg", alt: "3D render and walkthrough" },
      },
    ],
  },

  packages: {
    eyebrow: "Packages",
    heading: ["Flexible", "{P}ackages"],
    intro:
      "Design-led and delivery-focused, blending creativity with function — from smart space planning to finished construction.",
    link: { label: "Learn More", href: "/services" },
    note: "* Prices are given in BDT.",
    background: { src: "/images/office-lounge.jpg", alt: "" },
    cards: [
      {
        title: "Designing",
        description:
          "2D drawings, high-quality 3D renders and a 3D MP4 walkthrough, with up to three revisions.",
        price: "from 20,000 BDT",
        image: { src: "/images/render-3d-walkthrough.jpg", alt: "3D visualization on screen" },
      },
      {
        title: "Basic",
        description:
          "Melamine boards, PVC boards, locally sourced hardware, and standard lighting fixtures.",
        price: "from 2,00,000 BDT",
        image: { src: "/images/kitchenette.jpg", alt: "Kitchenette with breakfast table" },
      },
      {
        title: "Custom",
        description:
          "Tailored interior solutions for kitchens, living areas, bedrooms, and offices.",
        price: "from 800 BDT per SFT",
        image: { src: "/images/kitchen-lounge.jpg", alt: "Kitchen opening onto a lounge" },
      },
      {
        title: "Premium",
        description:
          "XPL panels, acrylic boards, high-quality hardware, and high-end lighting fixtures.",
        price: "from 4,50,000 BDT",
        image: { src: "/images/studio-bedroom.jpg", alt: "Bedroom suite with lounge seating" },
      },
    ],
  },

  furniture: {
    eyebrow: "Furniture",
    heading: "Made to {M}easure",
    text:
      "Crafted for those who appreciate the finer things, our collection marries elegant, luxurious materials with exquisite finishing. We bridge the gap between high-fashion aesthetics and everyday livability, creating pieces that are designed with both luxury and comfort in mind. This is furniture that feels as exceptional as it looks.",
    link: { label: "Learn More", href: "/services" },
    items: [
      {
        title: ["Storage"],
        description: "Elegant, luxurious materials with exquisite finishing.",
        image: { src: "/images/wardrobe-study.jpg", alt: "Built-in storage and study desk" },
      },
      {
        title: ["TV Units"],
        description: "High-fashion aesthetics meet everyday livability.",
        image: { src: "/images/tv-unit-wardrobe.jpg", alt: "Custom TV unit with wardrobe" },
      },
      {
        title: ["Wardrobes"],
        description: "Designed with both luxury and comfort in mind.",
        image: { src: "/images/wardrobe-mirror.jpg", alt: "Full-height wardrobe with mirror panel" },
      },
      {
        title: ["Joinery"],
        description: "Furniture that feels as exceptional as it looks.",
        image: { src: "/images/wood-wall-pendants.jpg", alt: "Timber wall cladding with pendant lights" },
      },
    ],
  },

  contact: {
    eyebrow: "Contact us",
    heading: ["Make an impact", "{T}oday"],
    text: "Reach out for personalized design solutions. Tell us about your space and we'll guide you through the next steps.",
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  meta: {
    title: "About 6 Designs",
    description:
      "6 Designs is an interior design firm that combines innovation and functionality to create transformative spaces.",
  },
  hero: {
    lines: ["{A}bout", "us"],
    subheading: "A premier interior design company focused on innovation and functionality.",
    image: { src: "/images/living-room-lounge.jpg", alt: "Living room with lounge seating and full-height curtains" },
  },
  intro: {
    eyebrow: "Who we are",
    heading: ["{D}esign with", "Purpose"],
    text:
      "6 Designs is an interior design and construction company that combines modern aesthetics with practical solutions for living and working spaces. The team aims to reflect each client's vision in every project.",
    images: [
      { src: "/images/studio-bedroom.jpg", alt: "Bedroom suite designed by 6 Designs" },
      { src: "/images/wardrobe-mirror.jpg", alt: "Wardrobe with mirror panel" },
    ],
  },
  values: [
    {
      title: "Innovation",
      text: "Modular, customizable packages that adapt to each client's needs.",
      image: { src: "/images/kitchen-lounge.jpg", alt: "Kitchen and lounge with modular joinery" },
    },
    {
      title: "Detail Orientation",
      text: "Precision in every project — work that is both visually striking and technically sound.",
      image: { src: "/images/wood-wall-pendants.jpg", alt: "Timber wall detail with pendant lights" },
    },
  ],
  portfolio: { src: "/images/dining-stone-wall.jpg", alt: "Portfolio of 6 Designs" },
  vision: {
    title: "Vision",
    text: "To be a leading creative force in Bangladesh's design industry.",
  },
  mission: {
    title: "Mission",
    text: "To turn spaces into experiences through designs that inspire, empower and last.",
  },
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = {
  meta: {
    title: "What we do",
    description:
      "Tailored interior solutions that combine creativity and function for homes and businesses.",
  },
  hero: {
    lines: ["Our", "{E}xpertise"],
    subheading:
      "Design-led and delivery-focused, blending creativity with function. End-to-end services: planning, 3D tours, civil works, partitions, custom cabinetry and construction management.",
    buttons: [
      { label: "Request a Quote", href: "#inquiry" },
      { label: "See Pricing", href: "#pricing" },
    ],
    image: { src: "/images/office-workspace.jpg", alt: "Commercial workspace fit-out" },
  },
  quickFacts: [
    "Direct-to-client delivery — no showroom markup",
    "Up to 3 design revisions included",
    "On-site supervision with QA and progress reporting",
    "Flexible packages: Basic, Premium and Custom per-SFT",
  ],
  core: {
    eyebrow: "Core services",
    heading: ["What we", "{D}o"],
    items: [
      {
        title: "Interior Design",
        text: "Space planning, mood boards, 2D layouts, 30-second to 3-minute 3D walkthrough.",
        image: { src: "/images/render-3d-building.jpg", alt: "3D interior visualization example" },
      },
      {
        title: "Construction & Development",
        text: "Civil works through finishing, with timeline, procurement and site management.",
        image: { src: "/images/construction-site.jpg", alt: "Interior construction site" },
      },
      {
        title: "Cabinetry & Modular Kitchens",
        text: "Bespoke storage, with Basic and Premium accessory options.",
        image: { src: "/images/modular-kitchen.jpg", alt: "Custom cabinetry and modular kitchen" },
      },
      {
        title: "Partitioning & False Ceilings",
        text: "Gypsum and metal partitions, acoustic and decorative ceilings, integrated lighting.",
        image: { src: "/images/false-ceiling.jpg", alt: "Office partition and false ceiling" },
      },
      {
        title: "Commercial Fit-outs",
        text: "Turnkey workspace planning, brand-aligned finishes, reception and breakout areas.",
        image: { src: "/images/retail-fitout.jpg", alt: "Commercial fit-out example" },
      },
      {
        title: "3D Visualization & Walkthroughs",
        text: "Renders and MP4 walkthroughs to speed up client and contractor approvals.",
        image: { src: "/images/render-3d-walkthrough.jpg", alt: "3D render and walkthrough" },
      },
    ],
  },
  technical: {
    title: "Technical & site services",
    items: [
      "Civil works",
      "Electrical and plumbing rough-ins (fixtures paid by the client unless specified)",
      "On-site supervision",
    ],
  },
  finishes: {
    title: "Finishes & furnishings",
    items: [
      "Wall finishes",
      "Flooring coordination",
      "Made-to-measure furniture: storage, TV units, wardrobes, joinery",
    ],
  },
  pricing: {
    eyebrow: "Pricing (approx., BDT)",
    heading: ["Budget", "{T}able"],
    design: {
      label: "Designing Packages",
      description:
        "Each project includes detailed 2D drawings, high‑quality 3D rendered images, and a 30‑second to 3‑minute 3D MP4 walkthrough. Clients are entitled to up to three (3) revisions per project.",
      includes: [
        "Smart space planning and zoning",
        "Conceptual mood boards and material palettes",
        "Detailed 2D layouts with furniture and fixture placement",
        "Realistic 3D visualization and guided walkthrough",
        "Iterative design refinements based on client feedback",
      ],
      table: {
        columns: ["Area (SFT)", "Approx Budget"],
        rows: [
          ["200 – 800", "20,000 – 60,000"],
          ["850 – 1600", "65,000 – 1,00,000"],
          ["1650 – 3000", "1,10,000 – 1,50,000"],
          ["3000+", "Please Call"],
        ],
      },
    },
    construction: {
      label: "Construction Packages",
      tiers: [
        {
          name: "Basic",
          description:
            "Includes melamine boards, PVC boards, locally sourced hardware, and standard lighting fixtures.",
          columns: ["Floor Area (SFT)", "Budget"],
          rows: [
            ["400 – 800", "2,00,000 – 4,50,000"],
            ["850 – 1600", "5,10,000 – 9,20,000"],
            ["1650 – 2600", "10,50,000 – 17,00,000"],
            ["2600+", "Please Call"],
          ],
        },
        {
          name: "Custom",
          description: "Tailored interior solutions for kitchens, living areas, bedrooms, and offices.",
          columns: ["Space", "Basic (BDT per SFT)", "Premium (BDT per SFT)"],
          rows: [
            ["Kitchen", "1200", "3200"],
            ["Living Area", "800", "2000"],
            ["Bedroom", "800", "2000"],
            ["Office Space", "800", "2000"],
          ],
        },
        {
          name: "Premium",
          description:
            "Includes XPL panels, acrylic boards, high-quality hardware, and high-end lighting fixtures.",
          columns: ["Floor Area (SFT)", "Budget"],
          rows: [
            ["400 – 800", "4,50,000 – 9,00,000"],
            ["850 – 1600", "10,50,000 – 18,00,000"],
            ["1650 – 2600", "19,00,000 – 30,00,000"],
            ["2600+", "Please Call"],
          ],
        },
      ],
    },
    note: "* Prices are given in BDT.",
  },
  deliverables: {
    title: "Deliverables",
    items: [
      "2D drawings",
      "High-quality 3D renders",
      "30-second to 3-minute MP4 walkthrough",
      "Up to 3 revisions per project",
    ],
  },
  scope: {
    title: "Scope clarification",
    items: [
      { label: "Design covers", text: "Electrical, plumbing, AC vents and the 3D plan" },
      { label: "Construction covers", text: "Lights and wiring only" },
      { label: "Excluded unless specified", text: "Floors and fixtures" },
    ],
  },
  closing: {
    heading: ["Ready to transform", "your {S}pace"],
  },
};

export const inquiry = {
  eyebrow: "Inquiry",
  heading: ["Send an", "{I}nquiry"],
  text: "Share a few details about your project. Submissions go to 6designs327@gmail.com.",
  serviceTypes: ["Design", "Construction"],
  packages: ["Basic", "Premium", "Custom"],
  customAreas: ["Kitchen", "Living Area", "Bedroom", "Office Space"],
  customTiers: ["Basic", "Premium"],
  button: "Send Inquiry",
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contactPage = {
  meta: {
    title: "Contact",
    description:
      "Contact 6 Designs for interior design and construction in Dhaka — call +880 1841 889 887 or email 6designs327@gmail.com.",
  },
  hero: {
    lines: ["{G}et in", "Touch"],
    subheading: "Reach out for personalized design solutions.",
    image: { src: "/images/kitchen-lounge.jpg", alt: "Open kitchen and lounge interior" },
  },
  details: {
    eyebrow: "Contact us",
    heading: ["Visit the", "{S}tudio"],
  },
  faq: {
    eyebrow: "FAQ",
    heading: ["Common", "{Q}uestions"],
    items: [
      {
        q: "What services do you offer?",
        a: "Interior design and construction for residential and commercial projects.",
      },
      {
        q: "What is your design process?",
        a: "Consultation, then design refinement, then technical execution.",
      },
      {
        q: "Do you offer customizable packages?",
        a: "Yes — our packages are modular and can be tailored to your needs.",
      },
      {
        q: "How do you ensure client satisfaction?",
        a: "Through transparent communication and detailed execution.",
      },
    ],
  },
};
