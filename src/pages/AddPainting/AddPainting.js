import React, {useState, useEffect} from "react";
import {Select,MenuItem} from '@material-ui/core';
import "./AddPainting.css";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { USER_ID} from '../../Services/auth';
import { Button } from "react-bootstrap";
import { ImHome } from "react-icons/im";

function AddPainting(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [objective, setObjective] = useState('');
    const [src, setSrc] = useState('');
    const [category, setCategory] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const updateSelectWidth=(e)=>{
        setWidth(e.target.value)
    };
    const updateSelectHeight=(e)=>{
        setHeight(e.target.value)
    };
    const OpcaoValores = [
        {
            numero: 1,
        },
        {
            numero: 1.5,
        },
        {
            numero: 2,
        },
        {
            numero: 2.5,
        },
        {
            numero: 3,
        },
        {
            numero: 3.5,
        },
        {
            numero: 4,
        },
        {
            numero: 4.5,
        },
    ];
    const history = useHistory();

    function handleAdd(e){
        history.push('/perfil');
    }

    // async function handleAdd(e){
    //     e.preventDefault();
    //     const data = {
    //         name, 
    //         address, 
    //         email, 
    //         password, 
    //         question,
    //         url_perfil,
    //     };
    //     try {
    //         const response = await api.post('/users', data);
    //         //alert(`Seu ID de acesso: ${response.data.user_id}`);
    //         alert(`Cadastro feito com Sucesso: ${response.data.user.name}`);
    //         history.push('/perfil');
    //     } catch (err) {
    //         alert('Erro no cadastro, tente novamente.');
    //     }
    // }

    return(
        <div>
            <div className="fundoAdd">
                <div className="containerAdd">
                    <div className="contentAdd">
                        <section>
                            <h1 className = "TituloAdd"><font color="#D00000"><b>ADICIONE SUA PINTURA</b></font></h1>
                        </section>
                        <form onSubmit={handleAdd}>
                        <input  
                            placeholder="Titulo"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <input  
                            placeholder="Descrição da Obra"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <input  
                            placeholder="Objetivo da Obra"
                            value={objective}
                            onChange={e => setObjective(e.target.value)}
                        />
                        <input  
                            placeholder="Url da Imagem"
                            value={src}
                            onChange={e => setSrc(e.target.value)}
                        />
                        <input  
                            placeholder="Categoria"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                        <div className="seletor">
                            <select
                                onChange={updateSelectWidth}>
                                    <option value={width}>Selecione a Largura</option>
                                    {OpcaoValores.map((valores) => (
                                        <option value={valores.numero}>{valores.numero}</option>
                                    ))}
                            </select>
                            <select
                                onChange={updateSelectHeight}>
                                    <option value={height}>Selecione a Altura</option>
                                    {OpcaoValores.map((valores) => (
                                        <option value={valores.numero}>{valores.numero}</option>
                                    ))}
                            </select>
                        </div>
                        <button className="buttonAdd" type="submit">Adicionar Pintura</button>
                        <button className="buttonAdd" onClick={() => history.push("/perfil")}>Cancelar e voltar ao Perfil</button>
                        <Button className="homeButton" variant="outlined" color="primary" onClick={() => history.push("Home")} >
                            <ImHome style={{height: "25px", width: "25px"}}/>
                        </Button>
                        </form>
                    </div>
                </div>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
}

export default AddPainting;