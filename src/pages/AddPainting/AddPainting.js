import React, {useState, useEffect} from "react";
import {Select,MenuItem} from '@material-ui/core';
import "./AddPainting.css";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { USER_ID, TOKEN_KEY } from '../../Services/auth';
import { Button } from "react-bootstrap";
import { ImHome } from "react-icons/im";

const OpcaoCategories = [
    {
        name: "Natureza",
    },
    {
        name: "Retrato",
    },
    {
        name: "Cidade",
    },
    {
        name: "Abstrato",
    },
    {
        name: "Releitura",
    },
    {
      name: "Animais",
    },
    {
        name: "Outro",
    },
];

function AddPainting(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [objective, setObjective] = useState('');
    const [src, setSrc] = useState('');
    const [category, setCategory] = useState('');
    const count=0;
    const user_id = sessionStorage.getItem(USER_ID);
    const token = sessionStorage.getItem(TOKEN_KEY);
    
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

    // function handleAdd(e){
    //     history.push('/perfil');
    // }

    async function handleAdd(e){
        e.preventDefault();
        const data = {
            user_id,
            title, 
            description, 
            objective, 
            src, 
            category,
            count,
        };
        console.log(token);
        try {
            const config = {headers: {authorization: `Bearer ${token}`}};
            const response = await api.post('/paintings', data);
            //alert(`Seu ID de acesso: ${response.data.user_id}`);
            alert(`Pintura adicionada com Sucesso!`);
            history.push('/perfil');
        } catch (err) {
            console.log(err);
            alert('Erro no cadastro da pintura, tente novamente.');
        }
    }

    function updateSelectCategory (e) {
        setCategory(e.target.value);
    }

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
                        <select
                            onChange={updateSelectCategory}>
                                <option value={category}>Selecione a Categoria</option>
                                {OpcaoCategories.map((categorias) => (
                                    <option value={categorias.name}>{categorias.name}</option>
                                ))}
                        </select>
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