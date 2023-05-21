import React, { createContext } from "react";
import { useReducer } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer({ isAuth: false })

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;