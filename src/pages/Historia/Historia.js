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
      background:'rgba(0, 0, 0, .03)',
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
      backgroundColor: 'rgba(0, 0, 0, .03)',
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
                O cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa deleO cara tinha handtrap pra parar até o foguete chinês se fosse cair na casa dele
                </h2>
            </div>
            <div>
                <h1 className="tit_his" ref={ref_PergFreq}>
                    Perguntas frequentes?
                </h1>
                <div className="accordion_his">
                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}} >Collapsible Group Item #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>Collapsible Group Item #2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>Collapsible Group Item #3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize:'1rem',color:'white',textShadow: '0.1em 0.1em 0.2em black'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
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