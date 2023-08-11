interface PhotoBoxProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export default function PhotoBox({
  name,
  title,
  description,
  avatar,
}: PhotoBoxProps) {
  return (
    <div>
      <figure className="photo-box">
        <div className="crop-photo">
          <img src={avatar} alt={name} />
        </div>
        <figcaption>
          <strong>{name}</strong>
          <article>
            <header className="title">{title}</header>
            <p className="description">{description}</p>
          </article>
        </figcaption>
      </figure>
    </div>
  );
}
