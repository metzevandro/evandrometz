import React, { useEffect, useState } from "react";
import "./FormationCard.scss";

interface FormationCardProps {
  institution: string;
  course: string;
  location: string;
  mode: string;
  period: { start: string; end: string };
  icone: string;
}

export const FormationCard: React.FC<FormationCardProps> = ({
  institution,
  course,
  location,
  mode,
  period,
  icone,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="formation-card">
      <div className="formation-card__header">
        <div className="formation-card__title">
          <img src={icone} alt="" />
          {isMobile ? <p>{course}</p> : <h3>{course}</h3>}
        </div>
      </div>
      <div className="formation-card__body">
        <div className="__information">
          <small>{institution}</small>
          <small>-</small>
          <small>{location}</small>
          <small>-</small>
          <small>{mode}</small>
        </div>
        <div className="__period">
          <small>
            {period.start === period.end
              ? period.start
              : `${period.start} - ${period.end}`}
          </small>
        </div>
      </div>
    </div>
  );
};
