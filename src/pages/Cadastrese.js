import "./css/Cadastrese.css";
import React from "react";

const Cadastrese = () => {
  return (
    <>
      <div className="barra-lateral">
        <img
          src={require("../img/aviaoazul.png").default}
          id="logo"
          alt="Imagem responsiva"
        />

        <div className="link-to-home">
          <img
            src={require("../img/aviaoazul.png").default}
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
            src={require("../img/aviaoazul.png").default}
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

      <div className="container-discovery">

        <div className="menu-horizontal">
          <h1>Olá Icaro, Seja Bem-Vindo!</h1>
          <div className="box-profile">
            <div className="dados-usuario">
              <p>Icaro Silva</p>
              <p>icarosilva@gmail.com</p>
              <img
                src={require("../img/aviaoazul.png").default}
                id="foto-perfil"
                alt="Imagem responsiva"
              />
            </div>
          </div>
        </div>

        <div className="box-nova-jornada">

         <div className="box-descricao">
             <h2>Comece uma nova jornada</h2>
             <p>Faça uma viajem dhujdsudgusgdusgudgsugdusgudgsu</p>
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

         <img
            src={require("../img/aviaoazul.png").default}
            id="illustration-jornada"
            alt="Imagem responsiva"
          />

        </div>

      </div>
    </>
  );
};

export default Cadastrese;
