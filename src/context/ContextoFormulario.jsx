// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useContext, useReducer, useState } from "react"

export const InputContext = createContext('')

const initialState = {
    entrenador:null,
    pokemon:null
}

const formReducer = (state, action ) =>{
    switch (action.type) {
        case 'entrenador':
            return {
              ...state,
              entrenador:{...state.entrenador, ...action.payload}
            }
        case 'pokemon':
            return {
                ...state,
                pokemon:{...state.pokemon, ...action.payload}
              }
        case 'SEND' :
            return state = null;
        default :
          return state
    }
}


export const InputProvider = ({children})=>{
    //const [inputInfo, setInputInfo] = useState({})
    const [store, dispatch] = useReducer(formReducer, initialState)    
    console.log(initialState);
    console.log({store});
    return (
    //    <InputContext.Provider value={{inputInfo, setInputInfo} }>
       <InputContext.Provider value={ [store, dispatch] }>      
            {children}
        </InputContext.Provider>
    )
}

const useStore = ()=>useContext(InputContext)[0]
const useDispatch = ()=>useContext(InputContext)[1]