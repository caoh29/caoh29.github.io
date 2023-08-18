import { InfoProps } from '../../types';

export default function Info({ text, children }: InfoProps) {
  return (
    <div className="info">
      {children}
      {text.split('\n').map((line) => (
        <p>{line}</p>
      ))}
    </div>
  );
}
