import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login(){

    return(
        <div className="base">
            <img src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Paleta"/>
            <div className="conteiner">
                <div>
                    <Form className="inputs">
                        <Form.Group controlId="Email">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group> 

                        <Form.Group controlId="Password">
                           <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="dark">Login</Button>{' '}   
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;