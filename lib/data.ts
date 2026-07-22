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
  address: "166 College Road, Harrow, England HA1 1BH",
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
  /** House refurbishments — atmospheric hallway renovation stock. */
  refurb: "/Stock-Marketing-Images/Stock-Hallway-Staircase-Renovation.webp",
  kitchen:
    "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View1.jpeg",
  /** No loft job photos yet — loft bedroom stock. */
  loft: "/Stock-Marketing-Images/Stock-Loft-Bedroom-Interior.webp",
  extension:
    "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-01.jpeg",
  garage:
    "/Job-Photos/Garage-Conversion/Garage-Conversion-Interior-White-Loft-Room.webp",
  garden:
    "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Painted-Cladding.jpeg",
  doors:
    "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-French-Doors-Evening.webp",
  about: "/Site-Images/about.jpg",
  contact: "/Site-Images/contact.jpg",
  /** CTA band background — finished garden room at dusk. */
  banner:
    "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-01.jpeg",
  oxford: "/Site-Images/oxford.png",
  news: "/Site-Images/news.png",
};

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
    pageHeading: "Bespoke Loft Conversions in Harrow – P&F Domestic Solutions",
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
  /** Header banner image. Defaults to the generic doors shot when not set. */
  image?: string;
  /** Optional heading above the serviceHighlights grid (Marlow uses a bespoke one). */
  highlightsHeading?: string;
  /** Optional "Challenges in <area>" block rendered as an intro line + bullet list. */
  challenges?: { heading: string; intro: string; bullets: string[] };
  /** Live parity: Marlow is published but orphaned — it is not in the WP nav menu. */
  showInNav?: boolean;
};

export const areas: Area[] = [
  {
    slug: "building-services-in-oxford",
    name: "Oxford",
    navLabel: "Building Services in Oxford",
    heading: "Building and Construction Services in Oxfordshire",
    image: images.oxford,
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
        body: "Oxford properties vary from Victorian terraces to post-war semis and contemporary homes. A well-designed rear or side extension can transform how your space functions – creating open-plan kitchens, larger dining areas or multi-functional family rooms.",
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
        body: "In many Oxford extensions, the kitchen becomes the focal point of a new open-plan rear space. We help ensure layouts maximise natural light, garden access and practical storage – particularly important in terraced and semi-detached homes where space efficiency matters.",
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
    townHeading: "Common Questions - Oxfordshire",
    townMapQuery: "Oxford",
    townParagraphs: [],
    showFaqs: true,
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
      "Our in-house team includes qualified builders, electricians, plumbers, plasterers, and decorators – offering a complete, end-to-end service under one roof.",
    ],
    serviceHighlights: [
      {
        title: "Home Extensions",
        body: "Add space and value to your property with a bespoke home extension. We manage everything from design to finishing touches, ensuring the new space enhances your home seamlessly.",
        href: "/house-extentions",
      },
      {
        title: "Loft Conversions",
        body: "Maximise your home’s potential with a loft conversion tailored to your lifestyle – perfect for an extra bedroom, office, or bathroom.",
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
      "At P&F Domestic Solutions, customer satisfaction is our top priority. We work cleanly, efficiently, and with minimal disruption – delivering projects on time and within budget. Every job is completed with meticulous attention to detail and a focus on long-lasting quality.",
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
      "Our team is made up of qualified builders, electricians, plumbers, plasterers, and decorators – offering you a truly complete service under one roof.",
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
      "At P&F Domestic Solutions, customer satisfaction is at the heart of what we do. We work cleanly, efficiently, and respectfully – minimising disruption while delivering outstanding results. All our projects are completed on time, within budget, and with the utmost attention to detail.",
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
        body: "Many homes in Marlow and surrounding areas include underused garages. Converting this space offers a cost-effective way to create an additional room without extending the footprint of your property – ideal for offices, playrooms or guest spaces.",
        href: "/garage-conversions",
      },
      {
        title: "Kitchen & Bathrooms",
        body: "In many Marlow extensions, the kitchen becomes the focal point of the home. We design layouts that maximise natural light, improve garden access, and optimise storage – particularly important in homes where space needs to work harder.",
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
      townHeading: "Common Questions - Marlow",
      townMapQuery: "Marlow",
      townParagraphs: [],
      showFaqs: true,
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
    { name: "Gerrards Cross", mapQuery: "Gerrards Cross" },
    { name: "The Chalfonts", mapQuery: "Chalfont st peter" },
    { name: "Amersham", mapQuery: "Amersham" },
    { name: "Marlow", mapQuery: "Marlow" },
    { name: "Chorleywood", mapQuery: "Chorleywood" },
    { name: "Great Missenden", mapQuery: "Great Missenden" },
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
      "Planning house extensions in Oxford can add space, value and flexibility to your home — here's what to consider before you start.",
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
    label: a.navLabel,
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
      "Transforming Homes Across London - Building with Integrity, Delivering with Pride",
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
  cta: "Get in touch today to discuss your project – we look forward to working with you!",
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

export type GalleryProject = {
  title: string;
  image: string;
  /** Descriptive alt; defaults to title in the grid. */
  alt?: string;
};

export const gallery = {
  heading: "Project Gallery",
  intro:
    "Take a look at some of our previous works. Contact us today to find out what we can do for you.",
  address: site.address,
  // Curated finished (or near-finished) job photos — not every site snap or video.
  projects: [
    {
      title: "House Extension",
      image:
        "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-01.jpeg",
      alt: "Finished rendered house extension exterior",
    },
    {
      title: "House Extension",
      image:
        "/Job-Photos/House-Extension-Build/Extension-Rendered-Exterior-Finished-02.jpeg",
      alt: "Rendered house extension rear elevation",
    },
    {
      title: "Extension Interior",
      image:
        "/Job-Photos/House-Extension-Build/Extension-Interior-Open-Plan-Skylight.jpeg",
      alt: "Open-plan house extension interior with skylight",
    },
    {
      title: "Extension Flat Roof",
      image:
        "/Job-Photos/House-Extension-Build/Extension-Flat-Roof-Finished-Gutter-View.jpeg",
      alt: "Finished flat roof and gutter on house extension",
    },
    {
      title: "Extension Fit-Out",
      image:
        "/Job-Photos/Extension-Interior-Fit-Out/Flooring-Transition-Garden-Doors.jpeg",
      alt: "Flooring transition to garden doors in extension fit-out",
    },
    {
      title: "Extension Fit-Out",
      image:
        "/Job-Photos/Extension-Interior-Fit-Out/Interior-Plastered-Room-Bay-Window.jpeg",
      alt: "Plastered extension room with bay window",
    },
    {
      title: "Garden Room",
      image:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Painted-Cladding.jpeg",
      alt: "Finished garden room with painted cladding",
    },
    {
      title: "Garden Room",
      image:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Front-Bifolds.jpeg",
      alt: "Garden room exterior with bifold doors",
    },
    {
      title: "Garden Room",
      image:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-French-Doors-Evening.webp",
      alt: "Garden room French doors lit in the evening",
    },
    {
      title: "Garden Room",
      image:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Finished-Exterior-Evening-Lit-01.jpeg",
      alt: "Garden room exterior lit in the evening",
    },
    {
      title: "Garden Room Interior",
      image:
        "/Job-Photos/Garden-Room-Build/Garden-Room-Interior-Empty-LED-Lighting.jpeg",
      alt: "Garden room interior with LED lighting",
    },
    {
      title: "Kitchen Renovation",
      image:
        "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View1.jpeg",
      alt: "Cream shaker kitchen renovation",
    },
    {
      title: "Kitchen Renovation",
      image:
        "/Job-Photos/Kitchen-Renovation-2025/Kitchen-Renovation-Cream-Shaker-View2.jpeg",
      alt: "Cream shaker kitchen renovation, second view",
    },
    {
      title: "Ensuite Bathroom",
      image:
        "/Job-Photos/Bathroom-Renovation-Other/Ensuite-Shower-Room-Renovation.jpeg",
      alt: "Ensuite shower room renovation",
    },
    {
      title: "Wet Room Bathroom",
      image:
        "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Grab-Rails-View1.jpeg",
      alt: "Accessible wet room shower with grab rails",
    },
    {
      title: "Wet Room Bathroom",
      image:
        "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Shower-Sink-View.jpeg",
      alt: "Accessible wet room shower and sink",
    },
    {
      title: "Wet Room Bathroom",
      image:
        "/Job-Photos/Wet-Room-Bathroom-Renovation/Accessible-Bathroom-Heated-Towel-Rail.jpeg",
      alt: "Accessible bathroom with heated towel rail",
    },
    {
      title: "Garage Conversion",
      image:
        "/Job-Photos/Garage-Conversion/Garage-Conversion-Interior-White-Loft-Room.webp",
      alt: "Garage conversion interior living space",
    },
    {
      title: "Garden Landscaping",
      image:
        "/Job-Photos/Garden-Landscaping/Garden-Lawn-Hedge-Path-Bollard-Lights-01.jpeg",
      alt: "Garden lawn, hedge path and bollard lights",
    },
    {
      title: "Garden Landscaping",
      image:
        "/Job-Photos/Garden-Landscaping/Garden-Fence-Border-Planting-Wide.jpeg",
      alt: "Garden fence border planting",
    },
    {
      title: "Garden Landscaping",
      image:
        "/Job-Photos/Garden-Landscaping/Garden-Gravel-Path-Pool-Steps.jpeg",
      alt: "Garden gravel path and pool steps",
    },
    {
      title: "Bespoke Joinery",
      image: "/Job-Photos/Bespoke-Joinery/Bespoke-Storage-Bench-View1.jpeg",
      alt: "Bespoke storage bench joinery",
    },
    {
      title: "Exterior Brick Painting",
      image:
        "/Job-Photos/Exterior-Brick-Painting/Painted-Brick-Side-Return-Rear-View.jpeg",
      alt: "Painted brick side return exterior",
    },
    {
      title: "Oxford Extension Project",
      image: images.oxford,
      alt: "Oxford extension project",
    },
  ] satisfies GalleryProject[],
};

export const areasHub = {
  heading: "Building Services in Harrow, Hillingdon & The Surrounding Areas",
  intro:
    "If you are also in the local area and cannot find where you live on this list don't worry – email admin@pfdomesticsolutions.com or call 07700 166128 and we will see if we can help.",
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
// contact/quote form. Update when analytics, a consent banner, or a form backend
// (e.g. Resend) is introduced.
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
        "We may also receive personal information if you contact us by phone, email or social media. Server and hosting logs may record technical details such as your IP address and browser type when you visit the site; these are used only to operate and secure the website.",
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
      heading: "Legal basis",
      body: [
        "We process enquiry data because it is necessary to take steps at your request before entering into a contract, or because we have a legitimate interest in responding to business enquiries and operating this website. Where you opt in to marketing, we rely on your consent, which you may withdraw at any time.",
      ],
    },
    {
      heading: "Cookies and third-party content",
      body: [
        "This website does not currently set analytics, advertising or tracking cookies of its own. Some pages embed a Google Map, which may set cookies under Google’s own policies. For more detail, see our Cookie Policy (UK).",
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

// Placeholder pending a consent-management solution (Stage 7 backlog). The live WP
// policy is generated by CookieYes and documents WordPress/Elementor/Google Analytics
// cookies plus a consent pop-up — none of which exist in this build, so reproducing it
// verbatim would be inaccurate. Replace this wholesale when the banner is wired up.
// Keep category descriptions in sync with lib/cookie-consent/config.ts.
export const cookiePolicy = {
  heading: "Cookie Policy (UK)",
  lastUpdated: "21 July 2026",
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
        "Strictly necessary — cookies required for the site’s core functionality, such as remembering your cookie preferences. These can’t be switched off without affecting how the site works.",
        "Analytics — when enabled, we use Google Analytics (GA4) to understand how visitors use the site: pages viewed, time on page, referral source, approximate location, and device/browser type. This helps us improve the site over time.",
        "Advertising — when enabled, we use the Meta Pixel to understand how visitors arrive from Meta platforms (Facebook/Instagram) and to measure the performance of any advertising campaigns we run.",
        "Analytics and advertising cookies are only active where the relevant tracking IDs are configured, and only once you’ve given consent via the cookie banner. You can change your choice at any time using the manage preferences control on this page or in the site footer.",
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
        "You can control or delete cookies through your browser settings at any time. Most browsers let you refuse cookies, or alert you when a cookie is being set. Blocking analytics or advertising cookies won’t stop the site working, though it does mean we won’t be able to measure how it’s used or how any campaigns are performing.",
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

// Verified Google reviews, transcribed from the Trustindex widget on the live
// /house-extensions-oxford landing page (9 shown of 19 total).
export const reviewsSummary = {
  rating: "EXCELLENT",
  count: 19,
  source: "Google",
};

export const reviews: Review[] = [
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
    "From single-storey rear extensions to two-storey side returns – P&F manage everything through to the final build and interiors. Fixed quotes, no surprises.",
  cta: { label: `Free Planning Consultation - ${site.phone}`, href: site.phoneHref },
  usps: ["Fixed quotes, no surprises", "Free planning consultation"],
  handled: {
    heading: "What we handle",
    items: [
      "Single-storey extensions",
      "Multi-storey extensions",
      "Planning & architectural drawings",
      "Full build & project management",
    ],
  },
  form: {
    heading: "Got a Project in Mind?",
    subheading: "Free Quote - Contact Form",
  },
  reviewsHeading: "What our customers say",
};

// Google Maps embed builder (lazy iframe src) — used by area/hub pages
export const mapEmbedSrc = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    query,
  )}&t=m&z=10&output=embed&iwloc=near`;
