import './LoginRegistro.css';
import { useState } from 'react'

function LoginRegistro(){

    const [ enLogin, setEnLogin ] = useState(false); // valor inicial es false, es decir, estamos en modo registro
    
    const [ nombreUsuario, setNombreUsuario ] = useState(''); // valor inicial del nombre de usuario es cadena vacia
    const [ email, setEmail ] = useState(''); // valor inicial del email es cadena vacia
    const [ password, setPassword ] = useState(''); // valor inicial del password es cadena vacia
    const [ repassword, setRepassword ] = useState(''); // valor inicial del repassword es cadena vacia

    const camposFormulario = [
      { label: "Nombre", type:"text" }, 
      { label:"Email", type:"email" }, 
      { label:"Password", type:"password" }, 
      { label:"Repassword", type:"password" }
    ];

    // En modo login solo mostramos email y password.
    // En modo registro mostramos todos los campos.
    const camposVisibles = enLogin
      ? camposFormulario.filter(campo => campo.label === "Email" || campo.label === "Password")
      : camposFormulario;


 function changeInputs(ev){
    console.log('evento change del input: ',ev, '...el valor actual de la caja de texto es....', ev.target.value);

    switch (
ev.target.id
) {
      case 'inputNombre': setNombreUsuario(ev.target.value);break;
      case 'inputEmail': setEmail(ev.target.value);break;
      case 'inputPassword': setPassword(ev.target.value);break;
      case 'inputRepassword': setRepassword(ev.target.value);break;
    }

  }

  function clickCrearCuenta(){
    console.log('datos a mandar al server....', { nombreUsuario, email, password, repassword });
  }

    return <div className="container">
        
        <div className="row">
            <div className="col-12">
                <img  src="/imagenes/miniLogo_pccomponentes.png" alt="logo" className="logo"/>
            </div>
        </div>

        <div className="row">
            
            <div className="col-6">
                <img src="/imagenes/loginRegistro_info.png" alt="loginRegistro_info" style={ { width: "500px", height: "500px"} }/>
            </div>
            
            <div className="col-6">
                {/* Formulario de Login o Registro en funcion de url o accion evento boton crearCuenta/iniciar Sesion */}
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12 d-flex flex-row justify-content-center">
                            <h1>{enLogin ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        {
                            
camposVisibles.map
( campo => (
                                                            <div className="m-4" key={campo.label}>
                                                            <label className="form-label" htmlFor={`input${campo.label}`}>{campo.label}:</label>
                                                            <input type={campo.type} 
                                                                    id={`input${campo.label}`} 
                                                                    className="form-control" 
                                                                    placeholder={campo.label + "*"} 
                                                                    onChange={ changeInputs }/>
                                                            </div>
                                                        )
                            )
                        }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex flex-row justify-content-center">
                            <button type="button" className="btn btn-primary" onClick={ clickCrearCuenta }>
                              {enLogin ? 'Iniciar sesión' : 'Crear cuenta'}
                            </button>
                        </div>
                    </div>

                    <hr></hr>
                    <div className="row">
                        <div className="col-12 d-flex flex-row justify-content-center">
                            {
                                enLogin ? 
                                <p><strong>Ya tengo una cuenta</strong></p> 
                                :
                                <p><strong>¿Eres nuevo cliente</strong></p>
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex flex-row justify-content-center">
                            <button className="btn btn-outline-primary" onClick={ ()=> setEnLogin(!enLogin)} >
                            {
                                enLogin ?
                                <span>Iniciar sesion</span> 
                                :
                                <span>Crear cuenta</span>
                            }
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>



    </div>

}

export default LoginRegistro; 
