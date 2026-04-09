import { Icon } from "@/components/ui/icon/Icon";
import "./LetsTalkSection.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type BgColor = "default" | "var(--p-color-purple)" | "var(--p-color-blue)" | "var(--p-color-green)";

function getInitialBgColor(route: string): BgColor {
  switch (route) {
    case "/design-system-zeroz":
      return "var(--p-color-purple)";
    case "/meudim":
      return "var(--p-color-blue)";
    case "/portal-cidadao-estancia-velha":
      return "var(--p-color-green)";
    default:
      return "default";
  }
}

export default function LetsTalkSection() {
  const route = usePathname();
  const [bgColor, setBgColor] = useState<BgColor>("default");

  useEffect(() => {
    setBgColor(getInitialBgColor(route));
  }, [route]);

  const color = bgColor === "default" ? undefined : bgColor;

  return (
    <section id="letstalk" className="lets-talk-section">
      <div className="lets-talk-section__container">
        <h2>Vamos conversar?</h2>
        <p>
          Se você quer saber mais sobre este projeto ou sobre meu processo, me
          chame no LinkedIn.
          <br />
          <br />
          Será um prazer trocar ideias e compartilhar mais sobre essa
          experiência.
        </p>
      </div>

      <a
        href="https://www.linkedin.com/in/metzevandro/"
        target="_blank"
        style={{
          backgroundColor: color,
          ["--hover-color" as string]: color,
        }}
      >
        Enviar mensagem <Icon name="arrow_forward" />
      </a>
    </section>
  );
}