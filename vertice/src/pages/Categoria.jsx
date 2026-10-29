import { Link, useParams } from "react-router-dom";
import dados from "../data/db.json";
import './Categoria.css'

function Categoria() {
  const { nome } = useParams();

  const produtosFiltrados = dados.produtos.filter(
    (produto) =>
      produto.categoria.toLowerCase() === nome.toLowerCase()
  );

  return (
    <main>
      <Link to="/">← Voltar para a loja</Link>

      <h1>Categoria: {nome}</h1>

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado nessa categoria.</p>
      ) : (
        <section className="produtosFilter">
          {produtosFiltrados.map((produto) => (
            <article className="card" key={produto.id}>
              <img
                src={produto.imagem}
                alt={produto.nome}
              />

              <div className="card-conteudo">
                <h2>{produto.nome}</h2>

                <p>
                  {produto.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>

                <Link to={`/products/${produto.id}`}
                state={{ origem: 'categoria', categoria: nome }}
                >
                  Saiba mais
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Categoria;