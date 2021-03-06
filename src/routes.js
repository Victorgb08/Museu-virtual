import React from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Pinturas from "./pages/Pinturas";
import Perfil from "./pages/Perfil";
import Footer from "./pages/Footer";
import Menu from "./pages/Menu";
import Historia from "./pages/Historia";
import Home from "./pages/Home";
import AddPainting from "./pages/AddPainting";


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/footer" component={Footer}/>
                <Route path="/add_painting" component={AddPainting}/>
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
                <Route path="/pinturas" component={Pinturas}/>
                <Route path="/historia" component={Historia}/>
                <Route path="/perfil" component={Perfil}/>
                <Route component={()=><Redirect to="/home" />}/>
            </Switch>
        </Menu>
    );
}


export default Routes;