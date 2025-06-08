import React from "react";
import { NavItem } from "@/components/NavItem/NavItem";

interface SectionNavProps {
  label: string;
  active: boolean;
}

export const SectionNav: React.FC<SectionNavProps> = ({ label, active }) => (
  <nav className="section-nav-mobile">
    <NavItem label={label} active={active} />
  </nav>
);
