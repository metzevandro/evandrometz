"use client";
import { Button } from "design-system-zeroz";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const navigateTo = (path: string) => () => {
    router.push(path);
  };

  return (
    <div className="not-found">
      <h1>Erro 404: culpa do estagiário (sou eu mesmo).</h1>
      <p>Se eu criei essa página... foi sem querer querendo. Juro.</p>
      <Button
        size="md"
        variant="secondary"
        typeIcon="arrow_back"
        label="Voltar para a página inicial"
        onClick={navigateTo("/")}
      />
    </div>
  );
}
