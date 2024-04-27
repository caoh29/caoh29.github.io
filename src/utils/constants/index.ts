import { faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebookF, faInstagram, faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';

import avatarImage from '../../assets/images/avatar.jpg';
import ladder from '../../assets/images/ladder.png';
import loupe from '../../assets/images/loupe.png';

import { PhotoBoxProps, BoxProps, TimeLineProps, ExpertiseProps, FeedbackProps, SkillsProps } from '../../types';

// PHOTO BOX
export const PHOTO_BOX_PROPS: PhotoBoxProps = {
  name: 'Camilo Ordonez',
  title: 'Mechanical Engineer and Frontend developer',
  description:
    'I have a passion for building things. I enjoy solving problems, with and without code',
  avatar: avatarImage,
};

//  ABOUT
export const ABOUT_BOX_PROPS: BoxProps = {
  title: 'About me',
  id: 'about',
  content:
    'Hardworking and passionate Junior Software Engineer with experience contributing to design, development and optimization of User Interfaces (UIs) for web applications. Problem-solver through critical thinking. Proven ability to adapt effectively to diverse situations. Brings good understanding of TypeScript, JavaScript and Python. Driven to innovate and learn.',
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
        As part of my thesis project, I spearheaded the creation of a Digital Learning Object focused on Numerical Methods, meticulously developed in adherence to IEEE's exacting compliance standards using eXe Learning. This initiative was undertaken in response to a critical need within the university's academic landscape. At the time, there was an absence of a well-defined course structure for students, coupled with a scarcity of learning resources. Moreover, there existed no platform for effective communication between instructors and students.
        Recognizing these challenges, our team took the initiative to design a structured learning plan for students. This comprehensive plan not only facilitated effective learning but also addressed the dearth of available resources. Additionally, we developed a dedicated module that seamlessly integrated with the university's Moodle platform. This module provided an essential communication channel, enabling instructors to engage with the class and enhance the overall learning experience.
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
      date: 'Jan 2024 - Present', 
      info: {
        company: 'LEAF',
        job: 'Volunteer Software Developer',
        description: `
        • Led the development of a new website for an environmental organization using Next.js (React & Node.js) and Supabase (backend-as-a-service). This platform streamlines the certification process for food industry establishments and suppliers by replacing manual evaluation process with an integrated platform.\n
        • Designed and implemented a relational database (PostgreSQL) hosted on Supabase to replace manual evaluation management. This revamped system facilitates efficient data storage and retrieval for the website's certification process.\n
        `
      }
    },
    {
      date: 'Jul 2023 - Sept 2023', 
      info: {
        company: 'EPAM',
        job: 'Junior Software Engineer',
        description: `
        • Worked on a library of reusable UI components for using React.js, TypeScript, and CSS. This component library facilitated consistent design of future development across the company.\n
        • Demonstrated strong communication skills by actively contributing in team meetings, providing updates on deadlines, designs, and enhancements, and preparing detailed technical documentation for future reference.\n
        `
      }
    },
    {
      date: 'Feb 2022 - Jun 2023', 
      info: {
        company: 'Deloitte',
        job: 'Cloud Engineer Consultant',
        description: `
        • Developed an internal new-hire onboarding portal using React.js, Node.js, PostgreSQL and AWS. This platform provides centralized access to onboarding information for new hires and progress tracking tools for managers, reducing the onboarding process time and errors.\n
        • Collaborated with developers to automate regression testing for a financial institution's internal customer applications using Tricentis TOSCA resulting in a more efficient QA process. Additionally, by creating reusable test suites, we reduced regression testing time for functionalities with similar steps.\n
        • Migrated critical database objects from Microsoft SQL Server (MSSQL) to Amazon RDS for PostgreSQL using AWS Database Migration Service (DMS), ensuring data integrity and minimal downtime for business operations.\n
        `
      }
    },
    // {
    //   date: 'Oct 2022 - Dec 2022', 
    //   info: {
    //     company: 'Falcon',
    //     job: 'Quality Engineer',
    //     description: `
    //     • Preparation of inspection reports
    //     • NDT testing of oil cranes and rigs
    //     • Tool calibration
    //     • File maintenance and SGSS
    //     `
    //   }
    // },
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
    range: 50,
    name: 'RTL',
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
    range: 70,
    name: 'MySQL',
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
    className: 'ui',
    name: 'First project',
    description: 'some text',
    image: loupe,
    projectUrl: 'https://caoh29.github.io/'
  },
  {
    className: 'ui code',
    name: 'Second project',
    description: 'some text',
    image: loupe,
    projectUrl: 'https://caoh29.github.io/'
  },
  {
    className: 'code',
    name: 'Third project',
    description: 'some text',
    image: ladder,
    projectUrl: 'https://caoh29.github.io/'
  },
  {
    className: 'code',
    name: 'Forth project',
    description: 'some text',
    image: ladder,
    projectUrl: 'https://caoh29.github.io/'
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
    href: 'https://www.linkedin.com/in/camilo-ordo%C3%B1ez-herrera-04a47511b/',
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
