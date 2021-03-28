import "./css/match-rotas.css";
import React from "react";

const Match = () => {
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

      <div className="container">
        <div className="menu-horizontal">
          <h1>Rota traçada!</h1>
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


          <div className="carossel-1">
            <h1>Rotas perfeitas para você</h1>
            <div className="rota-1">
              <img
                src={require("../img/logo.png").default}
                id="logo"
                alt="Imagem responsiva"
              />
              <h3>São Paulo</h3>
              <p>Um lugar muito bonito e agradável.</p>
            </div>

            <div className="rota-2">
              <img
                src={require("../img/logo.png").default}
                id="logo"
                alt="Imagem responsiva"
              />
              <h3>São Paulo</h3>
              <p>Um lugar muito bonito e agradável.</p>
            </div>

            <div className="rota-3">
              <img
                src={require("../img/logo.png").default}
                id="logo"
                alt="Imagem responsiva"
              />
              <h3>São Paulo</h3>
              <p>Um lugar muito bonito e agradável.</p>
            </div>
          </div>

          <div className="carossel-2">
            <h3>Em alta</h3>
            <div className="rota-1">
              <img
                src={require("../img/logo.png").default}
                id="logo"
                alt="Imagem responsiva"
              />
              <h3>São Paulo</h3>
              <p>Um lugar muito bonito e agradável.</p>
            </div>

            <div className="rota-2">
              <img
                src={require("../img/logo.png").default}
                id="logo"
                alt="Imagem responsiva"
              />
              <h3>São Paulo</h3>
              <p>Um lugar muito bonito e agradável.</p>
            </div>

            <div className="rota-3">
              <img
                src={require("../img/logo.png").default}
                id="logo"
                alt="Imagem responsiva"
              />
              <h3>São Paulo</h3>
              <p>Um lugar muito bonito e agradável.</p>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Cadastrese;
