import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import { useHistory } from "react-router-dom";
import api from '../../Services/api';
import { loginn, userId} from '../../Services/auth';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('/login', {email, password});
      alert(`Bem vindo ${response.data.user.name}`);
      loginn(response.data.acessToken);
      userId(response.data.user.user_id);
      localStorage.setItem("nameUser", response.data.user.name);
      localStorage.setItem("UrlPerfil", response.data.user.url_perfil);
      history.push('/perfil');
    } catch (error){
      if(error.response.status === 400){
        alert("Credentials Invalids:");
      }
      else{
        alert(error.response.data.notification);
      }
      console.warn(error);
    }
  }
  
  return (
    <div className="total_login">
      <div className="base_login">
        <div className="conteiner_login">
          <div className="contentLogin">
            <section>
              <h1 className = "titulocadastro"><font color="#D00000"><b>ART ONE</b></font></h1>
            </section>
            <form onSubmit={handleLogin}>
              <input  
                type="email"
                placeholder="Seu E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className="buttonLogin" type="submit">Entrar</button>
              <button className="cadastroButton_login" onClick={() => history.push("Cadastro")}>Cadastre-se</button>
              <Button className="homeButton_login" variant="outlined" color="primary" onClick={() => history.push("Home")} >
                <ImHome style={{height: "25px", width: "25px"}}/>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
