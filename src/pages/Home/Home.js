import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer";
import "./Home.css";
import { useHistory } from "react-router";

const pinturas = [
  {
    id: 1,
    name: "Pintura1",
    src:
      "https://cdn.pixabay.com/photo/2020/02/05/13/02/waterfalls-4821153_960_720.jpg",
    title: "Primeira Arte",
    description: "A arte é o compo em que a razão se confunde",
    alt: "Second slide",
  },
  {
    id: 2,
    name: "Pintura2",
    src:
      "https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192_960_720.jpg",
    title: "Segunda Arte",
    description: "A arte é o compo em que a razão se confunde",
    alt: "Thirth slide",
  },
  {
    id: 3,
    name: "Pintura3",
    src:
      "https://cdn.pixabay.com/photo/2013/02/06/15/07/fish-78577_960_720.jpg",
    title: "Terceira Arte",
    description: "A arte é o compo em que a razão se confunde",
    alt: "Fourth slide",
  },
];

function Home() {
  //const history = useHistory();

  return (
    <>
      <div className="backgroundHome">
        <div className="conteiner1">
          <p className="style1">
            <h3>O que te move a fazer arte?</h3>
            <h3>
              Compartilhe a sua arte no Arte One: onde sua arte tem valor.
            </h3>
          </p>
        </div>

        <div className="conteiner2">
          <p className="style2">
            <h3>As artes mais curtidas</h3>
          </p>
        </div>

        <Carousel
          className="carrosselArts"
          autoPlay="true"
          dynamicHeight="true"
          onClickItem
        >
          {pinturas.map((artes) => (
            <div className="artsMuseu">
              <img name={artes.name} src={artes.src} alt={artes.alt} />
            </div>
          ))}
        </Carousel>

        <Footer />
      </div>
    </>
  );
}

export default Home;
