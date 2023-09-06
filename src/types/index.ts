import { ReactNode } from 'react';

export interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
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
  button?: ReactNode;
  id: string;
  children?: ReactNode;
}

export interface InfoProps {
  text: string;
  children?: ReactNode;
}

export interface AboutProps {
  content: string;
}

export interface TimeLineProps {
  date: number;
  title: string;
  text: string;
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

export interface PortfolioInfoProps {
  title: string;
  text: string;
  url: string;
}

export interface FeedbackProps {
  data: {
    feedback: string;
    reporter: {
      photoUrl: string;
      name: string;
      citeUrl: string;
    };
  }[];
}

export interface SkillsProps {
  range: RangeValues | null;
  name: string;
}

type RangeValues = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;