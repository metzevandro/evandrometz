export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <a href="/" className="back-home">
        Voltar para a página inicial
      </a>
    </div>
  );
}