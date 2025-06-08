import Image from "next/image";
import "./ProjectCard.scss";
import { Badge } from "design-system-zeroz";
import React, { useRef, useEffect, useState } from "react";

export function ProjectCard({
  title,
  description,
  links,
  logo,
  badges = [],
  video,
}: {
  title: string;
  description: React.ReactNode;
  links: React.ReactNode;
  video: React.ReactNode;
  logo: string;
  badges: string[];
}) {
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
          vid.loop = false;
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
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-video" ref={videoContainerRef}>
        {video}
      </div>
      <div className="project-header">
        <Image
          width={32}
          height={32}
          src={logo}
          alt="Logotipo do Projeto"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
