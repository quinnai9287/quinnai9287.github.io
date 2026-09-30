import { Icons } from "@/components/icons";

export const DATA = {
  name: "Stephie Yang",
  initials: "SY",
  url: "https://quinnai9287.github.io/resume",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description: `Frontend Engineer with 5+ years of experience, with a background in visual and UI design.`,
  summary: `I primarily work with Vue, Nuxt, and TypeScript, with experience building SaaS applications, e-commerce platforms, and interactive web experiences.
    \nMy design background shapes how I approach frontend development — balancing functionality, usability, and visual quality to create intuitive and refined digital experiences.
    \nBuilding experiences, not just websites.`,
  avatarUrl: "/me2.jpg",
  skills: ["Front-end Development", "UI/UX Design"],
  contact: {
    email: "keira0930@gmail.com",
    tel: "+886912959287",
    social: {
      GitHub: {
        url: "https://github.com/quinnai9287/resume",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/jiarungyang",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "LYNUXTEK",
      href: "https://www.lynuxtek.com",
      badges: [
        "Vue 3 / Nuxt 4",
        "TypeScript",
        "GraphQL / Apollo",
        "SuperTokens",
        "Tailwind CSS / Nuxt UI",
        "Mapbox / Leaflet",
      ],
      logoUrl: "/lynuxTek.jpg",
      location: "Taoyuang, Taiwan",
      title: "Front End Engineer",
      start: "Sep 2024",
      end: "July 2026",
      description: [
        `Contributed to the 0-to-1 development of a SaaS web application, owning frontend architecture, core features, and UI/UX implementation through MVP.`,
        `Built web applications with Vue 3, Nuxt 4, and TypeScript, covering page architecture, reusable components, interactions, and data flow.`,
        `Collaborated with backend engineers on GraphQL / Apollo integration and implemented authentication and session management with SuperTokens.`,
        `Integrated third-party services including Mapbox / Leaflet and Uppy / S3 to deliver map-based features, location data, and file upload workflows.`,
        `Built reusable UI and state management solutions with Tailwind CSS, Nuxt UI, and Pinia, while contributing to requirements analysis, UI/UX design, and product iteration.`,
      ],
    },
    {
      company: "Freelancing",
      href: "",
      badges: [
        "Vue / Nuxt",
        "React / Next.js",
        "Svelte",
        "TypeScript",
        "WebSocket",
        "LINE LIFF",
      ],
      logoUrl: "",
      location: "Remote",
      title: "Front End Engineer",
      start: "Sep 2023",
      end: "Sep 2024",
      description: [
        `Worked across multiple web projects through direct contracts and outsourcing teams, covering SaaS, real-time communication, and e-commerce applications.`,
        `Collaborated with Alion Tech on the frontend development of virtual workspace, ERP, and other SaaS applications.`,
        `Contributed to TeamSync AI, a multi-user chat application, using Svelte and WebSocket to implement real-time interactions.`,
        `Contributed to the SHOPLINE × LINE Membership Platform and merchant extension, integrating LINE LIFF and collaborating with backend engineers on frontend features.`,
        `Worked with Vue / Nuxt, React / Next, Svelte, and TypeScript across different products and technical requirements.`,
      ],
    },
    {
      company: "TG3D Studio",
      href: "https://dmktz.io",
      badges: [
        "React Native",
        "Vue 2 / Nuxt.js",
        "Three.js",
        "Web3",
        "MetaMask",
        "NFT",
        "Smart Contract",
      ],
      location: "Taipei, Taiwan",
      title: "Front-end Engineer",
      logoUrl: "/dmktz.png",
      start: "May 2022",
      end: "Sep 2023",
      description: [
        "Contributed to Web3 / Fashion Tech products, focusing on frontend development and interactive web experiences.",
        "Built 3D web experiences with React and Three.js, including 3D garment visualization, virtual try-on, and interactive 3D models.",
        "Integrated MetaMask, smart contracts, and NFTs to support wallet connectivity and blockchain-based features.",
        "Collaborated with designers and product teams to translate visual concepts into interactive web interfaces while balancing visual quality and usability.",
        "Contributed across the full product development cycle, from feature planning and implementation to integration and launch.",
      ],
      projects: [
        {
          title: "DMKTZ",
          dates: "Nov 2022 - Aug 2023",
          location: "Worldwide",
          description: [
            "Involved in front-end interface and feature development for a digital fashion design platform. Integrated virtual character Clonex from the metaverse and RPM x DMKTZ 3D clothing try-on functionality.",
          ],
          icon: "public",
          image: "/dmktz.png",
          poster: "/dmktz_poster.png",
          links: [
            {
              title: "Official Entry",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://dmktz.io/",
            },
            {
              title: "Try-on",
              icon: <Icons.youtube className="h-4 w-4" />,
              href: "https://www.youtube.com/watch?v=lQdSmOR7UHs",
            },
            {
              title: "Instagram",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.instagram.com/dmktz.official/",
            },
          ],
        },
        {
          title: "FITzOn - Fit To Earn Game-Fi App",
          dates: "May 2022 - Nov 2022",
          location: "Worldwide",
          description: [
            "Responsible for front-end development of the official website, covering a wide range including various animations, NFT transaction operations, and the player dashboard for the app.",
          ],
          icon: "public",
          image: "/fitzon.png",
          poster: "/fitzon_poster.png",
          links: [
            {
              title: "Official",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://fitzon.io/",
            },
            {
              title: "Reveal Intro",
              icon: <Icons.youtube className="h-4 w-4" />,
              href: "/resume/video/reveal_intro.mp4",
            },
            {
              title: "App Store",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://apps.apple.com/us/app/fitzon/id1641147474",
            },
            {
              title: "Google Play",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://play.google.com/store/apps/details?id=io.fition.fitzon&pli=1",
            },
          ],
        },
      ],
    },
    {
      company: "Freelancing",
      href: "https://quinnai9287.github.io",
      badges: [
        "Vue 2 / Nuxt 2",
        "GraphQL",
        "Shopify Liquid",
        "JavaScript",
        "CSS Animation",
      ],
      logoUrl: "",
      location: "Remote",
      title: "Front-end Engineer",
      start: "January 2020",
      end: "May 2022",
      description: [
        `Worked across multiple web projects through freelance and contract engagements, covering brand websites, e-commerce, and interactive web applications.`,
        `Contributed to the No Party for Cao Dong official website and Shopify store, using Nuxt 2, GraphQL, and Shopify Liquid for frontend development and customization.`,
        `Contributed to JaFun, an e-commerce platform for Japanese products, implementing product search, product pages, shopping cart, and order-related features.`,
        `Contributed to Instawish, using Nuxt 2 / SSG, CSS Animation, and JavaScript to implement interactive and visual experiences.`,
        `Provided ongoing frontend development and maintenance for the Lee Chang Rong Chemical Group official website, collaborating with designers on website updates and content maintenance.`,
      ],
    },
    {
      company: "Albertlan Creative",
      href: "https://albertlan.com/",
      badges: [
        "HTML5",
        "CSS / SCSS",
        "JavaScript",
        "jQuery",
        "GSAP",
        "Bootstrap",
      ],
      location: "Taipei, Taiwan",
      title: "Front-end Developer",
      logoUrl: "/albertlancreative.png",
      start: "Aug 2016",
      end: "Nov 2019",
      description: [
        "Developed and maintained corporate websites and web applications, including responsive implementations.",
        "Collaborated with designers to translate visual designs into interactive websites using HTML, CSS/SCSS, and JavaScript.",
        "Implemented web animations and interactive experiences using GSAP and CSS Animation.",
        "Handled cross-browser compatibility, testing, debugging, and user behavior tracking with GA / GTM.",
      ],
      projects: [
        {
          title: "Cathay Group",
          image: "/cathaybk.webp",
          poster: "/cathayins.png",
          links: [
            {
              title: "Cathay Bank",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://cathaybk.com.tw/cathaybk/",
            },
            {
              title: "Cathay Insurance",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.cathay-ins.com.tw/cathayins/personal/online/",
            },
          ],
        },
        {
          title: "LE BLE D'OR 金色三麥",
          image: "/lebledor.jpeg",
          poster: "/lebledor_poster.png",
          links: [
            {
              title: "Official",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.lebledor.com/",
            },
            {
              title: "CSS Design Awards",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.cssdesignawards.com/sites/le-ble-d-or/30799",
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "Yuan Ze University",
      href: "https://www.yzu.edu.tw/index.php/en/",
      degree: ["Bachelor of Information and Communication"],
      logoUrl: "/yzu.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "HeartoBox — Your Inbox, Your Coupon Wallet",
      href: "https://oceanica-org-staging.web.app/",
      dates: "May 2026 - Present",
      active: false,
      description:
        "Turn your inbox into a smarter coupon wallet. HeartoBox automatically discovers and organizes coupons from Gmail, bringing offers and expiration dates into one place so you never miss a deal.",
      technologies: [
        "Nuxt 4 CLIENT & SERVER",
        "GOOGLE OAuth",
        "GMAIL API",
        "NOTION DB API",
        "FIREBASE",
      ],
      roles: ["Director", "Designer", "Developer"],
      links: [
        {
          type: "Website",
          href: "https://oceanica-org-staging.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hearto.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Asterbytes - SaaS Content Management Platform",
      dates: "Sep 2024 - July 2026",
      location: "Taipei, Taiwan",
      credit:
        "A content management platform designed for content and technical teams, enabling non-engineering users to independently create, edit, and manage website content while delivering content to frontend applications through APIs. The platform supports team collaboration, multilingual content, content management, and asset management. - All Rights Reserved by LYNUXTEK 令客思科技",
      description: [
        "Contributed to the frontend development and product iteration of the SaaS web application.",
        "Integrated APIs and data flows to implement core features including content management and team collaboration.",
        "Contributed to UI/UX design and the development of reusable UI components.",
      ],
      image: "/asterbytes.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Introduction",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.asterbytes.com",
        },
      ],
    },
    {
      title: "EaseX - Geospatial Information Visualization Platform",
      dates: "Sep 2024 - July 2026",
      location: "Taipei, Taiwan",
      credit:
        "A cloud-based geospatial information platform integrating maps, 2D/3D models, and time-series data to support collaboration, data storage, and sharing. EaseView enables visualization of GeoJSON and GLB data, 2D/3D overlays, and real-time IoT data visualization integrated with Grafana. - All Rights Reserved by LYNUXTEK 令客思科技",
      description: [
        "Contributed to the frontend development and product iteration of the geospatial cloud platform.",
        "Implemented map-based data visualization and interactive geospatial experiences.",
        "Contributed to the visualization of 2D/3D geospatial data, files, and time-series data.",
        "Built reusable UI components and interactive interfaces while collaborating with backend engineers on API integration.",
      ],
      image: "/easex.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Introduction",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.ease-x.com/",
        },
      ],
    },
    {
      title: "SHOPLINE x LINE Membership Card Platform & Merchant Extension",
      dates: "June - August 2024",
      location: "Taipei, Taiwan",
      credit: "Contract collaboration with Crescendo Lab",
      description: [
        "Integrated LINE LIFF and collaborated with the backend to implement SHOPLINE membership card functionality using LINE as the platform.",
        "Worked with the backend to develop a merchant extension plugin, allowing merchants to configure membership card features in the SHOPLINE admin panel.",
      ],
      image: "/crescendolab.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Introduction",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://crescendolab.zendesk.com/hc/zh-tw/articles/36619431030809-%E6%95%99%E5%AD%B8-%E6%BC%B8%E5%BC%B7%E5%AF%A6%E9%A9%97%E5%AE%A4-EC-%E5%B0%8F%E5%B9%AB%E6%89%8B-Shopline",
        },
      ],
    },
    {
      title: "DMKTZ 3D Virtual Try-on",
      dates: "Nov 2022 - Aug 2023",
      location: "Taipei, Taiwan",
      credit:
        "An interactive Fashion Tech experience combining 3D avatars, virtual garments, and Web3 technologies, enabling users to explore, customize, and experience digital fashion through 3D avatars. - All Rights Reserved by TG3D Studio",
      description: [
        "Led frontend development and interactive feature implementation for the 3D Fashion Experience.",
        "Built 3D avatar and garment visualization features, including model loading, camera controls, and interactive experiences.",
        "Integrated Ready Player Me for 3D avatar and virtual garment experiences.",
        "Integrated MetaMask, NFTs, and smart contracts to implement Web3 wallet connectivity and blockchain-based features.",
        "Collaborated with design and product teams to transform visual concepts into interactive 3D web experiences.",
      ],
      image: "/dmktz.png",
      links: [],
    },
  ],
} as const;
