import "./cardProject.scss";

interface CardProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  data: string;
}

export function CardProject(props: CardProjectProps) {
  const { title, description, imageSrc, imageAlt, data } = props;

  return (
    <div className="card-project">
      <div className="card-project__header">
        <h3>{title}</h3>
        <p>{data}</p>
      </div>
      <div className="card-project__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="card-project__footer">
        <p>{description}</p>
      </div>
    </div>
  );
}
