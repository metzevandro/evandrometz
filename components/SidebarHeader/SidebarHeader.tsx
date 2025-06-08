import React from "react";
import { NavItem } from "@/components/NavItem/NavItem";
import { FaGithub, FaLinkedin, FaInstagram, FaNpm } from "react-icons/fa";

interface SidebarHeaderProps {
  navItems: { label: string }[];
  activeSection: string;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  activeSection,
  navItems,
}) => (
  <div className="sidebar-fixed">
    <div className="profile">
      <h4>Desenvolvedor Front End</h4>
      <h1>Evandro Metz</h1>
      <strong>Construindo minha história com <code>if</code> and <code>elses</code></strong>
    </div>
    <nav>
      {navItems.map((item, idx) => (
        <NavItem
          key={idx}
          label={item.label}
          active={activeSection === item.label}
        />
      ))}
    </nav>
    <div className="social-links">
      <a
        aria-label="Github"
        href="https://github.com/metzevandro"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <FaGithub size={24} className="icon-social" />
      </a>
      <a
        aria-label="LinkedIn"
        href="https://linkedin.com/in/metzevandro/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <FaLinkedin size={24} className="icon-social" />
      </a>
      <a
        aria-label="Instagram"
        href="https://www.instagram.com/metz.evandro"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <FaInstagram size={24} className="icon-social" />
      </a>
      <a
        aria-label="NPM"
        href="https://www.npmjs.com/~evandrometz"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <FaNpm size={24} className="icon-social" />
      </a>
    </div>
  </div>
);
