import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CrearEncuesta = ({ agregarEncuesta }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
      agregarEncuesta(data);
      navigate("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <div><h1 className="title">Crear nueva encuesta</h1></div> 
           <div className="create-survey"><label>
                Nombre de la encuesta:
                <input type="text" {...register("nombre", { required: true })} />
                {errors.nombre && <span>Este campo es requerido</span>}
            </label>
            </div>
            <div>
            <label>
                Descripción:
                <input type="text" {...register("descripcion", { required: true })} />
                {errors.descripcion && <span>Este campo es requerido</span>}
            </label>
            </div>
            <div>
            <label>
                Preguntas:
                <input type="text" {...register("preguntas", { required: true })} />
                {errors.preguntas && <span>Este campo es requerido</span>}
            </label>
            </div>
            <button type="submit">Crear encuesta</button>
        </form>
    )
}

export default CrearEncuesta;