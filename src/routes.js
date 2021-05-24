import React from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pinturas from "./pages/Pinturas";
import Perfil from "./pages/Perfil";
import MaisComentadas from "./pages/MaisComentadas";
import Footer from "./pages/Footer";
import Menu from "./pages/Menu";
import Historia from "./pages/Historia";
import Home2 from "./pages/Home2";


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/footer" component={Footer}/>
                <Route path="/" component={UserMenu}/>
            </Switch>
        </BrowserRouter>
    )
}

function UserMenu(){
    return(
        <Menu>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/home2" component={Home2}/>
                <Route path="/pinturas" component={Pinturas}/>
                <Route path="/maiscomentadas" component={MaisComentadas}/>
                <Route path="/historia" component={Historia}/>
                <Route path="/perfil" component={Perfil}/>
                <Route component={()=><Redirect to="/home2" />}/>
            </Switch>
        </Menu>
    );
}


export default Routes;