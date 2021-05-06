import React from "react";
import { Link } from "react-router-dom";

function Pinturas(){

    return (
        <div>
            <h1>Login</h1>
            <Link to="cadastro">Cadastro</Link>
            <br/>
            <Link to="footer" >Footer</Link>
            <br/>
            <Link to="home" >Home</Link>
            <br/>
            <Link to="login" >Login</Link>
            <br/>
            <Link to="maiscomentadas" >MaisComentadas</Link>
            <br/>
            <Link to="perfil" >Perfil</Link>
            <br/>
        </div>            
        );
}

export default Pinturas;