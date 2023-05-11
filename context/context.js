import React,{useContext, useReducer, useState} from "react";

import { reducer } from "../reducers/reducer";

const AppContext = React.createContext();
const initialState = {
    places:[]
}

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
        <AppContext.Provider value={{...state, dispatch}}>
           {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppContextProvider, useGlobalContext}