import React from "react";
import {Link, useHistory} from "react-router-dom";

function Login(){

    const history=useHistory();

    return (
        <div>
            <h1>Login</h1>
            <Link to="cadastro">Cadastro</Link>
            <br/>
            <Link to="footer" >Footer</Link>
            <br/>
            <Link to="home" >Home</Link>
            <br/>
            <Link to="maiscomentadas" >MaisComentadas</Link>
            <br/>
            <Link to="perfil" >Perfil</Link>
            <br/>
            <button
                onClick={()=>{
                    history.push("pinturas")
                }}
            >
                Pinturas
            </button>
        </div>            
        );
}

export default Login;