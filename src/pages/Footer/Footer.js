import React from "react";
import "./Footer.css";
import {FaFacebook} from "react-icons/fa";
import {IconButton} from "@material-ui/core"
function Footer(){
    return(
        <footer class="footer">
            <div className="back_footer">
                <section className="icons_footer">
                    <div>
                        <img className="image_footer" src="/images/monalisa.png" width="80%" height="100%" alt="mona"/>
                    </div>
                    <div className="linha_vertical"/>
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
                <section className="linha"/>
                <section>
                <div className="guia_footer">
                
                    <div className="base_footer">
                        <h5 class="text-uppercase">História</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="http://localhost:3000/home" class="text-white">Quem somos?</a>
                            </li>
                            <li>
                            <a href="#!" class="text-white">Objetivo</a>
                            </li>
                        </ul>
                    </div>
                    <div className="base_footer">
                        <h5 class="text-uppercase">Contate-nos</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-white">Perguntas frequentes</a>
                            </li>
                            <li>
                            <a href="#!" class="text-white">contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="base_footer">
                        <h5 class="text-uppercase">Acesse</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-white">Home</a>
                            </li>
                            <li>
                            <a href="#!" class="text-white">Cadastro</a>
                            </li>
                        </ul>
                    </div>
                    <div className="frase">
                        <p>
                            "A arte está em todo lugar para aqueles que enxergam a vida com amor."
                        </p>
                    </div>
                    
                </div>
                </section>
            </div>
        </footer>
    
    );
    }

export default Footer;