import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pinturas from "./pages/Pinturas";
import Perfil from "./pages/Perfil";
import MaisComentadas from "./pages/MaisComentadas";
import Footer from "./pages/Footer";


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/pinturas" component={Pinturas}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/maiscomentadas" component={MaisComentadas}/>
                <Route path="/footer" component={Footer}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;