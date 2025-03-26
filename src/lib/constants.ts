
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
  name: "Camilo Ordonez Herrera",
  description: "I have a passion for building things. I enjoy solving problems with and without code. I love to build modern web applications with a focus on user experience and performance.",
};

// About Section
export const aboutData = {
  image: "/profile.jpeg", // Update with your actual image path
  description: [
    "I'm a passionate software developer with a strong foundation in modern web technologies. My journey in tech began with a curiosity about games, which evolved into a career crafting elegant software solutions.",
    "With a unique blend of technical and engineering expertise. Experienced in building robust web applications using React.js, TypeScript, and Node.js, while leveraging cloud technologies like AWS. My background spans from developing user interfaces and component libraries to implementing database solutions and automation tools."
  ],
  details: [
    { label: "Name", value: "Camilo Ordonez Herrera" },
    { label: "Email", value: "cronox20@gmail.com" },
    { label: "Location", value: "Toronto, Canada" },
    { label: "Availability", value: "Open to Opportunities" }
  ]
};

// Skills Section
export const skillCategories = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML/CSS", level: 90, category: "Frontend" },
      { name: "JavaScript", level: 85, category: "Frontend" },
      { name: "TypeScript", level: 75, category: "Frontend" },
      { name: "React", level: 90, category: "Frontend" },
      { name: "Next.js", level: 80, category: "Frontend" },
      { name: "Redux", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 70, category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "Express", level: 75, category: "Backend" },
      { name: "NestJS", level: 70, category: "Backend" },
      { name: "Java", level: 65, category: "Backend" },
      { name: "Spring Boot", level: 50, category: "Backend" },
      { name: "Python", level: 60, category: "Backend" },
    ],
  },
  {
    name: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "PostgreSQL", level: 80, category: "Database" },
      { name: "MySQL", level: 70, category: "Database" },
      { name: "Firestore", level: 70, category: "Database" },
      { name: "Microsoft SQL Server", level: 60, category: "Database" },
    ],
  },
  {
    name: "Other",
    icon: "Code",
    skills: [
      { name: "Git", level: 85, category: "Other" },
      { name: "Docker", level: 65, category: "Other" },
      { name: "RESTful APIs", level: 80, category: "Other" },
      { name: "Jest", level: 80, category: "Frontend" },
      { name: "Postman", level: 70, category: "Other" },
      { name: "Jira", level: 60, category: "Other" },
      { name: "AWS", level: 70, category: "Other" },
      { name: "Triscentis TOSCA", level: 80, category: "Other" },
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
  // {
  //   id: 2,
  //   title: "TEST",
  //   description: "Recipe finder web app using Javascript.",
  //   image: "placeholder.svg",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "#",
  //   repoUrl: "https://caoh29.github.io/DiscoveryMenu/",
  // },
  {
    id: 2,
    title: "Discovery Menu",
    description: "A web application that provides recipe instructions based on user filters. Built with vanilla JavaScript and the Spoonacular API.",
    image: "discoveryMenu.png",
    tags: ["JavaScript", "HTML/CSS", "API Integration", "Responsive Design"],
    demoUrl: "https://caoh29.dev/DiscoveryMenu",
    repoUrl: "https://caoh29.github.io/DiscoveryMenu/",
  },
  {
    id: 3,
    title: "lc-auth",
    description: "A lightweight, zero-dependency authentication library for Node.js using TypeScript, supporting local credentials, OAuth, and both stateful and stateless session strategies.",
    image: "npm.jpg",
    tags: ["TypeScript", "Node.js", "Authentication", "OAuth"],
    demoUrl: "https://www.npmjs.com/package/lc-auth",
    repoUrl: "https://github.com/caoh29/lc-auth",
  }
];

// Contact Section
export const contactData = {
  email: "cronox20@gmail.com",
  phone: "+1 (437) 663-3948",
  location: "Toronto, Canada",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/caoh29", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/camilo-ordonez-herrera", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/92iMAHC", icon: "Twitter" }
  ]
};

// Footer
export const footerData = {
  copyright: "Camilo Ordonez Herrera",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
};
