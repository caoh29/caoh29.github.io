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