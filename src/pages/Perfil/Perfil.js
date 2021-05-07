import React, { useState } from "react";
import "./Perfil.css"
import { Avatar, Drawer, IconButton, Link, List } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import Carousel from "react-bootstrap/Carousel"
import {Button, Form} from "react-bootstrap"

function Perfil(){

    const [open,setOpen]= useState(false);
    

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    const  [email, setEmail] = useState();
    const  [senha, setSenha] = useState();
    const [nova_senha, setNova_senha]= useState();

    function alterar_email () {
        alert("Novo email: " + email);
    }

    function alterar_senha () {
        alert ("Senha antiga: "+ senha + "\nNova Senha: " + nova_senha)
    }

    return (
            <div className="total_perfil">
                <img
                    className="imagem_de_fundo"
                    src="https://image.freepik.com/vetores-gratis/bokeh-cintilante-amarelo-brilha-fundo-bonito-design_1017-24777.jpg"
                    alt="Imagem de fundo"
                />
                <Drawer open={ open } onClose={()=> handleDrawer(false)} anchor="right">
                    <List>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <h1>Mudar o Email</h1>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Insira o novo email" onChange={(e)=>setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={alterar_email}>
                                Enviar
                        </Button>
                        <br/>
                        <Form.Group controlId="formBasicPassword">
                            <h1>Mudar Senha</h1>
                            <Form.Label>Senha atual</Form.Label>
                            <Form.Control type="password" placeholder="Senha" onChange={(e)=>setSenha(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Alterar a senha</Form.Label>
                            <Form.Control type="password" placeholder="Nova Senha" onChange={(e)=>setNova_senha(e.target.value)} />
                        </Form.Group>
                            <Button variant="primary" type="submit" onClick={alterar_senha}>
                                Enviar
                        </Button>
                        </Form>
                    </List>
                </Drawer>
                    <div className="header">
                        <div className="botao" >
                        <Link
                            component="button"
                            color="black"
                            onClick={()=> handleDrawer(!open)}
                            >
                            Configurações da Conta
                        </Link>
                            <IconButton label="Configurações da conta" color="black"  aria-label="editar os dados" className="botao" style={{width:"50px"}} onClick={()=> handleDrawer(!open)} >
                                <SettingsIcon/>
                            </IconButton>
                        </div>
                    </div>
                <div className="container_perfil" >
                    <div className="avatar_nome">
                    <Avatar alt="Avatar Aleatório" src="https://i.pinimg.com/564x/a8/44/05/a84405d543a674d448c64ac57f25a74a.jpg" style={{ height: '200px', width: '200px'}}/>
                    <h1>Nome do Usuário</h1>
                    <br/><h1>Informações</h1>
                    </div>
                    <Carousel className="carrossel">
                        <Carousel.Item className="item1">
                            <img
                            className="carrossel1"
                            src="https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1762973.jpg&fm=jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="item2">
                            <img
                            className="carrossel2"
                            src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?cs=srgb&dl=pexels-steve-johnson-1509534.jpg&fm=jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
    );
}

export default Perfil;