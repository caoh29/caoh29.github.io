import { BoxProps } from '../../types';

export default function Box({ title, content, children }: BoxProps) {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <div className="info-box__content">
        {content}
        {children}
      </div>
    </div>
  );
}
