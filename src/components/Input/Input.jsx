import React, { useContext, useRef, useState } from "react";
import { InputContext } from "../../context/ContextoFormulario";
/***Importar PropTypes */
import PropTypes, { checkPropTypes, number } from 'prop-types';


const Input = ({ name, label, type = "text", dataType }) => {
  // const {inputInfo, setInputInfo}  = useContext(InputContext)
  const [store, dispatch]  = useContext(InputContext)
  const [inputLocal, setInputLocal] = useState("")  
  const refInput = useRef(null)
  
/**
 * @author Clara
 * @returns {any}
 * 
 */

  /**
     * @description funcion para actualizar el estado local del input
     *  @event onChange
     *    
     */


  const hadleChange = (e) => {   
    setInputLocal(e.target.value)
    // Aquí deberíamos actualizar el estado local del input.
  };
  
  /**
   * 
   *   @event handleBlur
   */
  
  const handleBlur = (e) => {
   // e.preventDefault();
   // setInputInfo({...inputInfo, [name]:inputLocal}) 
    // @ts-ignore
    dispatch({
      type:dataType==="entrenador"? "ACTUALIZAR_ENTRENADOR" : dataType ==="pokemon"? "ACTUALIZAR_POKEMON": dataType,
      payload:{[e.target.name]:e.target.value}})
      
     
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
        onChange={hadleChange}
        onBlur={handleBlur}
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
  label : PropTypes.string,
  dataType: PropTypes.string
}  