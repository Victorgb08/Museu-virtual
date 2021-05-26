import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Cadastro.css";
import { ImHome } from "react-icons/im";
import { BiCommentAdd } from "react-icons/bi";
import { MdFilterFrames, MdHome, MdInfo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoSignIn } from "react-icons/go";
import { IoLogIn } from "react-icons/io5";
import { Drawer, IconButton, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { IconContext } from "react-icons/lib";
import api from '../../Services/api';

function Cadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [question, setQuestion] = useState('');
    const [url_perfil, setUrl_perfil] = useState('');
    const history = useHistory();

    async function handleCadastro(e){
        e.preventDefault();
        const data = {
            name, 
            address, 
            email, 
            password, 
            question,
            url_perfil,
        };
        try {
            const response = await api.post('/users', data);
            console.log(response.data);
            //alert(`Seu ID de acesso: ${response.data.user_id}`);
            alert(`Cadastro feito com Sucesso: ${data.name}`);
            history.push("login");
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

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

    return(
        <div className="FundoTelaCadastro">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>handleDrawer(!open)}></IconButton>
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
            <div className="basecadastro">
                <div className="containercadastro">
                    <div className="contentcadastro">
                        <section>
                            <h1 className = "titulocadastro"><font color="#D00000"><b>ART ONE</b></font></h1>                
                            <p><b>Faça seu cadastro e venha fortalecer a comunidade artistica!</b></p>
                        </section>
                        <form onSubmit={handleCadastro}>
                            <input 
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input 
                                placeholder="Endereço"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            <input 
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input 
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input 
                                placeholder="Por que ser artista no século XXI?"
                                value={question}
                                onChange={e => setQuestion(e.target.value)}
                            />
                            <input 
                                placeholder="Url para imagem de Perfil"
                                value={url_perfil}
                                onChange={e => setUrl_perfil(e.target.value)}
                            />
                            <button className="buttonCadastro" type="submit">Cadastrar</button>
                            <Button className="homeButton" variant="outlined" color="primary" onClick={() => history.push("Home")} >
                                <ImHome style={{height: "25px", width: "25px"}}/>
                            </Button>
                        </form>       
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cadastro;

// https://uploaddeimagens.com.br/imagens/r5JdC0k