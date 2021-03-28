import "./css/Login.css";
import React from "react";

const Login = () => {
  return (
    <>


<div className="flex-container">
            <div class="rounded-logo"><a ><img src={require('../img/aviaoazul.png').default} id="logo"  alt="Imagem responsiva"  /></a></div>

            <h1 className="nome">Nome</h1>
            <div> 
            <p ClassName="botao">  
                <a href="../Login" button type="button" class="btn btn-primary" id='botao1'> Login</a>
                <a href="../Cadastrese"  button type="button" class="btn btn-primary" id='botao2'>Cadastre-se</a>
           
 </p>
         </div>
        </div>

        
        <form action=""  method="post" >
           <div className="Login-screen-body-item">
             <div className="Login-app-form">
               <div className="Login-app-form-group">
                 <input type="text" name="username" className="Login-app-form-control" placeholder="Usuário" id="username" name="username"></input>
               </div>
               <div className="Login-app-form-group message">
                <input type="password" className="Login-app-form-control" name="senha" placeholder="Senha"  id="senha" name="senha"></input>
               </div> 
               
               <div className="Login-app-form-group buttons">
                 <button className="Login-app-form-button">APAGAR</button>
                 <button type="submit" className="Login-app-form-button">ENTRAR</button>
               </div>

             </div>
           </div>
        </form>

       
       
    </>
  );
};

export default Login;