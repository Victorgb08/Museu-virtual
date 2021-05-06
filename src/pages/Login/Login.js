import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  return (
    <>
      <div className="base">
        <img
          src="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Paleta"
        />
        <div className="conteiner">
          <div>
            <Form className="inputs">
              <Form.Group controlId="Email">
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="dark" onClick={() => history.push("Home")}>
                {" "}
                Login{" "}
              </Button>{" "}
              <Button
                className="cadastroButton"
                variant="dark"
                onClick={() => history.push("Cadastro")}
              >
                {" "}
                Cadastro{" "}
              </Button>{" "}
              <Button className="homeButton" variant="outlined" color="primary" onClick={() => history.push("Home")} >
                <ImHome style={{height: "25px", width: "25px"}}/>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
