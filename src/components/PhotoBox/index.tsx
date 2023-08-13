import { PhotoBoxProps } from '../../types';

export default function PhotoBox({
  name,
  title,
  description,
  avatar,
}: PhotoBoxProps) {
  return (
    <figure className="photo-box">
      <div className="crop-photo">
        <img src={avatar} alt={name} />
      </div>
      <figcaption>
        <strong className="name-photo">{name}</strong>
        <article>
          <header className="title-photo">{title}</header>
          <p className="description-photo">{description}</p>
        </article>
      </figcaption>
    </figure>
  );
}
