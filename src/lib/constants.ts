
// Navigation
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Hero Section
export const heroData = {
  subtitle: "Software Developer",
  name: "Camilo Ordoñez Herrera",
  description: "I have a passion for building things. I enjoy solving problems with and without code. I love to build modern web applications with a focus on user experience and performance.",
};

// About Section
export const aboutData = {
  image: "/profile.jpg", // Update with your actual image path
  description: [
    "I'm a passionate software developer with a strong foundation in modern web technologies. My journey in tech began with a curiosity about games, which evolved into a career crafting elegant software solutions.",
    "With a unique blend of technical and engineering expertise. Experienced in building robust web applications using React.js, TypeScript, and Node.js, while leveraging cloud technologies like AWS. My background spans from developing user interfaces and component libraries to implementing database solutions and automation tools."
  ],
  details: [
    { label: "Name", value: "Camilo Ordonez Herrera" },
    { label: "Email", value: "cronox20@gmail.com" },
    { label: "Location", value: "Toronto, Canada / Bogotá, Colombia" },
    { label: "Availability", value: "Open to Opportunities" }
  ]
};

// Skills Section
export const skillCategories = [
  {
    name: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "JavaScript", level: 85, category: "Programming Languages" },
      { name: "TypeScript", level: 80, category: "Programming Languages" },
      { name: "Java", level: 75, category: "Programming Languages" },
      { name: "Python", level: 60, category: "Programming Languages" },
      { name: "Kotlin", level: 40, category: "Programming Languages" },
      { name: "PHP", level: 40, category: "Programming Languages" },
      { name: "C++", level: 30, category: "Programming Languages" },
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 85, category: "Database" },
      { name: "MySQL", level: 70, category: "Database" },
      { name: "SQLite", level: 70, category: "Database" },
      { name: "Microsoft SQL Server", level: 60, category: "Database" },
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "Firestore", level: 70, category: "Database" },
      { name: "DynamoDB", level: 60, category: "Database" },
    ],
  },
  {
    name: "Frontend Libraries and Frameworks",
    icon: "Layout",
    skills: [
      { name: "HTML", level: 90, category: "Frontend" },
      { name: "CSS", level: 90, category: "Frontend" },
      { name: "SASS", level: 80, category: "Frontend" },
      { name: "Tailwind CSS", level: 80, category: "Frontend" },
      { name: "React", level: 90, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "Redux", level: 80, category: "Frontend" },
      { name: "React Testing Library", level: 80, category: "Frontend" },
    ],
  },
  {
    name: "Backend Frameworks and ORMs",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "NestJS", level: 75, category: "Backend" },
      { name: "Next.js", level: 90, category: "Backend" },
      { name: "Spring Boot", level: 50, category: "Backend" },
      { name: "Prisma", level: 75, category: "ORM" },
      { name: "TypeORM", level: 60, category: "ORM" },
      { name: "Mongoose", level: 80, category: "ORM" },
      { name: "Hibernate", level: 40, category: "ORM" },
    ],
  },
  {
    name: "Cloud Services",
    icon: "Cloud",
    skills: [
      { name: "AWS EC2", level: 80, category: "Cloud" },
      { name: "AWS Lambda", level: 70, category: "Cloud" },
      { name: "AWS RDS", level: 80, category: "Cloud" },
      { name: "AWS DynamoDB", level: 60, category: "Cloud" },
      { name: "AWS S3", level: 75, category: "Cloud" },
      { name: "AWS IAM", level: 60, category: "Cloud" },
      { name: "AWS ELB", level: 70, category: "Cloud" },
      { name: "AWS API Gateway", level: 70, category: "Cloud" },
      { name: "AWS CloudWatch", level: 60, category: "Cloud" },
    ],
  },
  {
    name: "Other",
    icon: "Other",
    skills: [
      { name: "Git / GitHub", level: 85, category: "Other" },
      { name: "Docker", level: 80, category: "Other" },
      { name: "Jest", level: 80, category: "Other" },
      { name: "Playwright", level: 70, category: "Other" },
      { name: "Postman", level: 70, category: "Other" },
      { name: "Swagger", level: 60, category: "Other" },
      { name: "Terraform", level: 60, category: "Other" },
      { name: "GitHub Actions", level: 55, category: "Other" },
      { name: "Triscentis TOSCA", level: 90, category: "Other" },
    ],
  },
];

// Projects Section
export const projectsData = [
  {
    id: 1,
    title: "PetShop",
    description: "A fully responsive e-commerce platform built with Next.js, Node.js and PostgreSQL. Features include user authentication, product search, cart functionality, and payment processing.",
    image: "petshop.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Redux", "Stripe"],
    demoUrl: "https://store.caoh29.dev/",
    repoUrl: "https://github.com/caoh29/petshop",
  },
  {
    id: 2,
    title: "ReportGen",
    description: "A web application for generating pre-made and custom reports, built with Next.js and NestJS",
    image: "document.png",
    tags: ["TypeScript", "Next.js", "API Integration", "NestJS", "Docker"],
    demoUrl: "https://reports.caoh29.dev/",
    repoUrl: "https://github.com/caoh29/reports-maker-backend",
  },
  {
    id: 3,
    title: "lc-auth",
    description: "A lightweight, zero-dependency authentication library for Node.js using TypeScript, supporting local credentials, OAuth, and both stateful and stateless session strategies.",
    image: "npm.jpg",
    tags: ["TypeScript", "Node.js", "Authentication", "OAuth"],
    demoUrl: "https://www.npmjs.com/package/lc-auth",
    repoUrl: "https://github.com/caoh29/lc-auth",
  },
  {
    id: 4,
    title: "Network Operations Center App",
    description: "A service application designed for network operations center teams to monitor and manage network devices.",
    image: "log-icon.png",
    tags: ["TypeScript", "API Integration", "Node.js", "Docker", "PostgreSQL", "MongoDB"],
    repoUrl: "https://github.com/caoh29/noc",
  },
];

// Contact Section
export const contactData = {
  email: "cronox20@gmail.com",
  phone: "+1 (437) 663-9348 / +57 (316) 578-6800",
  location: "Toronto, Canada / Bogotá, Colombia",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/caoh29", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/camilo-ordonez-herrera", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/92iMAHC", icon: "Twitter" }
  ]
};

// Footer
export const footerData = {
  copyright: "Camilo Ordoñez Herrera",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
};
