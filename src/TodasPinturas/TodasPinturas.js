const pinturas = [
    {
        cols: 1,
        id: "1",
        titulo: "O grito",
        ano: "1893",
        img: "https://static.todamateria.com.br/upload/og/ri/ogrito-cke.jpg",
        autor: "Edvard Munch",
        estilo: "expressionismo",
        idestilo: 3,
        objetivo: "Na tela vemos um protagonista em desespero, em cima de uma ponte, lutando com os sentimentos de solidão, ansiedade e medo, tão explorados pelos expressionistas, que buscavam revelar um lado sombrio e inquietante da existência humana.",
    },
    {
        cols: 2,
        id: "2",
        titulo: "O cavaleiro azul",
        ano: "1903",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Wassily_Kandinsky%2C_1903%2C_The_Blue_Rider_%28Der_Blaue_Reiter%29%2C_oil_on_canvas%2C_52.1_x_54.6_cm%2C_Stiftung_Sammlung_E.G._B%C3%BChrle%2C_Zurich.jpg/625px-Wassily_Kandinsky%2C_1903%2C_The_Blue_Rider_%28Der_Blaue_Reiter%29%2C_oil_on_canvas%2C_52.1_x_54.6_cm%2C_Stiftung_Sammlung_E.G._B%C3%BChrle%2C_Zurich.jpg",
        autor: "Wassily Kandinsky",
        estilo: "expressionismo",
        idestilo: 3,
        objetivo: "A composição registra um cavalheiro em ação a partir de uma imagem propositalmente esfumada. Aqui a cena está ligada à ação e ao gesto pleno de energia, que é reforçado também a partir das pinceladas curtas.",
    },
    {
        cols: 2,
        id: "3",
        titulo: "Retirantes",
        ano: "1944",
        img: "https://static.todamateria.com.br/upload/po/rt/portinari-cke.jpg",
        autor: "Portinari",
        estilo: "expressionismo",
        idestilo: 3,
        objetivo: "Na obra Retirantes, por exemplo, temos o retrato uma família de emigrantes vítima da fome e do desespero. Pintado em cores escuras, o quadro se destaca pelo seu tom sinistro e desesperador, com rostos que clamam por ajuda, bem ao estilo expressionista.",
    },
    {
        cols: 1,
        id: "4",
        titulo: "A Menina Doente",
        ano: "1885",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Munch_Det_Syke_Barn_1896.jpg/275px-Munch_Det_Syke_Barn_1896.jpg",
        autor: "Edvard Munch",
        estilo: "expressionismo",
        idestilo: 3,
        objetivo: "Momento anterior a morte da irmã mais velha de Edvard Munch, Johanne Sophie  vítima de tuberculose aos 15 anos de idade. Sophie é tipicamente apresentada em seu leito de morte acompanhada por uma aflita mulher de cabelos escuros, que acredita-se ser sua tia Karen",
    },
    {
        cols: 1,
        id: "5",
        titulo: "Desespero",
        ano: "1892",
        img: "https://uploads5.wikiart.org/images/edvard-munch/despair-1892.jpg!Large.jpg",
        autor: "Edvard Munch",
        estilo: "expressionismo",
        idestilo: 3,
        objetivo: "Preparação para o Grito (Nao é esse o obj)",
    },
    {
        cols: 2,
        id: "6",
        titulo: "Abaporu",
        ano: "1928",
        img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/1251F/production/_106293057_525769e3-ee92-45f0-8f05-c6d154dcca7b.jpg",
        autor: "Tarsila do Amaral",
        estilo: "futurismo",
        idestilo: 1,
        objetivo: "WIP",
    },
    {
        cols: 1,
        id: "7",
        titulo: "A Boba",
        ano: "1915",
        img: "https://cdn.culturagenial.com/imagens/anita-malfatti-cke.jpg",
        autor: "Anita Malfatti",
        estilo: "futurismo",
        idestilo: 1,
        objetivo: "WIP",
    },
    {
        cols: 2,
        id: "8",
        titulo: "O Dinamismo de um Automóvel",
        ano: "1912",
        img: "https://arteismos.files.wordpress.com/2014/03/dinamismo-de-um-automc3b3vel-umberto.jpg?w=700",
        autor: "Luigi Russolo",
        estilo: "futurismo",
        idestilo: 1,
        objetivo: "WIP",
    },
    {
        cols: 2,
        id: "9",
        titulo: "Dinamismo de Um Cão na Coleira",
        ano: "1912",
        img: "https://i.pinimg.com/originals/67/78/35/67783507c5c2b17282c5cf716f2811cf.jpg",
        autor: "Giacomo Balla",
        estilo: "futurismo",
        idestilo: 1,
        objetivo: "WIP",
    },
    {
        cols: 3,
        id: "10",
        titulo: "Guernica",
        ano: "1937",
        img: "http://www.infoescola.com/wp-content/uploads/2009/08/guernica.jpg",
        autor: "Picasso",
        estilo: "cubismo",
        idestilo: 2,
        objetivo: "WIP",
    },
    {
        cols: 2,
        id: "11",
        titulo: "As senhoritas de Avignon",
        ano: "1907",
        img: "https://www.saiacomarte.com/wp-content/uploads/2017/02/Clio-Team-1907-Picasso-Les-Demoiselles-dAvignon-Young-ladies-of-Avignon-Huile-sur-Toile-2439x2337-cm-948x1024.jpg",
        autor: "Picasso",
        estilo: "cubismo",
        idestilo: 2,
        objetivo: "WIP",
    },
    {
        cols: 2,
        id: "12",
        titulo: "Persistência da memória",
        ano: "1931",
        img: "https://upload.wikimedia.org/wikipedia/pt/5/59/A_Persist%C3%AAncia_da_Mem%C3%B3ria.jpg",
        autor: "Salvador Dalí",
        estilo: "surrealismo",
        idestilo: 4,
        objetivo: "WIP",
    },
    {
        cols: 2,
        id: "13",
        titulo: "A traição das imagens",
        ano: "René Magritte",
        img: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2016/09/m_MagritteCachimbo.jpg?resize=640%2C477",
        autor: "René Magritte",
        estilo: "surrealismo",
        idestilo: 4,
        objetivo: "WIP",
    },
    {
        cols: 2,
        id: "14",
        titulo: "As duas Fridas",
        ano: "1939",
        img: "https://cdn.culturagenial.com/imagens/as-duas-fridas-frida-kahlo-cke.jpg",
        autor: "Frida Kahlo",
        estilo: "surrealismo",
        idestilo: 4,
        objetivo: "WIP",
    },
    {
        cols: 1,
        id: "15",
        titulo: "UNS TREM AI",
        ano: "2999",
        img: "https://images.pexels.com/photos/6830152/pexels-photo-6830152.jpeg?cs=srgb&dl=pexels-paul-blenkhorn-sensoryarthouse-6830152.jpg&fm=jpg",
        autor: "UM ZÉ AI",
        estilo: "cubismo",
        idestilo: 2,
        objetivo: "WIP",
    },
]

export default pinturas