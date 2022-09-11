import './Footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className='bloque1 bloque'>
                <p>¿Cómo comprar?</p>
                <p>Preguntas frecuentes</p>
                <p>Cambios y devoluciones</p>
                <p>Política de Privacidad</p>
                <p>Se parte de nuestro TEAM</p>
            </div>
            <div className='bloque2 bloque'>
                <h4>Contáctanos</h4>
                <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
                <p>+51 999 999 999</p>
                <FontAwesomeIcon icon={faPhone} className="icon"/>
                <p>(601) 123 7238 / Whatsapp horario de atención de Lunes a Viernes de 8 a 17hs</p>
                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                <p>jinzo.store@gmail.com</p>
            </div>
            <div className='bloque3 bloque'>
                <h4>Sigamos contectados</h4>
                <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                <FontAwesomeIcon icon={faTiktok} className="icon"/>
            </div>
        </div>
        <div className='copy'>
            Copyright Fredy Rodrigo - 2022. Todos los derechos reservados
        </div>
        </>
    )
}

export default Footer;