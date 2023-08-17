import { faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons';

import avatarImage from '../../assets/images/avatar.jpg';
import ladder from '../../assets/images/ladder.png';
import loupe from '../../assets/images/loupe.png';

import { PhotoBoxProps, BoxProps, TimeLineProps, ExpertiseProps, FeedbackProps } from '../../types';

// PHOTO BOX
export const PHOTO_BOX_PROPS: PhotoBoxProps = {
  name: 'Camilo Ordonez',
  title: 'Mechanical Engineer and Frontend developer',
  description:
    'I am a software engineer with a passion for building things. I enjoy solving problems, with and without code',
  avatar: avatarImage,
};

//  ABOUT
export const ABOUT_BOX_PROPS: BoxProps = {
  title: 'About me',
  id: 'about',
  content:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque',
};

// TIMELINE
export const TIMELINE_BOX_PROPS: BoxProps = {
  title: 'Education',
  id: 'education',
};

export const TIMELINE_PROPS: TimeLineProps = {
  data: [
    {
      date: 2001,
      title: 'Title 0',
      text: 'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
    },
    {
      date: 2000,
      title: 'Title 1',
      text: 'Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n',
    },
    {
      date: 2012,
      title: 'Title 2',
      text: 'Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n',
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
      date: '2013-2014', 
      info: {
        company: 'Google',
        job: 'Front-end developer / php programmer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
      }
    },
    {
      date: '2012', 
      info: {
        company: 'Twitter',
        job: 'Web developer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
      }
    },
  ]
};

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
    content: 'https://twitter.com/92iMAHC',
    icon: faXTwitter,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/camilo.ordonez.39/',
    content: 'https://www.facebook.com/camilo.ordonez.39/',
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