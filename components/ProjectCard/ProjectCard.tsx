import Image from "next/image";
import "./ProjectCard.scss";
import { Badge } from "design-system-zeroz";

export function ProjectCard({
  title,
  description,
  links,
  logo,
  badges = [],
}: {
  title: string;
  description: React.ReactNode;
  links: React.ReactNode;
  logo: string;
  badges: string[];
}) {
  return (
    <div className="project-card">
      <div className="project-video">
        <video src="/Zeroz.mp4" autoPlay loop muted />
        <video src="/Zeroz.mp4" autoPlay loop muted />
      </div>
      <div className="project-header">
        <Image
          width={32}
          height={32}
          src={logo}
          alt="Logotipo do Projeto"
          style={{ fill: "red" }}
        />
        <h3 className="project-title">{title}</h3>
      </div>
      <div className="project-description">{description}</div>
      <div className="project-badges">
        {badges.map((label, index) => (
          <Badge key={index} label={label} variant="default" type="light" />
        ))}
      </div>
      <div className="project-links">{links}</div>
      <div className="project-contributors">
        <p>Colaboradores:</p>
        <div className="contributors-images">
          <a href="https://augustometz.com.br/" target="_blank">
            <img
              width={32}
              height={32}
              src="https://framerusercontent.com/images/XJHvwvHwYv14YpH6nwrBWquDKk.png?scale-down-to=1024"
              alt="Augusto Metz"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
