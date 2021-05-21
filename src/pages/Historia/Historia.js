import React from "react";
import Footer from "../Footer"
import "./Historia.css";
import {FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
import {IconButton} from "@material-ui/core";
import { Typography } from "@material-ui/core";

function Historia(){
    return(
        <div className="pai_his">
            {/* <img className="img_his" src="https://images.pexels.com/photos/7505204/pexels-photo-7505204.jpeg?cs=srgb&dl=pexels-valeriya-kobzar-7505204.jpg&fm=jpg"/> */}
            <div className="back_his">
                <div>
                    <h1 className="base_historia">
                        Oi, somos a Art One!!
                    </h1>
                    <h2 className="frase_tit">
                        "A arte liberta a alma e colore os pensamentos"
                    </h2>
                </div>
                <div>
                    <h1 className="tit_his">
                        Sobre nós
                    </h1>
                    <h2 className="his">
                    Um sapatinho de bebê, um topo de bolo e uma pulseira: o que estes produtos têm em comum? Aparentemente nada. Mas no Elo7 eles não são apenas produtos, pois são únicos, autorais. Foram criados por uma pessoa que se preocupou com cada detalhe, desde concepção da ideia até a chegada nas mãos do comprador.

Muito mais que um site, o Elo7 nasceu em 2008 com a missão de transformar a vida das pessoas através de um ambiente humanizado de compra e venda que conecta e inspira, conferindo significado a cada transação realizada. Trabalhamos para desenvolver as melhores tecnologias e oferecer aos vendedores soluções simples e práticas para o gerenciamento de suas vendas e para os compradores, uma experiência de compra fora de série.
                    </h2>
                </div>
                <div>
                    <h1 className="tit_his">
                        Perguntas frequentes?
                    </h1>
                </div>
                <div className="icons_his">
                    <h1 className="tit_his">
                        Contate-nós
                    </h1>
                    <h2 className="cnt_his">
                        Numéro: (31) 9999-9999
                    </h2>
                    <h2 className="cnt_his">
                        Email: XXXXXXX@gmail.com
                    </h2>
                    
                    {/* <div>
                        <a href="https://www.google.com" role="button">
                        <IconButton >
                            <FaFacebook/>
                        </IconButton>  
                        </a>
                        <a href="https://www.google.com" role="button">
                        <IconButton >
                            <FaInstagram/>
                        </IconButton>  
                        </a>
                        <a href="https://www.google.com" role="button">
                        <IconButton >
                            <FaTwitter/>
                        </IconButton>  
                        </a>
                    </div> */}
                </div>
            </div>
            <Footer/>
        </div>

    );
}
export default Historia;