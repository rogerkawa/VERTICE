
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (!email.trim()) {
            setMensagem('Digite seu e-mail para continuar.')
            return
        }

        setMensagem('Obrigado pelo interesse! Em breve teremos novidades.')
        setEmail('')
    }

    return (
        <footer className="footer">
            <div className="footerPrincipal">
                <div className="footerMarca">
                    <Link to="/" className="footerLogo">
                        vértice<span>.</span>
                    </Link>

                    <p>
                        Vista o essencial.
                        <br />
                        Estilo que acompanha você.
                    </p>

                    <div className="footerRedes">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>

                        <a
                            href="https://pinterest.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Pinterest"
                        >
                            <i className="bi bi-pinterest"></i>
                        </a>
                    </div>
                </div>

                <div className="footerNewsletter">
                    <span className="footerEyebrow">
                        FIQUE POR DENTRO
                    </span>

                    <h3>O essencial chega até você.</h3>

                    <p>
                        Receba novidades, lançamentos e inspirações
                        diretamente no seu e-mail.
                    </p>

                    <form
                        className="footerForm"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            aria-label="Seu melhor e-mail"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                                setMensagem('')
                            }}
                            required
                        />

                        <button type="submit">
                            Inscrever-se
                            <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </form>

                    {mensagem && (
                        <p className="footerMensagem" role="status">
                            {mensagem}
                        </p>
                    )}
                </div>
            </div>

            <div className="footerInferior">
                <span>
                    © {new Date().getFullYear()} Vértice. Todos os direitos reservados.
                </span>

                <div className="footerLinks">
                    <Link to="/">Início</Link>
                    <Link to="/products">Produtos</Link>
                    <Link to="/categoria/feminino">Feminino</Link>
                    <Link to="/categoria/masculino">Masculino</Link>
                </div>

                <span className="footerAssinatura">
                    FEITO PARA O ESSENCIAL.
                </span>
            </div>
        </footer>
    )
}

export default Footer
