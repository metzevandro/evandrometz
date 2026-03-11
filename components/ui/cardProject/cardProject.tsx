import "./cardProject.module.scss";
import { useRouter } from "next/navigation";

interface CardProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  projectUrl: string;
}

export function CardProject(props: CardProjectProps) {
  const { title, description, imageSrc, imageAlt, date, projectUrl } = props;

  const router = useRouter();

  const navigationTo = () => {
    router.push(projectUrl);
  };

  return (
    <div className="card-project" onClick={navigationTo}>
      <div className="card-project__header">
        <h3>{title}</h3>
        <p>{date}</p>
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
