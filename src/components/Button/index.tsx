import { ButtonProps } from '../../types';

export default function Button({ text, icon, type, onClick }: ButtonProps) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {icon} <span className="button-text">{text}</span>
    </button>
  );
}
