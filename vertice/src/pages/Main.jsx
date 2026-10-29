import './Main.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import dados from '../data/db.json'
const Main = () => {

  const produtos = dados.produtos
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(12)
    const produtosVisiveis = produtos.slice(0, quantidadeVisivel)

    const [categoriaAberta, setCategoriaAberta] = useState(true)
    const [precoAberto, setPrecoAberto] = useState(false)
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const [precoSelecionado, setPrecoSelecionado] = useState('')

    function verMais() {
        setQuantidadeVisivel((quantidadeAtual) => quantidadeAtual + 12)
    }
  return (
    <div>
      <section className="hero">
        <div className="leftMain">
          <div className="titleMain">
            <span>coleção / 026</span>
            <div>
              <h1>Menos, porém melhor.</h1>
              <p>Peças atemporais. Texturas naturais. <br />
                Um guarda-roupa que acompanha você.
              </p>
            </div>
            <a href='#lista-produtos'>explorar coleção <i className="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
        <div className="rightMain">
          <span>essencial por natureza</span>
        <img src="/images/camisetaEssential.png" alt="" />
        </div>
      </section>

      <section className='destaque'>
      <div className="headerDestaque">
        <span>ESCOLHAS DA ESTAÇÃO</span>
        <div className="titleDestaque">
          <h3>O essencial, em destaque.</h3>
          <span>Design consciente para acompanhar todos os seus dias.</span>
        </div>
      </div>

      <div className="cardsDestaques">
        <Link to='/categoria/feminino'>
        <div className="cardDestaque">
          <div className="cardImgDestaques">
            <img src="./images/BlazerEstruturado.png" alt="Blazer Estruturado" />
          </div>
          <div className="cardInfos">
            <span>01</span>
            <div className="categoriaCard">
              <span>Feminino</span>
              
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
        </div>
        </Link>

        <Link to='/categoria/masculino'>
        <div className="cardDestaque">
          <div className="cardImgDestaques">
            <img src="./images/JaquetaUtility.png" alt="Jaqueta Utility" />
          </div>
          <div className="cardInfos">
            <span>02</span>
            <div className="categoriaCard">
              <span>Masculino</span>
              
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
        </div>
        </Link>

        <Link to='categoria/acessórios'>
        <div className="cardDestaque">
          <div className="cardImgDestaques">
            <img src="./images/CamisaLinho.png" alt="Camisa Linho" />
          </div>
          <div className="cardInfos">
            <span>03</span>
            <div className="categoriaCard">
              <span>Acessórios</span>
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
        </div>
        </Link>

      </div>
      </section>

      <section className="headProducts">
      <div className="titleProducts">
                  <div>
                    <span>ENCONTRE O SEU PRÓXIMO FAVORITO</span>
                    <h2>Novidades para você.</h2>
                  </div>
                  <span>{produtosVisiveis.length} produtos</span>
              </div>
              <div className="filterProduct">
                <span>filtrar por</span>
                <div className="ordenar">
                  <span>Ordernar por </span>
                  <select>
                     <option value="">Relevância</option>
                  </select>
                </div>
              </div>

              <div className="containerProducts">
                <div className="filters">

  <div className="filterGroup">
    <button
      type="button"
      className="filterToggle"
      onClick={() => setCategoriaAberta(!categoriaAberta)}
      aria-expanded={categoriaAberta}
    >
      <span>Categoria</span>
      <i className={`bi ${categoriaAberta ? 'bi-dash' : 'bi-plus'}`}></i>
    </button>

    {categoriaAberta && (
      <div className="filterOptions">
        {['feminino', 'masculino', 'acessórios'].map((categoria) => (
          <label className="filterOption" key={categoria}>
            <input
              type="radio"
              name="categoria"
              value={categoria}
              checked={categoriaSelecionada === categoria}
              onChange={() => setCategoriaSelecionada(categoria)}
            />
            <span>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </span>
          </label>
        ))}

        {categoriaSelecionada && (
          <button
            type="button"
            className="filterClear"
            onClick={() => setCategoriaSelecionada('')}
          >
            Limpar categoria
          </button>
        )}
      </div>
    )}
  </div>

  <div className="filterGroup">
    <button
      type="button"
      className="filterToggle"
      onClick={() => setPrecoAberto(!precoAberto)}
      aria-expanded={precoAberto}
    >
      <span>Preço</span>
      <i className={`bi ${precoAberto ? 'bi-dash' : 'bi-plus'}`}></i>
    </button>

    {precoAberto && (
      <div className="filterOptions">
        {[
          { label: 'Até R$ 100', value: '100' },
          { label: 'R$ 100 a R$ 250', value: '100-250' },
          { label: 'Acima de R$ 250', value: '250+' }
        ].map((faixa) => (
          <label className="filterOption" key={faixa.value}>
            <input
              type="radio"
              name="preco"
              value={faixa.value}
              checked={precoSelecionado === faixa.value}
              onChange={() => setPrecoSelecionado(faixa.value)}
            />
            <span>{faixa.label}</span>
          </label>
        ))}

        {precoSelecionado && (
          <button
            type="button"
            className="filterClear"
            onClick={() => setPrecoSelecionado('')}
          >
            Limpar preço
          </button>
        )}
      </div>
    )}
  </div>

</div>
                        <article className='produtos' id="lista-produtos">
                
                          {produtosVisiveis.map((item)=>(
                <div className="cardProduct" key={item.id}>
                    <div className="imgCard">
                        <img src={item.imagem} alt={item.nome} />
                        <div className="curtir"><i className="bi bi-heart"></i></div>
                    </div>
                    <div className="cardConteudo">
                        <span>{item.categoria}</span>
                        <span>{item.nome}</span>
                        <span>{item.preco.toLocaleString('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        })}</span>
                        <Link to={`/products/${item.id}`}
                        state={{ origem: 'home' }}
                        >Ver Mais</Link>
                    </div>
                </div>
                          ))}
                          {quantidadeVisivel < produtos.length && (
                          <button className="btn-ver-mais" onClick={verMais}>
                            VER MAIS PRODUTOS <i class="bi bi-arrow-down-short"></i>
                          </button>
                        )}
                          </article>
              </div>
      </section>
    </div>
  )
}

export default Main