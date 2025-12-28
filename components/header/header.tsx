import "./header.scss";

interface HeaderProps {
  visible: boolean;
}

export default function Header({ visible }: HeaderProps) {
  return (
    <header className={visible ? "header show" : "header hide"}>
      <div></div>
      <div className="links">
        <a href="/#projetos" >Projetos</a>
        <a href="/#about" >Sobre Mim</a>
        <a href="/#curriculo" >Currículo</a>
      </div>
      <div></div>
    </header>
  );
}
