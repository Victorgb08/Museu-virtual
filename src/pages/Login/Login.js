import React from "react";
import {Link, useHistory} from "react-router-dom";

function Login(){

    const history=useHistory();
    return (
        <div>
            <h1>Login</h1>
            <Link to="home" >Home</Link>
            <br/>
            <Link to="cadastro">Cadastro</Link>
            <br/>
            <button
                onClick={()=>{
                    history.push("home")
                }}
            >
                Logout
            </button>
        </div>            
        );
}

export default Login;