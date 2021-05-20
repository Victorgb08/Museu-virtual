import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Cadastro.css";
import { ImHome } from "react-icons/im";


function Cadastro(){
    const [membro, setMembro] = useState({});
    const history = useHistory();
    
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
    return(
        <div className="FundoTelaCadastro">
            <div className="basecadastro">  
                <div className="containercadastro">
                    <Form InputProps={{
                    style: {
                      height: "100%",
                    },
                  }}>
                    <h1 className = "titulocadastro"><font color="red"><b>ART ONE</b></font></h1>                
                        <div className="inputscadastro">
                            <Form.Group controlId="Nome">
                                <Form.Control type="text" placeholder="Nome" name="name" onChange={handleInputChange}/>
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