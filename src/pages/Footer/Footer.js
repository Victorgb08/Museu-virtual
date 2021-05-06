import React from "react";
import "./Footer.css";
import {FaFacebook} from "react-icons/fa";
import {IconButton} from "@material-ui/core"
import {Link} from "react-router-dom";
function Footer(){
    return(
        <footer class="footer">
            <img src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" width="80%" height="60%"/> 
            <section>
            <div className="image_footer">
                <img  src="/images/monalisa.png" width="20%" height="60%" alt="mona"/>
            </div>
            <p className="userName_footer">
            O local onde a sua arte tem valor!!
            </p>
            <div className="icons_redes">
                <a class="btn btn-outline-light btn-floating m-1" href="google.com" role="button">
                    <IconButton >
                        <FaFacebook/>
                    </IconButton>  
                </a>
            </div>
            </section>
            <section>
            <div className="guia_footer">
            
                <div className="base_footer">
                    <div className="link_footer_historia">
                        <Link to="login">
                            Quem somos?
                        </Link>
                        <Link  to="login">
                            objetivo
                        </Link>
                    </div>
                    <div className="link_footer_contato">
                        <Link className="link_footer" to="login">
                            Perguntas frequentes?
                        </Link>
                        <Link  to="login">
                            contato
                        </Link>
                    </div>
                    <div className="link_footer_paginas">
                        <Link  to="home">
                            Home
                        </Link>
                        <Link  to="cadastro">
                            Cadastro
                        </Link>
                    </div>
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