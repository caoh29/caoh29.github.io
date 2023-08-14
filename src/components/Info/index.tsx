import { InfoProps } from '../../types';

export default function Info({ text, children }: InfoProps) {
  return (
    <div className="info">
      {children}
      <p>{text}</p>
    </div>
  );
}
