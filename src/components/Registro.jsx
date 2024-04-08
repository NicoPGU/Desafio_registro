import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


 const Registro = () => {
    return (
        <>
        <SocialButton
        facebook =<FontAwesomeIcon icon={faFacebook}/>
        github = <FontAwesomeIcon icon={faGithub}/>
        linkedin = <FontAwesomeIcon icon={faLinkedin}/> 
        />
        <Formulario/>
        <Alert />
        </>
    )
}

export default Registro