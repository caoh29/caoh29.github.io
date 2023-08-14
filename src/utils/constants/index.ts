import { faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment } from '@fortawesome/free-solid-svg-icons';

import avatarImage from '../../assets/images/avatar.jpg';

import { PhotoBoxProps, BoxProps, TimeLineProps, ExpertiseProps } from '../../types';

export const PHOTO_BOX_PROPS: PhotoBoxProps = {
  name: 'Camilo Ordonez',
  title: 'Mechanical Engineer and Frontend developer',
  description:
    'I am a software engineer with a passion for building things. I enjoy solving problems, with and without code',
  avatar: avatarImage,
};

export const ABOUT_BOX_PROPS: BoxProps = {
  title: 'About me',
  content:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque',
};

export const TIMELINE_BOX_PROPS: BoxProps = {
  title: 'Education',
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

export const EXPERTISE_BOX_PROPS: BoxProps = {
  title: 'Experience',
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