import Link from "next/link";
import "./header.scss";

interface HeaderProps {
  visible: boolean;
}

export default function Header({ visible }: HeaderProps) {
  return (
    <header className={visible ? "header show" : "header hide"}>
      <div className="links">
        <Link href="/#inicio"><img src="/logo.png" alt="" width={40}/></Link>
        <div>
        <Link href="/#projetos">Projetos</Link>
        <Link href="/#about">Sobre mim</Link>
        <Link href="/#curriculo">Currículo</Link>
        </div>
      </div>
      <div></div>
    </header>
  );
}
