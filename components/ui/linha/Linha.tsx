import { LinhaProps } from "@/types";
import "./Linha.scss";
import { AnimatedLink } from "../animatedLink/AnimatedLink";

export function Linha({ nome, cargo, link }: LinhaProps) {
  return (
    <div className="linha">
      <span>{nome}</span>
      {link ? (
        <AnimatedLink href={link} target="_blank">
          {cargo}
        </AnimatedLink>
      ) : (
        <span>{cargo}</span>
      )}
    </div>
  );
}
