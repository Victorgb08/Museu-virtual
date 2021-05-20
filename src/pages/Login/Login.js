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
    <div className="total_login">
      <div className="base_login">
        <div className="conteiner_login">
          <div>
            <Form className="inputs_login">
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
                className="cadastroButton_login"
                variant="dark"
                onClick={() => history.push("Cadastro")}
              >
                {" "}
                Cadastro{" "}
              </Button>{" "}
              <Button className="homeButton_login" variant="outlined" color="primary" onClick={() => history.push("Home")} >
                <ImHome style={{height: "25px", width: "25px"}}/>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
