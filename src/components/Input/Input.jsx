import React, { useContext, useRef, useState } from "react";
import { InputContext } from "../../context/ContextoFormulario";
/***Importar PropTypes */
import PropTypes from 'prop-types';

const Input = ({ name, label, type = "text", dataType }) => {
  // const {inputInfo, setInputInfo}  = useContext(InputContext)
  const [store, dispatch]  = useContext(InputContext)
  const [inputLocal, setInputLocal] = useState('')
  const refInput = useRef(null)

  const onChange = (e) => {   
    setInputLocal(e.target.value)
    // Aquí deberíamos actualizar el estado local del input.
  };
  
  
  const onBlur = (e) => {
   // e.preventDefault();
   // setInputInfo({...inputInfo, [name]:inputLocal}) 
   dispatch({
      type:dataType, 
      payload:{[e.target.name]:e.target.value}})
      refInput.current.reset()
  };

  

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={refInput}
        type={type}
        //value={"Siempre tengo el mismo valor XD"}
        value = {inputLocal}
        placeholder= 'Siempre tengo el mismo valor XD'
        name={name}
        datatype = {dataType}      
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;


/***** definir los valor que son requeridos*/
Input.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string   
  ]).isRequired,
  label : PropTypes.string.isRequired,
  dataType: PropTypes.string
}  