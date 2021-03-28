import "./css/Login.css";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex-container">
        <div class="rounded-logo">
          <a>
            <img
              src={require("../img/logo-branca.png").default}
              id="logo-login"
              alt="Imagem responsiva"
            />
          </a>
        </div>

        <h1 className="callback-login">Login</h1>

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
    </>
  );
};

export default Login;
