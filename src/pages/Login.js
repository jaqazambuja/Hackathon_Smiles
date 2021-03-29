import "./css/Login.css";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex-container-login">
        <div class="rounded-logo-login">
          <a>
            <img
              src={require("../img/logo.png").default}
              id="logo-login"
              alt="Imagem responsiva"
            />
          </a>
          <h2>My Travel</h2>
        </div>

        <h1 className="h1-login">Login</h1>

        <form action="" method="post">
          <div className="Login-screen-body-item">
            <div className="Login-app-form">
              <div className="Login-app-form-group">
                <input
                  type="text"
                  name="username"
                  className="Login-app-form-control"
                  placeholder="Login"
                  id="username"
                  name="username"
                ></input>
              </div>
              <div className="Login-app-form-group message">
                <input
                  type="password"
                  className="Login-app-form-control"
                  name="senha"
                  placeholder="Senha"
                  id="senha"
                  name="senha"
                ></input>
              </div>

              <div className="Login-app-form-group buttons">
                <button className="Login-app-form-button">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="container-img">
        <img
          src={require("../img/imagem-login.png").default}
          id="imagem-login"
          alt="Imagem responsiva"
        />
      </div>
    </>
  );
};

export default Login;
