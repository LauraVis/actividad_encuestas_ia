import { useParams } from "react-router-dom";
//mostrar el detalle de cada encuesta
const Encuesta = ({encuestas}) => {
    const { id } = useParams();
    const encuestaSelec = encuestas.find((encuesta) => encuesta.id === parseInt(id));
    return (
        <div>
            <h1>Encuesta {id}</h1>
            
                <div key={encuestaSelec.id} className="survey-item">
                    <h2>{encuestaSelec.titulo}</h2>
                    <p>{encuestaSelec.descripcion}</p>
                    <ul>
                        {encuestaSelec.preguntas.map((pregunta) => (
                            <li key={pregunta.id} className="survey-id">
                                <li key={`/encuesta/${encuestaSelec.id}/pregunta/${pregunta.id}`} className="survey-pregunta">
                                    {pregunta.pregunta} {pregunta.opciones.map((opcion) => (
                                        <li key={opcion.id}>{opcion.texto}</li>
                                    ))}
                                </li>
                            </li>
                        ))}
                        </ul>
                        </div>                        
        </div>
    );
}
export default Encuesta;