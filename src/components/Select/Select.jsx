import React, { useContext, useState } from 'react'
import propTypes from "prop-types";
import { useQuery } from 'react-query'
import { InputContext } from '../../context/ContextoFormulario'
import { getPokemon } from '../Api/getPokemon'
import PropTypes from 'prop-types';

export const Select = ({name, label, type = "text", dataType} ) => {
    const { data, error, isError, isLoading, isSuccess, isFetching, refetch } = useQuery(['pokemon'], getPokemon)
    const [store, dispatch]  = useContext(InputContext)
    const [selectedLocal, setSelectedLocal] = useState('')   
    const options =  data?.results

    
       
      const onBlur = (e) => {
        // e.preventDefault();
        // setInputInfo({...inputInfo, [name]:inputLocal}) 
        // @ts-ignore
        dispatch({
            type:"ACTUALIZAR_POKEMON", 
            payload:{[e.target.name]:e.target.value}})           
            
       };
    
       console.log(name);
       console.log(selectedLocal);
    
  return (
    <div className="input-contenedor">
        <label htmlFor={name}>{label}</label>
        <select         
            value={selectedLocal}
            name={name}
            datatype={dataType}   
            onChange={e => setSelectedLocal(e.target.value)} 
            onBlur={onBlur}>
            {!isLoading && name=="tipoPokemon" && options.map((option, index) => (
              <option key={index} value={option.name}>{option.name}</option>
            ))}
          
          </select>
    </div>
  )
}

Select.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    options: propTypes.array,
   
  };
  

