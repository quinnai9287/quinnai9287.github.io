import { Icons } from "@/components/icons";

export const DATA = {
  name: "Stephie Yang",
  initials: "SY",
  url: "https://quinnai9287.github.io/resume",
  location: "台北, 台灣",
  locationLink: "https://www.google.com/maps/place/taipei",
  description: `5+ 年前端開發經驗，具備視覺與 UI 設計背景，專注於打造兼具功能性、互動性與視覺品質的 Web Experience。`,
  summary: `主要使用 Vue、Nuxt、TypeScript 開發網頁應用，也具備 React / Next.js 開發經驗，參與過 SaaS、電商、資料視覺化與各類互動式網站。
    \n除了前端開發，也有 API 整合、資料流、身分驗證與第三方服務串接等產品開發經驗。
    \n設計背景讓我特別在意介面的視覺與互動細節，習慣從功能與使用體驗一起思考，希望在工程能力之外，也能讓產品本身好用、好看。
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
      company: "LYNUXTEK 令客思科技",
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
      location: "桃園, 台灣",
      title: "前端工程師",
      start: "Sep 2024",
      end: "July 2026",
      description: [
        `參與 SaaS Web Application 0→1 開發，負責前端架構、核心功能與 UI/UX 實作，從需求拆解一路推進至 MVP。`,
        `使用 Vue 3 / Nuxt 4 / TypeScript 建立可重用的 UI 元件與頁面架構，並以 Pinia 管理跨模組資料流與狀態。`,
        `與後端協作整合 GraphQL / Apollo，串接身份驗證、地圖、檔案上傳與資料服務，建立完整的產品資料流程。`,
        `負責 Mapbox / Leaflet 地理資訊、2D/3D 資料視覺化與 Uppy / S3 檔案處理等複合型功能，參與產品需求、UI/UX 設計與持續迭代。`,
      ],
    },
    {
      company: "自由接案",
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
      title: "前端工程師",
      start: "Sep 2023",
      end: "Sep 2024",
      description: [
        `以個人合約及外包團隊模式參與多項 Web 專案，涵蓋 SaaS、即時通訊與電商應用。`,
        `參與 TeamSync AI 多人聊天室開發，使用 Svelte / WebSocket 實作即時互動功能。`,
        `與 Alion Tech 長期合作，參與虛擬辦公空間、ERP 及其他 SaaS 應用的前端開發。`,
        `參與 SHOPLINE × LINE 會員卡平台與商家擴充插件，串接 LINE LIFF 並與後端協作完成前端功能。`,
        `使用 Vue / Nuxt、React / Next、Svelte、TypeScript 等技術，依不同產品需求進行前端開發。`,
      ],
    },
    {
      company: "適著三圍 TG3D Studio",
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
      title: "前端工程師",
      logoUrl: "/dmktz.png",
      start: "May 2022",
      end: "Sep 2023",
      description: [
        "參與 Web3 / Fashion Tech 產品開發，負責前端功能與互動體驗實作。",
        "使用 React、Three.js 開發 3D Web Experience，實作 3D 服裝展示、虛擬試穿與模型互動等功能。",
        "整合 MetaMask、Smart Contract、NFT 等 Web3 技術，串接錢包與鏈上功能。",
        "與設計及產品團隊協作，將視覺設計轉化為具互動性的 Web UI，兼顧視覺表現與使用體驗。",
        "參與從功能規劃、開發到上線的完整流程，處理跨技術領域的整合與前端問題。",
      ],
      projects: [
        {
          title: "DMKTZ",
          dates: "Nov 2022 - Aug 2023",
          location: "台灣, 台北",
          icon: "public",
          image: "/dmktz.png",
          poster: "/dmktz_poster.png",
          links: [
            {
              title: "官方入口",
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
          location: "台灣, 台北",
          icon: "public",
          image: "/fitzon.png",
          poster: "/fitzon_poster.png",
          links: [
            {
              title: "官方網站",
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
      company: "自由接案",
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
      title: "前端工程師",
      start: "January 2020",
      end: "May 2022",
      description: [
        `以自由接案與合約合作模式參與多項 Web 專案，涵蓋品牌網站、電商與互動式 Web Application。`,
        `參與草東沒有派對、JaFun、Instawish 等專案，使用 Vue / Nuxt、GraphQL、Shopify Liquid、JavaScript、CSS Animation 進行前端開發。`,
      ],
    },
    {
      company: "Albertlan Creative 歐拔藍數位創意",
      href: "https://albertlan.com",
      badges: [
        "HTML5",
        "CSS / SCSS",
        "JavaScript",
        "jQuery",
        "GSAP",
        "Bootstrap",
      ],
      location: "台灣, 台北",
      title: "前端工程師",
      logoUrl: "/albertlancreative.png",
      start: "Aug 2016",
      end: "Nov 2019",
      description: [
        "負責企業官網與 Web Application 的前端開發、維護與 RWD 實作。",
        "與設計師協作，使用 HTML、CSS/SCSS、JavaScript 將視覺設計轉化為互動式網站。",
        "使用 GSAP、CSS Animation 實作網頁動畫與互動效果。",
        "負責跨瀏覽器相容性、網站測試與問題排查，並使用 GA / GTM 建立使用者行為追蹤。",
      ],
      projects: [
        {
          title: "國泰企業系列",
          image: "/cathaybk.webp",
          poster: "/cathayins.png",
          links: [
            {
              title: "國泰世華銀行",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://cathaybk.com.tw/cathaybk/",
            },
            {
              title: "國泰產險",
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
              title: "官方網站",
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
      school: "私立元智大學",
      href: "https://www.yzu.edu.tw/index.php/tw/",
      degree: ["資訊傳播學系學士"],
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
        "把信箱裡散落的優惠，變成一個真正好用的優惠錢包。HeartoBox 自動從 Gmail 找出並整理優惠券，集中管理優惠資訊與到期日，讓優惠不再被遺忘。",
      technologies: [
        "Nuxt 4 CLIENT & SERVER",
        "GOOGLE OAuth",
        "GMAIL API",
        "NOTION DB API",
        "FIREBASE",
      ],
      roles: ["產品企劃", "設計", "軟體開發"],
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
      location: "台灣, 台北",
      era: "LYNUXTEK · Frontend Engineer · 2024–2026",
      copyright: "",
      credit: `Asterbytes 是一套 SaaS 內容管理平台，協助團隊管理網站內容、資料與發布流程。我參與產品從 0→1 的前端開發，從 UI/UX 到資料串接與核心功能都有參與。`,
      description: [
        "負責 CMS 核心功能與前端頁面開發，參與產品需求拆解與 UI/UX 實作。",
        "整合 API 與資料流，實作內容管理、團隊協作等核心產品功能。",
        "與後端協作串接身份驗證、檔案上傳及第三方服務，完成產品核心工作流程。",
      ],
      image: "/asterbytes.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "介紹",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.asterbytes.com",
        },
      ],
      copyrightBy: "Product and intellectual property owned by LYNUXTEK.",
    },
    {
      title: "EaseX - 可視化的地球資訊雲端平台",
      dates: "Sep 2024 - July 2026",
      era: "LYNUXTEK · Frontend Engineer · 2024–2026",
      location: "台灣, 台北",
      copyright: "",
      credit:
        "整合地圖、2D/3D 模型與時序資料的地理資訊雲端平台，支援資料視覺化、多人協作與共享。",
      description: [
        "負責前端互動介面與地理資訊功能開發，使用 Mapbox 呈現地圖與空間資料。",
        "參與 2D 地理資料與時序資料的視覺化功能，處理不同資料型態的互動與呈現。",
        "建立可重用 UI 元件並整合 API / 資料流程，與後端協作完成產品功能。",
      ],
      image: "/easex.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "介紹",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.ease-x.com/",
        },
      ],
      copyrightBy: "Product and intellectual property owned by LYNUXTEK.",
    },
    {
      title: "SHOPLINE x LINE 會員卡功能平台 & SHOPLINE 商家擴充插件",
      dates: "June - August 2024",
      location: "台灣, 台北",
      era: "",
      copyright: "",
      credit: "專案合作 w/ Crescendo Lab 漸強實驗室",
      description: [
        "串接 LINE LIFF 並與後端合作，實現以 LINE 為載體的 SHOPLINE 會員卡功能頁面。參與 SHOPLINE × LINE 會員卡功能平台開發，使用 LINE LIFF 建構以 LINE 為載體的會員卡功能頁面。",
        "與後端協作整合 API，實作會員資訊與相關功能流程。",
        "開發 SHOPLINE 商家擴充插件，讓商家可於 SHOPLINE 後台設定與管理會員卡功能。",
        "負責前端功能開發與介面實作，串接前後端資料流程。",
      ],
      image: "/crescendolab.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "介紹",
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
      location: "台北, 台灣",
      copyright: "",
      credit:
        "結合 3D Avatar、虛擬服裝與 Web3 技術的互動式 Fashion Tech 體驗，讓使用者透過 3D Avatar 瀏覽、搭配與體驗數位服裝。",
      description: [
        "負責 3D Fashion Experience 的前端開發與互動功能實作。",
        "建構 3D Avatar 與服裝展示，實作模型載入、視角控制與互動體驗。",
        "整合 Ready Player Me，串接 3D Avatar 與虛擬服裝相關功能。",
        "整合 MetaMask、NFT 與 Smart Contract，實作 Web3 錢包及鏈上功能。",
        "與設計及產品團隊協作，將視覺概念轉化為具互動性的 3D Web Experience。",
      ],
      image: "/dmktz.png",
      links: [],
      copyrightBy: "Product and intellectual property owned by TG3D Studio.",
    },
  ],
} as const;
