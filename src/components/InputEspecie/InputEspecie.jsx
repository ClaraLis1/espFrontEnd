import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { InputContext } from "../../context/ContextoFormulario";
import { getSpecie } from "../Api/getSpecie";
// Debemos reemplazar este array por los datos provenientes de la API.


const InputEspecie = ({ name, label, dataType }) => {
    const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon-species'); 
    
    const { data, error, isError, isLoading, isSuccess, isFetching, refetch } = useQuery(['specie',page], () => getSpecie(page), {
        keepPreviousData: true
      },);  

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [store, dispatch] = useContext(InputContext);
  const[species, setSpecies] = useState([])
  
  const elegirEspecie = (e, nombreEspecie) => {
    e.preventDefault();

    // @ts-ignore
    dispatch({
        type: "ACTUALIZAR_POKEMON",
        payload: {[e.target.name]:nombreEspecie},
    });

    setMostrarPopup(false);
  };

 

  const handleSeleccionar = ()=>{
    setMostrarPopup(true)   
    // setSpecies(data.results)
}
  const renderizarEspecies = () => (
    <>
      {data?.results.map((especie) => (
        <button
          name={name}
          key={especie.name}
          className="botones-especie"
          onClick={(e) => elegirEspecie(e, especie.name)
        }
        >
          {especie.name}
        </button>
      ))}
    </>
  );



  return (
    <div className="input-contenedor">
      {mostrarPopup && (
        <div className="popup-especie">
          <h4>Seleccionar especie</h4>
          <div className="contenedor-especies">{renderizarEspecies()}</div>
          <div className="paginador">
            <button className="boton-anterior"
            disabled={data.previous===null}
            onClick={()=>{                
                setPage(data.previous)
                             
            }}>Anterior</button>
            <button className="boton-siguiente"
            disabled={data.next===null}
            onClick={()=>{
                setPage(data.next)  

            }}>Siguiente</button>
          </div>
        </div>
      )}
      <p 
// @ts-ignore
      htmlFor={name} >{label}</p>
      {/* <p>{label}</p> */}
      <button
        className="boton-seleccionar-especies"
        onClick={handleSeleccionar}
        >Seleccionar
      </button>
    </div>
  );
};

export default InputEspecie;