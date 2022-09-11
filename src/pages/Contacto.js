import './Contacto.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {
    return (
        <div className="contacto">
            <h1>Contáctanos</h1>
            <div className="formulario">
                <p>Envíanos un mensaje:</p>
                <form>
                    <label for="nombre">Ingrese su nombre *</label>
                    <input type="text" className="input nombre" required/>
                    <label for="tel">Número telefónico *</label>
                    <input type="text" className="input tel" required/>
                    <label for="email">Ingrese su email *</label>
                    <input type="text" className="input email" required/>
                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
            <div className='informacion'>
                <p>Síguenos en nuestras redes sociales</p>
                <p>Facebook : </p>
                <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                <p>Instagram : </p>
                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                <p>TikTok : </p>
                <FontAwesomeIcon icon={faTiktok} className="icon"/>

            </div>
        </div>
    )
}

export default Contacto;