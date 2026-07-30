// Central content store — reproduced from pfdomesticsolutions.com (WordPress/Elementor).
// Imagery: real job photos under /Job-Photos, stock under /Stock-Marketing-Images,
// legacy WP thumbs under /Site-Images (kept where still useful), brand under /Brand-Assets.
// remotePatterns for pfdomesticsolutions.com stays configured as a hotlink fallback.

export const site = {
  name: "P&F Domestic Solutions",
  phone: "07943 343969",
  phoneHref: "tel:+447943343969",
  phoneDisplay: "+44 7943 343969",
  email: "admin@pfdomesticsolutions.com",
  facebook:
    "https://www.facebook.com/people/PF-Domestic-Solutions-LTD/61550506768914/",
  instagram: "https://www.instagram.com/pf_domestic_solutions/",
  /** Derived from site.phone (+44 7943 343969 → 447943343969). */
  whatsapp: "https://wa.me/447943343969",
};

export const images = {
  /** Full wordmark — dark + gold on transparent; for light/white chrome (header). */
  logo: "/Brand-Assets/Logo-Files/logo.png",
  /** Icon mark — light + gold on transparent; for dark/charcoal chrome (footer). */
  logoOnDark: "/Brand-Assets/Logo-Files/PF-Logo-Dark-Transparent.png",
  /** Homepage hero — finished garden room lit at dusk. */
  home: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-01.jpeg",
  /** House refurbishments — finished cream shaker kitchen reno (alt angle from kitchens service). */
  refurb:
    "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View2.jpeg",
  kitchen:
    "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View1.jpeg",
  /** No loft job photos yet — loft bedroom stock (cropped full-bleed; source had white canvas margins). */
  loft: "/Stock-Marketing-Images/Stock-Loft-Bedroom-Interior-FullBleed.webp",
  extension:
    "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-01.jpeg",
  /** Garage conversions — near-finished open-plan interior (folder’s other shot is mid-build electrics). */
  garage:
    "/Job-Photos/House-Extension-Build/Extension-Interior-Open-Plan-Skylight.jpeg",
  garden:
    "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Painted-Cladding.jpeg",
  doors:
    "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-French-Doors-Evening.webp",
  /** Shared area-page PageHeader — landscape finished exterior (1600×1200) for 100vw cover. */
  area: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Painted-Cladding.jpeg",
  /** Plumbing & electrical — first-fix electrics on a stud wall. */
  plumbingElectrical:
    "/Job-Photos/Extension-Interior-Fit-Out/Interior-First-Fix-Electrics-Stud-Wall.jpeg",
  /** Wet room / bathroom plumbing — accessible shower install. */
  wetRoom:
    "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Grab-Rails-View1.jpeg",
  /** General building & maintenance — finished garden landscaping / outdoor works. */
  generalBuilding:
    "/Job-Photos/Garden-Landscaping/Garden-Lawn-Hedge-Path-Bollard-Lights-01.jpeg",
  /** Bespoke joinery / carpentry detail. */
  joinery: "/Job-Photos/Bespoke-Joinery/Bespoke-Storage-Bench-View1.jpeg",
  about: "/Site-Images/about.jpg",
  contact: "/Site-Images/contact.jpg",
  /** CTA band background — finished garden room at dusk. */
  banner:
    "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-01.jpeg",
  oxford: "/Site-Images/oxford.png",
  news: "/Site-Images/news.png",
};

export type Accreditation = {
  name: string;
  src: string;
  width: number;
  height: number;
};

/** Trade accreditations & memberships, shown as a trust strip in the footer. */
export const accreditations: Accreditation[] = [
  {
    name: "Gas Safe Register",
    src: "/Brand-Assets/Accreditation-Logos/Gas-Safe-Register-Logo.png",
    width: 860,
    height: 995,
  },
  {
    name: "NICEIC Approved Contractor",
    src: "/Brand-Assets/Accreditation-Logos/NICEIC-Approved-Contractor-Logo.jpg",
    width: 1024,
    height: 639,
  },
  {
    name: "BNI Member",
    src: "/Brand-Assets/Accreditation-Logos/BNI-Logo.png",
    width: 1280,
    height: 800,
  },
  {
    name: "Grafters Super Group",
    src: "/Brand-Assets/Accreditation-Logos/Grafters-Super-Groups-Logo.png",
    width: 204,
    height: 192,
  },
];

export type Service = {
  slug: string;
  title: string;
  pageHeading: string;
  cardBlurb: string;
  image: string;
  intro: string;
  paragraphs: string[];
  ctaHeading: string;
};

export const services: Service[] = [
  {
    slug: "house-refurbishments",
    title: "House Refurbishments",
    pageHeading: "House Refurbishments",
    cardBlurb:
      "We have refurbished properties from various periods and have a deep understanding of the different construction methods used throughout the years.",
    image: images.refurb,
    intro: "Home Refurbishments by P&F Domestic Solutions",
    paragraphs: [
      "Transform your home with P&F Domestic Solutions’ expert refurbishment services. Whether you’re looking to modernise your property, restore its original charm, or completely reconfigure your space, our skilled team is here to deliver high-quality results tailored to your needs.",
      "We specialise in all aspects of home refurbishments, including structural alterations, new kitchens and bathrooms, flooring, plastering, and decorating. With experience working on properties from various periods, we understand different construction methods and ensure that every detail complements your home’s character while meeting modern standards.",
      "Our team manages the entire refurbishment process, from initial consultation and design to project completion, ensuring a smooth and stress-free experience. We use only high-quality materials and work with trusted tradespeople, guaranteeing a professional finish that adds value and comfort to your home.",
      "Whether you’re updating a single room, having a garage conversion, loft conversion or renovating your entire property, we provide expert guidance and a personalised approach to achieve your vision. Our commitment to craftsmanship and customer satisfaction ensures a stunning transformation that enhances both aesthetics and functionality.",
    ],
    ctaHeading:
      "P&F Domestic Solutions breathes new life into your home. Contact us today for a consultation and a free, no-obligation quote.",
  },
  {
    slug: "house-extentions",
    title: "House Extensions",
    pageHeading: "Custom Home Extensions in Harrow: P&F Domestic Solutions",
    cardBlurb:
      "With extensive experience in all types of extensions, we provide valuable insights to help you maximise the potential of your space.",
    image: images.extension,
    intro: "Home Extensions by P&F Domestic Solutions",
    paragraphs: [
      "Bespoke Home Extensions in Harrow to Boost Space & Value.",
      "We manage every aspect of your extension project, from initial planning and design to construction and final finishes. Our team works closely with architects, structural engineers, and interior designers to ensure a seamless and stress-free process. We handle all necessary permissions, comply with building regulations, and use only the highest quality materials to guarantee durability and long-lasting results.",
      "With years of experience in all types of extensions, including rear, side, wraparound, and double-storey designs, we provide expert advice to help you make the most of your space. Our commitment to excellent craftsmanship and customer satisfaction means your extension will blend perfectly with your existing home while offering the extra room you need.",
    ],
    ctaHeading:
      "Let P&F Domestic Solutions transform your home with a beautifully designed extension. Contact us today for a consultation and a free quote.",
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    pageHeading: "Bespoke Loft Conversions in Harrow - P&F Domestic Solutions",
    cardBlurb:
      "We have extensive experience in delivering loft conversions that are carefully tailored to meet your specific needs, ensuring that every detail is customised to enhance your space and lifestyle.",
    image: images.loft,
    intro: "Loft Conversions by P&F Domestic Solutions",
    paragraphs: [
      "Maximise your home’s potential with a bespoke loft conversion from P&F Domestic Solutions. Whether you need an extra bedroom, a home office, or a stylish living space, we can transform your unused attic into a beautiful, functional area tailored to your needs.",
      "With years of experience in loft conversions, we handle everything from design and planning to construction and finishing touches. Our team works closely with architects and structural engineers to ensure your new space is safe, compliant with building regulations, and seamlessly integrated with your existing home.",
      "We offer a range of loft conversion styles, including dormer, Velux, hip-to-gable, and mansard conversions, helping you choose the best option based on your property type and requirements. Our expert craftsmanship, high-quality materials, and attention to detail ensure a stunning result that enhances both comfort and property value.",
      "From the initial consultation to project completion, we provide a smooth and stress-free process, keeping you informed every step of the way. Let P&F Domestic Solutions turn your loft into a stylish and practical space.",
    ],
    ctaHeading:
      "Contact P&F Domestic Solutions today for expert advice and a free, no-obligation quote!",
  },
  {
    slug: "garage-conversions",
    title: "Garage Conversions",
    pageHeading: "Garage Conversions in Harrow | P&F Domestic Solutions",
    cardBlurb:
      "P&F Domestic Solutions specialises in garage conversions, transforming underutilised spaces into functional, stylish rooms. Whether you need an extra bedroom, home office, or living area, our team handles every detail, ensuring a seamless, high-quality conversion that maximizes your space and adds value to your home.",
    image: images.garage,
    intro: "Garage Conversions by P&F Domestic Solutions",
    paragraphs: [
      "Transform your underused garage into a stylish and functional living space with P&F Domestic Solutions. Whether you need an extra bedroom, home office, gym, or playroom, our expert team can convert your garage into a high-quality, fully integrated extension of your home.",
      "We handle every aspect of the conversion process, from planning and design to construction and finishing touches. Our team ensures that your new space is structurally sound, well-insulated, and fully compliant with building regulations. We work closely with you to create a design that maximises space and enhances your home’s functionality.",
      "Garage conversions are a cost-effective way to add value and usable space to your property without the need for a full extension. With our experience in home improvements, we ensure a seamless integration with your existing layout, delivering a high-quality finish that complements your home’s style.",
      "At P&F Domestic Solutions we can also discuss the possibilities of a loft conversion or garden room to create even more living space. Let P&F Domestic Solutions help you unlock the potential of your garage with a custom conversion tailored to your needs.",
    ],
    ctaHeading: "Contact us today for expert advice and a free, no-obligation quote!",
  },
  {
    slug: "kitchens-and-bathrooms",
    title: "Kitchens & Bathrooms",
    pageHeading: "Kitchens & Bathrooms",
    cardBlurb:
      "Many of the extensions and refurbishments we complete include the design and installation of both modern and traditional kitchens and bathrooms, tailored to suit your style and needs.",
    image: images.kitchen,
    intro: "Kitchens & Bathrooms by P&F Domestic Solutions",
    paragraphs: [
      "Upgrade your home with a beautifully designed kitchen or bathroom from P&F Domestic Solutions. As two of the most important spaces in any home, we ensure your kitchen and bathroom are not only stylish but also practical, durable, and tailored to your lifestyle.",
      "Our expert team specialises in both modern and traditional designs, working closely with you to create a space that meets your vision. From bespoke cabinetry and high-end fixtures to efficient layouts and premium materials, we handle every detail to deliver a seamless and stunning transformation.",
      "We manage the entire process, including design, plumbing, electrical work, tiling, and installation, ensuring everything is completed to the highest standard. Whether you’re looking for a sleek, contemporary kitchen, a luxurious spa-like bathroom, or a timeless classic design, we have the expertise to bring your ideas to life.",
      "With years of experience in home refurbishments, we understand how to make the most of your space while ensuring all work meets current building regulations. Our commitment to quality craftsmanship and customer satisfaction guarantees a flawless finish that enhances both comfort and property value.",
    ],
    ctaHeading:
      "Contact P&F Domestic Solutions today for a free consultation and let us create the perfect kitchen or bathroom for your home!",
  },
  {
    slug: "garden-rooms",
    title: "Garden Rooms",
    pageHeading:
      "Bespoke Insulated Garden Rooms in Harrow | PF Domestic Solutions",
    cardBlurb:
      "P&F Domestic Solutions creates beautiful, bespoke garden rooms designed to suit your needs. Whether it’s a home office, studio, or relaxation space, our team delivers high-quality, functional garden rooms that seamlessly blend with your outdoor environment, providing a perfect addition to your home.",
    image: images.garden,
    intro: "Garden Rooms by P&F Domestic Solutions",
    paragraphs: [
      "Create the perfect outdoor retreat with a bespoke garden room from P&F Domestic Solutions. Whether you need a home office, gym, studio, or relaxation space, our expertly crafted garden rooms provide a stylish, functional extension of your home, designed to suit your needs.",
      "Built with high-quality materials and excellent insulation, our garden rooms are comfortable, energy-efficient, and suitable for year-round use. We offer a range of designs, from contemporary to traditional, ensuring a seamless fit with your outdoor space.",
      "Our team handles the entire process, including design, groundwork, construction, and finishing touches, delivering a hassle-free experience from start to finish. With minimal disruption to your home, we create durable and beautifully designed garden rooms that enhance both your lifestyle and property value.",
      "Garden rooms, loft conversions and garage conversions are all fantastic ways to maximise your living space without the need for a full extension. Whether for work, leisure, or entertaining, we’ll help you design the perfect space to suit your requirements.",
    ],
    ctaHeading:
      "Contact P&F Domestic Solutions today for expert advice and a free, no-obligation quote!",
  },
];

export const faqs = [
  {
    q: "How long will my project take to complete?",
    a: "The duration of your project depends on its scope and complexity. Typically, smaller projects like renovations or extensions can take a few weeks, while larger builds may take several months. We’ll provide a detailed timeline during the planning phase.",
  },
  {
    q: "How much will my project cost?",
    a: "Costs vary depending on the size and type of the project. We provide transparent quotes based on a detailed assessment, including potential unforeseen issues, so you know what to expect before starting.",
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Yes, all our work comes with a warranty. For most projects, we offer a 5-year guarantee, ensuring peace of mind and lasting quality.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We are fully licensed and insured, ensuring that all work is compliant with local regulations and covered for any potential issues that may arise.",
  },
  {
    q: "Can I make changes during the construction process?",
    a: "Yes, we understand that preferences can evolve during a project. Any changes will be discussed and agreed upon, and we’ll adjust the project plan and costs accordingly.",
  },
  {
    q: "Do I need planning permission for my project?",
    a: "It depends on the type and size of your project. We can help determine whether planning permission is required and assist with the application process if necessary.",
  },
  {
    q: "How will you ensure minimal disruption to my home?",
    a: "We strive to minimise disruption by maintaining a clean and organised worksite, and we ensure clear communication throughout the project to keep you informed of any changes or necessary adjustments.",
  },
  {
    q: "What type of materials do you recommend for my project?",
    a: "We recommend materials based on your specific needs, budget, and aesthetic preferences. We work with a variety of high-quality, durable materials and provide guidance on the best options for your project.",
  },
];

export type AreaSection = { heading: string; body: string };
export type Area = {
  slug: string;
  name: string;
  navLabel: string;
  heading: string;
  intro: string[];
  serviceHighlights: { title: string; body: string; href?: string }[];
  outro: string[];
  townHeading: string;
  townMapQuery: string;
  townParagraphs: string[];
  showFaqs?: boolean;
  /** Header banner image. Unused — AreaPage always uses `images.area`. */
  image?: string;
  /** Optional heading above the serviceHighlights grid (Marlow uses a bespoke one). */
  highlightsHeading?: string;
  /** Optional "Challenges in <area>" block rendered as an intro line + bullet list. */
  challenges?: { heading: string; intro: string; bullets: string[] };
  /** Live parity: Marlow is published but orphaned — it is not in the WP nav menu. */
  showInNav?: boolean;
  /** Optional kicker shown above the FAQ accordion heading when showFaqs is true. */
  faqSubheading?: string;
};

export const areas: Area[] = [
  {
    slug: "building-services-in-oxford",
    name: "Oxford",
    navLabel: "Building Services in Oxford",
    heading: "Building and Construction Services in Oxfordshire",
    intro: [
      "P&F Domestic Solutions delivers high-quality side and rear home extensions in Oxford, helping homeowners create more space without the stress of moving. Whether you own a period terrace near the city centre, a 1930s semi in Headington, or a modern family home on the outskirts, we design and build extensions that complement your property and add lasting value.",
      "We work across Oxford and surrounding towns including Abingdon, Thame, Witney and Henley-on-Thames, providing practical, well-managed building solutions tailored to each home.",
    ],
    serviceHighlights: [
      {
        title: "House refurbishments",
        body: "Many Oxford homes benefit from thoughtful renovation alongside extension work. Whether modernising interiors, improving layout flow or upgrading structural elements, we carry out renovations that improve both comfort and efficiency. From updating older properties to reconfiguring newer homes, our renovation work supports long-term durability and practical family living.",
        href: "/house-refurbishments",
      },
      {
        title: "House Extensions",
        body: "Oxford properties vary from Victorian terraces to post-war semis and contemporary homes. A well-designed rear or side extension can transform how your space functions, creating open-plan kitchens, larger dining areas or multi-functional family rooms.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "With Oxford property prices remaining strong, many homeowners are choosing to convert existing roof space rather than move. When planning a loft conversion in Oxford planning constraints must be carefully assessed. We ensure designs align with building regulations while integrating seamlessly with your existing home.",
        href: "/loft-conversions",
      },
      {
        title: "Garage Conversions",
        body: "Many Oxford homes, particularly post-war and suburban properties in areas such as Abingdon, Witney and Thame, include integral or attached garages that are underused. Converting this space can provide a cost-effective way to create an additional living area without altering the home’s footprint.",
        href: "/garage-conversions",
      },
      {
        title: "Kitchen & Bathrooms",
        body: "In many Oxford extensions, the kitchen becomes the focal point of a new open-plan rear space. We help ensure layouts maximise natural light, garden access and practical storage, particularly important in terraced and semi-detached homes where space efficiency matters.",
        href: "/kitchens-and-bathrooms",
      },
      {
        title: "Garden Rooms",
        body: "In areas such as Headington and North Oxford, where internal space can be limited, garden rooms offer a practical solution that supports modern remote working and flexible living. Whether you need a home office, studio, gym or quiet retreat, we design and build insulated, year-round garden rooms tailored to your outdoor space.",
        href: "/garden-rooms",
      },
    ],
    outro: [
      "Oxford presents unique building considerations. The city includes conservation areas, listed buildings and controlled planning zones, particularly near central districts and historic neighbourhoods. This means extensions must often be carefully designed to align with local authority guidance. Many properties have compact footprints, making side extensions highly valuable. Growing families often extend rather than relocate due to Oxford’s competitive property market, and energy efficiency upgrades are increasingly important in older housing stock.",
      "Understanding these factors early helps ensure smoother project progression and fewer planning delays. We understand the character and diversity of Oxford housing and create natural spaces that feel like home.",
    ],
    townHeading: "Oxford Town",
    townMapQuery: "Oxford",
    townParagraphs: [
      "Oxford is Oxfordshire's historic county town and one of the most recognised cities in the world, famed for the University of Oxford's medieval colleges and the honey-coloured ‘dreaming spires’ that define its skyline.",
      "The city blends grand academic architecture with characterful residential areas such as Jericho, Headington and Cowley, alongside the rivers Thames and Cherwell, which wind through the centre and support popular green spaces like Port Meadow and the University Parks.",
      "Oxford benefits from strong transport links, with the M40 and A34 connecting to London and the Midlands, and fast rail services from Oxford station reaching London Paddington in around an hour.",
      "With excellent schools, a thriving covered market and a strong professional and academic population, Oxford remains one of the most sought-after, and competitive, property markets in the South East.",
    ],
    showFaqs: true,
    faqSubheading: "Common Questions - Oxfordshire",
  },
  {
    slug: "building-services-in-hillingdon",
    name: "Hillingdon",
    navLabel: "Building Services In Hillingdon",
    heading: "Building Services In Hillingdon",
    intro: [
      "At P&F Domestic Solutions, we are proud to deliver high-quality, reliable building services in Hillingdon and the surrounding areas including both Harrow and Beaconsfield.",
      "Founded by experienced tradesmen Paul Flynn and Frankie Coppins, our company brings over 40 years of combined industry experience to every project. From planning through to completion, we provide building solutions built on trust, skill, and outstanding workmanship.",
      "We are a trusted name in Hillingdon for all types of domestic construction and refurbishment work. Whether you’re updating a single room or carrying out a full home transformation, we approach every project with care, precision, and professionalism.",
      "Our in-house team includes qualified builders, electricians, plumbers, plasterers, and decorators, offering a complete, end-to-end service under one roof.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Add space and value to your property with a bespoke home extension. We manage everything from design to finishing touches, ensuring the new space enhances your home seamlessly.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Maximise your home’s potential with a loft conversion tailored to your lifestyle: perfect for an extra bedroom, office, or bathroom.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "Thinking of modernising your property? We offer complete house refurbishment services in Hillingdon to refresh and revitalise your space, inside and out.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Work",
        body: "From new installations to full rewires or system upgrades, our Gas Safe registered plumbers and certified electricians ensure all work is safe and compliant.",
      },
      {
        title: "General Building & Maintenance",
        body: "We undertake all aspects of general building work, including structural alterations, plastering, carpentry, and ongoing property maintenance to keep your home in excellent shape.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, customer satisfaction is our top priority. We work cleanly, efficiently, and with minimal disruption, delivering projects on time and within budget. Every job is completed with meticulous attention to detail and a focus on long-lasting quality.",
      "If you’re searching for dependable, professional building services in Hillingdon, contact P&F Domestic Solutions today for a free, no-obligation quote. Let’s build something great together.",
    ],
    townHeading: "Hillingdon Town",
    townMapQuery: "Hillingdon",
    townParagraphs: [
      "Hillingdon is a vibrant and diverse borough located in West London, known for its excellent transport links, green open spaces, and strong sense of community.",
      "As one of London’s largest boroughs, it encompasses popular towns such as Uxbridge, Ruislip, Hayes, West Drayton, and Ickenham. Hillingdon is home to Heathrow Airport, making it a key gateway to the capital, and benefits from convenient access to the M4, M25, and A40, as well as multiple Underground and rail stations.",
      "The area is well-regarded for its good schools, local amenities, and a wide mix of housing, from period homes to modern developments. Residents enjoy a balance of urban living and nature, with access to green spaces like Ruislip Woods, Hillingdon Court Park, and the Grand Union Canal.",
      "With its blend of connectivity, community, and countryside, Hillingdon is an increasingly popular place to live, work, and invest in West London.",
    ],
  },
  {
    slug: "building-services-in-harrow",
    name: "Harrow",
    navLabel: "Building Services In Harrow",
    heading: "Building Services In Harrow",
    intro: [
      "At P&F Domestic Solutions we are proud to offer high-quality building services in Harrow and a vast surrounding area including Beaconsfield and Hillingdon.",
      "With over 40 years of combined experience, our expert team, led by founders Paul Flynn and Frankie Coppins, is dedicated to delivering exceptional results for both residential and commercial projects.",
      "Whether you’re looking to extend your home, refurbish a property, or undertake general building work, we provide a full range of services tailored to meet your specific needs.",
      "As a trusted and reliable building company in Harrow, we specialise in all aspects of home improvement and construction. Our team includes experienced tradespeople in various disciplines, including electricians, plumbers, builders, plasterers, and carpenters. This ensures that every project is completed to the highest standard of craftsmanship.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Whether you need more space for a growing family or want to create a home office, we specialise in beautiful and functional home extensions. We ensure that every extension integrates seamlessly with your existing property, adding value and comfort.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Transform your unused attic space into a stylish and practical room. We offer loft conversions that maximise your home’s potential, creating extra bedrooms, offices, or living spaces.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "From modernising a single room to a complete property overhaul, we offer full house refurbishments. Our team will bring new life to your home with quality renovations and smart design solutions.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Services",
        body: "Our highly skilled plumbers and electricians are on hand to tackle any plumbing or electrical issue. We ensure that all installations and repairs meet the highest safety standards and are completed efficiently.",
      },
      {
        title: "General Building and Property Maintenance",
        body: "From minor repairs to major construction work, we provide a wide range of general building services. We also offer ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, we pride ourselves on our professionalism, attention to detail, and commitment to client satisfaction. We understand that building projects can be disruptive, which is why we work efficiently and respectfully, minimising any inconvenience to you and your family.",
      "Our team is dedicated to delivering projects on time, within budget, and to the highest standards. If you’re looking for reliable, expert building services in Harrow, contact P&F Domestic Solutions today for a free consultation. Let us help you create the home of your dreams with top-tier construction services you can trust.",
    ],
    townHeading: "Harrow Town",
    townMapQuery: "Harrow",
    townParagraphs: [
      "Harrow is a diverse and well-connected borough in North West London, known for its rich history, excellent schools, and vibrant community.",
      "At its heart lies Harrow on the Hill, a historic area with charming streets, period properties, and the prestigious Harrow School, one of the UK’s leading independent schools.",
      "Harrow offers a great mix of urban convenience and green spaces, including Harrow Recreation Ground and Roxbourne Park, ideal for families and outdoor enthusiasts.",
      "With excellent transport links via Harrow-on-the-Hill station and numerous bus routes, the area provides easy access to Central London and beyond.",
      "Harrow’s bustling town centre features a wide range of shops, restaurants, and amenities, while quieter residential areas offer a more suburban feel. Popular with professionals, families, and retirees alike, Harrow is a thriving, community-focused area that blends tradition and modern living in one of London’s most appealing outer boroughs.",
    ],
  },
  {
    slug: "building-services-in-beaconsfield",
    name: "Beaconsfield",
    navLabel: "Building Services In Beaconsfield",
    heading: "Building Services In Beaconsfield",
    intro: [
      "At P&F Domestic Solutions, we are proud to provide high-quality, reliable building services in Beaconsfield and the vast surrounding areas including Harrow and Hillingdon.",
      "Founded by experienced tradesmen Paul Flynn and Frankie Coppins, our company brings over 40 years of combined expertise to every project. From initial planning through to the final touches, we deliver tailored building solutions that are built on trust, skill, and exceptional craftsmanship.",
      "We are a trusted name in Beaconsfield for all types of domestic construction and refurbishment work. Whether you’re renovating a single room or planning a full property transformation, we take a hands-on approach to ensure everything is completed to the highest standards.",
      "Our team is made up of qualified builders, electricians, plumbers, plasterers, and decorators, offering you a truly complete service under one roof.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Add space and value to your home with a thoughtfully designed home extension. We take care of every stage, from structural work to finishing, ensuring the new space blends seamlessly with your existing property.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Make the most of your unused attic space with a high-quality loft conversion. Whether it’s an extra bedroom, a home office, or a new bathroom, we’ll help unlock your home’s potential.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "Planning a full renovation? We provide comprehensive house refurbishment services in Beaconsfield, tailored to modernise and refresh your entire property, inside and out.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Work",
        body: "With qualified electricians and Gas Safe registered plumbers, we handle everything from new installations to repairs and upgrades, ensuring all work is safe, efficient, and up to code.",
      },
      {
        title: "General Building & Maintenance",
        body: "We offer a wide range of general building services, including brickwork, plastering, carpentry, and structural alterations. We also provide ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, customer satisfaction is at the heart of what we do. We work cleanly, efficiently, and respectfully, minimising disruption while delivering outstanding results. All our projects are completed on time, within budget, and with the utmost attention to detail.",
      "If you’re looking for trusted, professional building services in Beaconsfield, get in touch with P&F Domestic Solutions today for a free, no-obligation quote. Let’s build something great together.",
    ],
    townHeading: "Expert Domestic Building Services in Beaconsfield",
    townMapQuery: "Beaconsfield",
    townParagraphs: [
      "Beaconsfield is a picturesque market town located in Buckinghamshire, nestled between the Chiltern Hills and the M40, offering excellent transport links to London and Oxford.",
      "Known for its charming blend of historic architecture and modern amenities, Beaconsfield is split into two areas: the quaint Old Town, with its Georgian and Tudor buildings, and the more contemporary New Town, which developed around the railway station.",
      "The town is highly sought-after for its excellent schools, thriving local shops, and beautiful green spaces, making it a popular choice for families and commuters alike.",
      "Beaconsfield also boasts a rich cultural history and is home to the Bekonscot Model Village, the world’s oldest model village. With its community feel, vibrant high street, and proximity to the countryside, Beaconsfield offers the perfect balance of town and country living.",
    ],
  },
  // Marlow: published on WP 21 Apr but orphaned (absent from the WP nav menu), so
  // showInNav is false to keep header parity with the live site.
  // Content note: the live WP copy repeats an Oxford paragraph ("We work across Oxford
  // and surrounding towns including Abingdon, Thame, Witney and Henley-on-Thames…") and
  // an Oxford-derived duplicate bullet about energy efficiency. Both are copy-paste
  // leftovers from the Oxford page and are deliberately not reproduced here — the intro
  // below already names the correct Marlow catchment (Bourne End, Cookham, Maidenhead,
  // High Wycombe). See template-plan/decision-logs/deviations.md.
  {
    slug: "building-services-in-marlow",
    name: "Marlow",
    navLabel: "Building Services In Marlow",
    heading: "Building and Construction Services in Marlow",
    showInNav: false,
    intro: [
      "P&F Domestic Solutions delivers high-quality side and rear home extensions in Marlow, helping homeowners create more space without the disruption of moving. Whether you own a character cottage near the High Street, a riverside property along the Thames, or a modern family home in nearby developments, we design and build extensions that complement your home and add long-term value. We work across Marlow and surrounding areas including Bourne End, Cookham, Maidenhead and High Wycombe, delivering practical, well-managed building solutions tailored to each property.",
    ],
    highlightsHeading: "The Most Used Services In Marlow",
    serviceHighlights: [
      {
        title: "House Refurbishments",
        body: "Many homes in Marlow benefit from thoughtful renovation alongside extension work. Whether you’re modernising interiors, improving layout flow, or upgrading structural elements, we deliver refurbishments that enhance both comfort and efficiency. From updating older properties to refining newer homes, our work supports long-term durability and practical living.",
        href: "/house-refurbishments",
      },
      {
        title: "House Extensions",
        body: "Marlow properties range from period homes to contemporary builds. A well-designed rear or side extension can completely transform how your space works. Opening up kitchens, creating larger dining areas, or adding flexible family living spaces.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "With property values in Marlow remaining strong, many homeowners are choosing to maximise existing space rather than move. Loft conversions are an effective way to add bedrooms, offices or living areas. We ensure all designs meet planning requirements and integrate seamlessly with your home.",
        href: "/loft-conversions",
      },
      {
        title: "Garage Conversions",
        body: "Many homes in Marlow and surrounding areas include underused garages. Converting this space offers a cost-effective way to create an additional room without extending the footprint of your property: ideal for offices, playrooms or guest spaces.",
        href: "/garage-conversions",
      },
      {
        title: "Kitchen & Bathrooms",
        body: "In many Marlow extensions, the kitchen becomes the focal point of the home. We design layouts that maximise natural light, improve garden access, and optimise storage, particularly important in homes where space needs to work harder.",
        href: "/kitchens-and-bathrooms",
      },
      {
        title: "Garden Rooms",
        body: "With more people working from home, garden rooms have become increasingly popular in Marlow. Whether you need a home office, gym, studio or quiet retreat, we design and build fully insulated, year-round garden spaces tailored to your needs.",
        href: "/garden-rooms",
      },
    ],
    challenges: {
      heading: "Challenges in Marlow",
      intro:
        "Marlow presents its own building considerations. The area includes conservation zones and high-value residential streets, particularly near the town centre and along the river. This means projects often need careful planning and design to align with local guidance.",
      bullets: [
        "Maintaining the character of period and riverside properties",
        "Limited space in central locations, making extensions more design-sensitive",
        "Increasing demand for energy-efficient upgrades in older homes",
      ],
    },
    outro: [
      "Understanding these factors early helps ensure smoother project progression and fewer planning delays.",
    ],
      townHeading: "Marlow Town",
      townMapQuery: "Marlow",
      townParagraphs: [
        "Marlow is an affluent market town in Buckinghamshire, set on a bend of the River Thames and known for its handsome Georgian High Street and the elegant Marlow Suspension Bridge, designed by the same engineer behind Clifton Suspension Bridge.",
        "The town has a strong reputation for its food scene, including several Michelin-starred restaurants, alongside independent shops, riverside walks and Higginson Park, which hosts the annual Marlow Regatta.",
        "Well placed for commuters, Marlow sits close to the M40 and M4, with train services connecting via Maidenhead to London Paddington in around 40 minutes.",
        "Popular with families and professionals alike, Marlow offers a sought-after mix of period cottages, riverside properties and new developments, making it one of Buckinghamshire's most desirable, and competitive, places to live.",
      ],
      showFaqs: true,
      faqSubheading: "Common Questions - Marlow",
  },
  {
    slug: "building-services-in-gerrards-cross",
    name: "Gerrards Cross",
    navLabel: "Building Services In Gerrards Cross",
    heading: "Building Services In Gerrards Cross",
    intro: [
      "At P&F Domestic Solutions, we are proud to offer high-quality building services in Gerrards Cross and the surrounding area, including Beaconsfield and the Chalfonts.",
      "With over 40 years of combined experience, our expert team, led by founders Paul Flynn and Frankie Coppins, is dedicated to delivering exceptional results for homes across South Buckinghamshire.",
      "Whether you're looking to extend your home, refurbish a property, or undertake general building work, we provide a full range of services tailored to meet your specific needs.",
      "Our team includes experienced tradespeople across every discipline (electricians, plumbers, builders, plasterers and carpenters), ensuring every project is completed to the highest standard of craftsmanship.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Whether you need more space for a growing family or want to create a home office, we specialise in beautiful and functional home extensions that integrate seamlessly with Gerrards Cross's period and architect-designed homes.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Transform your unused attic space into a stylish and practical room. We offer loft conversions that maximise your home's potential, creating extra bedrooms, offices, or living spaces.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "From modernising a single room to a complete property overhaul, we offer full house refurbishments that bring new life to your home with quality renovations and smart design solutions.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Services",
        body: "Our highly skilled plumbers and electricians are on hand to tackle any plumbing or electrical issue, ensuring all installations and repairs meet the highest safety standards.",
      },
      {
        title: "General Building and Property Maintenance",
        body: "From minor repairs to major construction work, we provide a wide range of general building services, plus ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, we pride ourselves on our professionalism, attention to detail, and commitment to client satisfaction. We understand that building projects can be disruptive, which is why we work efficiently and respectfully, minimising any inconvenience to you and your family.",
      "If you're looking for reliable, expert building services in Gerrards Cross, contact P&F Domestic Solutions today for a free consultation. Let us help you create the home of your dreams with top-tier construction services you can trust.",
    ],
    townHeading: "Gerrards Cross Town",
    townMapQuery: "Gerrards Cross",
    townParagraphs: [
      "Gerrards Cross is an affluent Buckinghamshire town set on the lower slopes of the Chiltern Hills, known locally for its grand homes and leafy, village-like feel despite being just 19 miles from central London.",
      "The town is well served by Gerrards Cross station on the Chiltern Main Line, with fast services reaching London Marylebone in around 20 minutes, alongside easy access to the M25 and M40 for the wider region.",
      "Landmarks include St James' Church and the nearby Bulstrode Park, while the town centre offers a good range of independent shops, cafés and restaurants around the main crossroads.",
      "With its mix of period and architect-designed homes, Gerrards Cross remains one of the most sought-after, and competitive, places to live in South Buckinghamshire.",
    ],
  },
  {
    slug: "building-services-in-the-chalfonts",
    name: "The Chalfonts",
    navLabel: "Building Services In The Chalfonts",
    heading: "Building Services In The Chalfonts",
    intro: [
      "At P&F Domestic Solutions, we are proud to offer high-quality building services across the Chalfonts (Chalfont St Peter and Chalfont St Giles) and the surrounding area, including Gerrards Cross and Amersham.",
      "With over 40 years of combined experience, our expert team, led by founders Paul Flynn and Frankie Coppins, is dedicated to delivering exceptional results for homes across this part of the Chiltern Hills.",
      "Whether you're looking to extend your home, refurbish a property, or undertake general building work, we provide a full range of services tailored to meet your specific needs.",
      "Our team includes experienced tradespeople across every discipline (electricians, plumbers, builders, plasterers and carpenters), ensuring every project is completed with care and attention to the area's many period and character homes.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Whether you need more space for a growing family or want to create a home office, we specialise in beautiful and functional home extensions that respect the character of the Chalfonts' period cottages and village homes.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Transform your unused attic space into a stylish and practical room. We offer loft conversions that maximise your home's potential, creating extra bedrooms, offices, or living spaces.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "From modernising a single room to a complete property overhaul, we offer full house refurbishments that bring new life to your home with quality renovations and smart design solutions.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Services",
        body: "Our highly skilled plumbers and electricians are on hand to tackle any plumbing or electrical issue, ensuring all installations and repairs meet the highest safety standards.",
      },
      {
        title: "General Building and Property Maintenance",
        body: "From minor repairs to major construction work, we provide a wide range of general building services, plus ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, we pride ourselves on our professionalism, attention to detail, and commitment to client satisfaction. We understand that building projects can be disruptive, which is why we work efficiently and respectfully, minimising any inconvenience to you and your family.",
      "If you're looking for reliable, expert building services in the Chalfonts, contact P&F Domestic Solutions today for a free consultation. Let us help you create the home of your dreams with top-tier construction services you can trust.",
    ],
    townHeading: "Chalfont St Peter & Chalfont St Giles",
    townMapQuery: "Chalfont st peter",
    townParagraphs: [
      "The Chalfonts (Chalfont St Peter and Chalfont St Giles) are classic Buckinghamshire villages set in the Chiltern Hills, known for half-timbered cottages, village greens and a strongly preserved historic character.",
      "Chalfont St Giles is particularly notable as the home of poet John Milton, who completed Paradise Lost at Milton's Cottage, still standing today as one of the village's key landmarks.",
      "Transport links are strong: Chalfont & Latimer station offers Metropolitan line services into Baker Street in around 40 minutes, while nearby Gerrards Cross station reaches London Marylebone in under 25 minutes, with the M25 and M40 both close by.",
      "The area's mix of period cottages, village character and countryside setting makes it a popular, and highly sought-after, choice for families and commuters alike.",
    ],
  },
  {
    slug: "building-services-in-amersham",
    name: "Amersham",
    navLabel: "Building Services In Amersham",
    heading: "Building Services In Amersham",
    intro: [
      "At P&F Domestic Solutions, we are proud to offer high-quality building services in Amersham and the surrounding area, including Chesham and the Chalfonts.",
      "With over 40 years of combined experience, our expert team, led by founders Paul Flynn and Frankie Coppins, is dedicated to delivering exceptional results for both Old Amersham's period properties and the family homes of Amersham-on-the-Hill.",
      "Whether you're looking to extend your home, refurbish a property, or undertake general building work, we provide a full range of services tailored to meet your specific needs.",
      "Our team includes experienced tradespeople across every discipline (electricians, plumbers, builders, plasterers and carpenters), offering a complete, end-to-end service under one roof.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Whether you need more space for a growing family or want to create a home office, we specialise in beautiful and functional home extensions that integrate seamlessly with Amersham's mix of period and modern homes.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Transform your unused attic space into a stylish and practical room. We offer loft conversions that maximise your home's potential, creating extra bedrooms, offices, or living spaces.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "From modernising a single room to a complete property overhaul, we offer full house refurbishments that bring new life to your home with quality renovations and smart design solutions.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Services",
        body: "Our highly skilled plumbers and electricians are on hand to tackle any plumbing or electrical issue, ensuring all installations and repairs meet the highest safety standards.",
      },
      {
        title: "General Building and Property Maintenance",
        body: "From minor repairs to major construction work, we provide a wide range of general building services, plus ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, we pride ourselves on our professionalism, attention to detail, and commitment to client satisfaction. We understand that building projects can be disruptive, which is why we work efficiently and respectfully, minimising any inconvenience to you and your family.",
      "If you're looking for reliable, expert building services in Amersham, contact P&F Domestic Solutions today for a free consultation. Let us help you create the home of your dreams with top-tier construction services you can trust.",
    ],
    townHeading: "Amersham Town",
    townMapQuery: "Amersham",
    townParagraphs: [
      "Amersham is a historic Buckinghamshire market town in the Chiltern Hills, split between two distinct areas: Old Amersham, with its medieval high street, coaching inns and 13th-century church, and Amersham-on-the-Hill, which grew up around the railway station and now has a bustling high street of independent shops and restaurants.",
      "Landmarks in the Old Town include the Grade I-listed St Mary's Church, the 17th-century Market Hall, and the Amersham Museum, which tells the story of the town's history.",
      "Amersham is well connected, with Amersham station offering both Metropolitan line and Chiltern Railways services into central London, plus easy access to the wider Chiltern Hills and the M25/M40.",
      "The blend of historic character in the Old Town and everyday convenience in the New Town makes Amersham a popular choice for families, professionals and commuters.",
    ],
  },
  {
    slug: "building-services-in-chorleywood",
    name: "Chorleywood",
    navLabel: "Building Services In Chorleywood",
    heading: "Building Services In Chorleywood",
    intro: [
      "At P&F Domestic Solutions, we are proud to offer high-quality building services in Chorleywood and the surrounding area, including Rickmansworth and the Chalfonts.",
      "With over 40 years of combined experience, our expert team, led by founders Paul Flynn and Frankie Coppins, is dedicated to delivering exceptional results for homes around Chorleywood Common and beyond.",
      "Whether you're looking to extend your home, refurbish a property, or undertake general building work, we provide a full range of services tailored to meet your specific needs.",
      "Our team includes experienced tradespeople across every discipline (electricians, plumbers, builders, plasterers and carpenters), ensuring every project is completed to the highest standard of craftsmanship.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Whether you need more space for a growing family or want to create a home office, we specialise in beautiful and functional home extensions that add space and value without losing Chorleywood's village feel.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Transform your unused attic space into a stylish and practical room. We offer loft conversions that maximise your home's potential, creating extra bedrooms, offices, or living spaces.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "From modernising a single room to a complete property overhaul, we offer full house refurbishments that bring new life to your home with quality renovations and smart design solutions.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Services",
        body: "Our highly skilled plumbers and electricians are on hand to tackle any plumbing or electrical issue, ensuring all installations and repairs meet the highest safety standards.",
      },
      {
        title: "General Building and Property Maintenance",
        body: "From minor repairs to major construction work, we provide a wide range of general building services, plus ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, we pride ourselves on our professionalism, attention to detail, and commitment to client satisfaction. We understand that building projects can be disruptive, which is why we work efficiently and respectfully, minimising any inconvenience to you and your family.",
      "If you're looking for reliable, expert building services in Chorleywood, contact P&F Domestic Solutions today for a free consultation. Let us help you create the home of your dreams with top-tier construction services you can trust.",
    ],
    townHeading: "Chorleywood Village",
    townMapQuery: "Chorleywood",
    townParagraphs: [
      "Chorleywood is a Hertfordshire village on the edge of the Chiltern Hills, built around one of the largest and best-preserved commons in the area: Chorleywood Common, a 200-acre Local Nature Reserve popular with dog walkers, golfers and families.",
      "The village is well known for its distinctive church spire overlooking the common, and for its excellent transport links: Chorleywood station sits on the Metropolitan line and Chiltern Railways, with fast services to London and easy access to Junction 18 of the M25.",
      "Chorleywood has a strong village feel with a good range of local shops, cafés and schools, and remains a popular choice for families wanting Chiltern countryside on London's doorstep.",
      "Its combination of green space, connectivity and community character makes it one of the most desirable villages in this part of Hertfordshire.",
    ],
  },
  {
    slug: "building-services-in-great-missenden",
    name: "Great Missenden",
    navLabel: "Building Services In Great Missenden",
    heading: "Building Services In Great Missenden",
    intro: [
      "At P&F Domestic Solutions, we are proud to offer high-quality building services in Great Missenden and the surrounding area, including Amersham and Wendover.",
      "With over 40 years of combined experience, our expert team, led by founders Paul Flynn and Frankie Coppins, is dedicated to delivering exceptional results for homes across this part of the Chilterns.",
      "Whether you're looking to extend your home, refurbish a property, or undertake general building work, we provide a full range of services tailored to meet your specific needs.",
      "Our team includes experienced tradespeople across every discipline (electricians, plumbers, builders, plasterers and carpenters), ensuring every project is completed with care for the village's historic high street and surrounding homes.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Whether you need more space for a growing family or want to create a home office, we specialise in beautiful and functional home extensions that integrate seamlessly with Great Missenden's period and village homes.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Transform your unused attic space into a stylish and practical room. We offer loft conversions that maximise your home's potential, creating extra bedrooms, offices, or living spaces.",
        href: "/loft-conversions",
      },
      {
        title: "Full House Refurbishments",
        body: "From modernising a single room to a complete property overhaul, we offer full house refurbishments that bring new life to your home with quality renovations and smart design solutions.",
        href: "/house-refurbishments",
      },
      {
        title: "Plumbing and Electrical Services",
        body: "Our highly skilled plumbers and electricians are on hand to tackle any plumbing or electrical issue, ensuring all installations and repairs meet the highest safety standards.",
      },
      {
        title: "General Building and Property Maintenance",
        body: "From minor repairs to major construction work, we provide a wide range of general building services, plus ongoing property maintenance to keep your home in excellent condition.",
      },
    ],
    outro: [
      "At P&F Domestic Solutions, we pride ourselves on our professionalism, attention to detail, and commitment to client satisfaction. We understand that building projects can be disruptive, which is why we work efficiently and respectfully, minimising any inconvenience to you and your family.",
      "If you're looking for reliable, expert building services in Great Missenden, contact P&F Domestic Solutions today for a free consultation. Let us help you create the home of your dreams with top-tier construction services you can trust.",
    ],
    townHeading: "Great Missenden Village",
    townMapQuery: "Great Missenden",
    townParagraphs: [
      "Great Missenden is a picturesque Buckinghamshire village in the Chiltern Hills, about 20 miles northwest of London, best known as the long-time home of author Roald Dahl, who lived and wrote there for 36 years.",
      "The Roald Dahl Museum and Story Centre, housed in a former coaching inn on the high street, celebrates his life and work, while much of the surrounding countryside inspired settings in his stories.",
      "The village sits on the Chiltern Railways line between London Marylebone and Aylesbury, giving good rail links, alongside easy access to the wider Chiltern Hills Area of Outstanding Natural Beauty.",
      "With its historic high street, strong sense of literary heritage and countryside setting, Great Missenden is a popular choice for families and homeowners looking for village character within reach of London.",
    ],
  },
];

// Areas hub page — towns with embedded maps; some link to full area pages
export const coverageTowns: { name: string; mapQuery: string; href?: string }[] =
  [
    { name: "Harrow", mapQuery: "Harrow", href: "/building-services-in-harrow" },
    {
      name: "Beaconsfield",
      mapQuery: "Beaconsfield",
      href: "/building-services-in-beaconsfield",
    },
    {
      name: "Hillingdon",
      mapQuery: "Hillingdon",
      href: "/building-services-in-hillingdon",
    },
    {
      name: "Gerrards Cross",
      mapQuery: "Gerrards Cross",
      href: "/building-services-in-gerrards-cross",
    },
    {
      name: "The Chalfonts",
      mapQuery: "Chalfont st peter",
      href: "/building-services-in-the-chalfonts",
    },
    {
      name: "Amersham",
      mapQuery: "Amersham",
      href: "/building-services-in-amersham",
    },
    {
      name: "Marlow",
      mapQuery: "Marlow",
      href: "/building-services-in-marlow",
    },
    {
      name: "Chorleywood",
      mapQuery: "Chorleywood",
      href: "/building-services-in-chorleywood",
    },
    {
      name: "Great Missenden",
      mapQuery: "Great Missenden",
      href: "/building-services-in-great-missenden",
    },
    { name: "Oxford", mapQuery: "Oxford", href: "/building-services-in-oxford" },
  ];

export const posts = [
  {
    title:
      "Single-Storey Rear Extension: The Complete Guide for Oxfordshire Homeowners",
    href: "https://pfdomesticsolutions.com/single-storey-rear-extension-the-complete-guide-for-oxfordshire-homeowners/",
    excerpt:
      "Everything Oxfordshire homeowners need to know about planning and building a single-storey rear extension.",
  },
  {
    title:
      "House Extensions in Oxfordshire: Everything You Need to Know Before You Start",
    href: "https://pfdomesticsolutions.com/house-extensions-in-oxfordshire-everything-you-need-to-know-before-you-start/",
    excerpt:
      "Planning house extensions in Oxford can add space, value and flexibility to your home. Here's what to consider before you start.",
  },
  {
    title: "Top Customer Complaints and Praise for Builders in Harrow",
    href: "https://pfdomesticsolutions.com/top-complaints-and-praise/",
    excerpt:
      "What you need to know about reviews and choosing reliable builders in Harrow.",
  },
  {
    title: "Harrow Builders Cost and Quality",
    href: "https://pfdomesticsolutions.com/harrow-builders-cost-and-quality/",
    excerpt:
      "How do Harrow builders compare transparently against London construction services on pricing and workmanship?",
  },
  {
    title:
      "Sustainable Building Suppliers in Harrow: What Homeowners Need to Know",
    href: "https://pfdomesticsolutions.com/building-suppliers-harrow/",
    excerpt:
      "Sustainable building suppliers in Harrow are reshaping how London homeowners achieve energy-efficient, eco-friendly homes.",
  },
];

export const navServices = services.map((s) => ({
  label: s.title,
  href: `/${s.slug}`,
}));

// Marlow is excluded: it is published but orphaned on the live site (not in the WP
// nav menu). It still gets a route and a sitemap entry.
export const navAreas = areas
  .filter((a) => a.showInNav !== false)
  .map((a) => ({
    label: a.name,
    href: `/${a.slug}`,
  }));

// Primary navigation (header uses primary; footer uses footer)
export const nav = {
  primary: [
    { label: "Home", href: "/" },
    {
      label: "Building Services",
      href: "/building-services",
      children: navServices,
    },
    { label: "Areas We Cover", href: "/areas", children: navAreas },
    { label: "About", href: "/about" },
    { label: "Project Gallery", href: "/project-gallery" },
  ],
  footer: {
    explore: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Latest News", href: "/latest-from-us" },
      { label: "Project Gallery", href: "/project-gallery" },
      { label: "Cost Estimator", href: "/project-cost-estimator" },
      { label: "FAQs", href: "/faqs" },
    ],
    policies: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy (UK)", href: "/cookie-policy-uk" },
    ],
    contact: [{ label: "Contact Page", href: "/contact-us" }],
  },
};

// ---- Page-level copy (transcribed verbatim from the live site) ----

export const home = {
  hero: {
    headline: "Building and Construction Services",
    strapline:
      "Led by Paul & Frankie with over 40 years of combined trade experience, transforming homes across London and the Home Counties with integrity.",
    primaryCta: { label: `CALL NOW ${site.phone}`, href: site.phoneHref },
    secondaryCta: { label: "Get a FREE Quote", href: "/contact-us" },
  },
  offer: {
    kicker: "WHAT DO WE OFFER?",
    heading: "Comprehensive Building Services",
    intro:
      "At P&F Domestic Solutions, we offer a full range of expert building services, from extensions and refurbishments to loft conversions and garden rooms. Our skilled team delivers high-quality craftsmanship, ensuring every project is completed to the highest standard. Trust us to bring your vision to life with professionalism and care.",
  },
  faq: {
    heading: "Get Answers to Your Questions",
    subheading: "Our Most Common Questions:",
  },
  aboutTeaser: {
    heading: "About P&F Domestic Solutions",
    body: "At P&F Domestic Solutions, we are committed to delivering high-quality building and refurbishment services with professionalism, integrity, and reliability. Based in Harrow, we proudly serve clients across London and the Home Counties, offering expert craftsmanship across a wide range of trades.",
    cta: { label: "Find out more", href: "/about" },
  },
  projectsTeaser: {
    kicker: "OUR WORK",
    heading: "Recent Projects",
    intro:
      "A selection of completed builds: extensions, kitchens, outdoor spaces and more. Browse a project for photos, or view the full gallery for similar work.",
    /** Curated subset of case-study `gallery.projects` slugs shown on the homepage. */
    slugs: [
      "house-extension",
      "garden-room-evening",
      "kitchen-renovation",
      "accessible-wet-room",
      "garden-landscaping",
      "bespoke-joinery",
    ],
    cta: { label: "View Project Gallery", href: "/project-gallery" },
  },
};

export const buildingServices = {
  heading: "Our Comprehensive Building Services",
  intro:
    "At P&F Domestic Solutions, we offer a full range of expert building services, from extensions and refurbishments to loft conversions and garden rooms. Our skilled team delivers high-quality craftsmanship, ensuring every project is completed to the highest standard.",
};

export const about = {
  heading: "About P&F Domestic Solutions",
  image: images.about,
  intro:
    "At P&F Domestic Solutions, we are committed to delivering high-quality building and refurbishment services with professionalism, integrity, and reliability. Based in Harrow, we proudly serve clients across London and the Home Counties, offering expert craftsmanship across a wide range of trades.",
  story: {
    heading: "Our Story",
    body: [
      "Founded by Paul Flynn and Frankie Coppins, P&F Domestic Solutions was built on a foundation of trust, skill, and dedication to excellence. With over 40 years of combined experience and extensive knowledge in the electrical and plumbing trades, Paul and Frankie developed a deep understanding of the essential systems that keep homes running efficiently. This expertise naturally led them to expand into full-scale home renovations, extensions, and loft conversions. Their hands-on approach ensures that every project is completed with meticulous attention to detail and the highest level of craftsmanship, earning them a strong reputation both within the industry and with their customers for delivering outstanding home improvement projects across London and the Home Counties.",
    ],
  },
  values: {
    heading: "Our Core Values",
    body: [
      "Integrity and reliability are at the heart of everything we do. We believe in honest communication, transparent pricing, and a customer-first approach. From the initial consultation to project completion, we ensure a seamless and stress-free experience, treating your home with the respect and care it deserves.",
    ],
  },
  whyChoose: {
    heading: "Why Choose P&F Domestic Solutions?",
    points: [
      {
        title: "Expert Leadership & Skilled Team",
        body: "Led by Paul and Frankie, our team consists of highly trained tradespeople, ensuring top quality workmanship in every project.",
      },
      {
        title: "Comprehensive Services",
        body: "From extensions and loft conversions to kitchens, bathrooms, and Garage Conversions, we offer complete home transformation solutions.",
      },
      {
        title: "Attention to Detail",
        body: "We take pride in precision, ensuring that every aspect of your project meets the highest standards.",
      },
      {
        title: "Fully Insured & Guaranteed",
        body: "Our work is fully insured and backed by a guarantee, giving you peace of mind.",
      },
      {
        title: "Seamless Process",
        body: "We manage every stage of the project, ensuring minimal disruption and a smooth, hassle free experience.",
      },
    ],
  },
  cta: "Get in touch today to discuss your project. We look forward to working with you!",
};

export type ProcessStep = { step: number; title: string; body: string };

// Single source of truth for the "how we work" explanation — rendered by
// components/sections/ProcessSteps.tsx wherever it's used (About, Building
// Services), so every placement stays word-for-word identical.
export const process = {
  kicker: "OUR PROCESS",
  heading: "How We Work",
  intro:
    "From that first phone call to the final walkthrough, here's what working with P&F Domestic Solutions looks like.",
  steps: [
    {
      step: 1,
      title: "Free Consultation",
      body: "We visit your home to discuss your ideas, assess the site and talk through what's achievable, with no obligation and no pressure.",
    },
    {
      step: 2,
      title: "Transparent Quotation",
      body: "You'll receive a clear, itemised quote with no hidden costs, so you know exactly what you're paying for before any work begins.",
    },
    {
      step: 3,
      title: "Planning & Approvals",
      body: "Where planning permission, building regulations or party wall matters apply, we handle the paperwork and keep you informed at every step.",
    },
    {
      step: 4,
      title: "Expert Build",
      body: "Our skilled in-house tradespeople carry out the work to the agreed schedule, keeping disruption to your home and family to a minimum.",
    },
    {
      step: 5,
      title: "Sign-Off & Guarantee",
      body: "We complete a full walkthrough and quality check with you, and every job is backed by our guarantee for total peace of mind.",
    },
  ] satisfies ProcessStep[],
};

export const contact = {
  heading: "Contact Us Today For a FREE No obligation Quote",
  phoneLine: `Call us on: ${site.phone}`,
  image: images.contact,
  formHeading: "How Can We Help?",
  faqHeading: "Our Most Common Questions:",
  // Mirrors the live Fluent Forms form (ID 3): labels, placeholders and required
  // flags. Comments is the only optional field. Submit redirects to /thank-you.
  fields: {
    firstName: { label: "First Name", placeholder: "John", required: true },
    phone: { label: "Phone no.", placeholder: "01234 567891", required: true },
    email: {
      label: "Email",
      placeholder: "johndoe@gmail.com",
      required: true,
    },
    comments: {
      label: "Comments",
      placeholder: "Add any details about your enquiry.",
      required: false,
    },
    newsletter: "Sign me up to the newsletter",
    submit: "Submit Form",
  },
  redirectTo: "/thank-you",
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** Optional label under the photo (e.g. Before / After). */
  caption?: string;
};

export type GalleryProject = {
  slug: string;
  title: string;
  /** Optional town/area when known — omit rather than invent. */
  location?: string;
  /** Short summary for the gallery card and page intro. */
  summary: string;
  /** Longer case-study body (1–3 short paragraphs). Unused when `galleryOnly`. */
  body: string[];
  /** Related service page slug (from `services`). */
  serviceSlug: string;
  /** Hero / gallery-card image (first image is used if omitted). */
  heroImage?: string;
  images: GalleryImage[];
  /**
   * When true, the image appears on `/project-gallery` but has no
   * `/project-gallery/[slug]` case-study page (and is omitted from the sitemap).
   */
  galleryOnly?: boolean;
};

export const gallery = {
  heading: "Project Gallery",
  intro:
    "Browse a selection of our completed work. Open a project for more photos and details where available, or get in touch to discuss yours.",
  // One card per job; multi-photo jobs link to a case study. galleryOnly cards stay on this grid.
  projects: [
    {
      slug: "house-extension",
      title: "House Extension",
      summary:
        "A single-storey rear extension with rendered walls, bifold doors and a finished flat roof, opening the home to the garden.",
      body: [
        "This rear extension added bright, open-plan living space with large bifold doors, a clean rendered finish and a fully weatherproofed flat roof.",
        "From structure through to final finishes, the build was designed to sit comfortably with the existing house while giving the family a more usable connection to the garden.",
      ],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-01.jpeg",
      images: [
        {
          src: "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-01.jpeg",
          alt: "Finished rendered house extension exterior with bifold doors",
        },
        {
          src: "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-02.jpeg",
          alt: "Rendered house extension rear elevation",
        },
        {
          src: "/Job-Photos/House-Extension-Build/Extension-Interior-Open-Plan-Skylight.jpeg",
          alt: "Open-plan house extension interior with skylight",
        },
        {
          src: "/Job-Photos/House-Extension-Build/Extension-Flat-Roof-Finished-Gutter-View.jpeg",
          alt: "Finished flat roof and gutter on house extension",
        },
        {
          src: "/Job-Photos/House-Extension-Build/Extension-Flat-Roof-Finished-Birdseye-View.jpeg",
          alt: "Finished flat roof birdseye view on house extension",
        },
      ],
    },
    {
      slug: "extension-doorway-plaster",
      title: "Doorway Plastered Reveals",
      summary:
        "Fresh plaster on a new partition wall and doorway reveals, ready for decoration.",
      body: [
        "These photos show a new internal partition after finishing plaster: smooth wall faces and carefully formed doorway reveals with a timber lining fitted.",
        "Work of this kind sits between first-fix carpentry and decoration, leaving a clean hand-over for paint and flooring.",
      ],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/Extension-Interior-Fit-Out/Extension-Doorway-Plastered-Reveal-View1.jpeg",
      images: [
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Extension-Doorway-Plastered-Reveal-View1.jpeg",
          alt: "Plastered doorway reveal in extension interior",
        },
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Extension-Doorway-Plastered-Reveal-View2.jpeg",
          alt: "Plastered partition doorway beside utility area",
        },
      ],
    },
    {
      slug: "first-fix-electrics",
      title: "First-Fix Electrics & Insulation",
      summary:
        "Ceiling insulation, cable runs and opening-up during first-fix interior work.",
      body: [
        "These shots capture first-fix stage work: mineral wool in the ceiling grid, cable runs through openings, and rooms stripped back ready for boarding and plaster.",
        "Getting services and insulation right at this stage sets up a clean second-fix finish later.",
      ],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/Extension-Interior-Fit-Out/Interior-First-Fix-Electrics-Stud-Wall.jpeg",
      images: [
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Interior-First-Fix-Electrics-Stud-Wall.jpeg",
          alt: "First-fix electrics and ceiling insulation in progress",
        },
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Interior-First-Fix-Wall-Corridor.jpeg",
          alt: "First-fix corridor opening with insulation and cabling",
        },
      ],
    },
    {
      slug: "extension-flooring-garden-doors",
      title: "Flooring at Garden Doors",
      summary:
        "Timber-to-tile flooring transition alongside white garden doors.",
      body: [],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/Extension-Interior-Fit-Out/Flooring-Transition-Garden-Doors.jpeg",
      images: [
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Flooring-Transition-Garden-Doors.jpeg",
          alt: "Flooring transition to garden doors in extension fit-out",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "plastered-bay-window",
      title: "Plastered Bay Window",
      summary:
        "Fresh finish plaster around a leaded bay window, ready for decoration.",
      body: [],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/Extension-Interior-Fit-Out/Interior-Plastered-Room-Bay-Window.jpeg",
      images: [
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Interior-Plastered-Room-Bay-Window.jpeg",
          alt: "Plastered extension room with bay window",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "ceiling-plastering",
      title: "Ceiling Plastering",
      summary:
        "Finish plaster being applied to a plasterboard ceiling.",
      body: [],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/Extension-Interior-Fit-Out/Interior-Ceiling-Plastering-Repair.jpeg",
      images: [
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Interior-Ceiling-Plastering-Repair.jpeg",
          alt: "Ceiling plastering in progress on plasterboard",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "extension-plaster-interior",
      title: "Plastered Extension Interior",
      summary:
        "Freshly plastered walls and ceiling in an extension opening to the garden.",
      body: [],
      serviceSlug: "house-extentions",
      heroImage:
        "/Job-Photos/Extension-Interior-Fit-Out/Reference-Screenshot-Ceiling-Plaster.jpeg",
      images: [
        {
          src: "/Job-Photos/Extension-Interior-Fit-Out/Reference-Screenshot-Ceiling-Plaster.jpeg",
          alt: "Plastered extension interior looking out to the garden",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "garden-room-evening",
      title: "Garden Rooms",
      summary:
        "Garden rooms and outdoor builds like this: insulated timber spaces with glazing and evening lighting.",
      body: [
        "We design and build garden rooms for year-round use: insulated, glazed and finished so they feel like a proper room rather than a shed.",
        "This is one example from our outdoor work. Browse the project gallery for more garden rooms, studios and timber buildings in a similar vein.",
      ],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-01.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-01.jpeg",
          alt: "Garden room exterior lit in the evening with deck",
        },
      ],
    },
    {
      slug: "garden-room-timber-doors",
      title: "Timber Garden Room",
      summary:
        "A vertical-timber garden room with anthracite French doors, exterior lighting and finished steps.",
      body: [
        "This garden room pairs vertical timber cladding with dark-framed French doors and modern wall lights: a bright outdoor room opening onto the lawn.",
        "The steps and cladding were finished to match, ready for everyday use as a lounge or party space.",
      ],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Front-Bifolds.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Front-Bifolds.jpeg",
          alt: "Timber garden room with anthracite French doors",
        },
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-02.jpeg",
          alt: "Timber garden room exterior with doors open",
        },
      ],
    },
    {
      slug: "garden-room-cedar-studio",
      title: "Cedar Garden Studio",
      summary:
        "A cedar-clad garden studio with sliding doors, corner glazing, recessed lighting and LED strip interior.",
      body: [
        "This studio uses warm vertical cedar cladding, dark-framed sliding doors and a deep roof overhang with recessed spotlights.",
        "Inside, perimeter LED lighting and a clean finish make it suitable as a home office, gym or quiet retreat.",
      ],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Exterior-Corner-Windows.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Exterior-Corner-Windows.jpeg",
          alt: "Cedar garden studio with sliding doors and corner window",
        },
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Interior-Empty-LED-Lighting.jpeg",
          alt: "Garden studio interior with LED strip lighting",
        },
      ],
    },
    {
      slug: "garden-room-build",
      title: "Garden Room Build",
      summary:
        "A pitched-roof garden room from timber frame through cladding to a finished outbuilding on new paving.",
      body: [
        "These photos follow a garden room from open timber frame and roof felt through cladding and openings, to the completed outbuilding on freshly laid block paving.",
        "The build sits behind the main house as a durable outdoor room with horizontal timber cladding and a pitched roof.",
      ],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Site-Photo-Outbuilding.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Site-Photo-Outbuilding.jpeg",
          alt: "Finished timber garden room on block paving",
        },
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Frame-Cladding-Evening.jpeg",
          alt: "Garden room with cladding and roof felt during build",
        },
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Frame-Construction-Roof-Felt.jpeg",
          alt: "Garden room timber frame with roof felt",
        },
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Frame-Construction-Roof-Trusses.jpeg",
          alt: "Garden room timber frame and roof trusses",
        },
      ],
    },
    {
      slug: "timber-garden-building",
      title: "Timber Garden Building",
      summary:
        "A pitched-roof timber outbuilding with green French doors, lantern lights and tiled roof.",
      body: [
        "This timber garden building has horizontal cladding, a tiled pitched roof and bright green French doors with traditional lantern wall lights.",
        "Side elevations show matching white-framed glazing: a finished outbuilding ready for garden use.",
      ],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Timber-Garden-Shed-Green-Door.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Timber-Garden-Shed-Green-Door.jpeg",
          alt: "Timber garden building with green French doors",
        },
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Exterior-Side-Elevation-Tree.jpeg",
          alt: "Timber garden building side elevation with tiled roof",
        },
      ],
    },
    {
      slug: "garden-room-painted-cladding",
      title: "Painted Cladding Garden Room",
      summary:
        "Finished garden room with painted vertical cladding, bifold doors and patio.",
      body: [],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Painted-Cladding.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Painted-Cladding.jpeg",
          alt: "Finished garden room with painted cladding and bifold doors",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "garden-room-white-evening",
      title: "White Garden Room at Dusk",
      summary:
        "White-painted garden room with French doors and deck lighting at evening.",
      body: [],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-French-Doors-Evening.webp",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-French-Doors-Evening.webp",
          alt: "White garden room French doors lit in the evening",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "garden-room-office",
      title: "Garden Office",
      summary:
        "Vertical-timber garden office with glazed doors and tall side windows.",
      body: [],
      serviceSlug: "garden-rooms",
      heroImage:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Fence-View.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Fence-View.jpeg",
          alt: "Timber garden office with glazed doors by the fence",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "kitchen-renovation",
      title: "Kitchen Renovation",
      summary:
        "A cream shaker kitchen with brick-effect tiling, worktops and under-cabinet lighting.",
      body: [
        "This kitchen renovation refreshed the heart of the home with cream shaker-style cabinetry, practical worktops and a brick-effect tiled splashback.",
        "Lighting, layout and finishes were chosen for everyday use: a warm, durable space that feels modern without losing character.",
      ],
      serviceSlug: "kitchens-and-bathrooms",
      heroImage:
        "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View1.jpeg",
      images: [
        {
          src: "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View1.jpeg",
          alt: "Cream shaker kitchen renovation with brick splashback",
        },
        {
          src: "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View2.jpeg",
          alt: "Cream shaker kitchen renovation, wider view",
        },
      ],
    },
    {
      slug: "accessible-wet-room",
      title: "Accessible Wet Room",
      summary:
        "An accessible wet room with level-access shower, grab rails, shower seat and heated towel rail.",
      body: [
        "This bathroom was converted into a fully accessible wet room, with a level-access shower, grab rails, a folding shower seat and fixtures chosen for safety and ease of use.",
        "The result is a bright, tiled space that supports independent living without feeling clinical. Practical details are finished to a high standard.",
      ],
      serviceSlug: "kitchens-and-bathrooms",
      heroImage:
        "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Grab-Rails-View1.jpeg",
      images: [
        {
          src: "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Grab-Rails-View1.jpeg",
          alt: "Accessible wet room shower with grab rails",
        },
        {
          src: "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Grab-Rails-View2.jpeg",
          alt: "Accessible wet room grab rails and tiled walls",
        },
        {
          src: "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Sink-View.jpeg",
          alt: "Accessible wet room shower and sink",
        },
        {
          src: "/Job-Photos/Bathroom-Renovation-Other/Ensuite-Shower-Room-Renovation.jpeg",
          alt: "Accessible wet room vanity, toilet and shower",
        },
        {
          src: "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Bathroom-Heated-Towel-Rail.jpeg",
          alt: "Accessible bathroom with heated towel rail",
        },
        {
          src: "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Ceiling-Rain-Head.jpeg",
          alt: "Accessible wet room shower with ceiling rain head",
        },
      ],
    },
    {
      slug: "garage-conversion",
      title: "Garage Conversion",
      summary:
        "Bright open-plan interior during a garage conversion (gallery image only).",
      body: [],
      serviceSlug: "garage-conversions",
      heroImage:
        "/Job-Photos/Garage-Conversion/Garage-Conversion-Interior-White-Loft-Room.webp",
      images: [
        {
          src: "/Job-Photos/Garage-Conversion/Garage-Conversion-Interior-White-Loft-Room.webp",
          alt: "Garage conversion interior living space",
        },
      ],
      galleryOnly: true,
    },
    {
      slug: "garden-landscaping",
      title: "Garden Landscaping",
      summary:
        "Garden landscaping with lawn, planting borders, paths and outdoor lighting.",
      body: [
        "This landscaping project combined lawn, hedge-lined paths, gravel detailing and bollard lighting to create a more usable outdoor space.",
        "Borders and planting soften the hard landscaping, while lighting extends the garden into the evening.",
      ],
      serviceSlug: "house-refurbishments",
      heroImage:
        "/Job-Photos/Garden-Landscaping/Garden-Lawn-Hedge-Path-Bollard-Lights-01.jpeg",
      images: [
        {
          src: "/Job-Photos/Garden-Landscaping/Garden-Lawn-Hedge-Path-Bollard-Lights-01.jpeg",
          alt: "Garden lawn, hedge path and bollard lights",
        },
        {
          src: "/Job-Photos/Garden-Landscaping/Garden-Lawn-Hedge-Path-Bollard-Lights-02.jpeg",
          alt: "Garden lawn and bollard lighting, second view",
        },
        {
          src: "/Job-Photos/Garden-Landscaping/Garden-Fence-Border-Planting-Wide.jpeg",
          alt: "Garden fence border planting",
        },
        {
          src: "/Job-Photos/Garden-Landscaping/Garden-Fence-Border-Planting-Lighting.jpeg",
          alt: "Garden border planting with lighting",
        },
        {
          src: "/Job-Photos/Garden-Landscaping/Garden-Gravel-Path-Pool-Steps.jpeg",
          alt: "Garden gravel path and pool steps",
        },
      ],
    },
    {
      slug: "bespoke-joinery",
      title: "Bespoke Joinery",
      summary:
        "Custom storage joinery: a built-in bench designed to fit the space and the home.",
      body: [
        "This bespoke storage bench was built to fit the room exactly: practical storage with a clean joinery finish that feels part of the home rather than an add-on.",
      ],
      serviceSlug: "house-refurbishments",
      heroImage: "/Job-Photos/Bespoke-Joinery/Bespoke-Storage-Bench-View1.jpeg",
      images: [
        {
          src: "/Job-Photos/Bespoke-Joinery/Bespoke-Storage-Bench-View1.jpeg",
          alt: "Bespoke storage bench joinery",
        },
        {
          src: "/Job-Photos/Bespoke-Joinery/Bespoke-Storage-Bench-View2.jpeg",
          alt: "Bespoke storage bench joinery, second view",
        },
        {
          src: "/Job-Photos/Bespoke-Joinery/Bespoke-Storage-Bench-View3.jpeg",
          alt: "Bespoke storage bench joinery, detail view",
        },
      ],
    },
    {
      slug: "guttering-rain-collector",
      title: "Guttering & Rain Collector",
      summary:
        "New guttering and rainwater goods on a side return, finished with a downpipe feeding a rain collector.",
      body: [
        "This job installed new guttering and rainwater goods on a side return, then connected a downpipe into a rain collector so run-off is captured neatly at the base of the wall.",
        "The before and after photos show the incomplete setup beside the completed gutter, downpipe and rain collector installation.",
      ],
      serviceSlug: "house-refurbishments",
      heroImage:
        "/Job-Photos/Exterior-Brick-Painting/Painted-Brick-Side-Return-Rear-View.jpeg",
      images: [
        {
          src: "/Job-Photos/Exterior-Brick-Painting/Painted-Brick-Corner-Close-View.jpeg",
          alt: "Before: side return with guttering started and rain collector in place, before the downpipe connection",
          caption: "Before",
        },
        {
          src: "/Job-Photos/Exterior-Brick-Painting/Painted-Brick-Side-Return-Rear-View.jpeg",
          alt: "After: completed black guttering and downpipe feeding into a rain collector on the deck",
          caption: "After",
        },
      ],
    },
  ] satisfies GalleryProject[],
};

export function getGalleryProject(slug: string): GalleryProject | undefined {
  return gallery.projects.find((p) => p.slug === slug);
}

/** Case-study projects only (excludes `galleryOnly` entries). */
export function galleryCaseStudyProjects(): GalleryProject[] {
  return gallery.projects.filter((p) => !p.galleryOnly);
}

export function getGalleryCaseStudy(slug: string): GalleryProject | undefined {
  const project = getGalleryProject(slug);
  if (!project || project.galleryOnly) return undefined;
  return project;
}

export function galleryProjectHero(project: GalleryProject): GalleryImage {
  const heroSrc = project.heroImage ?? project.images[0]?.src;
  const match = project.images.find((img) => img.src === heroSrc);
  const hero = match ?? project.images[0];
  if (!hero) {
    throw new Error(`Gallery project "${project.slug}" has no images`);
  }
  return hero;
}

export function galleryProjectDisplayTitle(project: GalleryProject): string {
  return project.location
    ? `${project.title}, ${project.location}`
    : project.title;
}

export const areasHub = {
  heading: "Building Services in Oxford, Hertfordshire & The Surrounding Areas",
  intro:
    `If you are also in the local area and cannot find where you live on this list don't worry: email ${site.email} or call ${site.phone} and we will see if we can help.`,
};

export const newsPage = {
  heading: "The Latest From Us",
  intro:
    "Stay up to date with the latest news and blog posts by P&F Solutions. From DIY tips and tricks to local news and details about the trades in the area.",
};

export const faqsPage = {
  heading: "Frequently Asked Questions",
  subheading: "Our Most Common Questions:",
};

// Confirmation page the contact form redirects to (live Fluent Form does the same).
export const thankYou = {
  heading: "Thank You for Contacting P&F Domestic Solutions",
  body: "Someone will call you soon. We are excited to speak with you!",
  cta: { label: "Back to Home", href: "/" },
};

// Concise UK GDPR / Data Protection Act 2018 policy for a marketing site with a
// contact/quote form (Resend), consent-gated analytics (GTM/GA4 + Clarity), and maps.
export const privacyPolicy = {
  heading: "Privacy Policy",
  intro:
    "This privacy policy explains how P&F Domestic Solutions collects, uses and looks after personal information when you use this website or contact us. It applies to visitors and enquirers in the United Kingdom.",
  sections: [
    {
      heading: "Who we are",
      body: [
        "P&F Domestic Solutions (“we”, “us” or “our”) is the data controller for personal information collected through this website. We provide building and construction services across London and the Home Counties.",
        "Our contact details are at the end of this policy. If you have any questions about how we handle your data, please get in touch.",
      ],
    },
    {
      heading: "What information we collect",
      body: [
        "When you use our contact or quote form, we ask for your first name, phone number, email address and any comments you choose to include about your enquiry. You may also opt in to our newsletter.",
        "We may also receive personal information if you contact us by phone, email or social media. Server and hosting logs may record technical details such as your IP address and browser type when you visit the site; these are used only to operate and secure the website, including rate-limiting form abuse.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "We use enquiry details to respond to your request, provide a quote where appropriate, and manage follow-up conversations about our services. If you opt in to the newsletter, we use your email to send occasional updates; you can unsubscribe at any time.",
        "We do not sell your personal information. We only share it where needed to run the website or respond to you (for example with a trusted email or hosting provider), or where the law requires us to.",
      ],
    },
    {
      heading: "Who we share information with",
      body: [
        "Enquiry emails are sent using Resend, our email delivery provider, so they can deliver your message to us. Resend processes the content of the form (and related delivery metadata) on our behalf for that purpose.",
        "If you complete an optional security check on the form, Cloudflare Turnstile may process a short-lived token and technical data to confirm you are human.",
        "If you consent to analytics cookies, Google (via Tag Manager / Analytics) and Microsoft Clarity may receive usage data as described in our Cookie Policy (UK). You can change or withdraw that consent at any time.",
      ],
    },
    {
      heading: "Legal basis",
      body: [
        "We process enquiry data because it is necessary to take steps at your request before entering into a contract, or because we have a legitimate interest in responding to business enquiries and operating this website. Where you opt in to marketing, we rely on your consent, which you may withdraw at any time. Analytics cookies are only used with your consent.",
      ],
    },
    {
      heading: "Cookies and third-party content",
      body: [
        "We use a cookie preference tool so you can accept or reject non-essential cookies. Analytics cookies (Google Tag Manager / GA4 and Microsoft Clarity) are off by default until you opt in. Some pages embed a Google Map, which may set cookies under Google’s own policies. For more detail, see our Cookie Policy (UK).",
      ],
    },
    {
      heading: "How long we keep your information",
      body: [
        "We keep enquiry and correspondence records for as long as needed to deal with your request and for a reasonable period afterwards (typically up to 24 months), unless a longer period is required for legal, accounting or ongoing project reasons. Marketing contacts are retained until you unsubscribe or ask us to delete them.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under UK data protection law you have rights including access to your personal data, correction of inaccurate data, erasure in certain circumstances, restriction of processing, objection to processing based on legitimate interests, and data portability where applicable. Where processing is based on consent, you may withdraw that consent at any time.",
        "To exercise these rights, please contact us using the details below. If you are unhappy with how we handle your data you can also complain to the Information Commissioner’s Office (ICO).",
      ],
    },
  ],
  contactHeading: "Contact details",
  contactBody:
    "For questions about this Privacy Policy or to exercise your data protection rights, please contact us:",
};

// Keep category descriptions in sync with lib/cookie-consent/config.ts.
export const cookiePolicy = {
  heading: "Cookie Policy (UK)",
  lastUpdated: "22 July 2026",
  intro:
    "This policy explains how P&F Domestic Solutions uses cookies and similar technologies on this website, and the choices available to you. It applies to citizens and legal permanent residents of the United Kingdom, and should be read alongside our Privacy Policy.",
  sections: [
    {
      heading: "What are cookies?",
      body: [
        "Cookies are small text files placed on your device when you visit a website. They are widely used to make sites work, work more efficiently, and to provide reporting information to the site owner.",
      ],
    },
    {
      heading: "Cookies we use",
      body: [
        "Strictly necessary: cookies required for the site’s core functionality, such as remembering your cookie preferences. These can’t be switched off without affecting how the site works.",
        "Analytics: when enabled, we load Google Tag Manager, which runs Google Analytics (GA4) to understand how visitors use the site (pages viewed, time on page, referral source, approximate location, and device/browser type). We also use Microsoft Clarity for anonymised session recordings and heatmaps to improve usability. These tools only run once you’ve given consent via the cookie banner, and only when the relevant tracking IDs are configured.",
        "You can change your choice at any time using the manage preferences control on this page or in the site footer.",
      ],
    },
    {
      heading: "Third-party cookies",
      body: [
        "Some pages embed or link to third-party services (for example Google Maps). Those services may set their own cookies under their own policies. This policy doesn’t cover their use of cookies.",
      ],
    },
    {
      heading: "Managing cookies",
      body: [
        "You can control or delete cookies through your browser settings at any time. Most browsers let you refuse cookies, or alert you when a cookie is being set. Blocking analytics cookies won’t stop the site working, though it does mean we won’t be able to measure how it’s used.",
      ],
    },
    {
      heading: "Your rights with respect to personal data",
      body: [
        "You have the right to know why your personal data is needed, what will happen to it and how long it will be retained for; to access, correct or delete it; to withdraw consent; to transfer your data; and to object to its processing.",
        "To exercise these rights, please contact us using the details below. If you have a complaint about how we handle your data we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Information Commissioner’s Office, ICO).",
      ],
    },
  ],
  contactHeading: "Contact details",
  contactBody:
    "For questions and/or comments about this Cookie Policy, please contact us:",
};

export type Review = { name: string; text: string; rating: number };

// Verified Google reviews, manually transcribed from the business's Google
// Maps profile (12 shown of 19 total — the rest were truncated by Google's
// "... More" cutoff on the profile page, so left out rather than guessed at).
export const reviewsSummary = {
  rating: "EXCELLENT",
  count: 19,
  source: "Google",
  profileUrl:
    "https://www.google.com/maps/place/P+%26+F+Domestic+Solutions/@51.7266376,-1.3520857,157581m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47fe1be3d3872dfb:0xd20c3646f5f79a6a!8m2!3d51.7276316!4d-0.6927426!16s%2Fg%2F11n9w6prmk",
};

export const reviews: Review[] = [
  {
    name: "Hayley Wilson",
    rating: 5,
    text: "P&F Domestic Solutions were fantastic from the get go! Frankie and team did an amazing job transforming my kitchen and I'm over the moon with their service! The team were so efficient and helpful, paying such attention to detail and made the kitchen of my dreams! Couldn't recommend these guys enough!",
  },
  {
    name: "Sofiya Burnusuz",
    rating: 5,
    text: "Amazing company to work with! I have been working with Frankie and Paul for a while and they are extremely professional and proactive, with great attention to detail, delivering the projects on time. I highly recommend P&F for your buildworks and interior fit-out works.",
  },
  {
    name: "Karl Fenn",
    rating: 5,
    text: "Frankie and his team did an excellent job for us. They were reliable, hard working and true to their word. I can't recommended them highly enough and will absolutely use them again.",
  },
  {
    name: "Elizabeth Johns",
    rating: 5,
    text: "Frankie and Paul, along with their experienced & friendly team of professionals from all trades, completed my project with care and attention to detail. This company is the exact opposite of the ‘cowboys’ we all aim to avoid, and will manage your build as if it was their own investment. P&F will be my first choice for all of my future projects.",
  },
  {
    name: "max jones",
    rating: 5,
    text: "Nice blokes, tidy job. Installed patio lighting efficiently and to a high standard",
  },
  {
    name: "andrew Gabriel",
    rating: 5,
    text: "P and F recently put up a Pergola for me! Wow what a great service, from arranging to come round and give me a quote to finishing the job was a fantastic service throughout! Thanks again Frankie and his team",
  },
  {
    name: "Samuel Johnson",
    rating: 5,
    text: "I had a number off jobs around the house that needed doing including building, electrical and decorating. No job was too small. A fantastic experience during the work with minimal disruption. The cleanest and tidiest builders I have ever worked with. Most importantly all done to the highest standard and best quality. I would not use anyone else.",
  },
  {
    name: "James Morris",
    rating: 5,
    text: "I recently hired P&F Domestic solutions to carry out a full refurb. I’m extremely pleased with the outcome. From start to finish, they were professional, reliable, and excellent communicators. They came on time, kept to the schedule, and explained each stage of the work so I always knew what was happening.",
  },
  {
    name: "Tbloom",
    rating: 5,
    text: "Very Professional, arrived on time and did a brilliant job. Would definitely recommend 👌🏻",
  },
  {
    name: "Ann Coppins",
    rating: 5,
    text: "I've used this company twice, once for electrical work and another time for painting and decorating. On both occasions they did a fantastic professional job. Highly recommend.",
  },
  {
    name: "Robbie Matonti",
    rating: 5,
    text: "Reliable, punctual, skilled and genuine team who did a fantastic job for us. Would recommend to anyone.",
  },
  {
    name: "Yatin Parmar",
    rating: 5,
    text: "Couldn't ask for better service. Frankie is knowledgeable, friendly and trustworthy. The work is done to a high standard and communication throughout was excellent. Will definitely be using P&F again in the future",
  },
];

// Google Ads landing page (/house-extensions-oxford). Renders on a bare layout with
// no site navigation — logo + phone only — so the only actions are call or enquire.
export const landingOxford = {
  slug: "house-extensions-oxford",
  kicker: "Building Better Spaces",
  heading: "House Extensions in Oxford",
  strapline:
    "From single-storey rear extensions to two-storey side returns, P&F manage everything through to the final build and interiors. Fixed quotes, no surprises.",
  cta: { label: `Free Planning Consultation - ${site.phone}`, href: site.phoneHref },
  usps: ["Fixed quotes, no surprises", "Free planning consultation"],
  handled: {
    heading: "What we handle",
    items: [
      {
        label: "Single-storey extensions",
        blurb:
          "Open up your kitchen or living space with a well-designed rear extension.",
        icon: "houseSingle" as const,
      },
      {
        label: "Multi-storey extensions",
        blurb: "Add bedrooms and living space, all in one project.",
        icon: "houseMulti" as const,
      },
      {
        label: "Planning & architectural drawings",
        blurb: "We manage the full planning process so you don't have to.",
        icon: "blueprint" as const,
      },
      {
        label: "Full build & project management",
        blurb: "One point of contact from first call to final reveal.",
        icon: "clipboard" as const,
      },
    ],
  },
  form: {
    heading: "Got a Project in Mind?",
    subheading: "Free Quote - Contact Form",
  },
  faq: {
    heading: "Extension FAQs",
    subheading: "Common Questions",
  },
  reviewsHeading: "What our customers say",
};

// Google Maps embed builder (lazy iframe src) — used by area/hub pages
export const mapEmbedSrc = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    query,
  )}&t=m&z=10&output=embed&iwloc=near`;
