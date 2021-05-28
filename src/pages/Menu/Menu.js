import React, { useState, useEffect } from "react";
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MdHome, MdFilterFrames, MdInfo } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Menu.css";
import { useHistory } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiCommentAdd } from "react-icons/bi";
import AppBar from "@material-ui/core/AppBar";
import { FiMenu } from "react-icons/fi";
import api from "../../Services/api";
import { isAuthenticated, UserLogado } from "../../Services/auth";
import { red } from "@material-ui/core/colors";
import { ClassNames } from "@emotion/react";

function Menu(props) {
  const [usuarioLogado, setusuarioLogado] = useState([]);
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");
  const [open, setOpen] = useState(false);

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }

  function handleDrawer(abrir) {
    setOpen(abrir);
  }

  const menuPages = [
    {
      pathName: "/home",
      icon: <MdHome />,
      text: " Home",
      iconSize: "1.5em",
    },
    {
      pathName: "/login",
      icon: <IoLogIn />,
      text: " Login",
      iconSize: "1.5em",
    },
    {
      pathName: "/cadastro",
      icon: <GoSignIn />,
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
    },
  ];

  const nameUser = localStorage.getItem("nameUser");
  const UrlPerfil = localStorage.getItem("UrlPerfil");

  // Mensagem de Bom ... usuário
  var [dia, setDia] = useState();
  useEffect(() => {
    if (12 >= new Date().getHours() >= 1) {
      setDia("manha");
    } else if (17 >= new Date().getHours() >= 12) {
      setDia("tarde");
    } else if (0 >= new Date().getHours() >= 18) {
      setDia("noite");
    }
  }, []);

  function setBackground() {
    if (dia === "manha") {
      return (
        <div className="textDia">
          <h0> Bom dia </h0>
        </div>
      );
    } else if (dia === "tarde") {
      return (
        <div className="textDia">
          <h0> Boa tarde </h0>
        </div>
      );
    } else {
      return (
        <div className="textDia">
          <h0> Boa noite </h0>
        </div>
      );
    }
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handleDrawer(!open)}
          >
            <FiMenu />
          </IconButton>
          <div className="Usuario">
            {setBackground()}

            <h5 className="Nome">{nameUser}</h5>

            <Avatar alt={nameUser} src={UrlPerfil} />
          </div>
        </Toolbar>
      </AppBar>
      {props.children}

      <Drawer
        PaperProps={{ className: "StyleMenu" }}
        open={open}
        onClose={() => handleDrawer(false)}
      >
        <List className="list">
          {menuPages.map((listItem) => {
            return (
              <ListItem
                button
                onClick={() => {
                  handleClick(listItem.pathName);
                }}
                selected={currentPage === listItem.pathName}
              >
                <IconContext.Provider
                  value={{ color: "#DAD3D3", size: listItem.iconSize }}
                >
                  {listItem.icon}
                </IconContext.Provider>
                <ListItemText className="listItemText">
                  <Typography>{listItem.text}</Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Menu;
