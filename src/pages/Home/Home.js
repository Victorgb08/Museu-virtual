import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer";
import "./Home.css";
import { useHistory } from "react-router";
import { Typography } from "@material-ui/core";


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


function Home() {
  var [dia, setDia] = useState();
  useEffect(() => {
    if (12 >= new Date().getHours() >= 1) {
      setDia("manha");
    } else if (17 >= new Date().getHours() >= 12) {
      setDia("tarde");
    } else if(0 >= new Date().getHours() >= 18){
      setDia("noite");
    }
  }, []);

  function setBackground() {
    if (dia === "manha") {
      return (
        <div className="ImageDia">
          <div className="textDia">
            <h0> Bom dia Usuário </h0>
          </div>
        </div>
      );
    } else if (dia === "tarde") {
      return (
        <div className="ImageTarde">
          <div className="textDia">
            <h0> Boa tarde Usuário </h0>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ImageNoite">
          <div className="textDia">
            <h0> Boa noite Usuário </h0>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="total_home">
      <div className="backgroundHome">
        {setBackground()}
        <div className="BorderLine" />
        <Carousel
          className="carrosselArts"
          infiniteLoop="true"
          showThumbs=""
        >
          {pinturas.map((artes) => (
            <div className="artsMuseu">
              <img name={artes.name} src={artes.src} alt={artes.alt} />
            </div>
          ))}
        </Carousel>

        <div className="BorderLineText" />
        <p />
        <Typography className="textHome">
          <h1>O que é a Art One?</h1>
          <p />
          <p />
          <h3>
            Essa é a Art One, a plataforma para que você pintor amador possa
            compartilhar suas obras e conhecer vários outros artistas do ramo.
            Aqui valorizamos e reconhecemos todas as formas de arte expressas
            por um pincel. Nesse sentido, buscamos unir a comunidade artística
            em um meio de simples uso, de diversidade de obras e colaboração. É
            essencial para a arte a colaboração entre aqueles que a praticam,
            aqui na Digital Art permitimos que sua pintura seja compartilhada,
            conhecida e valorizada com deve ser.
          </h3>
          <p />
          <p />
        </Typography>
      </div>
    </div>
  );
}

export default Home;
