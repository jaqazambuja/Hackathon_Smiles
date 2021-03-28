import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './pages/css/App.css';
import Home from './pages/Home';
import Cadastrese from './pages/Cadastrese';
import Login from './pages/Login';
import Recuperarsenha from './pages/Recuperarsenha';



const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Cadastrese" component={Cadastrese} />
                <Route exact path="/Recuperarsenha" component={Recuperarsenha} />

            </Switch>
        </BrowserRouter>
    );
}
export default Rotas;