import React, { useContext, useState } from "react";
import { InputContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", dataType }) => {
  const {inputInfo, setInputInfo}  = useContext(InputContext)
  const [store, dispatch]  = useContext(InputContext)
  const [inputLocal, setInputLocal] = useState('')

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
   
  };

  

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
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
