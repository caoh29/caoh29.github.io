import { ReactNode } from 'react';

export interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface PhotoBoxProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export interface BoxProps {
  title: string;
  content?: string;
  children?: ReactNode;
}

export interface InfoProps {
  text: string;
  children?: ReactNode;
}

export interface TimeLineProps {
  data: {
    date: number;
    title: string;
    text: string;
  }[];
}

export interface ExpertiseProps {
  data: {
    date: string;
    info: {
      company: string;
      job: string;
      description: string;
    };
  }[];
}