import { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {icon} {text}
    </button>
  );
}
