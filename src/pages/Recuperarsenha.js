import "./css/Recuperarsenha.css";
import React from "react";

const Recuperarsenha = () => {
  return (
    <>
      <div className="barra-lateral">
        <img
          src={require("../img/logo.png").default}
          id="logo"
          alt="Imagem responsiva"
        />

        <div className="link-to-home">
          <img
            src={require("../img/logo.png").default}
            id="logo"
            alt="Imagem responsiva"
          />
          <a
            href="../Login"
            button
            type="button"
            class="btn btn-primary"
            id="botao1"
          >
            {" "}
            Login
          </a>
        </div>

        <div className="link-to-out">
          <img
            src={require("../img/logo.png").default}
            id="logo"
            alt="Imagem responsiva"
          />
          <a
            href="../Login"
            button
            type="button"
            class="btn btn-primary"
            id="botao1"
          >
            {" "}
            Login
          </a>
        </div>
      </div>

      <div className="container-rota">
        <div className="menu-horizontal">
          <h1>Traçando rota...</h1>
          <div className="box-profile">
            <div className="dados-usuario">
              <p>Icaro Silva</p>
              <p>icarosilva@gmail.com</p>
              <img
                src={require("../img/logo.png").default}
                id="foto-perfil"
                alt="Imagem responsiva"
              />
            </div>
          </div>
        </div>

        <div className="barra-progresso"></div>

        <div className="box-personalizacao">
          <h2>Que tipo de viagem você gostaria de fazer?</h2>

          <div className="type-travels">

            <div className="item-1">
              <img
                src={require("../img/logo.png").default}
                id="foto-perfil"
                alt="Imagem responsiva"
              />
            </div>

            <div className="item-2">
              <img
                src={require("../img/logo.png").default}
                id="foto-perfil"
                alt="Imagem responsiva"
              />
            </div>

            <div className="item-3">
              <img
                src={require("../img/logo.png").default}
                id="foto-perfil"
                alt="Imagem responsiva"
              />
            </div>

            <div className="item-4">
              <img
                src={require("../img/logo.png").default}
                id="foto-perfil"
                alt="Imagem responsiva"
              />
            </div>
          </div>
        </div>

        <a
            href="../Login"
            button
            type="button"
            class="btn btn-primary"
            id="botao1"
          >
            {" "}
            Próximo
          </a>
      </div>
    </>
  );
};

export default Recuperarsenha;
