import React, {useState, useCallback, useEffect} from "react";
import {Select,MenuItem} from '@material-ui/core';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import api from "../../Services/api";
import "./Pinturas.css";

const OpcaoCategories = [
    {
        name: "releitura",
        id: 1,
    },
    {
        name: "exuberante",
        id: 2,
    },
];

function Pinturas(){
    //let [pinturaReserva, setPinturaReserva] = useState();
    let [paintings, setPaintings] = useState([]);
    const [categoria, setCategoria] = useState("all");
    const updateSelectCateg=(e)=>{
        setCategoria(e.target.value)
    };
    const all = "all";

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

    function buscarPorCategoria(value){
        if(value.category === categoria){
            return value;
            console.log([value]);
        }
    };

    //Função para montar o componente que vai ta com as imagens do backEnd
    async function getAllPaintings(){
        try {
            if(categoria !== all){
                const response = await api.get("/paintings");
                const novo = response.data.filter((todaspinturas) => todaspinturas.category === categoria);
                console.log(novo, categoria);
                setPaintings([novo]);
            } else{
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
    }, []);
    
    useEffect(() => {
        getAllPaintings();
    }, [categoria]);
    
    
    return (         
        <div className="PaiPinturas">
            <Select value={categoria} displayEmpty onChange={updateSelectCateg}>
                <MenuItem value={null} disabled >Selecione uma Categoria</MenuItem>
                    <MenuItem value="all">Todas as Pinturas</MenuItem>
                    {OpcaoCategories.map((category) => (
                        <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                    ))}
            </Select>
            <div className="teste">
                <Gallery margin={80} photos={paintings} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={paintings.map(x=>({
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