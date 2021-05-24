import { Typography } from "@material-ui/core";
import React from "react";
import Footer from "../Footer"
import "./Home2.css"
import { Carousel } from "react-responsive-carousel";

const pinturas = [
    {
      id: 1,
      name: "Pintura1",
      src: "https://cdn.pixabay.com/photo/2020/02/05/13/02/waterfalls-4821153_960_720.jpg",
      title: "Primeira Arte",
      description: "A arte é o compo em que a razão se confunde",
      alt: "Second slide",
    },
    {
      id: 2,
      name: "Pintura2",
      src: "https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192_960_720.jpg",
      title: "Segunda Arte",
      description: "A arte é o compo em que a razão se confunde",
      alt: "Thirth slide",
    },
  
  ];

function Home2(){

    return (
        <div className="tudo_da_home2">
          <div className="total_home2">
            <h1 className="titulo_home2">Art One</h1>
            <h2 className="subtitulo_home2">"A arte está em todos os lugares para aqueles que enxergam a vida com amor."</h2>
            <Carousel 
                className="carrossel_home2"
                infiniteLoop="true"
                showThumbs=""
                showStatus=""
            >
              {pinturas.map((artes) => (
                <div className="artsMuseu">
                  <img name={artes.name} src={artes.src} alt={artes.alt} className="image_car_home2" />
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
            <h1 className="titulo_baixo_home2">O Que é a Art One?</h1>
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

export default Home2;