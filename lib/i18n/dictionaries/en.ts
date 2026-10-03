export const en = {
  meta: {
    about: {
      title: "About",
      description:
        "Background, experience and personality of Gilles SOB: full stack developer and tech lead working with Laravel, Next.js, Spring Boot and Moodle.",
    },
    projects: {
      title: "Projects",
      description:
        "Selected work by Gilles SOB: headless Moodle/Next.js platform, event-driven banking microservices, school and university management systems and e-commerce.",
    },
    skills: {
      title: "Skills",
      description:
        "Technical skills of Gilles SOB: Next.js, React, TypeScript, Laravel, Spring Boot, Kafka, Kubernetes, Moodle, secure APIs and testing.",
    },
    blog: {
      title: "Blog",
      description: "Insights, tutorials and thoughts on modern web development: Next.js, Laravel, React and more.",
    },
    contact: {
      title: "Contact",
      description: "Get in touch with Gilles SOB for a full stack development project, a job opportunity or a collaboration.",
    },
  },

  common: {
    skipToContent: "Skip to content",
    rights: "All rights reserved.",
    private: "Private",
    readMore: "Read full article",
    readTime: "min read",
  },

  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    getInTouch: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    switchLanguage: "Passer en français",
    switchLanguageShort: "FR",
    toggleTheme: "Toggle theme",
  },

  home: {
    greeting: "Hello 👋, I'm",
    name: "Gilles SOB",
    role: "Full Stack Developer & Tech Lead",
    intro:
      "Four years of building web platforms with PHP/Laravel, Next.js and Spring Boot. I lead a team of developers on KFOKAM Academy, a headless Moodle/Next.js LMS, and I build event-driven banking microservices on a Core Banking System. I care about clean architecture, secure APIs and code that stays maintainable.",
    highlights: ["Tech lead of a developer team", "Headless Moodle / Next.js", "Spring Boot · Kafka · Kubernetes", "Master's in AI security"],
    contactCta: "Contact me",
    githubCta: "Follow me on GitHub",
    imageAlt: "Portrait of Gilles SOB, full stack developer",
    competences: {
      title: "Core Competences",
      subtitle: "The technologies I rely on every day to build reliable products",
      viewAll: "View all skills",
      stats: [
        { value: "4", label: "Years of experience" },
        { value: "Lead", label: "Technical lead of a developer team" },
        { value: "3", label: "Main stacks (PHP, JS/TS, Java)" },
        { value: "100%", label: "Line coverage on the banking core" },
      ],
    },
    latestProjects: {
      title: "Featured Projects",
      subtitle: "Recent work across LMS, banking and school management",
      viewAll: "View all projects",
    },
    articles: {
      title: "Latest Articles",
      subtitle: "Notes and tutorials from my development journey",
      viewAll: "View all articles",
    },
  },

  about: {
    title: "About Me",
    subtitle: "A developer who likes solid architecture, secure systems and good teams",
    fullName: "Sob Nghami Gilles Descartes",
    imageAlt: "Portrait of Gilles SOB",
    bio: [
      "I'm a full stack developer and tech lead from Cameroon. Over four years I moved from internships in PHP and Flutter to production platforms in Laravel, React/Next.js and Spring Boot, in Scrum teams and with clients across education, e-commerce and banking.",
      "Today I split my time between two worlds. On KFOKAM Academy I lead a team of developers: I split the work, review code, make the architecture decisions and still write plenty of code myself, on a headless Moodle/Next.js platform backed by secured PHP REST APIs. On the Core Banking System I develop Java/Spring Boot microservices on Kafka and Kubernetes, following BIAN, ISO 20022 and SWIFT MT standards.",
      "I also completed a research Master's in cybersecurity and IoT, specialized in AI security. My thesis designs a secure Docker architecture that plugs a local LLM (Ollama) into Moodle, with data privacy and prompt-injection mitigation as the core goals.",
    ],
    facts: [
      { label: "Cameroon" },
      { label: "4 years of experience" },
      { label: "French (C1) · English (B1)" },
      { label: "Open to collaboration" },
    ],
    strengthsTitle: "How I work",
    strengths: [
      {
        title: "Architecture first",
        text: "Headless platforms, REST APIs documented with OpenAPI and event-driven services: I design the structure before the screens.",
      },
      {
        title: "Technical leadership",
        text: "Task breakdown, code reviews, mentoring interns and juniors. A tech lead who keeps coding, not only managing.",
      },
      {
        title: "Quality and security",
        text: "HMAC and CORS protected APIs, PHPUnit and Cypress tests, static analysis and CI pipelines with 100% line coverage on critical modules.",
      },
    ],
    beyond: {
      title: "Beyond the code",
      subtitle: "What keeps me curious and balanced when the laptop is closed",
      interests: [
        { icon: "music", title: "Choir", text: "Singing in a choir taught me to listen and to play my part in a group." },
        { icon: "chess", title: "Chess", text: "Thinking several moves ahead is a good habit for system design too." },
        { icon: "basketball", title: "Basketball", text: "Team play, rhythm and a bit of competition." },
        { icon: "film", title: "Tech documentaries", text: "I like understanding how technology and people shape each other." },
        { icon: "watch", title: "Tech watch", text: "Following new tools and practices so my skills stay current." },
      ],
      qualities: ["Team spirit", "Rigor", "Autonomy", "Adaptability", "Analytical mind"],
      qualitiesTitle: "In a few words",
    },
  },

  experience: {
    title: "Professional Experience",
    projectsLabel: "Projects",
    items: {
      "core-banking": {
        company: "PKFOKAM Research Center",
        role: "Java Backend Developer (Core Banking System)",
        period: "April 2026 - Present",
        type: "Full-time, on-site",
        projects: "Core Banking System",
        bullets: [
          "Event-driven banking microservices with Spring Boot, Java 25 and Kafka, deployed on Kubernetes with PostgreSQL.",
          "Financial contract lifecycle and business validation rules (ISO 4217 currency, back-dating guard) through PF4J plugins.",
          "Compliance with BIAN, ISO 20022 and SWIFT MT standards; security with Spring Security, Keycloak and HashiCorp Vault.",
          "Quality pipeline: GitLab CI, Checkstyle, PMD, SpotBugs and JaCoCo at 100% line coverage.",
        ],
      },
      "moodle-lead": {
        company: "PKFOKAM Research Center",
        role: "Lead Moodle Developer (Tech Lead)",
        period: "August 2025 - Present",
        type: "Part-time, on-site",
        projects: "KFOKAM Academy",
        bullets: [
          "Technical lead of a team of developers: task distribution, code reviews and skills development, while contributing code every day.",
          "Headless Moodle/Next.js architecture: Next.js App Router frontend with SSR, connected to secured PHP REST APIs (HMAC, CORS) documented with OpenAPI.",
          "Dynamic, bilingual CMS modules; technical management of KFOKAM 48 and Moodle Workplace.",
          "Deployment, server optimization and unit test automation (PHPUnit). MVP of KFOKAM Academy delivered, deployment in progress.",
        ],
      },
      "moodle-dev": {
        company: "PKFOKAM Research Center",
        role: "Moodle Developer",
        period: "January 2025 - July 2025",
        type: "Full-time, on-site",
        projects: "KFOKAM 48, Moodle Workplace (F2G)",
        bullets: [
          "Development and maintenance of custom Moodle plugins.",
          "Deployment and configuration of multi-tenant Moodle instances.",
        ],
      },
      mveng: {
        company: "Mveng Engineering",
        role: "Full Stack Web Developer (Laravel / React)",
        period: "June 2022 - October 2024",
        type: "Full-time, on-site",
        projects: "School, university, association and multi-role e-commerce platforms",
        bullets: [
          "Design, mockups and full stack development of applications with front office and back office: secondary school management, university management, association website and a multi-role e-commerce (admin, customer, seller, delivery).",
          "React.js/Next.js and TypeScript frontends from Figma mockups; integration of Laravel APIs (query optimization, sessions, security).",
          "Cypress and PHPUnit tests, deployment, code reviews and mentoring of interns.",
        ],
      },
      dce: {
        company: "DCE (Doho Consulting & Engineering)",
        role: "Full Stack Web Consultant (Spring Boot / React)",
        period: "August 2022 - July 2024",
        type: "Part-time, remote",
        projects: "GESCO, GESCO WEB, ESHOP",
        bullets: [
          "My first experience in a Scrum team of developers: three SaaS platforms (school management, sales management, driving school management).",
          "React/TypeScript interfaces on Spring Boot APIs, end-to-end tests with Cypress, code reviews and corrective and evolutive maintenance, tracked in OpenProject.",
        ],
      },
      internship: {
        company: "Mveng Engineering",
        role: "Web (PHP) then Mobile (Flutter) Intern",
        period: "Aug - Oct 2020 and Aug - Sep 2021",
        type: "Full-time, on-site",
        projects: "Time tracking, project management and course apps",
        bullets: [
          "Web applications for employee time tracking and project management (PHP, MySQL).",
          "Mobile application with courses, tutorials and exercises (Flutter, Firebase, Git/GitHub).",
        ],
      },
    },
    educationTitle: "Education & Training",
    education: [
      {
        title: "Research Master in Cybersecurity and IoT, AI Security track",
        institution: "Wintechgroup E-University",
        period: "2025 - 2026",
        description:
          "Thesis: a secure Docker architecture integrating Ollama into Moodle (data privacy, prompt-injection mitigation). Defended with highest honors.",
      },
      {
        title: "Computer Engineering Degree (Ingénieur des travaux)",
        institution: "IAI Cameroon",
        period: "2022 - 2023",
        description: "Software engineering principles, project management and advanced development practices.",
      },
      {
        title: "DTS Higher Technician Diploma",
        institution: "IAI Cameroon",
        period: "2021 - 2022",
        description: "Modern web technologies and full stack development methodologies.",
      },
      {
        title: "BTS / HND Higher National Diploma",
        institution: "ISIM Bertoua",
        period: "2020 - 2021",
        description: "Software development with a focus on practical application and industry standards.",
      },
      {
        title: "Baccalaureate, series D",
        institution: "Collège Bilingue Adventiste Boma, Bertoua",
        period: "2017 - 2018",
        description: "A diploma I'm very proud of, because it opened the doors of university for me.",
      },
    ],
  },

  skills: {
    title: "Skills & Competences",
    subtitle: "Technologies and practices I use to build and ship reliable software",
    groups: {
      frontend: "Frontend",
      backend: "Backend & APIs",
      java: "Java & Distributed Systems",
      headless: "LMS & Headless",
      security: "Security & AI",
      data: "Databases",
      quality: "Testing & Quality",
      tools: "Tools, Mobile & Design",
    },
    summaryTitle: "In numbers",
    summary: [
      { value: "4", label: "Years of experience" },
      { value: "Lead", label: "Technical lead of a developer team" },
      { value: "100%", label: "Line coverage on the banking core" },
      { value: "2", label: "Languages: French and English" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "C1" },
      { name: "English", level: "B1" },
    ],
    trainingTitle: "Academic path",
  },

  projects: {
    title: "My Projects",
    subtitle: "Platforms I designed, built or helped to lead, from LMS to banking",
    tabs: { professional: "Professional", personal: "Personal & Academic" },
    sections: {
      professional: {
        title: "Professional Projects",
        subtitle: "Applications and systems built for clients and organizations",
      },
      personal: {
        title: "Personal & Academic Projects",
        subtitle: "Side projects, research work and design exercises",
      },
    },
    categories: {
      lms: "LMS / EdTech",
      banking: "Banking / Fintech",
      management: "Management System",
      ecommerce: "E-commerce",
      website: "Website",
      education: "Education",
      health: "Health",
      ai: "AI & Security",
      design: "UI/UX Design",
    },
    status: { ongoing: "Ongoing", completed: "Completed", paused: "Paused" },
    illustrationAlt: "Illustration of the project",
    items: {
      "kfokam-academy": {
        title: "KFOKAM Academy",
        description:
          "Learning platform built on a headless Moodle/Next.js architecture: Next.js App Router frontend with SSR on top of secured PHP REST APIs (HMAC, CORS, OpenAPI), with dynamic bilingual CMS modules. MVP delivered, deployment in progress. I lead the team of developers.",
      },
      "core-banking": {
        title: "Core Banking System",
        description:
          "Event-driven banking microservices (Spring Boot, Java 25, Kafka) deployed on Kubernetes. Financial contract lifecycle, business validation plugins and compliance with BIAN, ISO 20022 and SWIFT MT, with 100% JaCoCo line coverage.",
      },
      "kfokam-48": {
        title: "KFOKAM 48 & Moodle Workplace",
        description:
          "Custom Moodle plugins and multi-tenant instances for Moodle Workplace (F2G), with ongoing technical management, deployment and DevOps practices.",
      },
      "gesco-web": {
        title: "GESCO WEB",
        description: "SaaS platform where parents follow their children's results and teachers manage disciplinary matters.",
      },
      gesco: {
        title: "GESCO",
        description:
          "SaaS platform to manage secondary school students, teachers, subjects, grades and report card generation.",
      },
      eshop: {
        title: "ESHOP",
        description: "SaaS data tracking platform with product, store and mobile parts.",
      },
      argon: {
        title: "ARGON",
        description:
          "SaaS platform for secondary school management, from student enrollment to report cards and financial management.",
      },
      syncobe: {
        title: "SYNCOBE",
        description:
          "Showcase website of an association with a back office: activities, current projects, past achievements and a news section to share events.",
      },
      armada: {
        title: "ARMADA",
        description:
          "Update of an e-commerce website: smoother navigation, a personalized recommendation system and payment integrations (Orange Money, Mobile Money, Stripe).",
      },
      kendel: {
        title: "KENDEL",
        description:
          "SaaS platform for university management, from student enrolment to financial management and transcript generation.",
      },
      "moodle-ai": {
        title: "Local AI assistant for Moodle",
        description:
          "Master's thesis: a secure Docker architecture that integrates a local LLM (Ollama) into Moodle, with data privacy and prompt-injection mitigation as central goals. Defended with highest honors.",
      },
      ecopra: {
        title: "ECOPRA",
        description:
          "Online management system for schools: student registration, report cards, certificates, lists and financial management. Designed, built and deployed on my own.",
      },
      testlang: {
        title: "TESTLANG",
        description:
          "Language exam preparation platform with several practice tests and a personal learning coach.",
      },
      snhealth: {
        title: "SNHEALTH",
        description:
          "Online medical teleconsultation platform: users consult qualified doctors from home and get diagnosis, advice and prescriptions through a secure service.",
      },
      "design-exam": {
        title: "Language exam platform (learner side)",
        description:
          "UI/UX design of the learner experience: an intuitive interface with clear menus and easily accessible actions.",
      },
      "design-housing": {
        title: "Accommodation search website",
        description:
          "UI/UX design built to make finding a home as easy as possible, with clear navigation and attention to detail.",
      },
      "design-booking": {
        title: "Booking website",
        description: "UI/UX design of a tourist site search application, crafted for a smooth travel booking experience.",
      },
      "design-marketplace": {
        title: "Marketplace mobile app",
        description:
          "UI/UX design of a mobile marketplace that facilitates transactions between buyers and sellers and virtualizes shopping centers.",
      },
    },
  },

  blog: {
    title: "Blog",
    subtitle: "Insights, tutorials and thoughts on modern web development",
    recent: "Recent posts",
    aboutAuthor: "About the author",
    aboutAuthorText:
      "Gilles SOB is a full stack developer and tech lead. He works with Laravel, Next.js and Spring Boot, and enjoys sharing practical notes on building maintainable applications.",
    backToBlog: "Back to the blog",
    byline: "By",
  },

  contact: {
    title: "Get In Touch",
    subtitle:
      "Work is a team sport. I'm open to collaborations, job opportunities and questions about my projects.",
    infoTitle: "Contact Information",
    infoSubtitle: "Feel free to reach out through any of these channels",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Cameroon",
    followTitle: "Find me online",
    followSubtitle: "Code, professional profile and more",
    availabilityTitle: "Availability",
    availability: ["Freelance projects", "Full-time opportunities", "Consulting"],
    formTitle: "Send a Message",
    formSubtitle: "Your email app will open with the message ready to send",
    name: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your.email@example.com",
    subject: "Subject",
    subjectPlaceholder: "What's this about?",
    message: "Message",
    messagePlaceholder: "Tell me about your project or question...",
    send: "Send Message",
    ctaTitle: "Ready to Work Together?",
    ctaText:
      "Whether you have a project in mind or just want to talk technology, I'm always happy to connect with developers and potential collaborators.",
    ctaEmail: "Email me",
    ctaWork: "View my work",
  },

  footer: {
    tagline:
      "Full stack developer and tech lead building secure, maintainable web platforms with Laravel, Next.js and Spring Boot.",
    quickLinks: "Quick links",
    contact: "Contact",
    follow: "Follow me",
  },
}

export type Dictionary = typeof en
