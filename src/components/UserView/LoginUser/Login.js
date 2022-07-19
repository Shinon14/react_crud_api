import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import loginIcon from "../../../img/login.svg";
// import * as LoginServer from "./LoginServer";
import loginPrincipal from "../../../img/log.svg";
import "./Login.css";





const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <img
              className="icon-img justify-content-center "
              src={loginIcon}
              alt="icon"
            />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Usuario" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button variant="primary" type="submit" href="/menuUsuario" >
                Ingresar al sistema
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={10}>
            <h1>Iniciar sesion</h1>
            <img className="w-100 p-2 m-5" src={loginPrincipal} />
            <p className="font-semibold text-white position-bottom">
              Para ingresar al sistema por favor ingrese sesion.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
