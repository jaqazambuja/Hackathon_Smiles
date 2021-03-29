import "./css/Cadastrese.css";
import React from "react";
import Sidebar from "../Components/Rodape/Sidebar";

const Cadastrese = () => {
  return (
    <>
      <Sidebar />

      <div className="match-container">
        <div className="menu-horizontal">
          <h1>Rota traçada!</h1>
          <div className="box-profile">
            <div className="dados-usuario">
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

        <div className="carossel-1">
          <h2>Rotas perfeitas para você</h2>
          <div className="container-flex">
            <div className="rota-1">
              <img
                src={require("../img/sp.png").default}
                id="imagem"
                alt="Imagem responsiva"
              />
              <div className="local">
                <h3>Rio de Janeiro</h3>
                <p>Um lugar muito bonito e agradável.</p>
                <a
                  href="https://www.smiles.com.br/home"
                  button
                  type="button"
                  class="btn btn-primary btn-rota"
                  id="botao1"
                >
                  {" "}
                  Comprar
                </a>
              </div>
            </div>

            <div className="rota-2">
              <img
                src={require("../img/sp.png").default}
                id="imagem"
                alt="Imagem responsiva"
              />
              <div className="local">
                <h3>São Paulo</h3>
                <p>Um lugar muito bonito e grande!</p>
                <a
                  href="https://www.smiles.com.br/home"
                  button
                  type="button"
                  class="btn btn-primary btn-rota"
                  id="botao1"
                >
                  {" "}
                  Comprar
                </a>
              </div>
            </div>

            <div className="rota-3">
              <img
                src={require("../img/sul.png").default}
                id="imagem"
                alt="Imagem responsiva"
              />
              <div className="local">
                <h3>Santa Catarina</h3>
                <p>Um lugar muito bonito e frio.</p>
                <a
                  href="https://www.smiles.com.br/home"
                  button
                  type="button"
                  class="btn btn-primary btn-rota"
                  id="botao1"
                >
                  {" "}
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carossel-2">
          <h2>Em alta</h2>
          <div className="container-flex">
            <div className="rota-1">
              <img
                src={require("../img/rio.png").default}
                id="imagem"
                alt="Imagem responsiva"
              />
              <div className="local">
                <h3>Rio de Janeiro</h3>
                <p>Um lugar muito bonito e agradável.</p>
                <a
                  href="https://www.smiles.com.br/home"
                  button
                  type="button"
                  class="btn btn-primary btn-rota"
                  id="botao1"
                >
                  {" "}
                  Comprar
                </a>
              </div>
            </div>

            <div className="rota-2">
              <img
                src={require("../img/sp.png").default}
                id="imagem"
                alt="Imagem responsiva"
              />
              <div className="local">
                <h3>São Paulo</h3>
                <p>Um lugar muito bonito e grande!</p>
                <a
                  href="https://www.smiles.com.br/home"
                  button
                  type="button"
                  class="btn btn-primary btn-rota"
                  id="botao1"
                >
                  {" "}
                  Comprar
                </a>
              </div>
            </div>

            <div className="rota-3">
              <img
                src={require("../img/sul.png").default}
                id="imagem"
                alt="Imagem responsiva"
              />
              <div className="local">
                <h3>Santa Catarina</h3>
                <p>Um lugar muito bonito e frio.</p>
                <a
                  href="https://www.smiles.com.br/home"
                  button
                  type="button"
                  class="btn btn-primary btn-rota"
                  id="botao1"
                >
                  {" "}
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastrese;
