import React from "react";
import "./FormationCard.scss";

interface FormationCardProps {
  institution: string;
  course: string;
  location: string;
  mode: string;
  period: { start: string; end: string };
}

export const FormationCard: React.FC<FormationCardProps> = ({
  institution,
  course,
  location,
  mode,
  period,
}) => {
  return (
    <div className="formation-card">
      <div className="formation-card__header">
        <h3>{course}</h3>
        <small className="formation-card__period">
          {period.start} - {period.end}
        </small>
      </div>
      <div className="formation-card__body">
        <small className="formation-card__institution">{institution}</small>
        <small className="formation-card__location">{location}</small>
        <small className="formation-card__mode">{mode}</small>
      </div>
    </div>
  );
};
