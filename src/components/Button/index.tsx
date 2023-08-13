import { ButtonProps } from '../../types';

export default function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {icon} {text}
    </button>
  );
}
