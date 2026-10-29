
import { Link, useParams, useLocation } from 'react-router-dom'
import dados from '../data/db.json'
import './ProdutosDetalhes.css'

const ProdutosDetalhes = () => {
  const { id } = useParams()
  const location = useLocation()

  const produto = dados.produtos.find(
    (produto) => produto.id === Number(id)
  )

  if (!produto) {
    return (
      <main>
        <h1>Produto não encontrado</h1>
        <Link to="/">Voltar para a loja</Link>
      </main>
    )
  }

  const veioDaCategoria = location.state?.origem === 'categoria'

  const caminhoVolta = veioDaCategoria
    ? `/categoria/${location.state.categoria}`
    : '/'

  return (
    <main>
      <Link to={caminhoVolta}>
        ← Voltar para a loja
      </Link>

      <section className="produto-detalhes">
        <img
          src={produto.imagem}
          alt={produto.nome}
        />

        <div>
          <span>{produto.categoria}</span>

          <h1>{produto.nome}</h1>

          <p>{produto.descricao}</p>

          <h2>
            {produto.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </h2>
        </div>
      </section>
    </main>
  )
}

export default ProdutosDetalhes
