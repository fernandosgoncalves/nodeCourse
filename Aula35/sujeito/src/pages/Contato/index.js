import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Contato da empresa (dd) 0000-0000</span>
            <br/><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    );
}

export default Contato;