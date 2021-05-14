import React from "react";
import { Avatar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@material-ui/core";
import { MdHome, MdFilterFrames, MdInfo } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Menu.css";
import { useHistory } from "react-router-dom";
import {useState} from "react";
import { IoLogIn } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiCommentAdd } from "react-icons/bi";
import AppBar from '@material-ui/core/AppBar';
import { FiMenu } from "react-icons/fi";



function Menu(props){

    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(abrir){
        setOpen(abrir);

    }

    const menuPages = [
        {
            pathName: "/home",
            icon: <MdHome /> ,
            text: " Home",
            iconSize: "1.5em",
        },
        {
            pathName: "/login",
            icon: <IoLogIn /> ,
            text: " Login",
            iconSize: "1.5em",
        },
        {
            pathName: "/cadastro",
            icon: <GoSignIn /> ,
            text: " Cadastre-se",
            iconSize: "1.4em",
        },
        {
            pathName: "/perfil",
            icon: <CgProfile />,
            text: " Perfil",
            iconSize: "1.4em",
        },
        {
            pathName: "/pinturas",
            icon: <MdFilterFrames />,
            text: " Pinturas",
            iconSize: "1.4em",
        },
        {
            pathName: "/maiscomentadas",
            icon: <BiCommentAdd />,
            text: " Mais Comentadas",
            iconSize: "1.4em",
        },
        {
            pathName: "/footer",
            icon: <MdInfo />,
            text: " Footer",
            iconSize: "1.4em",
        }
    ]

    return (
        <>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:"crimson"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>handleDrawer(!open)}>
                        <FiMenu />
                    </IconButton>
                    <div className="Usuario">
                        <h5 className="Nome">Isabella Mariana</h5>
                        <Avatar alt="Foto Aleatoria" src="https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?cs=srgb&dl=pexels-isabella-mariana-1988681.jpg&fm=jpghttps://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?cs=srgb&dl=pexels-isabella-mariana-1988681.jpg&fm=jpg" />
                    </div>
                </Toolbar>
            </AppBar>
            {props.children}
            <Drawer open={open} onClose={()=> handleDrawer(false)}>
                <List className="list">
                    {menuPages.map((listItem) => {
                        return (
                            <ListItem 
                                button
                                onClick={()=> { handleClick(listItem.pathName);}}
                                selected={currentPage === listItem.pathName}
                                >
                                <IconContext.Provider value={{ color: "#343434", size: listItem.iconSize}}>
                                    {listItem.icon}
                                </IconContext.Provider>
                                <ListItemText className="listItemText">
                                    <Typography>{listItem.text}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </>
    )
}

export default Menu;