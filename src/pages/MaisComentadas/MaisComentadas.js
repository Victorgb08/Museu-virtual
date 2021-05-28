import React, {useState, useEffect} from "react";
import api from "../../Services/api";
import "./MaisComentadas.css";

function MaisComentadas(){
    const [paintings, setPaintings] = useState([]);

    async function getCommentPaintings(){
        try {
            const response = await api.get(`/paintings`);
            // console.log(O url de perfil é: ${UrlPerfil});
            setPaintings(response.data);
        } catch (error) {
            console.warn(error);
            alert("Algo deu errado");
        }
    };

    


    useEffect(() => {
        getCommentPaintings();
    }, []);

    return (
        <div className="PaiMais">
            
        </div>
        );
}

export default MaisComentadas;