import './Modal.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

const Modal = ({title, close, children}) => {
    return (
        <div className='modal-custom'>
            <div className='modal-custom-content'>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faXmarkCircle} onClick={()=>close(false)} className='close-icon'/>
                {children}
            </div>
        </div>
    )
}

export default Modal;