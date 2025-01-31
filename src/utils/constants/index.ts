import { faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import avatarImage from '../../assets/images/avatar.jpg';
// import ladder from '../../assets/images/ladder.png';
// import loupe from '../../assets/images/loupe.png';
import code from '../../assets/images/code.png';
import petShop from '../../assets/images/petShop.png';
import discoveryMenu from '../../assets/images/discoveryMenu.png';
import smoothieShop from '../../assets/images/smoothieShop.png';
import gallery from '../../assets/images/gallery.png';
import shoesShop from '../../assets/images/shoesShop.png';
import candyShop from '../../assets/images/candyShop.png';
import emporiumHorses from '../../assets/images/emporiumHorses.png';
import pokemon from '../../assets/images/pokemon.png';

import { PhotoBoxProps, BoxProps, TimeLineProps, ExpertiseProps, FeedbackProps, SkillsProps } from '../../types';

// PHOTO BOX
export const PHOTO_BOX_PROPS: PhotoBoxProps = {
  name: 'Camilo Ordonez',
  title: 'Mechanical Engineer and Frontend developer',
  description:
    'I have a passion for building things. I enjoy solving problems with and without code',
  avatar: avatarImage,
};

//  ABOUT
export const ABOUT_BOX_PROPS: BoxProps = {
  title: 'About me',
  id: 'about',
  content:
    'Software developer with a unique blend of technical and engineering expertise, specializing in full-stack development and cloud solutions. Experienced in building robust web applications using React.js, TypeScript, and Node.js, while leveraging cloud technologies like AWS. My background spans from developing user interfaces and component libraries to implementing database solutions and automation tools. Previously contributed to quality engineering in the petroleum industry, bringing a detail-oriented approach to software development. Demonstrated ability to adapt across industries and technologies, from mechanical engineering to modern software development, with a strong focus on creating efficient, user-centered solutions.',
};

// TIMELINE
export const TIMELINE_BOX_PROPS: BoxProps = {
  title: 'Education',
  id: 'education',
};

export const TIMELINE_PROPS: TimeLineProps = {
  data: [
    {
      date: 2023,
      title: 'Computer Programming Diploma - ONGOING',
      text: 'Georgian College, Toronto, Canada',
    },
    {
      date: 2021,
      title: 'Bachelor of Engineering in Mechanical Engineering',
      text: `
        Universidad Industrial de Santander, Bucaramanga, Colombia 
        Honour Roll, II Semester, 2019
        Thesis Paper: Competency-based learning design and realization of a learning object for the numerical methods course
        As part of my thesis project, My thesis partner and I developed a Digital Learning Object focused on Numerical Methods in adherence to IEEE's compliance standards by using eXe Learning tool. This initiative was undertaken in response to a critical need within the university's academic landscape. At the time, there was an absence of a well-defined course structure for students, coupled with a scarcity of learning resources. Moreover, there existed no platform for effective communication between instructors and students.
        Recognizing these challenges, we took the initiative to design a structured learning plan for students. This comprehensive plan not only facilitated effective learning but also addressed the shortage of available resources. Additionally, we developed a dedicated module that seamlessly integrated with the university's Moodle platform. This module provided an essential communication channel, enabling instructors to engage with the class and enhance the overall learning experience.
      `,
    },
    {
      date: 2014,
      title: 'High School Degree',
      text: 'Colegio Franciscano del Virrey Solís, Bucaramanga, Colombia',
    },
  ]
};

// EXPERIENCE
export const EXPERTISE_BOX_PROPS: BoxProps = {
  title: 'Experience',
  id: 'experience',
};

export const EXPERTISE_PROPS: ExpertiseProps = {
  data: [
    {
      date: 'Jan 2024 - Jul 2024',
      info: {
        company: 'LEAF',
        job: 'Volunteer Software Developer',
        description: `
        • Designed and implemented a relational database (PostgreSQL) to be hosted on Supabase.\n
        • Collaborated with team members to consolidate data from various sources into a centralized database.\n
        • Documented database architecture, entity-relationship diagrams, and data migration processes to ensure clarity and maintainability for future development.\n
        `
      }
    },
    {
      date: 'Jul 2023 - Aug 2023',
      info: {
        company: 'EPAM',
        job: 'Junior Software Engineer',
        description: `
        • Assisted to develop a fully flexible and reusable UI component library using HTML, CSS, TypeScript, and React.\n
        • Conducted testing and debugging of components utilizing Jest with React Testing Library for unit testing.\n
        • Created detailed documentation for each of the components built and provided feedback with other developers on design patterns.\n
        `
      }
    },
    {
      date: 'Feb 2022 - Jun 2023',
      info: {
        company: 'Deloitte',
        job: 'Cloud Engineer Consultant',
        description: `
        • Developed an onboarding portal using React, Nodejs and PostgreSQL for application development and Terraform with AWS for infrastructure deployment. This platform provides centralized access to onboarding information for new hires and progress tracking tools for managers, reducing the onboarding process time and errors.\n
        • Managed and monitored AWS cloud infrastructure, utilizing different services such as EC2, ELB, Lambda, API Gateway, RDS, DynamoDB, S3, CloudWatch.\n
        • Created, implemented and documented various tests on different cloud native applications using Tricentis TOSCA for regression testing and Jira for documentation.\n
        • Migrated critical database objects from Microsoft SQL Server (MSSQL) to Amazon RDS for PostgreSQL using AWS Database Migration Service (DMS) and raw SQL, ensuring data integrity and minimal downtime for business operations.\n
        `
      }
    },
    {
      date: 'Oct 2022 - Dec 2022',
      info: {
        company: 'Falcon Rigs SAS',
        job: 'Quality Engineer',
        description: `
        • Developed comprehensive inspection reports based on NDT assessments conducted on petroleum drilling equipment, ensuring detailed and accurate documentation of rig inspections.\n
        • Managed a systematic tool calibration process, auditing company inventory for calibration validity. Recalibrated expired equipment in-house where possible, and coordinated with certified calibration institutes to renew certificates for other tools, ensuring compliance with industry standards.\n
        • Maintained and translate records and documents ensuring compliance with industry regulations under the System for Managing Information (SGSS) framework.\n
        `
      }
    },
    {
      date: 'Dec 2019 - Feb 2020',
      info: {
        company: 'Industrias LAVCO SAS',
        job: 'Computer Aided Design Intern',
        description: `
        • Developed detailed mechanical drawings for motor liners using SolidWorks, ensuring precision and compliance with design specifications.\n
        • Implemented a systematic reformatting process for existing drawings, enhancing clarity and accessibility of technical information.\n
        • Applied reverse engineering techniques to analyze and recreate motor liner designs, facilitating the adaptation of legacy components to modern specifications.\n
        `
      }
    },
  ]
};

// SKILLS
export const SKILLS_BOX_PROPS: BoxProps = {
  title: 'Skills',
  id: 'skills',
};

export const SKILLS_PROPS: SkillsProps[] = [
  {
    range: 90,
    name: 'HTML',
  },
  {
    range: 70,
    name: 'CSS',
  },
  {
    range: 80,
    name: 'JavaScript',
  },
  {
    range: 60,
    name: 'TypeScript',
  },
  {
    range: 80,
    name: 'React.js',
  },
  {
    range: 70,
    name: 'Next.js',
  },
  {
    range: 50,
    name: 'Jest',
  },
  {
    range: 70,
    name: 'Node.js',
  },
  {
    range: 50,
    name: 'Nest.js',
  },
  {
    range: 80,
    name: 'PostgreSQL',
  },
  {
    range: 80,
    name: 'MongoDB',
  },
  {
    range: 70,
    name: 'AWS',
  },
];

// PORTFOLIO
export const PORTFOLIO_BOX_PROPS: BoxProps = {
  title: 'Portfolio',
  id: 'portfolio'
};

export const PORTFOLIO_CATEGORIES = [
  {
    value: 'All',
    selector: '*'
  },
  {
    value: 'UI',
    selector: '.ui'
  },
  {
    value: 'Code',
    selector: '.code'
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    className: 'ui code',
    name: 'PetShop',
    description: `E-commerce web app for pets using Nextjs.\n
    https://github.com/caoh29/petshop`,
    image: petShop,
    projectUrl: 'https://store.caoh29.dev/'
  },
  {
    className: 'ui code',
    name: 'Discovery Menu',
    description: `Recipe finder web app using Javascript.\n
    https://github.com/caoh29/DiscoveryMenu`,
    image: discoveryMenu,
    projectUrl: 'https://caoh29.github.io/DiscoveryMenu/'
  },
  {
    className: 'code',
    name: 'Recipe Menu',
    description: `Recipe finder desktop app using Java\n
    https://github.com/caoh29/RecipeMenu`,
    image: code,
    projectUrl: 'https://github.com/caoh29/RecipeMenu'
  },
  {
    className: 'ui',
    name: 'Smoothie Shop',
    description: `Smoothie shop web app form to make orders in Javascript.\n
    https://github.com/caoh29/smoothie-shop`,
    image: smoothieShop,
    projectUrl: 'https://caoh29.github.io/smoothie-shop/'
  },
  {
    className: 'ui',
    name: 'Gallery',
    description: `Image gallery web app in Javascript.\n
    https://github.com/caoh29/gallery`,
    image: gallery,
    projectUrl: 'https://caoh29.github.io/gallery/'
  },
  {
    className: 'ui',
    name: 'Shoes Shop',
    description: `Shoes store web skeleton in plain HTML and CSS.\n
    https://github.com/caoh29/shoes-shop`,
    image: shoesShop,
    projectUrl: 'https://caoh29.github.io/shoes-shop/'
  },
  // {
  //   className: 'ui code',
  //   name: 'Twitter Clone',
  //   description: `Basic twitter clone web app using HTML,CSS and PHP.\n
  //   https://github.com/caoh29/php-twitter`,
  //   image: code,
  //   projectUrl: 'https://github.com/caoh29/php-twitter'
  // },
  {
    className: 'ui',
    name: 'Candy Shop',
    description: `Candy shop web skeleton in plain HTML and CSS.\n
    https://github.com/caoh29/candy-shop`,
    image: candyShop,
    projectUrl: 'https://caoh29.github.io/candy-shop/'
  },
  {
    className: 'ui',
    name: 'Emporium Horses',
    description: `Luxury horses web skeleton in plain HTML and CSS.\n
    https://github.com/caoh29/emporium-horses`,
    image: emporiumHorses,
    projectUrl: 'https://caoh29.github.io/emporium-horses/'
  },
  {
    className: 'ui',
    name: 'Pokemon Favorites',
    description: `Pokemon favorites UI web app using Nextjs.\n
    https://github.com/caoh29/Pokemon`,
    image: pokemon,
    projectUrl: 'https://github.com/caoh29/Pokemon'
  },
  {
    className: 'code',
    name: 'Pokemon backend',
    description: `Pokemon REST API using Nestjs.\n
    https://github.com/caoh29/pokemon-backend`,
    image: code,
    projectUrl: 'https://github.com/caoh29/pokemon-backend'
  },
  {
    className: 'code',
    name: 'Car dealership backend',
    description: `Car dealership REST API using Nestjs.\n
    https://github.com/caoh29/nest-car-dealership`,
    image: code,
    projectUrl: 'https://github.com/caoh29/nest-car-dealership'
  },
];

// CONTACT
export const ADDRESS_BOX_PROPS: BoxProps = {
  title: 'Contacts',
  id: 'contact'
};

export const ADDRESS_LINES = [
  {
    title: '',
    href: 'tel:+1 437 663 9348',
    content: '+1 437 663 9348',
    icon: faPhone,
  },
  {
    title: '',
    href: 'mailto:cronox20@gmail.com',
    content: 'cronox20@gmail.com',
    icon: faEnvelope,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/92iMAHC',
    content: '92iMAHC',
    icon: faXTwitter,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/camiloordonez39/',
    content: 'camiloordonez.39',
    icon: faInstagram,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/camilo-ordonez-herrera-04a47511b/',
    content: 'Camilo Ordonez Herrera',
    icon: faLinkedin,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/caoh29',
    content: 'caoh29',
    icon: faGithub,
  },
];

// FEEDBACK
export const FEEDBACK_BOX_PROPS: BoxProps = {
  title: 'Feedbacks',
  id: 'feedback'
};

export const FEEDBACK_PROPS: FeedbackProps = {
  data: [
    {
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      reporter: {
        photoUrl: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        name: 'John Doe',
        citeUrl: 'https://www.citeexample.com/1'
      }
    },
    {
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      reporter: {
        photoUrl: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        name: 'Travis McNell',
        citeUrl: 'https://www.citeexample.com/2'
      }
    },
    {
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      reporter: {
        photoUrl: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        name: 'Paula Manrique',
        citeUrl: 'https://www.citeexample.com/3'
      }
    },
  ]
}
// NAVIGATION
export const NAVIGATION_DIRECTORY = [
  {
    icon: faUser,
    link: '#about',
    content: 'About me',
  },
  {
    icon: faGraduationCap,
    link: '#education',
    content: 'Education',
  },
  {
    icon: faPen,
    link: '#experience',
    content: 'Experience',
  },
  {
    icon: faGem,
    link: '#skills',
    content: 'Skills',
  },
  // {
  //   icon: faSuitcase,
  //   link: '#portfolio',
  //   content: 'Portfolio',
  // },
  {
    icon: faLocationArrow,
    link: '#contact',
    content: 'Contacts',
  },
  // {
  //   icon: faComment,
  //   link: '#feedback',
  //   content: 'Feedbacks',
  // },
];
