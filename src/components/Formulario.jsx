import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmacion, setConfirmacion] = useState('')

    //Estado de errores
    const [error, setError] = useState(false)

    //Estado error de coincidencia de password
    const[validacion, setValidacion] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault()
        //validacion
        if (nombre === '' | email === '' | password === '' | confirmacion === ''){
            setError(true)
            return
        }if (confirmacion !== password){
            setValidacion(true)
            return
        }
        setError(false)
        setValidacion(false)
        setNombre('')
        setEmail('')
        setPassword('')
        setConfirmacion('')
       
    }
    return (
        <>
        <h5>O usa tu email para registrarte</h5>
        <form className="formulario" onSubmit={validarDatos}>
            <div className="form-group mb-3">
                <input type="text" 
                className="form-control" 
                name="nombre" 
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}/>

            </div>
            <div className="form-group mb-3">
                <input type="email" 
                name="email" 
                className="form-control" 
                placeholder="tuemail@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="password" 
                className="form-control" 
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="confirmacion" 
                className="form-control" 
                placeholder="Confirmar tu contraseña"
                onChange={(e) => setConfirmacion(e.target.value)}
                value={confirmacion}
                />
                {validacion ? <p className="validacion">Las contraseñas no coinciden</p> : null}
            </div>
            <button type="submit" className="btn btn-primary ">Registrarse</button>
            {error ? <p className="error">Completa todos los campos</p> : null}
        </form>
        </>

    )
}

export default Formulario;