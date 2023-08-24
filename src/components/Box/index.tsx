import { BoxProps } from '../../types';

export default function Box({
  title,
  button,
  content,
  id,
  children,
}: BoxProps) {
  return (
    <section className="info-box" id={id}>
      <div className="info-box__header">
        <h2>{title}</h2>
        {button}
      </div>
      <div className="info-box__content">
        {content}
        {children}
      </div>
    </section>
  );
}
