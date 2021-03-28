import React from 'react';
import './css/Home.css';
import  Rodape  from '../Components/Rodape/Rodape'


 const Home = () => {

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

       
        <div className='container-card-body'>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title" id='card-title'>Crie memórias inesqueciveis</h5>
    <p class="card-text">Descubra quais são os melhores lugares para você passar suas <p>férias,
    seja se aventurando, relaxando ou explorando!</p> <p>Comece a construir memorias inesquecíveis.</p> </p>
    <a href="../Cadastrese" button type="button" class="btn btn-primary" id="botao3" >Descobrir</a>
  </div>
</div>
<div class="rounded-logo"><a ><img src={require('../img/home.png.png').default} id='home' alt="Imagem responsiva"  /></a>
</div>
</div>
       
        < Rodape />
        
        </>
        

        
     );
 }

 export default Home;