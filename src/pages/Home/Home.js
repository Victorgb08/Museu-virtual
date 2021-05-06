import React from "react";
import {Link, useHistory} from "react-router-dom";
import Footer from "../Footer"

function Home(){

    const history=useHistory();

    return (
    <>
        <div>
            <h1>Login</h1>
            <Link to="cadastro">Cadastro</Link>
            <br/>
            <Link to="footer" >Footer</Link>
            <br/>
            <Link to="login" >Login</Link>
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
            <Footer/>
        </div>
    </>          
        );
}

export default Home;