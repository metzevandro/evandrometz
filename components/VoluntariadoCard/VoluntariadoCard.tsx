import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./VoluntariadoCard.scss";

interface VoluntariadoCardProps {
  org: string;
  role: string;
  period: { start: string; end: string };
  description: string;
  video?: React.ReactNode;
}

export const VoluntariadoCard: React.FC<VoluntariadoCardProps> = ({
  org,
  role,
  period,
  description,
  video,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoContainerRef.current) {
      const videos = videoContainerRef.current.querySelectorAll("video");
      videos.forEach((vid) => {
        if (window.innerWidth < 768) {
          vid.autoplay = true;
          vid.loop = true;
          vid.muted = true;
          vid.play?.();
        } else {
          vid.autoplay = false;
          vid.loop = true;
          if (isHovered) {
            vid.play?.();
          } else {
            vid.pause?.();
          }
        }
      });
    }
  }, [isHovered]);

  return (
    <div
      className="voluntariado-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {video && (
        <div className="voluntariado-card__video" ref={videoContainerRef}>
          {video}
        </div>
      )}
      <div className="voluntariado-card__content">
        <div className="voluntariado-card__header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="/JEAP.PNG"
              height={32}
              width={32}
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <h5>{org}</h5>
          </div>
          <div className="voluntariado-card__period--mobile">
            <small>
              {period.start === period.end
                ? period.start
                : `${period.start} - ${period.end}`}
            </small>
          </div>
        </div>
        <h2 className="voluntariado-card__role">{role}</h2>
        <p className="voluntariado-card__desc">{description}</p>
      </div>
    </div>
  );
};
