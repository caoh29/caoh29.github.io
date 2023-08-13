import { faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment } from '@fortawesome/free-solid-svg-icons';

import avatarImage from '../../assets/images/avatar.jpg';

import { PhotoBoxProps } from '../../types';

export const PHOTO_BOX_PROPS: PhotoBoxProps = {
  name: 'Camilo Ordonez',
  title: 'Mechanical Engineer and Frontend developer',
  description:
    'I am a software engineer with a passion for building things. I enjoy solving problems, with and without code',
  avatar: avatarImage,
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