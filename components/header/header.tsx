"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./header.scss";
import Link from "next/link";
import { Icon } from "design-system-zeroz";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      className="nav-link"
      style={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          bottom: 0,
          height: 1,
          width: "100%",
          background: "var(--s-color-content-default)",
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />
    </a>
  );
}

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  const { children } = props;
  const router = useRouter();

  const onClickEVM = () => {
    router.push("/");
  };

  return (
    <>
      <header className="main-header">
        <div className="main-header-inner">
          <div onClick={onClickEVM} className="site-title">
            <Icon icon="home" size="lg" fill />
          </div>
          <nav>
            <NavLink href="/projetos">Projetos</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
          </nav>
          <Link href="/#contact">Contato</Link>
        </div>
      </header>
      {children}
    </>
  );
}
