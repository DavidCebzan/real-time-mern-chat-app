/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, JSX, Dispatch, SetStateAction, useEffect } from "react";

type AuthContextType = {
    authUser: any;
    setAuthUser: Dispatch<SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType>({authUser: '', setAuthUser: () => {}});


export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}: {children: JSX.Element}) => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        try {
            const user = localStorage.getItem('chat-user');
            if (user) {
                setAuthUser(JSON.parse(user));
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage:", error);
            // Handle error, maybe clear localStorage item or notify user
        }
    }, []);

    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
}