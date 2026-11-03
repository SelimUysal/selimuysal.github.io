/* Curated portfolio content. Keep claims tied to public evidence. */
export const DATA = {
  profile: {
    name: "Selim Uysal",
    github: "https://github.com/SelimUysal",
    linkedin: "https://www.linkedin.com/in/seli%CC%87muysal/?locale=en-US",
    education: "B.Sc. in Software Engineering",
    university: "Atılım University",
    graduation: "2025"
  },

  projects: [
    {
      id: "hayat",
      category: "software",
      featured: true,
      year: "2026",
      type: { en: "Independent product · live application", tr: "Bağımsız ürün · yayındaki uygulama" },
      name: { en: "Hayat Rehberi", tr: "Hayat Rehberi" },
      description: {
        en: "A multi-module, mobile-first web application bringing together Quran reading and audio, memorisation practice, prayer tools, learning resources and personal progress. Built with a local-first approach and optional account-based synchronisation.",
        tr: "Kur’an okuma ve dinleme, ezber çalışmaları, namaz araçları, öğrenme kaynakları ve kişisel ilerlemeyi bir araya getiren çok modüllü, mobil öncelikli web uygulaması. Yerel öncelikli yapı ve isteğe bağlı hesap eşitlemesiyle geliştirildi."
      },
      stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
      cover: "./assets/hayat-rehberi-cover.webp",
      coverAlt: {
        en: "Hayat Rehberi application interface and modules",
        tr: "Hayat Rehberi uygulamasının arayüzü ve modülleri"
      },
      links: [
        { kind: "live", url: "https://selimuysal.github.io/hayat-rehberi/" },
        { kind: "source", url: "https://github.com/SelimUysal/hayat-rehberi" },
        { kind: "case", url: "./case-studies.html#hayat" }
      ]
    },
    {
      id: "video",
      category: "software",
      year: "2026",
      type: { en: "Published Chrome extension", tr: "Yayımlanmış Chrome eklentisi" },
      name: { en: "Video Speed", tr: "Video Speed" },
      description: {
        en: "A browser extension for precise HTML5 playback control, with per-site speed and panel-position preferences, keyboard shortcuts, draggable controls and dynamic video discovery. Settings stay in Chrome local storage; browsing activity is not collected.",
        tr: "HTML5 videolar için hassas oynatma kontrolü sunan tarayıcı eklentisi. Siteye özel hız ve panel konumu tercihleri, klavye kısayolları, taşınabilir kontroller ve dinamik video algılama içerir. Ayarlar Chrome yerel depolamasında tutulur; gezinme etkinliği toplanmaz."
      },
      stack: ["JavaScript", "Chrome Extensions", "Manifest V3", "Browser APIs"],
      cover: "./assets/video-speed-cover.webp",
      coverAlt: {
        en: "Video Speed extension controls over a browser video",
        tr: "Tarayıcı videosu üzerinde Video Speed eklentisi kontrolleri"
      },
      links: [
        { kind: "store", url: "https://chromewebstore.google.com/detail/video-speed/cmjafmcaccbhfgcjnfldaahebnbbppje" },
        { kind: "source", url: "https://github.com/SelimUysal/video-speed" },
        { kind: "case", url: "./case-studies.html#video" }
      ]
    },
    {
      id: "quran",
      category: "software",
      year: "2025",
      type: { en: "Modular web application", tr: "Modüler web uygulaması" },
      name: { en: "Quran Memorization & Arabic Analysis", tr: "Kur’an Ezber ve Arapça Analiz" },
      description: {
        en: "An interactive reading and memorisation application with selectable Arabic text, audio repetition, playback controls and optional Gemini-assisted linguistic analysis. The interface, audio and service logic are separated into ES modules.",
        tr: "Seçilebilir Arapça metin, sesli tekrar, oynatma kontrolleri ve isteğe bağlı Gemini destekli dil çözümlemesi sunan etkileşimli okuma ve ezber uygulaması. Arayüz, ses ve servis mantığı ES modüllerine ayrılmıştır."
      },
      stack: ["JavaScript", "ES Modules", "Audio APIs", "Gemini API"],
      cover: "./assets/quran-memorization-cover.webp",
      coverAlt: {
        en: "Quran memorisation and Arabic text analysis interface",
        tr: "Kur’an ezber ve Arapça metin analizi arayüzü"
      },
      links: [
        { kind: "live", url: "https://selimuysal.github.io/kuran-ezber/" },
        { kind: "source", url: "https://github.com/SelimUysal/kuran-ezber" },
        { kind: "case", url: "./case-studies.html#quran" }
      ]
    },
    {
      id: "teknofest",
      category: "research",
      year: "2024",
      type: { en: "Team research project · preliminary design", tr: "Ekip araştırma projesi · ön tasarım" },
      name: { en: "TEKNOFEST · AI in Transportation", tr: "TEKNOFEST · Ulaşımda Yapay Zekâ" },
      description: {
        en: "SEE AI team project investigating aerial detection of people, vehicles and landing zones, YOLOv8/YOLOv9, SAHI and visual positioning from downward-facing cameras. The team placed 11th among 198 teams in the preliminary design report evaluation only.",
        tr: "SEE AI ekibinin havadan insan, araç ve iniş alanı tespiti; YOLOv8/YOLOv9, SAHI ve aşağı bakan kameralarla görsel konumlama üzerine çalışması. Ekip, yalnızca ön tasarım raporu değerlendirmesinde 198 takım arasında 11. oldu."
      },
      stack: ["YOLOv8 / YOLOv9", "SAHI", "Computer Vision", "Technical Research"],
      cover: "./assets/academic-teknofest-cover.svg",
      coverAlt: {
        en: "Concept illustration of aerial computer vision; not experimental output",
        tr: "Havadan bilgisayarlı görü için kavramsal çizim; deneysel çıktı değildir"
      },
      links: [
        { kind: "report", url: "./assets/reports/teknofest-ai-transportation.pdf" },
        { kind: "case", url: "./case-studies.html#teknofest" }
      ]
    },
    {
      id: "rims",
      category: "internship",
      year: "2024–2025",
      type: { en: "Industry internship · AYESAŞ", tr: "Sektör stajı · AYESAŞ" },
      name: { en: "RIMS · Device & Component Management", tr: "RIMS · Cihaz ve Bileşen Yönetimi" },
      description: {
        en: "Internship work on a web-based device and component management system using a React interface, Spring Boot REST APIs and PostgreSQL, with PDF, HTML and JSON export workflows. Public description only; no company source code or confidential data is shared.",
        tr: "React arayüzü, Spring Boot REST API’leri ve PostgreSQL kullanan web tabanlı cihaz ve bileşen yönetim sistemi üzerinde staj çalışması. PDF, HTML ve JSON dışa aktarma iş akışlarını içerir. Yalnızca kamuya açık bilgiler paylaşılır; şirkete ait kaynak kodu veya gizli veri yayımlanmaz."
      },
      stack: ["React", "Spring Boot", "PostgreSQL", "REST APIs"],
      links: [{ kind: "case", url: "./case-studies.html#rims" }]
    }
  ],

  selectedProjects: ["hayat", "video", "quran"],

  researchStatement: {
    en: "My current research interests focus on making AI-enabled software more reliable in practice. I am particularly interested in LLM-based agents, tool-use reliability, evaluation under constrained resources and the engineering boundaries that keep model-driven systems predictable, testable and maintainable. These are research directions I am developing—not claims of completed peer-reviewed work.",
    tr: "Güncel araştırma ilgim, yapay zekâ destekli yazılımları pratikte daha güvenilir hâle getirmek üzerine. Özellikle LLM tabanlı ajanlar, araç kullanımının güvenilirliği, kısıtlı kaynaklarda değerlendirme ve model tabanlı sistemleri öngörülebilir, test edilebilir ve sürdürülebilir tutan mühendislik sınırlarıyla ilgileniyorum. Bunlar geliştirmekte olduğum araştırma yönelimleridir; tamamlanmış hakemli çalışmalar olarak sunulmamaktadır."
  },

  researchFocus: [
    { en: "LLM-based agents", tr: "LLM tabanlı ajanlar" },
    { en: "Tool use & evaluation", tr: "Araç kullanımı ve değerlendirme" },
    { en: "Reliability & verification", tr: "Güvenilirlik ve doğrulama" },
    { en: "Resource-constrained AI", tr: "Kaynak kısıtlı yapay zekâ" }
  ],

  articles: [
    {
      id: "technology",
      category: { en: "Technology & engineering", tr: "Teknoloji ve mühendislik" },
      title: {
        en: "Using Technology Is Not Enough: Becoming a Contributor to Its Future",
        tr: "Teknolojiyi Kullanmak Yetmez: Geleceği Şekillendirenlerden Biri Olmak"
      },
      description: {
        en: "An engineering essay on the difference between accessing powerful tools and learning to understand, challenge and develop the systems beneath them.",
        tr: "Güçlü araçlara erişmek ile onların arkasındaki sistemleri anlamak, sorgulamak ve geliştirmek arasındaki fark üzerine bir mühendislik denemesi."
      },
      url: "./articles/technology-and-engineering.html"
    },
    {
      id: "turkiye",
      category: { en: "Technology policy · Türkiye", tr: "Teknoloji politikası · Türkiye" },
      title: {
        en: "Türkiye’s Technological Future: More Investment or a Better Strategy?",
        tr: "Türkiye’nin Teknolojik Geleceği: Daha Fazla Yatırım mı, Daha Doğru Strateji mi?"
      },
      description: {
        en: "A systems perspective on R&D investment, research talent, university–industry collaboration and the measurement of innovation outcomes.",
        tr: "Ar-Ge yatırımları, araştırmacı yetiştirme, üniversite–sanayi iş birliği ve inovasyon sonuçlarının ölçülmesine sistem yaklaşımıyla bakan bir inceleme."
      },
      url: "./articles/turkiye-technology-strategy.html"
    }
  ],

  experiences: [
    {
      name: "AYESAŞ",
      date: "Jul 2024 – Jan 2025",
      kind: { en: "Full-Stack Software Development Intern", tr: "Full-Stack Yazılım Geliştirme Stajyeri" },
      description: {
        en: "Worked on a web-based device and component management system, contributing to a React interface, Spring Boot REST API workflows, PostgreSQL-backed data and document exports.",
        tr: "Web tabanlı cihaz ve bileşen yönetim sistemi üzerinde çalıştı; React arayüzüne, Spring Boot REST API iş akışlarına, PostgreSQL tabanlı verilere ve belge dışa aktarımlarına katkı sağladı."
      },
      stack: ["React", "Spring Boot", "PostgreSQL"]
    },
    {
      name: "LENTATEK",
      date: "Sep 2022 – Jun 2024",
      kind: { en: "Embedded Systems Intern", tr: "Gömülü Sistemler Stajyeri" },
      description: {
        en: "Developed Qt-based interfaces, worked with serial communication and configured Ubuntu environments for embedded-systems workflows.",
        tr: "Qt tabanlı arayüzler geliştirdi; seri haberleşme ve gömülü sistem iş akışları için Ubuntu ortamlarının yapılandırılması üzerinde çalıştı."
      },
      stack: ["C++", "Qt", "Linux", "Serial Communication"]
    },
    {
      name: "DENEYAP Technology Workshops",
      date: "Sep 2022 – Jan 2024",
      kind: { en: "STEM Instructor · additional experience", tr: "STEM Eğitmeni · ek deneyim" },
      description: {
        en: "Taught software, robotics, electronics and introductory IoT; mentored student projects and competition preparation.",
        tr: "Yazılım, robotik, elektronik ve temel IoT dersleri verdi; öğrenci projelerine ve yarışma hazırlıklarına mentorluk yaptı."
      },
      stack: ["Teaching", "Robotics", "IoT"]
    }
  ],

  education: {
    degree: { en: "B.Sc. in Software Engineering", tr: "Yazılım Mühendisliği Lisans" },
    university: "Atılım University",
    location: { en: "Ankara, Türkiye", tr: "Ankara, Türkiye" },
    year: "2025",
    recognition: {
      en: "Spring 2022–2023 Honor Student Certificate",
      tr: "2022–2023 Bahar Yarıyılı Onur Öğrencisi Belgesi"
    }
  },

  certificates: [
    {
      title: { en: "Generative AI with Large Language Models", tr: "Büyük Dil Modelleriyle Üretken Yapay Zekâ" },
      issuer: "DeepLearning.AI · AWS · Coursera",
      date: "02 Feb 2024",
      pdf: "./assets/certificates/generative-ai-llms-coursera.pdf",
      verify: "https://www.coursera.org/verify/FZD64R69X7BA"
    },
    {
      title: { en: "Oracle SQL: From Beginner to Advanced", tr: "Sıfırdan İleri Seviye Oracle SQL" },
      issuer: "BTK Akademi",
      date: "16 Jan 2024",
      pdf: "./assets/certificates/oracle-sql-btk-akademi.pdf"
    }
  ]
};
