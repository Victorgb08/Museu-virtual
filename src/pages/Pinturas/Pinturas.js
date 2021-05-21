import React, {useState, useCallback, useEffect} from "react";
import {Select,MenuItem} from '@material-ui/core';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from '../../Utils/Fotos';
import "./Pinturas.css";

function Pinturas(){

    const [categoria, setCategoria] = useState("all");
    const updateSelectCateg=(e)=>{
        console.log(e.target.value)
        setCategoria(e.target.value)
    };
    const all = "all";
    let [vetor, setvetor] = useState(photos);
    useEffect(()=> {
        if(categoria !== all){
            const novo = photos.find((todaspinturas) => todaspinturas.estilo === categoria);
            console.log(novo);
            setvetor([novo]);    
        }
        else{
            setvetor(photos);
        }
    },[categoria])

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (         
        <div className="PaiPinturas">
            <Select value={categoria} displayEmpty onChange={updateSelectCateg}>
                <MenuItem value="" disabled >Selecione uma Categoria</MenuItem>
                    <MenuItem value="all">Todas as Pinturas</MenuItem>
                    <MenuItem value="tipo 1">O grito</MenuItem>
                    <MenuItem value="tipo 2">O cavaleiro azul</MenuItem>
                    <MenuItem value="tipo 3">futurismo</MenuItem>
                    <MenuItem value="tipo 4">expressionismo</MenuItem>
            </Select>
            <div className="teste">
                <Gallery photos={vetor} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={vetor.map(x=>({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>  
        </div>
    );
}
export default Pinturas;