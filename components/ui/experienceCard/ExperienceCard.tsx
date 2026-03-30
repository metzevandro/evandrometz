import { ExperienceCardProps } from "@/types";
import "./ExperienceCard.scss";

export function ExperienceCard({ enterprise, roles }: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-card__dot" />
      <div className="experience-card__content">
        <h3 className="enterprise">{enterprise}</h3>
        {roles.map((r, i) => (
          <div
            key={i}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <div className="experience-card__row">
              <h3>{r.role}</h3>
              <p>{r.date}</p>
            </div>
            <p style={{ textAlign: "left" }}>{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
