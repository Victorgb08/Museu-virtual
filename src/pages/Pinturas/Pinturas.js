import React, {useState, useCallback, useEffect} from "react";
import {Select,MenuItem, List, Button, Modal} from '@material-ui/core';
import Gallery from "react-photo-gallery";

import api from "../../Services/api";
import "./Pinturas.css";
import { Form } from "react-bootstrap";

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
        name: "Outro",
    },
    {
        name: "Mais Comentadas",
    },
];

function Pinturas(){
    //let [pinturaReserva, setPinturaReserva] = useState();
    const [paintings, setPaintings] = useState([]);
    const [categoria, setCategoria] = useState("all");
    const updateSelectCateg=(e)=>{
        setCategoria(e.target.value)
    };
    const all = "all";

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    // const openLightbox = useCallback((event, { photo, index }) => {
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // }, []);

    // const closeLightbox = () => {
    //     setCurrentImage(0);
    //     setViewerIsOpen(false);
    // };

    // function imagens(){
    //     console.log({paintings});
    //     return paintings;
    // }

    // function ordenarComentadas(dados){
    //     dados.sort(function(x,y){
    //         return y.count - x.count;
    //     });
    // }

    //Função para montar o componente que vai ta com as imagens do backEnd
    async function getAllPaintings(){
        try {
            if(categoria === "Mais Comentadas"){
                const response = await api.get("/paintings");
                response.data.sort(function(x,y){
                    return y.count - x.count;
                });
                setPaintings(...[response.data]);
                // const vetorOrdenado = ordenarComentadas(response.data);
            }
            
            else if(categoria !== all){
                const response = await api.get("/paintings");
                console.log(response.data);
                const novo = response.data.filter((filtrados)=> filtrados.category === categoria);
                // console.log(novo);
                // console.log(response.data);
                setPaintings(novo);
            } 
            else{
                const response = await api.get("/paintings");
                //console.log(response.data);
                setPaintings([...response.data]);
            }
        } catch (error) {
            console.warn(error);
            alert("Algo deu errado");
        }
    };

    
    useEffect(() => {
        getAllPaintings();
    }, [categoria]);

    const [img, setImg] = useState();
    const [comment, setComment] = useState();
    const [painting_id, setPainting_id] = useState();

    function handleClick (image){
    setImg(image);
    setPainting_id(image.painting_id);
    getByIdPainting();
    console.log(image.painting_id);
    }

    async function getByIdPainting (){
        const response = await api.get(`/comments/${painting_id}`);
        setCommentsById([...response.data]);
        // console.log(response)
      };

    const [commentsById, setCommentsById] = useState([]);

    function incremento(valor) {
        valor=valor+1;
        return valor;
      }
      
      async function postUserComments (){
        const data = {painting_id, comment};
        const countGet = await api.get(`/painting/${painting_id}`);
        console.log(countGet.data.count);
        let count = incremento(countGet.data.count);
        const response = await api.post(`/comments`, data);
        const countPut = await api.put(`/paintings/${painting_id}`,{count});
        // console.log(countGet.data.count);
        // console.log(countPut);
        // console.log(response.data)
      };




    function handleClose (){
        setImg(undefined);
      }     
    return (         
        <div className="PaiPinturas">
            <Modal 
            open={ img !== undefined } 
            onClose={handleClose}
            className="modal_home"
          >
            <List>
            <div className="total_modal">
              <div className="container_infos">
                <div className="titulo_info_pinturas">{img?.title}</div>
                <div className="descricao_info">{img?.description}</div>
              </div>
            <div className="container_modal">
              <img src={img?.src} alt={img?.alt} className="img_modal"/>
                <Form>
                <Form.Group controlId="comment"> 
                    <Form.Control type="comentario" placeholder="Comentário" onChange={(e)=>setComment(e.target.value)}/> 
                    <Form.Text className="text-muted"> 
                    </Form.Text> 
                </Form.Group> 
                </Form>
                <Button variant="primary" type="submit" className="botoes_modal" onClick={postUserComments}> 
                  Enviar 
                </Button>
            </div>
            <div className="container_comentarios_pinturas">
              {commentsById.map((comentarios_especificos)=>(
                <div className="comentarios_especificos">"{comentarios_especificos.comment}"</div>
              ))}
            <div/>
              </div>
            </div>
            </List>
          </Modal>
            <Select value={categoria} displayEmpty onChange={updateSelectCateg}>
                <MenuItem value={null} disabled >Selecione uma Categoria</MenuItem>
                    <MenuItem value="all">Todas as Pinturas</MenuItem>
                    {OpcaoCategories.map((category) => (
                        <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                    ))}
            </Select>
            <div className="teste">
                <div className="imgDisp_pinturas" >
                    {paintings.map((artes) => (
                        <div className="artsMuseu_pinturas" >
                        <img name={artes.name} src={artes.src} alt={artes.name} className="image_car_pinturas" onClick={() => handleClick(artes)} />
                        </div>
                            ))}
                    </div>
            </div>  
        </div>
    );
}
export default Pinturas;