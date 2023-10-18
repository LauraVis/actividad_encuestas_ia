//mostrar listado de encuestas disponibles	
import React from "react";
import { Link } from "react-router-dom";
import encuestas from '../data/encuestas.json';

//hacer un map para mostrar cada una de las encuestas con titulo y descripcion
 const Inicio = () => {
        
    return (
        <div className="survey-list">
            <h1>Lista de encuestas</h1>
           
            <ul>
                {encuestas.map((encuesta) => (
                    <li key={encuesta.id} className="survey-item">{encuesta.titulo}
                        <Link to={`/encuesta/${encuesta.id}`}>Ver encuesta</Link>
                    </li>
                ))}
            </ul>
            <Link to="/crear-encuesta" className="link-create-survey">Crear encuesta</Link>
        </div>
    );
}

export default Inicio;
