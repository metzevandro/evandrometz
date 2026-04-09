import { Icon } from "@/components/ui/icon/Icon";
import "./LetsTalkSection.scss";

export default function LetsTalkSection() {
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
      <a href="https://www.linkedin.com/in/metzevandro/" target="_blank">
        Enviar mensagem <Icon name="arrow_forward" />
      </a>
    </section>
  );
}
