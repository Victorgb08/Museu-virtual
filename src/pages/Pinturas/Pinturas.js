import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import pinturas from '../../TodasPinturas/TodasPinturas'
import "./Pinturas.css";



//esse é do botao de seleção
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

//esse é da imagem
const useStylesimg = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      position: 'relative',
    },
  }));

function Pinturas(){
    const classes = useStyles();
    const classesimg = useStylesimg();
    

    return (
    <div className = "FundoPinturas">
            <div>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">ESTILOS</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value={0} />
                    <option value={1}>Futurismo</option>
                    <option value={2}>Cubismo</option>
                    <option value={3}>Expressionismo</option>
                    <option value={4}>Surrealismo</option>
                </Select>
                </FormControl>
                <div className={classesimg.root}>
                    <Box sx={{ width: 1300, height: 500, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={4} gap={12}>
                            {pinturas.map((pintura) => (
                            <ImageListItem key={pintura.img}>
                                <img
                                    srcSet={`${pintura.img}?w=161&fit=crop&auto=format 1x,
                                    ${pintura.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={pintura.titulo}
                                    loading="lazy"
                                />
                                <ImageListItemBar position="below" title={pintura.autor} />
                            </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </div>
            </div>
    </div>    
    );
}

export default Pinturas;