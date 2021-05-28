import React from "react";
import Footer from "../Footer"
import "./Historia.css";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { useRef, useEffect } from "react";


const Accordion = withStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      border: '1px solid rgba(0, 0, 0, .125)',
      '&:not(:last-child)': {
        borderBottom:0,
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

function Historia({location}){

  const ref_SobreNos = useRef();
  const ref_PergFreq = useRef();
  const ref_Contato = useRef();


  useEffect(()=>{
    const state = location.state;
  
    if(state === "sobreNos"){
      ref_SobreNos.current.scrollIntoView({behavior: "smooth"});
    } else if(state === "pergFreq"){
      ref_PergFreq.current.scrollIntoView({behavior: "smooth"});
    } else if(state === "Contate_Nos"){
      ref_Contato.current.scrollIntoView({behavior: "smooth"});
    } 
  }, [location])
    
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return(
        <div className="back_his">
            <div className="his_art">
                <h1 className="base_historia">
                    Oi, somos a Art One!!
                </h1>
                <h2 className="frase_tit">
                    "A arte liberta a alma e colore os pensamentos"
                </h2>
            </div>
            <div className="his_sobre">
                <h1 className="tit_his" ref={ref_SobreNos} >
                    Sobre nós
                </h1>
                <h2 className="his">
                A Art One é uma idealização de quatro amigos de Minas Gerais. O projeto surgiu da necessidade que os 4 artistas tiveram de ter uma plataforma mais acessível e específica para divulgar suas pinturas. Em um período de pandemia, eles não podiam mais expor mais seus trabalhos em feiras e exposições, assim, queriam uma forma de se manter vivendo da arte, de ter seu trabalho valorizada. Aí nasceu o conceito de unidade com a arte, em que o grande propósito era reunir os pintores de diversas partes do Brasil e divulgar, compartilhar e integrar os mais diversos trabalhos na arte.
Nós da Art One prezamos por um ambiente saudável e de muito aprendizado, permitimos que qualquer um acesse sua obra e dê feedbacks para que nós, enquanto comunidade, possamos crescer. Realizando o propósito inicial e que dá nome à nossa plataforma, nos unir em uma única arte.
                </h2>
            </div>
            <div>
                <h1 className="tit_his" ref={ref_PergFreq}>
                    Perguntas frequentes?
                </h1>
                <div className="accordion_his">
                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}} >Como eu posso adicionar novas artes?</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>
                            Primeiro acesse a página de perfil e no canto superior direito tem o ícone com o nome "adicionar pintura", clique no nome e adicione suas novas artes!! Se tiver um pinterest copie um dos urls das suas artes e mande pra ca
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>Quanto de conhecimento ou que tipo de ator eu tenho que ser para poder postar as minhas artes?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>
                            É somente necessário você se identificar como artista e desenvolver suas próprias artes
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>Como eu faço a Art One crescer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>
                            reposte suas artes em outras redes socias e marque a gente nas suas publicações!!(redes no rodapé da página)
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="icons_his">
                <h1 className="tit_his" ref={ref_Contato}>
                    Contate-nos
                </h1>
                <h2 className="cnt_his">
                    Número: (31) 9999-9999
                </h2>
                <h2 className="cnt_his">
                    Email: XXXXXXX@gmail.com
                </h2>
            </div>
            <Footer/>
        </div>


    );
}
export default Historia;