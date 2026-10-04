import { Icons } from "@/components/icons";

export const DATA = {
  name: "Stephie Yang",
  initials: "SY",
  url: "https://quinnai9287.github.io/resume",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description: `Frontend Engineer with 5+ years of experience, backed by a visual and UI design background, focused on building web experiences that balance functionality, interactivity, and visual quality.`,
  summary: `I primarily work with Vue, Nuxt, and TypeScript to build web applications, and I’ve also worked with React / Next.js across SaaS, e-commerce, data visualization, and interactive web experiences.
    \nBeyond frontend development, I’ve also handled API integration, data flow, authentication, and third-party service connections in product work.
    \nMy design background makes me particularly attentive to the visual and interaction details of interfaces. I naturally think from both product value and user experience, aiming to create products that are not only functional but also polished and enjoyable to use.
    \nBuilding experiences, not just websites.`,
  avatarUrl: "/me2.jpg",
  skills: [
    {
      name: "Frontend",
      items: [
        "Vue 3",
        "Nuxt 4",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      name: "Data & API",
      items: ["Nuxt 4 Server", "GraphQL", "Restful API", "WebSocket"],
    },
    {
      name: "UI & Styling",
      items: [
        "Figma",
        "Tailwind CSS",
        "Nuxt UI",
        "SCSS",
        "Responsive Design",
        "UI/UX",
      ],
    },
    {
      name: "Visualization & Interactive",
      items: ["Mapbox", "Leaflet", "Three.js", "Data Visualization"],
    },
    {
      name: "Tools & Other",
      items: ["Git", "CI/CD", "Firebase"],
    },
  ],
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
        "GraphQL / Rest API",
        "Nuxt UI",
        "Mapbox",
        "Data Visualization",
      ],
      logoUrl: "/lynuxTek.jpg",
      location: "Taoyuan, Taiwan",
      title: "Front-end Engineer",
      start: "Sep 2024",
      end: "July 2026",
      description: [
        `Contributed to the 0-to-1 development of a SaaS Web Application, responsible for frontend architecture, core features, and UI/UX implementation, helping bring the product to the MVP stage.`,
        `Built the Web Application with Vue 3, Nuxt 4, and TypeScript, handling page architecture, reusable components, interaction logic, and data flow.`,
        `Collaborated with backend engineers to integrate GraphQL / Apollo, connecting core product APIs and managing frontend data flows.`,
        `Integrated SuperTokens, Mapbox / Leaflet, and Uppy / S3 to implement authentication, mapping, geospatial features, data visualization, and file upload functionality.`,
        `Built reusable UI and state management architecture with Tailwind CSS, Nuxt UI, and Pinia, while contributing to requirements breakdown, UI/UX design, and product iteration.`,
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
      location: "Remote",
      logoUrl: "",
      title: "Front-end Engineer",
      start: "Sep 2023",
      end: "Sep 2024",
      description: [
        `Worked on multiple Web projects across SaaS, real-time communication, and e-commerce.`,
        `Contributed to TeamSync AI, a real-time multi-user chat application built with Svelte / WebSocket.`,
        `Worked with Alion Tech on virtual office, ERP, and SaaS applications.`,
        `Contributed to the SHOPLINE × LINE membership card platform and merchant extension using LINE LIFF.`,
        `Developed with Vue / Nuxt, React / Next.js, Svelte, and TypeScript across different projects.`,
      ],
    },
    {
      company: "TG3D Studio",
      href: "https://tg3ds.com/",
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
        "Contributed to Web3 / Fashion Tech products, focusing on frontend features and interactive experiences.",
        "Built 3D web experiences with React and Three.js, including 3D garment displays, virtual try-on, and model interactions.",
        "Integrated MetaMask, Smart Contracts, and NFTs for wallet and blockchain features.",
        "Collaborated with design and product teams to turn visual concepts into interactive Web UI.",
        "Contributed across the product lifecycle, from feature planning and development to launch.",
      ],
      projects: [
        {
          title: "DMKTZ",
          dates: "Nov 2022 - Aug 2023",
          location: "Taipei, Taiwan",
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
              href: "https://www.youtube.com/watch?v=a6L5QI1GYsk&t=1s",
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
          location: "Taipei, Taiwan",
          icon: "public",
          image: "/fitzon.png",
          poster: "/fitzon_poster.png",
          links: [
            {
              title: "Official website",
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
      location: "Remote",
      logoUrl: "",
      title: "Front-end Engineer",
      start: "January 2020",
      end: "May 2022",
      description: [
        `Worked on multiple Web projects across brand websites, e-commerce, and interactive Web applications.`,
        `Contributed to projects including No Party for Cao Dong, JaFun, and Instawish, using Vue / Nuxt, GraphQL, Shopify Liquid, JavaScript, and CSS Animation.`,
      ],
    },
    {
      company: "Albertlan Creative",
      href: "https://albertlan.com",
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
        "Responsible for the frontend development, maintenance, and responsive implementation of corporate websites and web applications.",
        "Collaborated with designers using HTML, CSS/SCSS, and JavaScript to turn visual design into interactive websites.",
        "Implemented web animations and interaction effects using GSAP and CSS Animation.",
        "Handled cross-browser compatibility, website testing, troubleshooting, and user behavior tracking via GA / GTM.",
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
          title: "LE BLE D'OR",
          image: "/lebledor.jpeg",
          poster: "/lebledor_poster.png",
          links: [
            {
              title: "Official website",
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
        "Turns the scattered coupons in your inbox into a genuinely useful wallet. HeartoBox automatically finds and organizes coupons from Gmail, centralizes discount information and expiry dates, and helps you avoid missing deals.",
      technologies: [
        "Nuxt 4 CLIENT & SERVER",
        "GOOGLE OAuth",
        "GMAIL API",
        "NOTION DB API",
        "FIREBASE",
      ],
      roles: ["Product", "Designer", "Developer"],
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
      title: "Asterbytes - CMS",
      dates: "Sep 2024 - July 2026",
      location: "Taipei, Taiwan",
      era: "LYNUXTEK · Frontend Engineer · 2024–2026",
      copyright: "",
      credit: `Asterbytes is a SaaS content management platform designed to help teams manage website content, data, and publishing workflows. I participated in the product's 0→1 frontend development, contributing across UI/UX, data integration, and core functionality.`,
      description: [
        "Built the CMS core features and frontend pages, and participated in product requirement breakdown and UI/UX implementation.",
        "Integrated APIs and data flows to implement content management and team collaboration features.",
        "Worked with backend engineers to connect authentication, file uploads, and third-party services to complete core workflows.",
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
      copyrightBy: "Product and intellectual property owned by LYNUXTEK.",
    },
    {
      title: "EaseX - Geospatial Information Cloud Platform",
      dates: "Sep 2024 - July 2026",
      era: "LYNUXTEK · Frontend Engineer · 2024–2026",
      location: "Taipei, Taiwan",
      copyright: "",
      credit:
        "A cloud-based geospatial information platform integrating maps, 2D/3D models, and time-series data to support collaboration, data storage, and sharing.",
      description: [
        "Developed the frontend interaction layer and geospatial features using Mapbox for map rendering and spatial data visualization.",
        "Contributed to the visualization of 2D geospatial data and time-series data, handling interactions and presentations across varying data types.",
        "Built reusable UI components and integrated APIs and data flows with backend teams to deliver the product's core capabilities.",
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
      copyrightBy: "Product and intellectual property owned by LYNUXTEK.",
    },
    {
      title: "SHOPLINE x LINE Membership Card Platform & Merchant Extension",
      dates: "June - August 2024",
      location: "Taipei, Taiwan",
      era: "",
      copyright: "",
      credit: "Contract collaboration with Crescendo Lab",
      description: [
        "Integrated LINE LIFF and worked with the backend team to implement SHOPLINE membership card features powered by LINE as the delivery channel.",
        "Collaborated with backend engineers to integrate APIs and deliver the membership information flow and related functionality.",
        "Developed a SHOPLINE merchant extension plugin that allows merchants to configure and manage membership card features in the SHOPLINE admin panel.",
        "Handled frontend feature development and interface implementation while connecting frontend and backend data flows.",
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
      copyrightBy: "Product / Intellectual Property © Crescendo Lab.",
    },
    {
      title: "DMKTZ 3D Virtual Try-on",
      dates: "May 2022 - Sep 2023",
      era: "TG3D Studio · Frontend Engineer · 2022–2023",
      location: "Taipei, Taiwan",
      copyright: "",
      credit:
        "An interactive Fashion Tech experience combining 3D avatars, virtual garments, and Web3 technologies, allowing users to browse, style, and experience digital fashion through 3D avatars. - All Rights Reserved by TG3D Studio",
      description: [
        "Developed the frontend for the 3D Fashion Experience and implemented interactive features.",
        "Built 3D avatar and garment experiences, including model loading, camera control, and interactive movement.",
        "Integrated Ready Player Me to connect 3D avatars and virtual clothing features.",
        "Integrated MetaMask, NFTs, and smart contracts to implement Web3 wallet and on-chain features.",
        "Collaborated with design and product teams to turn visual concepts into interactive 3D web experiences.",
      ],
      image: "/dmktz.png",
      links: [],
      copyrightBy: "Product and intellectual property owned by TG3D Studio.",
    },
  ],
} as const;
