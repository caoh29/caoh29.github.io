import { BoxProps } from '../../types';

export default function Box({ title, content, id, children }: BoxProps) {
  return (
    <section className="info-box" id={id}>
      <h2>{title}</h2>
      <div className="info-box__content">
        {content}
        {children}
      </div>
    </section>
  );
}
