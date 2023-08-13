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
    link: '#about',
    content: 'About me',
  },
  {
    link: '#education',
    content: 'Education',
  },
  {
    link: '#experience',
    content: 'Experience',
  },
  {
    link: '#portfolio',
    content: 'Portfolio',
  },
  {
    link: '#contact',
    content: 'Contacts',
  },
  {
    link: '#feedback',
    content: 'Feedbacks',
  },
];