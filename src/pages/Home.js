import React from "react";
import "./css/Home.css";
import Rodape from "../Components/Rodape/Rodape";

const Home = () => {
  return (
    <>
      <div className="flex-container-home">
        <div class="rounded-logo">
          <a>
            <img
              src={require("../img/logo-branca.png").default}
              id="logo"
              alt="Imagem responsiva"
            />
          </a>
        </div>

        <h1 className="nome">My Travel</h1>
        <div>
          <p ClassName="botao">
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
            <a
              href="../Cadastrese"
              button
              type="button"
              class="btn btn-primary"
              id="botao2"
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </div>

      <div className="container-card-body">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title" id="card-title">
              Crie Memórias Inesquecíveis
            </h5>
            <p class="card-text">
              Descubra os melhores lugares para você passar suas férias. Seja se
              aventurando, desbravando ou se libertando! Comece a construir
              memórias inesquecíveis.
            </p>
            <a
              href="../Cadastrese"
              button
              type="button"
              class="btn btn-primary"
              id="botao3"
            >
              Descobrir
            </a>
          </div>
        </div>
        <div class="rounded-logo">
          <a>
            <img
              src={require("../img/elipse.png").default}
              id="elipse"
              alt="Imagem responsiva"
            />
            <img
              src={require("../img/illustration.png").default}
              id="illustration-home"
              alt="Imagem responsiva"
            />
          </a>
        </div>
      </div>

    </>
  );
};

export default Home;
