import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import { useHistory } from "react-router-dom";
import api from '../../Services/api';
import { loginn, userId} from '../../Services/auth';
import "./Login.css";
import {IconButton, Drawer, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import { IconContext } from "react-icons/lib";
import { MdFilterFrames, MdHome, MdInfo } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GoSignIn } from "react-icons/go";
import { IoLogIn } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");
  const [open, setOpen] = useState(false);   
    
    const menuPages = [
        {
            pathName: "/home",
            icon: <MdHome /> ,
            text: " Home",
            iconSize: "1.5em",
        },
        {
            pathName: "/login",
            icon: <IoLogIn /> ,
            text: " Login",
            iconSize: "1.5em",
        },
        {
            pathName: "/cadastro",
            icon: <GoSignIn /> ,
            text: " Cadastre-se",
            iconSize: "1.4em",
        },
        {
            pathName: "/perfil",
            icon: <CgProfile />,
            text: " Perfil",
            iconSize: "1.4em",
        },
        {
            pathName: "/pinturas",
            icon: <MdFilterFrames />,
            text: " Pinturas",
            iconSize: "1.4em",
        },
        {
            pathName: "/maiscomentadas",
            icon: <BiCommentAdd />,
            text: " Mais Comentadas",
            iconSize: "1.4em",
        },
        {
            pathName: "/footer",
            icon: <MdInfo />,
            text: " Footer",
            iconSize: "1.4em",
        }
    ]

    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(abrir){
        setOpen(abrir);

    }

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('/login', {email, password});
      alert(`Bem vindo ${response.data.user.name}`);
      loginn(response.data.acessToken);
      userId(response.data.user.user_id);
      // console.log(response.data);
      localStorage.setItem("nameUser", response.data.user.name);
      localStorage.setItem("UrlPerfil", response.data.user.url_perfil);
      localStorage.setItem("QuestionUser", response.data.user.question);
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
      <div className="button_log">
            <IconButton color="inherit" aria-label="menu" onClick={()=>handleDrawer(!open)} ><FiMenu/></IconButton>
            </div>
            <Drawer open={open} onClose={()=> handleDrawer(false)}>
                <List className="list">
                    {menuPages.map((listItem) => {
                        return (
                            <ListItem 
                                button
                                onClick={()=> { handleClick(listItem.pathName);}}
                                selected={currentPage === listItem.pathName}
                                >
                                <IconContext.Provider value={{ color: "#343434", size: listItem.iconSize}}>
                                    {listItem.icon}
                                </IconContext.Provider>
                                <ListItemText className="listItemText">
                                    <Typography>{listItem.text}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
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
