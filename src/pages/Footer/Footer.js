import React from "react";
import "./Footer.css";
import {FaFacebook} from "react-icons/fa";
import {IconButton} from "@material-ui/core"
import {Link} from "react-router-dom";
function Footer(){
    return(
        <footer className="footer_ct">
            {/* <img className="footer_ct_img" src="/images/roma.png" width="auto" heigth="auto"/>  */}
            <section>
            <div className="image_footer">
                <img  src="/images/artone.png" width="11%" height="auto" alt="art"/>
            </div>
            <div className="vertical_footer"/>
            <div className="userName_footer">
                <p>
                    O local onde a sua arte tem valor!!
                </p>
            </div>
            <div className="icons_redes">
                <a href="https://www.google.com" role="button">
                    <IconButton >
                        <FaFacebook/>
                    </IconButton>  
                </a>
            </div>
            </section>
            <section>
            <div className="guia_footer">
            
                <div className="base_footer">
                    <Link className="link_footer" to="login">
                        Quem somos?
                    </Link>
                    <Link className="link_footer" to="login">
                        Objetivo
                    </Link>
                    <Link className="link_footer" to="login">
                        Perguntas frequentes?
                    </Link>
                    <Link className="link_footer"  to="login">
                        Contato
                    </Link>
                    <Link className="link_footer"  to="home">
                        Home
                    </Link>
                    <Link className="link_footer"  to="cadastro">
                        Cadastro
                    </Link>

                </div>
                <div className="frase">
                    <p>
                        "A arte está em todo lugar para aqueles que enxergam a vida com amor."
                    </p>
                </div>
                
            </div>
            </section>
        </footer>
    
    );
    }

export default Footer;