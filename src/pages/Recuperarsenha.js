import "./css/Recuperarsenha.css";
import React from "react";
import Sidebar from "../Components/Rodape/Sidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import "../../src/pages/css/Sidebar.css";

const Recuperarsenha = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            this is a test
          </Col>
        </Row>
      </Container>

      <div className="discovery-container">
        <div className="menu-horizontal-discovery">
          <h1>Olá Icaro, seja Bem-vindo!</h1>
          <div className="box-profile-discovery">
            <div className="dados-usuario-discovery">
              <p>Icaro Silva</p>
              <p>icarosilva@gmail.com</p>
            </div>
            <img
              src={require("../img/usuario.png").default}
              id="foto-perfil"
              alt="Imagem responsiva"
            />
          </div>
        </div>

        <div className="jornada-component">
          <div className="desc-jornada">
            <h2>Comece uma nova jornada agora!</h2>
            <p>
              Almost before we knew it, we had left the ground.Almost before we
              knew it, we had left the ground.
            </p>
            <a
              href="https://www.smiles.com.br/home"
              button
              type="button"
              class="btn btn-primary btn-rota"
              id="botao1"
            ></a>
          </div>
          <img
              src={require("../img/indio-brabo.png").default}
              id="foto-indio"
              alt="Imagem responsiva"
            />
        </div>
      </div>
    </>
  );
};

export default Recuperarsenha;
