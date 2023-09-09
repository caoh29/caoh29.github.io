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
    'Respectful self-motivator hardworking and passionate job seeker with strong organizational skills eager to secure entry-level software developer position. Problem-solving through critical thinking, and a proven ability to adapt effectively to diverse situations. Ready to help team achieve company goals. Fluent in English and Spanish and accustomed to working with cross-cultural, global teams. . Recognized for fostering collaborative work environments, adept problem-solving through critical thinking, and a proven ability to adapt effectively to diverse situations.',
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
      text: 'Georgian College @ ILAC, Toronto, Canada',
    },
    {
      date: 2021,
      title: 'Bachelor in Mechanical Engineering',
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
      date: 'Jul 2023 - Aug 2023', 
      info: {
        company: 'EPAM',
        job: 'Junior Software Engineer',
        description: `
        • Contributed ideas and suggestions in team meetings and deliveredupdates on deadlines, designs, and enhancements.\n
        • Collaborated with fellow engineers to evaluate software interfaces.\n
        • Analyzed code defects and failures and presented code refactors anddesign fixes.\n
        • Design and deployment of highly interactive user interfaces (UIs)utilizing a cutting-edge tech stack that included React, Redux, ReactRouter, TypeScript, JavaScript, SASS, Styled Components, Axios, andFormik, resulting in intuitive and visually appealing.\n
        `
      }
    },
    {
      date: 'Feb 2022 - Jun 2023', 
      info: {
        company: 'Deloitte',
        job: 'Cloud Engineer Consultant',
        description: `
        • Contributed to the automation of regression testing procedures byleveraging Tricentis TOSCA, resulting in increased efficiency andaccuracy in QA processes.\n
        • Proficient design and management of AWS cloud infrastructure,encompassing vital services such as EC2, ELB, Lambda, API Gateway,DynamoDB and Cognito, ensuring optimal system performance andscalability.\n
        • Performed the migration of critical database objects, using AWSDatabase Migration Service (DMS) to facilitate a smooth transition toRDS, ensuring data integrity and minimal disruption to businessoperations.\n
        • Finalized project plans and obtained approval from clients.\n
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
    range: 80,
    name: 'HTML',
  },
  {
    range: 70,
    name: 'CSS',
  },
  {
    range: 30,
    name: 'SASS',
  },
  {
    range: 70,
    name: 'JavaScript',
  },
  {
    range: 50,
    name: 'TypeScript',
  },
  {
    range: 70,
    name: 'React',
  },
  {
    range: 50,
    name: 'Next.js',
  },
  {
    range: 20,
    name: 'Jest',
  },
  {
    range: 30,
    name: 'React Testing Library',
  },
  {
    range: 40,
    name: 'Node.js (express)',
  },
  {
    range: 20,
    name: 'PostgreSQL',
  },
  {
    range: 40,
    name: 'MongoDB',
  },
  {
    range: 50,
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
    title: 'Facebook',
    href: 'https://www.facebook.com/camilo.ordonez.39/',
    content: 'camilo.ordonez.39',
    icon: faFacebookF,
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
  {
    title: 'Skype',
    href: 'https://join.skype.com/invite/k5bvFMtwY2mA',
    content: 'cronox20',
    icon: faSkype,
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