import { propTypes } from "react-bootstrap/esm/Image";
import 'bootstrap/dist/css/bootstrap.min.css'

const SocialButton = ({facebook, github, linkedin}) => {
    return (
        <>
                <button className="bg-primary rounded-5 m-3 border">{facebook}</button>
                <button className="bg-primary rounded-5 m-3 border">{github}</button>
                <button className="bg-primary rounded-5 m-3 border">{linkedin}</button>
        </>
    )
}

export default SocialButton;