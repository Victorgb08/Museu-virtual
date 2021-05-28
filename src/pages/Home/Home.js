import { List, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../Footer"
import "./Home.css"
import { Carousel } from "react-responsive-carousel";
import { useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import api from "../../Services/api";



function Home({location}){

  let [paintings, setPaintings] = useState([]);

  const [img, setImg] = useState();
  // const [open, setOpen] = useState(false);
  const ref_objetivo = useRef();

  // console.log(location);

  useEffect(()=>{
    const state = location?.state;
  
    if(state){
      ref_objetivo.current.scrollIntoView({behavior: "smooth"});
      
    }
     
  }, [location])

  function handleClick (image){
    setImg(image);
    setPainting_id(image.painting_id);
    getByIdPainting();
    // console.log(image.painting_id);
  }

  function handleClose (){
    setImg(undefined);
  }

  async function getAllPaintings(){
    try {
        const response = await api.get("/paintings");
        //console.log(response.data);
        response.data.sort(function(x,y){
          return y.count - x.count;
        })
        setPaintings([...response.data]);
    } catch (error) {
        console.warn(error);
        alert("Algo deu errado");
    }
};

useEffect(() => {
    getAllPaintings();
}, []);

const [comment, setComment] = useState();
const [painting_id, setPainting_id] = useState();

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
  console.log(countGet.data.count);
  console.log(countPut);

  // console.log(response.data)
};

const [commentsById, setCommentsById] = useState([]);

async function getByIdPainting (){
  const response = await api.get(`/comments/${painting_id}`);
  setCommentsById([...response.data]);
  // console.log(response)
};

    return (
        <div className="tudo_da_home2">
          <Modal 
            open={ img !== undefined } 
            onClose={handleClose}
            className="modal_home"
          >
            <List>
            <div className="total_modal">
              <div className="container_infos_home">
                <div className="titulo_info_home">{img?.title}</div>
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
            <div className="container_comentarios_home">
              {commentsById.map((comentarios_especificos)=>(
                <div className="comentarios_especificos">"{comentarios_especificos.comment}"</div>
              ))}
            <div/>
              </div>
            </div>
            </List>
          </Modal>
          <div className="total_home2">
            <h1 className="titulo_home2">Art One</h1>
            <h2 className="subtitulo_home2">"A arte está em todos os lugares para aqueles que enxergam a vida com amor."</h2>
            <Carousel 
                className="carrossel_home2"
                infiniteLoop="true"
                showThumbs=""
                showStatus=""
            >
              {paintings.map((artes) => (
                <div className="artsMuseu" onClick={() => handleClick(artes)}>
                  <img name={artes.name} src={artes.src} alt={artes.alt} className="image_car_home2"/>
                </div>
              ))}

            </Carousel>
            <div className="BorderLine_home2" />
            <div className="imagens_home2">
            <div className="imagens_laterais1_home2">
              <div className="pos_texto1">
                <Typography className="texto_imagem1">
                  “Tudo que você pode imaginar é real.” Pablo Picasso
                </Typography>
              </div>
            </div>
            <div className="container_img2">
              <div className="container_texto2">
              <Typography className="texto_img2">
                “Eu invento tudo na minha pintura. E o que eu vi ou senti, eu estilizo.” TARSILA DO AMARA
              </Typography>
              </div>
              <div className="imagens_laterais2_home2"/>
            </div>
            <div className="container_img3">
              <div className="imagens_laterais3_home2"/>
              <div className="container_texto3">
                <Typography className="texto_img3">
                “Eu sonho com minha pintura e pinto meu sonho.” VINCENT VAN GOGH
                </Typography>
              </div>
            </div>
            <div className="imagens_laterais4_home2">
              <div className="pos_texto4">
                <Typography className="texto_imagem4">
                  “Um quadro só vive para quem o olha.”<br></br>PABLO PICASSO
                </Typography>
              </div>
            </div>
            </div>
            <div className="BorderLine2_home2"/>
            <h1 className="titulo_baixo_home2" ref={ref_objetivo}>O Que é a Art One?</h1>
            <h4 className="texto_baixo_home2">
  Essa é a Art One, a plataforma para que você pintor amador possa compartilhar suas obras e conhecer vários outros artistas do ramo.
  Aqui valorizamos e reconhecemos todas as formas de arte expressas por um pincel. Nesse sentido, buscamos unir a comunidade artística em um meio de simples uso, de diversidade de obras e colaboração. 
  É essencial para a arte a colaboração entre aqueles que a praticam, aqui na Art One permitimos que sua pintura seja compartilhada, conhecida e valorizada com deve ser.
          </h4>
          </div>
          <Footer className="footer_home2"></Footer>
        </div>
    );
}

export default Home;