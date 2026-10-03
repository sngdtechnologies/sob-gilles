import type { Dictionary } from "./en"

export const fr: Dictionary = {
  meta: {
    about: {
      title: "À propos",
      description:
        "Parcours, expérience et personnalité de Gilles SOB : développeur fullstack et lead technique autour de Laravel, Next.js, Spring Boot et Moodle.",
    },
    projects: {
      title: "Projets",
      description:
        "Réalisations de Gilles SOB : plateforme Moodle/Next.js headless, microservices bancaires event-driven, plateformes de gestion scolaire et universitaire, e-commerce.",
    },
    skills: {
      title: "Compétences",
      description:
        "Compétences techniques de Gilles SOB : Next.js, React, TypeScript, Laravel, Spring Boot, Kafka, Kubernetes, Moodle, API sécurisées et tests.",
    },
    blog: {
      title: "Blog",
      description: "Réflexions, tutoriels et idées sur le développement web moderne : Next.js, Laravel, React et plus encore.",
    },
    contact: {
      title: "Contact",
      description: "Contactez Gilles SOB pour un projet de développement fullstack, une opportunité professionnelle ou une collaboration.",
    },
  },

  common: {
    skipToContent: "Aller au contenu",
    rights: "Tous droits réservés.",
    private: "Privé",
    readMore: "Lire l'article",
    readTime: "min de lecture",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    blog: "Blog",
    contact: "Contact",
    getInTouch: "Me contacter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    switchLanguage: "Switch to English",
    switchLanguageShort: "EN",
    toggleTheme: "Changer de thème",
  },

  home: {
    hero: {
      eyebrow: "Développeur Fullstack & Lead Technique",
      availability: "Ouvert à des opportunités ciblées",
      headline: "Des plateformes sûres et évolutives,",
      accent: "conçues pour durer.",
      ctaPrimary: "Démarrer une conversation",
      ctaSecondary: "Voir mes réalisations",
      scroll: "Défiler",
    },
    credibility: {
      label: "Expérience chez",
      items: ["PKFOKAM Research Center", "Mveng Engineering", "DCE · Doho Consulting & Engineering"],
    },
    standards: {
      label: "Une exigence de rigueur",
      items: ["BIAN", "ISO 20022", "SWIFT MT", "OpenAPI", "HMAC & CORS", "Kafka", "Kubernetes", "CI/CD", "100 % de couverture de lignes"],
    },
    cta: {
      title: "Construisons quelque chose de",
      accent: "solide.",
      text: "Ouvert aux projets ambitieux, aux postes de leadership technique et aux collaborations de long terme.",
      copy: "Copier l'e-mail",
      copied: "Copié",
    },
    greeting: "Bonjour 👋, je suis",
    name: "Gilles SOB",
    role: "Développeur Fullstack & Lead Technique",
    intro:
      "Quatre ans à concevoir des plateformes web avec PHP/Laravel, Next.js et Spring Boot. Je développe des microservices bancaires event-driven sur un Core Banking System, et je dirige une équipe de développeurs sur KFOKAM Academy, un LMS Moodle/Next.js headless. J'attache de l'importance à une architecture propre, à des API sécurisées et à un code qui reste maintenable.",
    highlights: ["Lead technique d'une équipe de développeurs", "Moodle / Next.js headless", "Spring Boot · Kafka · Kubernetes", "Master en sécurité de l'IA"],
    contactCta: "Me contacter",
    githubCta: "Me suivre sur GitHub",
    imageAlt: "Portrait de Gilles SOB, développeur fullstack",
    competences: {
      eyebrow: "Expertise",
      title: "Compétences clés",
      subtitle: "Les technologies sur lesquelles je m'appuie chaque jour pour construire des produits fiables",
      viewAll: "Voir toutes les compétences",
      stats: [
        { value: "4", label: "Ans d'expérience" },
        { value: "Lead", label: "Lead technique d'une équipe de développeurs" },
        { value: "3", label: "Stacks principales (PHP, JS/TS, Java)" },
        { value: "100%", label: "Couverture de lignes du cœur bancaire" },
      ],
    },
    latestProjects: {
      eyebrow: "Réalisations",
      title: "Projets à la une",
      subtitle: "Réalisations récentes en LMS, banque et gestion scolaire",
      viewAll: "Voir tous les projets",
    },
    articles: {
      eyebrow: "Écrits",
      title: "Derniers articles",
      subtitle: "Notes et tutoriels issus de mon parcours de développeur",
      viewAll: "Voir tous les articles",
    },
  },

  about: {
    eyebrow: "À propos",
    title: "À propos de moi",
    subtitle: "Un développeur qui aime les architectures solides, les systèmes sûrs et les bonnes équipes",
    fullName: "Sob Nghami Gilles Descartes",
    imageAlt: "Portrait de Gilles SOB",
    bio: [
      "Je suis développeur fullstack et lead technique, originaire du Cameroun. En quatre ans, je suis passé de stages en PHP et Flutter à des plateformes en production avec Laravel, React/Next.js et Spring Boot, en équipes Scrum et pour des clients de l'éducation, du e-commerce et de la banque.",
      "Aujourd'hui, mon temps se partage entre deux univers. Sur le Core Banking System, je développe des microservices Java/Spring Boot avec Kafka et Kubernetes, dans le respect des standards BIAN, ISO 20022 et SWIFT MT. Sur KFOKAM Academy, je dirige une équipe de développeurs : je répartis les tâches, je fais les revues de code, je prends les décisions d'architecture et je code toujours beaucoup moi-même, sur une plateforme Moodle/Next.js headless reposant sur des API REST PHP sécurisées.",
      "J'ai aussi terminé un Master recherche en cybersécurité et IoT, spécialité sécurité de l'IA. Mon mémoire conçoit une architecture Docker sécurisée qui intègre un LLM local (Ollama) à Moodle, avec la confidentialité des données et la mitigation des prompt injections comme objectifs centraux.",
    ],
    facts: [
      { label: "Cameroun" },
      { label: "4 ans d'expérience" },
      { label: "Français (C1) · Anglais (B1)" },
      { label: "Ouvert aux collaborations" },
    ],
    strengthsTitle: "Ma façon de travailler",
    strengths: [
      {
        title: "L'architecture d'abord",
        text: "Plateformes headless, API REST documentées avec OpenAPI et services event-driven : je pense la structure avant les écrans.",
      },
      {
        title: "Leadership technique",
        text: "Répartition des tâches, revues de code, accompagnement de stagiaires et de juniors. Un lead qui continue de coder, pas seulement de manager.",
      },
      {
        title: "Qualité et sécurité",
        text: "API protégées (HMAC, CORS), tests PHPUnit et Cypress, analyse statique et CI avec 100 % de couverture de lignes sur les modules critiques.",
      },
    ],
    beyond: {
      title: "Au-delà du code",
      subtitle: "Ce qui me garde curieux et équilibré quand l'ordinateur est fermé",
      interests: [
        { icon: "music", title: "Chorale", text: "Chanter en chorale apprend à écouter et à tenir sa partie dans un groupe." },
        { icon: "chess", title: "Échecs", text: "Voir plusieurs coups à l'avance, c'est aussi une bonne habitude en conception de systèmes." },
        { icon: "basketball", title: "Basket-ball", text: "Jeu d'équipe, rythme et un brin de compétition." },
        { icon: "film", title: "Documentaires tech", text: "J'aime comprendre comment la technologie et les gens se façonnent mutuellement." },
        { icon: "watch", title: "Veille technologique", text: "Suivre les nouveaux outils et pratiques pour garder mes compétences à jour." },
      ],
      qualities: ["Esprit d'équipe", "Rigueur", "Autonomie", "Adaptabilité", "Sens de l'analyse"],
      qualitiesTitle: "En quelques mots",
    },
  },

  experience: {
    eyebrow: "Parcours",
    title: "Expérience professionnelle",
    projectsLabel: "Projets",
    items: {
      "core-banking": {
        company: "PKFOKAM Research Center",
        role: "Développeur backend Java (Core Banking System)",
        period: "Avril 2026 - Actuel",
        type: "Temps plein, présentiel",
        projects: "Core Banking System",
        bullets: [
          "Microservices bancaires event-driven avec Spring Boot, Java 25 et Kafka, déployés sur Kubernetes avec PostgreSQL.",
          "Cycle de vie des contrats financiers et règles de validation métier (devise ISO 4217, garde contre l'antidatage) via des plugins PF4J.",
          "Conformité aux standards BIAN, ISO 20022 et SWIFT MT ; sécurité avec Spring Security, Keycloak et HashiCorp Vault.",
          "Pipeline qualité : GitLab CI, Checkstyle, PMD, SpotBugs et JaCoCo à 100 % de couverture de lignes.",
        ],
      },
      "moodle-lead": {
        company: "PKFOKAM Research Center",
        role: "Lead développeur Moodle (Lead Technique)",
        period: "Août 2025 - Actuel",
        type: "Temps partiel, présentiel",
        projects: "KFOKAM Academy",
        bullets: [
          "Lead technique d'une équipe de développeurs : répartition des tâches, revues de code et montée en compétences, tout en contribuant au code au quotidien.",
          "Architecture headless Moodle/Next.js : frontend Next.js App Router avec SSR, branché sur des API REST PHP sécurisées (HMAC, CORS) documentées avec OpenAPI.",
          "Modules CMS dynamiques et bilingues ; gestion technique de KFOKAM 48 et de Moodle Workplace.",
          "Déploiement, optimisation serveur et automatisation des tests unitaires (PHPUnit). MVP de KFOKAM Academy livré, déploiement en cours.",
        ],
      },
      "moodle-dev": {
        company: "PKFOKAM Research Center",
        role: "Développeur Moodle",
        period: "Janvier 2025 - Juillet 2025",
        type: "Temps plein, présentiel",
        projects: "KFOKAM 48, Moodle Workplace (F2G)",
        bullets: [
          "Développement et maintenance de plugins Moodle personnalisés.",
          "Déploiement et configuration d'instances Moodle multi-tenant.",
        ],
      },
      mveng: {
        company: "Mveng Engineering",
        role: "Développeur web fullstack (Laravel / React)",
        period: "Juin 2022 - Octobre 2024",
        type: "Temps plein, présentiel",
        projects: "Plateformes scolaires, universitaires, associatives et e-commerce multi-rôles",
        bullets: [
          "Conception, maquettage et développement fullstack d'applications avec front office et back office : gestion d'établissement secondaire, gestion d'université, site d'association et e-commerce multi-rôles (administration, client, vendeur, livreur).",
          "Frontends React.js/Next.js et TypeScript à partir de maquettes Figma ; intégration d'API Laravel (optimisation des requêtes, sessions, sécurisation).",
          "Tests Cypress et PHPUnit, déploiement, revues de code et monitorat de stagiaires.",
        ],
      },
      dce: {
        company: "DCE (Doho Consulting & Engineering)",
        role: "Consultant développeur web fullstack (Spring Boot / React)",
        period: "Août 2022 - Juillet 2024",
        type: "Temps partiel, télétravail",
        projects: "GESCO, GESCO WEB, ESHOP",
        bullets: [
          "Ma première expérience dans une équipe Scrum de développeurs : trois plateformes SaaS (gestion scolaire, gestion des ventes, gestion d'auto-écoles).",
          "Interfaces React/TypeScript sur des API Spring Boot, tests de bout en bout Cypress, revues de code, maintenance corrective et évolutive suivie sous OpenProject.",
        ],
      },
      internship: {
        company: "Mveng Engineering",
        role: "Stagiaire développement web (PHP) puis mobile (Flutter)",
        period: "Août - Oct. 2020 et Août - Sept. 2021",
        type: "Temps plein, présentiel",
        projects: "Applications de pointage, de gestion de projets et de cours",
        bullets: [
          "Applications web de pointage des employés et de gestion de projets (PHP, MySQL).",
          "Application mobile de cours, travaux dirigés et exercices (Flutter, Firebase, Git/GitHub).",
        ],
      },
    },
    educationEyebrow: "Études",
    educationTitle: "Formation",
    education: [
      {
        title: "Master recherche en Cybersécurité et IoT, spécialité Sécurité de l'IA",
        institution: "Wintechgroup E-University",
        period: "2025 - 2026",
        description:
          "Mémoire : architecture Docker sécurisée intégrant Ollama à Moodle (confidentialité des données, mitigation des prompt injections). Soutenu avec la mention très bien.",
      },
      {
        title: "Ingénieur des travaux en Informatique",
        institution: "IAI Cameroun",
        period: "2022 - 2023",
        description: "Principes du génie logiciel, gestion de projet et pratiques de développement avancées.",
      },
      {
        title: "DTS (Diplôme de Technicien Supérieur)",
        institution: "IAI Cameroun",
        period: "2021 - 2022",
        description: "Technologies web modernes et méthodologies de développement fullstack.",
      },
      {
        title: "BTS (Brevet de Technicien Supérieur)",
        institution: "ISIM Bertoua",
        period: "2020 - 2021",
        description: "Développement logiciel, avec un accent sur la pratique et les standards de l'industrie.",
      },
      {
        title: "Baccalauréat série D",
        institution: "Collège Bilingue Adventiste Boma, Bertoua",
        period: "2017 - 2018",
        description: "Un diplôme dont je suis très fier, car il m'a ouvert les portes de l'université.",
      },
    ],
  },

  skills: {
    eyebrow: "Savoir-faire",
    title: "Compétences",
    subtitle: "Technologies et pratiques que j'utilise pour concevoir et livrer des logiciels fiables",
    groups: {
      frontend: "Frontend",
      backend: "Backend et API",
      java: "Java et systèmes distribués",
      headless: "LMS et headless",
      security: "Sécurité et IA",
      data: "Bases de données",
      quality: "Tests et qualité",
      tools: "Outils, mobile et design",
    },
    summaryTitle: "En chiffres",
    summary: [
      { value: "4", label: "Ans d'expérience" },
      { value: "Lead", label: "Lead technique d'une équipe de développeurs" },
      { value: "100%", label: "Couverture de lignes du cœur bancaire" },
      { value: "2", label: "Langues : français et anglais" },
    ],
    languagesEyebrow: "Communication",
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "C1" },
      { name: "Anglais", level: "B1" },
    ],
    trainingTitle: "Parcours académique",
  },

  projects: {
    eyebrow: "Portfolio",
    title: "Mes projets",
    subtitle: "Des plateformes que j'ai conçues, développées ou contribué à diriger, du LMS à la banque",
    tabs: { professional: "Professionnels", personal: "Personnels et académiques" },
    sections: {
      professional: {
        title: "Projets professionnels",
        subtitle: "Applications et systèmes réalisés pour des clients et des organisations",
      },
      personal: {
        title: "Projets personnels et académiques",
        subtitle: "Projets perso, travaux de recherche et exercices de design",
      },
    },
    categories: {
      lms: "LMS / EdTech",
      banking: "Banque / Fintech",
      management: "Système de gestion",
      ecommerce: "E-commerce",
      website: "Site web",
      education: "Éducation",
      health: "Santé",
      ai: "IA et sécurité",
      design: "Design UI/UX",
    },
    status: { ongoing: "En cours", completed: "Terminé", paused: "En pause" },
    illustrationAlt: "Illustration du projet",
    items: {
      "kfokam-academy": {
        title: "KFOKAM Academy",
        description:
          "Plateforme d'apprentissage reposant sur une architecture headless Moodle/Next.js : frontend Next.js App Router avec SSR au-dessus d'API REST PHP sécurisées (HMAC, CORS, OpenAPI), avec des modules CMS dynamiques et bilingues. MVP livré, déploiement en cours. Je dirige l'équipe de développeurs.",
      },
      "core-banking": {
        title: "Core Banking System",
        description:
          "Microservices bancaires event-driven (Spring Boot, Java 25, Kafka) déployés sur Kubernetes. Cycle de vie des contrats financiers, plugins de validation métier et conformité BIAN, ISO 20022 et SWIFT MT, avec 100 % de couverture de lignes JaCoCo.",
      },
      "kfokam-48": {
        title: "KFOKAM 48 et Moodle Workplace",
        description:
          "Plugins Moodle personnalisés et instances multi-tenant pour Moodle Workplace (F2G), avec gestion technique continue, déploiement et pratiques DevOps.",
      },
      "gesco-web": {
        title: "GESCO WEB",
        description: "Plateforme SaaS permettant aux parents de suivre les résultats de leurs enfants et aux enseignants de gérer la discipline.",
      },
      gesco: {
        title: "GESCO",
        description:
          "Plateforme SaaS de gestion d'établissement secondaire : élèves, enseignants, matières, notes et génération des bulletins.",
      },
      eshop: {
        title: "ESHOP",
        description: "Plateforme SaaS de suivi de données avec parties produit, boutique et mobile.",
      },
      argon: {
        title: "ARGON",
        description:
          "Plateforme SaaS de gestion d'établissement secondaire, de l'inscription des élèves aux bulletins et à la gestion financière.",
      },
      syncobe: {
        title: "SYNCOBE",
        description:
          "Site vitrine d'une association avec back office : activités, projets en cours, réalisations passées et rubrique d'actualités pour partager les événements.",
      },
      armada: {
        title: "ARMADA",
        description:
          "Refonte d'un site e-commerce : navigation plus fluide, système de recommandation personnalisé et intégration de paiements (Orange Money, Mobile Money, Stripe).",
      },
      kendel: {
        title: "KENDEL",
        description:
          "Plateforme SaaS de gestion universitaire, de l'inscription des étudiants à la gestion financière et à la génération des relevés de notes.",
      },
      "moodle-ai": {
        title: "Assistant IA local pour Moodle",
        description:
          "Mémoire de Master : une architecture Docker sécurisée qui intègre un LLM local (Ollama) à Moodle, avec la confidentialité des données et la mitigation des prompt injections comme objectifs centraux. Soutenu avec la mention très bien.",
      },
      ecopra: {
        title: "ECOPRA",
        description:
          "Système de gestion en ligne pour établissements scolaires : inscriptions, bulletins, certificats, listes et gestion financière. Conçu, développé et déployé seul.",
      },
      testlang: {
        title: "TESTLANG",
        description:
          "Plateforme de préparation aux examens de langue avec plusieurs tests d'entraînement et un coach d'apprentissage personnel.",
      },
      snhealth: {
        title: "SNHEALTH",
        description:
          "Plateforme de téléconsultation médicale en ligne : les utilisateurs consultent des médecins qualifiés depuis chez eux et reçoivent diagnostic, conseils et ordonnances via un service sécurisé.",
      },
      "design-exam": {
        title: "Plateforme d'examens de langue (côté apprenant)",
        description:
          "Design UI/UX de l'expérience apprenant : une interface intuitive avec des menus clairs et des actions facilement accessibles.",
      },
      "design-housing": {
        title: "Site de recherche de logements",
        description:
          "Design UI/UX conçu pour rendre la recherche de logement aussi simple que possible, avec une navigation claire et le souci du détail.",
      },
      "design-booking": {
        title: "Site de réservation",
        description: "Design UI/UX d'une application de recherche de sites touristiques, pensée pour une réservation de voyage fluide.",
      },
      "design-marketplace": {
        title: "Application mobile marketplace",
        description:
          "Design UI/UX d'une marketplace mobile qui facilite les transactions entre acheteurs et vendeurs et virtualise les centres commerciaux.",
      },
    },
  },

  blog: {
    eyebrow: "Journal",
    title: "Blog",
    subtitle: "Réflexions, tutoriels et idées sur le développement web moderne",
    recent: "Articles récents",
    aboutAuthor: "À propos de l'auteur",
    aboutAuthorText:
      "Gilles SOB est développeur fullstack et lead technique. Il travaille avec Laravel, Next.js et Spring Boot, et aime partager des notes pratiques pour construire des applications maintenables.",
    backToBlog: "Retour au blog",
    byline: "Par",
  },

  contact: {
    eyebrow: "Contact",
    title: "Me contacter",
    subtitle:
      "Le travail est un sport d'équipe. Je suis ouvert aux collaborations, aux opportunités professionnelles et aux questions sur mes projets.",
    infoTitle: "Coordonnées",
    infoSubtitle: "N'hésitez pas à me joindre par l'un de ces canaux",
    email: "E-mail",
    phone: "Téléphone",
    location: "Localisation",
    locationValue: "Cameroun",
    followTitle: "Me retrouver en ligne",
    followSubtitle: "Code, profil professionnel et plus",
    availabilityTitle: "Disponibilité",
    availability: ["Projets freelance", "Opportunités à temps plein", "Conseil"],
    formTitle: "Envoyer un message",
    formSubtitle: "Votre application de messagerie s'ouvrira avec le message prêt à envoyer",
    name: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "E-mail",
    emailPlaceholder: "votre.email@exemple.com",
    subject: "Objet",
    subjectPlaceholder: "De quoi s'agit-il ?",
    message: "Message",
    messagePlaceholder: "Parlez-moi de votre projet ou de votre question...",
    send: "Envoyer le message",
    ctaTitle: "Prêt à travailler ensemble ?",
    ctaText:
      "Que vous ayez un projet en tête ou que vous souhaitiez simplement échanger sur la technologie, je suis toujours ravi de rencontrer des développeurs et de futurs collaborateurs.",
    ctaEmail: "M'écrire",
    ctaWork: "Voir mes réalisations",
  },

  footer: {
    tagline:
      "Développeur fullstack et lead technique, je construis des plateformes web sûres et maintenables avec Laravel, Next.js et Spring Boot.",
    closing: "Merci de votre visite.",
    quickLinks: "Liens rapides",
    contact: "Contact",
    follow: "Me suivre",
  },
}
