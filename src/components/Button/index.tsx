import { ButtonProps } from '../../types';

export default function Button({
  text,
  icon,
  type,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`button ${disabled && 'button--disabled'}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon} <span className="button-text">{text}</span>
    </button>
  );
}
