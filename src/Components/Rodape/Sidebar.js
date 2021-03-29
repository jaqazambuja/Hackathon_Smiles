import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../../pages/css/Sidebar.css';

const Side = props => {
   

    return (
        <>
          
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <img className="logo-sidebar" src={require("../../img/logo-azul.png").default}></img>
            <Nav.Item>
            <img className="icon-home" src={require("../../img/home.png").default}></img>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            </Nav>
            
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar