import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    const [menuAberto, setMenuAberto] = useState(false)

    function toggleMenu() {
        setMenuAberto(!menuAberto)
    }

    function fecharMenu() {
        setMenuAberto(false)
    }
    return (
        <header className='header'>
            <div className="headerLogo">
                <Link to='/' onClick={fecharMenu}>
                <h2>vértice</h2>
                <span>vista o essencial.</span>
                </Link>
            </div>

            <button
                className="menuHamburguer"
                onClick={toggleMenu}
                aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuAberto}
                aria-controls="navegacao"
            >
                <i className={`bi ${menuAberto ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
            <nav
            id="navegacao"
            className={`navegacao ${menuAberto ? 'ativo' : ''}`}
            >
                <ul>
                    <li>
                        <Link to="/" onClick={fecharMenu}>Home</Link>
                    </li>

                    <li>
                        <Link to="/categoria/feminino" onClick={fecharMenu}>Feminino</Link>
                    </li>

                    <li>
                        <Link to="/categoria/masculino" onClick={fecharMenu}>Masculino</Link>
                    </li>

                    <li>
                        <Link to="/categoria/acessórios" onClick={fecharMenu}>Acessórios</Link>
                    </li>
                </ul>
            </nav>
            <div className={`busca ${menuAberto ? 'buscaAtiva' : ''}`}>
                <label>
                    <input type="search" name="busca" id="busca" placeholder='Buscar produtos' />
                </label>
                <button className='btnContato'>Contato</button>
            </div>
        </header>
    )
}

export default Header