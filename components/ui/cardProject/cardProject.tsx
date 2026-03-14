import Image from "next/image";
import "./cardProject.scss";
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
    <div className="card-project" onClick={() => navigationTo()}>
      <div className="card-project__header">
        <span>{title}</span>
        <span>{date}</span>
      </div>

      <div className="card-project__image">
        <Image
          className="img"
          width={1200}
          height={800}
          src={imageSrc}
          alt={imageAlt}
        />
      </div>

      <div className="card-project__footer">
        <span>{description}</span>
      </div>
    </div>
  );
}
