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


function Cadastro(){
    const [membro, setMembro] = useState({});
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);
    
    function cadastro(){
        // alert("Bem vindo\n" + membro.name);
        history.push("home");
    }

    function handleInputChange(e){
        // a key vai pegar o nome de qual input esta sendo modificado
        const key = e.target.name;
        // copia o que tinha nos cadastros anteriores por segurança antes de atualizar
        const newMembro = {...membro};
        // passa o valor que está sendo inserido para a copia
        newMembro[key] = e.target.value;
        // passa para a variavel que vai armazenar tudo mesmo
        setMembro(newMembro);
        // console.log(newMembro);
        // <img src="https://cdn.pixabay.com/photo/2017/09/05/22/58/background-2719560_960_720.jpg " alt="Paleta"/>

    }

    /*Embaixo do div com className basecadastro estava o botão de home
        <Button variant="danger" onClick={cadastro} className="botaohome">
                    <MdHome/> 
                </Button>
    */

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
                    <Form InputProps={{
                    style: {
                      height: "100%",
                    },
                  }}
                  className="forms_cad">
                    <h1 className = "titulocadastro"><font color="#D00000"><b>ART ONE</b></font></h1>                
                        <div className="inputscadastro">
                            <Form.Group controlId="Nome">
                                <Form.Control type="text" placeholder="Nome" name="name" InputLabelProps={{style:{background:"black",},}} onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="Email">
                                <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="Senha">
                                <Form.Control type="password" placeholder="Senha" name="password" onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="Endereco">    
                                <Form.Control type="text" placeholder="Endereço" name="address" onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="TextArt">
                                <Form.Control as="textarea" rows={3} placeholder="Por que ser artista no século XXI?" name="text" onChange={handleInputChange}/>
                            </Form.Group>
                            
                            <Button variant="danger" type="submit" onClick={cadastro}>
                                Cadastre-se
                            </Button>
                            <Button className="homeButton" variant="outlined" color="primary" onClick={() => history.push("Home")} >
                                <ImHome style={{height: "25px", width: "25px"}}/>
                            </Button>
                        </div>    
                    </Form>
                </div>
            </div>
        </div>
        
    )
}

export default Cadastro;

// https://uploaddeimagens.com.br/imagens/r5JdC0k