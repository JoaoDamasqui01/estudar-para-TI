import './estiloFooter.css'

import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import linkedin from './img/linkedin.png'

function Footer(){
    return (
        <footer className='rodape'>
            <nav className='menuRodape'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Áreas de Atuação</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
            </nav>
            <div className='direitos'>
                <p>Desenvolvido por Rafael Florindo</p>
            </div>
            <div className='contatos'>
                <div><a href="#"><img src={facebook} /></a></div>
                <div><a href="#"><img src={linkedin} /></a></div>
                <div><a href="#"><img src={instagram} /></a></div>
            </div>
        </footer>
    )
}

export default Footer;