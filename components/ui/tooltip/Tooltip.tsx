import React, { ReactNode } from "react";
import "./Tooltip.scss";

type TooltipProps = {
  children: ReactNode;
  content: string;
};

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip__text">{content}</span>
    </div>
  );
}
