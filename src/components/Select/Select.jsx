import React, { useContext, useState } from 'react'
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
        dispatch({
            type:dataType, 
            payload:{[e.target.name]:e.target.value}})
            
            
       };
     
       console.log(selectedLocal);
    
  return (
    <div className="input-contenedor">
        <label htmlFor={name}>{label}</label>
        <select         
            value={selectedLocal}
            name={name}
            datatype={dataType}   
            onChange={e => setSelectedLocal(e.target.value)} 
            onBlur={onBlur}
         >
            {!isLoading && options.map((option, index) => (
              <option key={index} value={option.name}>{option.name}</option>
            ))}
          </select>
    </div>
  )
}

