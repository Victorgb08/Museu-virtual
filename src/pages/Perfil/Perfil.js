import React, { useState } from "react";
import "./Perfil.css"
import { Avatar, Drawer, IconButton, Link, List, Typography } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
//import Carousel from "react-bootstrap/Carousel"
import {Button, Form} from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Perfil(){

    const pinturas = [
        {
          id: 1,
          name: "Pintura1",
          src: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?cs=srgb&dl=pexels-pixabay-532263.jpg&fm=jpg",
          title: "Primeira Arte",
          description: "A arte é o compo em que a razão se confunde",
          alt: "Firs slide",
        },
        {
          id: 2,
          name: "Pintura2",
          src: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?cs=srgb&dl=pexels-steve-johnson-1585325.jpg&fm=jpg",
          title: "Segunda Arte",
          description: "A arte é o compo em que a razão se confunde",
          alt: "Second slide",
        },
        {
            id:3,
            name: "Pintura3",
            src: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?cs=srgb&dl=pexels-sharon-mccutcheon-1148998.jpg&fm=jpg",
            title: "Terceira Arte",
            description: "Arte3",
            alt: "Terceira imagem",
        },
      ];


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
            <Drawer open={ open } onClose={()=> handleDrawer(false)} anchor="top">
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
            <div className="perfil_section">
                <div className="infos_avatar">
                <Typography variant="h5" className="infosPerfil">Informações</Typography>
                    <div className="container_perfil" >
                        <div className="avatar_nome">
                            <Avatar alt="Avatar Aleatório" src="https://i.pinimg.com/564x/a8/44/05/a84405d543a674d448c64ac57f25a74a.jpg" style={{ height: '200px', width: '200px'}}/>
                            <div className="textosPerfil">
                                <Typography variant="h4" className="nomeUsuario">Nome do Usuário</Typography>
                                <Typography variant="h5" className="infosPerfilMobile">Informações</Typography>

                            </div>
                        </div>
                    </div>
                    <Typography variant="h5" className="infosPerfil">Informações</Typography>
                </div>
                <Carousel infiniteLoop="true" showThumbs="" width="80%" className="carrossel_perf" showStatus="">
                        
                    {pinturas.map((artes) => (
                    <div className="artsMuseu">
                    <img name={artes.name} src={artes.src} alt={artes.alt} className="image_car" />
                    </div>
                        ))}
                </Carousel>

                <div className="imgDisp">
                {pinturas.map((artes) => (
                    <div className="artsMuseu">
                    <img name={artes.name} src={artes.src} alt={artes.alt} className="image_car" />
                    </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Perfil;