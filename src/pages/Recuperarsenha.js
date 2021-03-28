import "./css/Recuperarsenha.css";
import React from "react";
import Sidebar from "../Components/Rodape/Sidebar";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import '../../src/pages/css/Sidebar.css';


const Recuperarsenha = () => {
  return (
    <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container>
        </>
  );
};

export default Recuperarsenha;
