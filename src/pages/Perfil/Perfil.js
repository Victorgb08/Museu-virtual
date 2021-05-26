import React, {useState, useEffect} from "react";
import "./Perfil.css"
import { Avatar, Drawer, IconButton, Link, List, Typography } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
//import Carousel from "react-bootstrap/Carousel"
import {Button, Form} from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer";
//import Swiper from 'react-id-swiper';
import api from "../../Services/api";
import { USER_ID} from '../../Services/auth';

function Perfil(){

    const IdUsusario = sessionStorage.getItem(USER_ID);
    let [paintings, setPaintings] = useState([]);
    const nameUser = localStorage.getItem("nameUser");
    const UrlPerfil = localStorage.getItem("UrlPerfil");
    const QuestionUser = localStorage.getItem("QuestionUser");

    const [open,setOpen]= useState(false);
    
    const  [email, setEmail] = useState();
    const  [senha, setSenha] = useState();
    const [nova_senha, setNova_senha]= useState();

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }
    function alterar_email () {
        alert("Novo email: " + email);
    }
    function alterar_senha () {
        alert ("Senha antiga: "+ senha + "\nNova Senha: " + nova_senha)
    }

    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
          }
    }

    async function getUsersPaintings(){
        try {
            console.log(`A question do usuario é: ${QuestionUser}`);
            const response = await api.get(`/paintings?${IdUsusario}`);
            console.log(`O url de perfil é: ${UrlPerfil}`);
            setPaintings(response.data);
        } catch (error) {
            console.warn(error);
            alert("Algo deu errado");
        }
    };

    useEffect(() => {
        getUsersPaintings();
    }, []);

    return (
        <div>
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
                        color="white"
                        onClick={()=> handleDrawer(!open)}
                        >
                        Configurações da Conta
                    </Link>
                        <IconButton label="Configurações da conta" aria-label="editar os dados" className="botao" style={{width:"50px", color:"#f8f8f8"}} onClick={()=> handleDrawer(!open)} >
                            <SettingsIcon/>
                        </IconButton>
                    </div>
                </div>
            <div className="perfil_section">
                <div className="infos_avatar">
                    <div className="container_perfil" >
                        <div className="avatar_nome">
                            <Avatar alt={nameUser} src={UrlPerfil} style={{ height: '200px', width: '200px'}}/>
                            <div className="textosPerfil">
                                <Typography variant="h4" className="nomeUsuario">{nameUser}</Typography>
                                <Typography variant="h5" className="infosPerfilMobile">"{QuestionUser}"</Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel infiniteLoop="true" showThumbs="" width="80%" className="carrossel_perf" showStatus="">
                        
                    {paintings.map((artes) => (
                    <div className="artsMuseu">
                    <img name={artes.name} src={artes.src} alt={artes.alt} className="image_car" />
                    </div>
                        ))}
                </Carousel>
                    <div className="imgDisp">
                    {paintings.map((artes) => (
                        <div className="artsMuseu">
                        <img name={artes.name} src={artes.src} alt={artes.alt} className="image_car" />
                        </div>
                            ))}
                    </div>
            </div>
            <div className="infos_perf">
            <Typography variant="h4">Informações gerais</Typography>
            <h1 className="infos2">"{QuestionUser}"</h1>
            <br/>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Perfil;