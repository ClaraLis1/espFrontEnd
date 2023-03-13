// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useContext, useReducer, useState } from "react"
import PropTypes  from "prop-types"

export const InputContext = createContext('')

/**
* @typedef {object} pokemonData
* @property {object} entrenador 
* @property {object} pokemon
* 
*/

/**
 * @type {pokemonData}
 */

const initialState = {
    entrenador:null,
    pokemon:null
}



/**
 * 
 * @param {object} state 
 * @param {object} action 
 * @returns {pokemonData}
 */

const formReducer = (state, action ) =>{
    switch (action.type) {
        case 'ACTUALIZAR_ENTRENADOR':
            return {
              ...state,
              entrenador:{...state.entrenador, ...action.payload}
            }
        case 'ACTUALIZAR_POKEMON':
            return {
                ...state, pokemon:{...state.pokemon, ...action.payload}
              }
        case 'SEND' :
           return state = action.payload
                   
        default :
          return state
    }
}


export const InputProvider = ({children})=>{


    //const [inputInfo, setInputInfo] = useState({})
   
    const [store, dispatch] = useReducer(formReducer, initialState)      
 

    return (
    //    <InputContext.Provider value={{inputInfo, setInputInfo} }>
       <InputContext.Provider 
// @ts-ignore
       value={ [store, dispatch] }>      
            {children}
        </InputContext.Provider>
    )
}

const useStore = ()=>useContext(InputContext)[0]
const useDispatch = ()=>useContext(InputContext)[1]

InputProvider.propTypes = {
    children: PropTypes.element.isRequired,
};