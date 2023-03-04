import React, { useContext, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { InputContext } from "../../context/ContextoFormulario";
import { createPokemon } from "../Api/createPokemon";

const Detalle = () => {

  const queryClient = useQueryClient();
  const {inputInfo, setInputInfo} = useContext(InputContext)
  const [store, dispatch]  = useContext(InputContext)
  const formRef = useRef(null)
  const { mutate, isLoading, isSuccess, data, reset } = useMutation(createPokemon, {
    onSuccess: (pokemon) => {
        queryClient.setQueriesData('pokemons', prevPost => prevPost.concat(pokemon))
        queryClient.invalidateQueries('pokemons')
    }
})
  const handleClick = (() =>{
    // alert("Solicitud enviada :)")
    mutate(store)
    
  })

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
           <p>Nombre: {store.entrenador?.nombre}</p> 
           <p>Apellido: {store.entrenador?.apellido}</p> 
           <p>Email:{store.entrenador?.email}</p> 
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{store.pokemon?.nombrePokemon}</p>
          <p>Altura:{store.pokemon?.alturaPokemon}</p>
          <p>Tipo:{store.pokemon?.tipoPokemon}</p>
          <p>Edad:{store.pokemon?.edadPokemon}</p>
        </div>
      </section>
      
      {isSuccess&&
        <p>Se creo el pokemon con id:{data.id}</p>
      }
      <button 
        disabled={isSuccess}
        className={!isSuccess ?"boton-enviar" :"boton-enviar-disable" }
        // onClick={() => alert("Solicitud enviada :)")}
        onClick={handleClick}
      >
        {isLoading? 
      "Creando...": isSuccess? "Enviado":
        "Enviar Solicitud"
      }
      </button>
    </div>
  );
};

export default Detalle;
