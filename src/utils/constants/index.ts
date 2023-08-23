import { faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons';

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
    'Respectful and responsible person,with remarkable academic and social performance, good knowledge in the computer area, excellent communication in English and Spanish. Characterized by teamwork, critical thinking and the ability to adapt to different situations.',
};

// TIMELINE
export const TIMELINE_BOX_PROPS: BoxProps = {
  title: 'Education',
  id: 'education',
};

export const TIMELINE_PROPS: TimeLineProps[] = [
  {
    date: 2023,
    title: 'Computer Programming Diploma',
    text: 'Georgian College @ ILAC, Toronto, Canada',
  },
  {
    date: 2021,
    title: 'Bachelor in Mechanical Engineering',
    text: `
      Universidad Industrial de Santander, Bucaramanga, Colombia 
      My thesis consisted of the creation of a Digital Learning Object based on Numerical Methods using eXe Learning under IEEE's compliance standards
    `,
  },
  {
    date: 2014,
    title: 'High School Degree',
    text: 'Colegio Franciscano del Virrey Solís, Bucaramanga, Colombia',
  },
];

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
        • Design and deployment of UIs using React, Redux, React Router, TypeScript, JavaScript, SASS, Styled Components, Axios, Formik\n
        • Unit and Integration testing of UIs using Jest and React Testing Library
        `
      }
    },
    {
      date: 'Feb 2022 - Jun 2023', 
      info: {
        company: 'Deloitte',
        job: 'Cloud Engineer Consultant',
        description: `
        • Automated testing of regression tests using Tricentis TOSCA
        • Design and management of AWS cloud infrastructure using EC2, ELB, Lambda, API Gateway, DynamoDB and Cognito
        • Migration of database objects using DMS for RDS
        `
      }
    },
    {
      date: 'Oct 2022 - Dec 2022', 
      info: {
        company: 'Falcon',
        job: 'Quality Engineer',
        description: `
        • Preparation of inspection reports
        • NDT testing of oil cranes and rigs
        • Tool calibration
        • File maintenance and SGSS
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
    range: 70,
    name: 'React',
  },
  {
    range: 60,
    name: 'JavaScript',
  },
  {
    range: 30,
    name: 'SASS',
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
    href: 'tel:+57 316 578 6800',
    content: '+57 316 578 6800',
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
  {
    icon: faSuitcase,
    link: '#portfolio',
    content: 'Portfolio',
  },
  {
    icon: faLocationArrow,
    link: '#contact',
    content: 'Contacts',
  },
  {
    icon: faComment,
    link: '#feedback',
    content: 'Feedbacks',
  },
];