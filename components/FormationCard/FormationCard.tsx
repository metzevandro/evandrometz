import React, { useState } from "react";
import "./FormationCard.scss";
import { ImageGallery } from "../ImageGallery/ImageGallery";

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

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="formation-card">
      <div className="formation-card__header">
        <div className="formation-card__title">
          <img src={icone} height="24" alt="" />
          {isMobile ? (<h5>{course}</h5>) : (<h3>{course}</h3>)}
        </div>
        <small className="formation-card__period">
          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <span>{period.end}</span>
              <span>{period.start}</span>
            </div>
          ) : (
            <>
              {period.start} - {period.end}
            </>
          )}
        </small>
      </div>
      <div className="formation-card__body">
          <small>{institution}</small>
          <small>-</small>
          <small>{location}</small>
          <small>-</small>
          <small>{mode}</small>
      </div>
    </div>
  );
};
