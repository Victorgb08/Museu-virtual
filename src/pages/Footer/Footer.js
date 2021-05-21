import React from "react";
import "./Footer.css";
import {FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
import {IconButton} from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer className="footer_ct">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
            <section>
            {/* <div className="image_footer">
                <img  src="/images/artone.png" width="11%" height="auto" alt="art"/>
            </div> */}
            {/* <div className="vertical_footer"/> */}
            {/* <div className="userName_footer">
                <p>
                    O local onde a sua arte tem valor!!
                </p>
            </div> */}
            <div className="icons_redes">
                {/* <div className="userName_footer">
                    <p>
                        O local onde a sua arte tem valor!!
                    </p>
                </div> */}
                {/* <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-facebook-f tam_icon"></i>
                </a>
                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-twitter tam_icon"></i>
                </a>
                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-google tam_icon"></i>
                </a>
                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-instagram tam_icon"></i>
                </a> */}
                <div className="icon_teste">
                    <a href="https://www.google.com" role="button" className="move_teste1">
                        <IconButton >
                            <i class="gg-facebook"></i>
                        </IconButton>  
                    </a>
                </div>
                <div className="icon_teste">
                    <a href="https://www.google.com" role="button" className="move_teste2">
                        <IconButton>
                            <i class="gg-instagram"></i>
                        </IconButton>  
                    </a>
                </div>
                <div className="icon_teste">
                    <a href="https://www.google.com" role="button" className="move_teste3">
                        <IconButton>
                            <i class="gg-twitter"></i>
                        </IconButton>  
                    </a>
                </div>
                
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
                {/* <div className="frase">
                    <p>
                        "A arte está em todo lugar para aqueles que enxergam a vida com amor."
                    </p>
                </div>  */}
                
            </div>
            </section>
        </footer>
    
    );
    }
export default Footer;